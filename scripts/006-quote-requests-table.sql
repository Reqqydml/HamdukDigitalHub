-- Create quote_requests table
CREATE TABLE IF NOT EXISTS quote_requests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(100),
    service_type VARCHAR(50) NOT NULL,
    budget_range VARCHAR(50),
    timeline VARCHAR(50),
    project_details TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'quoted', 'accepted', 'rejected', 'completed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create newsletter_subscriptions table if it doesn't exist
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    is_active BOOLEAN DEFAULT true,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    unsubscribed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_quote_requests_email ON quote_requests(email);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON quote_requests(status);
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON quote_requests(created_at);
CREATE INDEX IF NOT EXISTS idx_quote_requests_service_type ON quote_requests(service_type);

CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_active ON newsletter_subscriptions(is_active);

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to quote_requests table
DROP TRIGGER IF EXISTS update_quote_requests_updated_at ON quote_requests;
CREATE TRIGGER update_quote_requests_updated_at
    BEFORE UPDATE ON quote_requests
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Apply trigger to newsletter_subscriptions table
DROP TRIGGER IF EXISTS update_newsletter_subscriptions_updated_at ON newsletter_subscriptions;
CREATE TRIGGER update_newsletter_subscriptions_updated_at
    BEFORE UPDATE ON newsletter_subscriptions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for quote_requests
CREATE POLICY "Allow public insert on quote_requests" ON quote_requests
    FOR INSERT TO anon, authenticated
    WITH CHECK (true);

CREATE POLICY "Allow authenticated read on quote_requests" ON quote_requests
    FOR SELECT TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated update on quote_requests" ON quote_requests
    FOR UPDATE TO authenticated
    USING (true);

-- Create RLS policies for newsletter_subscriptions
CREATE POLICY "Allow public insert on newsletter_subscriptions" ON newsletter_subscriptions
    FOR INSERT TO anon, authenticated
    WITH CHECK (true);

CREATE POLICY "Allow public select on newsletter_subscriptions" ON newsletter_subscriptions
    FOR SELECT TO anon, authenticated
    USING (true);

CREATE POLICY "Allow public update on newsletter_subscriptions" ON newsletter_subscriptions
    FOR UPDATE TO anon, authenticated
    USING (true);

-- Insert sample data for testing
INSERT INTO quote_requests (
    first_name, 
    last_name, 
    email, 
    phone, 
    company, 
    service_type, 
    budget_range, 
    timeline, 
    project_details, 
    status
) VALUES 
(
    'John', 
    'Doe', 
    'john.doe@example.com', 
    '+234 123 456 7890', 
    'Tech Solutions Ltd', 
    'web-development', 
    '1m-2.5m', 
    '2-3-months', 
    'We need a modern e-commerce website with payment integration and inventory management system.', 
    'pending'
),
(
    'Jane', 
    'Smith', 
    'jane.smith@company.com', 
    '+234 987 654 3210', 
    'Digital Marketing Agency', 
    'branding', 
    '500k-1m', 
    '1-month', 
    'Looking for complete brand identity including logo, business cards, and marketing materials.', 
    'reviewed'
);

-- Insert sample newsletter subscriptions
INSERT INTO newsletter_subscriptions (email, is_active) VALUES 
('subscriber1@example.com', true),
('subscriber2@example.com', true),
('unsubscribed@example.com', false);
