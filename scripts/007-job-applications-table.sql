-- Create job_applications table
CREATE TABLE IF NOT EXISTS job_applications (
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    position VARCHAR(100) NOT NULL,
    department VARCHAR(50) NOT NULL,
    experience_level VARCHAR(20) NOT NULL CHECK (experience_level IN ('entry', 'junior', 'mid', 'senior', 'lead')),
    expected_salary VARCHAR(50) NOT NULL,
    availability VARCHAR(20) NOT NULL CHECK (availability IN ('immediate', '2weeks', '1month', 'negotiable')),
    work_type VARCHAR(20) NOT NULL CHECK (work_type IN ('remote', 'onsite', 'hybrid')),
    skills TEXT NOT NULL,
    cover_letter TEXT NOT NULL,
    portfolio_url VARCHAR(500),
    linkedin_url VARCHAR(500),
    github_url VARCHAR(500),
    resume_url VARCHAR(500),
    portfolio_file_url VARCHAR(500),
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'interview', 'hired', 'rejected')),
    source VARCHAR(50) DEFAULT 'website',
    notes TEXT,
    reviewer_id UUID,
    interview_date TIMESTAMPTZ,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_job_applications_email ON job_applications(email);
CREATE INDEX IF NOT EXISTS idx_job_applications_position ON job_applications(position);
CREATE INDEX IF NOT EXISTS idx_job_applications_department ON job_applications(department);
CREATE INDEX IF NOT EXISTS idx_job_applications_status ON job_applications(status);
CREATE INDEX IF NOT EXISTS idx_job_applications_created_at ON job_applications(created_at);
CREATE INDEX IF NOT EXISTS idx_job_applications_email_position ON job_applications(email, position);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_job_applications_updated_at 
    BEFORE UPDATE ON job_applications 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Enable read access for authenticated users" ON job_applications
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Enable insert for everyone" ON job_applications
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users" ON job_applications
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Create view for application statistics
CREATE OR REPLACE VIEW job_application_stats AS
SELECT 
    department,
    position,
    status,
    COUNT(*) as count,
    DATE_TRUNC('month', created_at) as month
FROM job_applications
GROUP BY department, position, status, DATE_TRUNC('month', created_at)
ORDER BY month DESC, department, position;

-- Create view for recent applications
CREATE OR REPLACE VIEW recent_job_applications AS
SELECT 
    id,
    first_name || ' ' || last_name as full_name,
    email,
    position,
    department,
    status,
    created_at
FROM job_applications
WHERE created_at >= NOW() - INTERVAL '30 days'
ORDER BY created_at DESC;

-- Grant permissions
GRANT SELECT ON job_application_stats TO authenticated;
GRANT SELECT ON recent_job_applications TO authenticated;
GRANT ALL ON job_applications TO authenticated;
GRANT USAGE, SELECT ON SEQUENCE job_applications_id_seq TO authenticated;

-- Insert sample data for testing (optional)
-- INSERT INTO job_applications (
--     first_name, last_name, email, phone, position, department,
--     experience_level, expected_salary, availability, work_type,
--     skills, cover_letter, status
-- ) VALUES (
--     'John', 'Doe', 'john.doe@example.com', '+2348012345678',
--     'Frontend Developer', 'Web & App Development', 'mid',
--     '₦500,000 - ₦700,000', 'immediate', 'remote',
--     'React, Next.js, TypeScript, Tailwind CSS',
--     'I am excited to apply for the Frontend Developer position...',
--     'pending'
-- );
