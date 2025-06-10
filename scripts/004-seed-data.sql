-- Insert sample courses
INSERT INTO public.courses (title, description, instructor_name, category, level, duration_hours, price, thumbnail_url, requirements, learning_outcomes, is_published) VALUES
('Complete Web Development Bootcamp', 'Learn HTML, CSS, JavaScript, React, and Node.js from scratch. Build real-world projects and become a full-stack developer.', 'John Smith', 'Web Development', 'Beginner', 40, 49500.00, '/placeholder.svg?height=200&width=400', 
 ARRAY['Basic computer skills', 'Internet connection', 'Willingness to learn'], 
 ARRAY['Build responsive websites', 'Create web applications', 'Understand modern frameworks'], true),

('Mobile App Development with React Native', 'Build cross-platform mobile apps for iOS and Android using React Native. Includes deployment to app stores.', 'Sarah Johnson', 'Mobile Development', 'Intermediate', 35, 64500.00, '/placeholder.svg?height=200&width=400',
 ARRAY['JavaScript knowledge', 'React basics', 'Mobile development interest'],
 ARRAY['Create mobile apps', 'Deploy to app stores', 'Handle device features'], true),

('UI/UX Design Fundamentals', 'Master the principles of user interface and user experience design. Create beautiful and functional designs.', 'Mike Chen', 'Design', 'Beginner', 25, 39500.00, '/placeholder.svg?height=200&width=400',
 ARRAY['Design interest', 'Creative mindset', 'Basic computer skills'],
 ARRAY['Design user interfaces', 'Create user experiences', 'Use design tools'], true),

('Digital Marketing Mastery', 'Learn SEO, social media marketing, email marketing, and PPC advertising to grow your business online.', 'Emily Davis', 'Marketing', 'Intermediate', 30, 44500.00, '/placeholder.svg?height=200&width=400',
 ARRAY['Basic marketing knowledge', 'Business understanding', 'Internet familiarity'],
 ARRAY['Create marketing campaigns', 'Optimize for search engines', 'Grow online presence'], true);

-- Insert sample digital products
INSERT INTO public.digital_products (title, description, category, price, original_price, thumbnail_url, tags, is_featured, is_published) VALUES
('Premium Website Template Bundle', '10 modern, responsive website templates for various industries', 'Templates', 44500.00, 74500.00, '/placeholder.svg?height=200&width=300', 
 ARRAY['website', 'template', 'responsive', 'modern'], true, true),

('Social Media Graphics Pack', '500+ Instagram, Facebook, and Twitter graphics templates', 'Graphics', 19500.00, NULL, '/placeholder.svg?height=200&width=300',
 ARRAY['social media', 'graphics', 'templates', 'instagram'], false, true),

('SEO Audit Tool Pro', 'Comprehensive SEO analysis and optimization tool', 'Tools', 39500.00, NULL, '/placeholder.svg?height=200&width=300',
 ARRAY['seo', 'audit', 'optimization', 'tool'], false, true),

('E-commerce Store Template', 'Modern, conversion-optimized online store template', 'Templates', 29500.00, NULL, '/placeholder.svg?height=200&width=300',
 ARRAY['ecommerce', 'store', 'template', 'conversion'], false, true);

-- Insert sample blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, category, tags, is_published, is_featured, read_time) VALUES
('The Future of Web Development: Trends to Watch in 2025', 'future-of-web-development-2025', 
 'Explore the emerging technologies and methodologies that will shape web development in the coming year.',
 'Web development is constantly evolving, and 2025 promises to bring exciting new trends and technologies...', 
 'Technology', ARRAY['web development', 'trends', '2025', 'technology'], true, true, 8),

('10 Essential UI/UX Design Principles for 2025', 'essential-ui-ux-design-principles-2025',
 'Learn the fundamental design principles that will help you create better user experiences.',
 'Great design is not just about making things look pretty. It''s about creating experiences that users love...',
 'Design', ARRAY['ui', 'ux', 'design', 'principles'], true, false, 6),

('Building Scalable React Applications: Best Practices', 'scalable-react-applications-best-practices',
 'Discover proven strategies for building React applications that can grow with your business needs.',
 'As your React application grows, maintaining code quality and performance becomes increasingly important...',
 'Development', ARRAY['react', 'scalability', 'best practices', 'javascript'], true, false, 12);

-- Insert sample forums
INSERT INTO public.forums (name, description, category, is_private) VALUES
('Web Development', 'Discuss web technologies, frameworks, and best practices', 'Development', false),
('Mobile App Development', 'iOS, Android, and cross-platform development discussions', 'Development', false),
('Design & UX', 'UI/UX design, branding, and creative discussions', 'Design', false),
('Digital Marketing', 'SEO, social media, content marketing, and growth strategies', 'Marketing', false),
('Freelancing & Business', 'Tips for running a successful digital business', 'Business', false);
