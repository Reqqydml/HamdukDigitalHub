-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_active BOOLEAN DEFAULT TRUE,
    unsubscribe_token UUID DEFAULT gen_random_uuid(),
    source VARCHAR(50) DEFAULT 'website',
    ip_address INET,
    user_agent TEXT,
    
    -- Constraints
    CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT valid_source CHECK (source IN ('website', 'api', 'import', 'manual'))
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_active ON newsletter_subscriptions(is_active);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_subscribed_at ON newsletter_subscriptions(subscribed_at);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_source ON newsletter_subscriptions(source);

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_newsletter_subscriptions_updated_at 
    BEFORE UPDATE ON newsletter_subscriptions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Allow public insert" ON newsletter_subscriptions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public select active" ON newsletter_subscriptions
    FOR SELECT USING (is_active = true);

CREATE POLICY "Allow public update own subscription" ON newsletter_subscriptions
    FOR UPDATE USING (true);

-- Insert some sample data for testing
INSERT INTO newsletter_subscriptions (email, source) VALUES 
    ('test@example.com', 'website'),
    ('demo@hamdukdigital.com', 'website'),
    ('admin@hamdukdigital.com', 'manual')
ON CONFLICT (email) DO NOTHING;

-- Grant permissions
GRANT SELECT, INSERT, UPDATE ON newsletter_subscriptions TO anon;
GRANT SELECT, INSERT, UPDATE ON newsletter_subscriptions TO authenticated;

-- Create function to get subscription stats
CREATE OR REPLACE FUNCTION get_newsletter_stats()
RETURNS TABLE (
    total_subscriptions BIGINT,
    active_subscriptions BIGINT,
    inactive_subscriptions BIGINT,
    subscriptions_today BIGINT,
    subscriptions_this_week BIGINT,
    subscriptions_this_month BIGINT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        COUNT(*) as total_subscriptions,
        COUNT(*) FILTER (WHERE is_active = true) as active_subscriptions,
        COUNT(*) FILTER (WHERE is_active = false) as inactive_subscriptions,
        COUNT(*) FILTER (WHERE DATE(subscribed_at) = CURRENT_DATE) as subscriptions_today,
        COUNT(*) FILTER (WHERE subscribed_at >= DATE_TRUNC('week', NOW())) as subscriptions_this_week,
        COUNT(*) FILTER (WHERE subscribed_at >= DATE_TRUNC('month', NOW())) as subscriptions_this_month
    FROM newsletter_subscriptions;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission on the function
GRANT EXECUTE ON FUNCTION get_newsletter_stats() TO anon;
GRANT EXECUTE ON FUNCTION get_newsletter_stats() TO authenticated;
