-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.digital_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_purchases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.va_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forums ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_replies ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view their own profile" ON public.users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.users
  FOR UPDATE USING (auth.uid() = id);

-- Profiles policies
CREATE POLICY "Users can view their own profile details" ON public.profiles
  FOR ALL USING (auth.uid() = id);

-- Quote requests policies
CREATE POLICY "Users can view their own quote requests" ON public.quote_requests
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create quote requests" ON public.quote_requests
  FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Admins can view all quote requests" ON public.quote_requests
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() AND role IN ('developer', 'premium')
    )
  );

-- Courses policies
CREATE POLICY "Anyone can view published courses" ON public.courses
  FOR SELECT USING (is_published = true);

CREATE POLICY "Instructors can manage their courses" ON public.courses
  FOR ALL USING (auth.uid() = instructor_id);

-- Course enrollments policies
CREATE POLICY "Users can view their enrollments" ON public.course_enrollments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can enroll in courses" ON public.course_enrollments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Digital products policies
CREATE POLICY "Anyone can view published products" ON public.digital_products
  FOR SELECT USING (is_published = true);

CREATE POLICY "Creators can manage their products" ON public.digital_products
  FOR ALL USING (auth.uid() = created_by);

-- Product purchases policies
CREATE POLICY "Users can view their purchases" ON public.product_purchases
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can make purchases" ON public.product_purchases
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Blog posts policies
CREATE POLICY "Anyone can view published posts" ON public.blog_posts
  FOR SELECT USING (is_published = true);

CREATE POLICY "Authors can manage their posts" ON public.blog_posts
  FOR ALL USING (auth.uid() = author_id);

-- VA bookings policies
CREATE POLICY "Users can view their bookings" ON public.va_bookings
  FOR SELECT USING (auth.uid() = user_id OR auth.uid() = assigned_va_id);

CREATE POLICY "Users can create bookings" ON public.va_bookings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Forums policies
CREATE POLICY "Anyone can view public forums" ON public.forums
  FOR SELECT USING (is_private = false OR auth.uid() IS NOT NULL);

-- Forum posts policies
CREATE POLICY "Anyone can view forum posts" ON public.forum_posts
  FOR SELECT USING (auth.uid() IS NOT NULL);

CREATE POLICY "Users can create forum posts" ON public.forum_posts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their posts" ON public.forum_posts
  FOR UPDATE USING (auth.uid() = user_id);

-- Forum replies policies
CREATE POLICY "Anyone can view forum replies" ON public.forum_replies
  FOR SELECT USING (auth.uid() IS NOT NULL);

CREATE POLICY "Users can create replies" ON public.forum_replies
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their replies" ON public.forum_replies
  FOR UPDATE USING (auth.uid() = user_id);
