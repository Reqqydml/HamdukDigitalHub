import {
  Palette,
  Smartphone,
  Globe,
  Cloud,
  Film,
  BarChart,
  Briefcase,
  Brain,
  Wallet,
  ShoppingBag,
  Shield,
  MessageSquare,
  GraduationCap,
  Webhook,
} from "lucide-react"

export const serviceCategories = [
  {
    name: "Branding",
    slug: "branding",
    icon: <Palette className="h-8 w-8" />,
    description:
      "Create a memorable brand identity that resonates with your audience and sets you apart from competitors.",
    services: [
      {
        name: "Logo Design",
        description:
          "Professional logo design that captures your brand's essence and creates a memorable visual identity.",
        features: ["Initial concepts", "Revisions", "Final files in multiple formats", "Brand usage guidelines"],
      },
      {
        name: "Brand Identity Development",
        description: "Comprehensive brand identity development including visual elements and brand messaging.",
        features: ["Visual identity system", "Brand voice and messaging", "Brand applications", "Style guidelines"],
      },
      {
        name: "Brand Strategy",
        description: "Strategic brand positioning and messaging to connect with your target audience.",
        features: ["Market research", "Competitor analysis", "Brand positioning", "Target audience definition"],
      },
      {
        name: "Moodboard Creation",
        description: "Visual inspiration boards that help define your brand's aesthetic direction.",
        features: ["Visual research", "Color exploration", "Typography samples", "Imagery style"],
      },
      {
        name: "Typography Selection",
        description: "Expert font selection that aligns with your brand personality and improves readability.",
        features: [
          "Font pairing recommendations",
          "Typography hierarchy",
          "Custom font licensing guidance",
          "Web font implementation",
        ],
      },
      {
        name: "Color Palette Design",
        description: "Strategic color selection that evokes the right emotions and strengthens brand recognition.",
        features: [
          "Primary and secondary colors",
          "Color psychology analysis",
          "Accessibility considerations",
          "Color codes for all applications",
        ],
      },
      {
        name: "Slogan/Tagline Crafting",
        description: "Memorable slogans and taglines that communicate your brand's value proposition.",
        features: [
          "Multiple concept options",
          "Competitor analysis",
          "Audience testing recommendations",
          "Usage guidelines",
        ],
      },
      {
        name: "Visual Storytelling",
        description: "Cohesive visual narratives that communicate your brand story across different touchpoints.",
        features: [
          "Story framework development",
          "Visual narrative elements",
          "Implementation guidelines",
          "Content recommendations",
        ],
      },
      {
        name: "Brand Style Guide Creation",
        description: "Comprehensive documentation of your brand standards to ensure consistency.",
        features: [
          "Logo usage rules",
          "Typography guidelines",
          "Color specifications",
          "Image style direction",
          "Voice and tone guidelines",
        ],
      },
      {
        name: "Brand Refresh",
        description: "Update and revitalize your existing brand while maintaining brand equity.",
        features: ["Brand audit", "Evolution strategy", "Updated visual elements", "Transition plan"],
      },
    ],
  },
  {
    name: "UI/UX Design",
    slug: "ui-ux-design",
    icon: <Palette className="h-8 w-8" />,
    description:
      "Create intuitive, engaging user experiences that delight your customers and achieve your business goals.",
    services: [
      {
        name: "Wireframing",
        description:
          "Low-fidelity layouts that establish the basic structure and functionality of your digital product.",
        features: ["Information architecture", "User flow mapping", "Content hierarchy", "Interactive wireframes"],
      },
      {
        name: "User Flow Mapping",
        description:
          "Visual representations of the paths users take through your product to accomplish specific tasks.",
        features: ["Task analysis", "Decision point mapping", "Error state handling", "Optimization recommendations"],
      },
      {
        name: "Prototyping",
        description: "Interactive models of your product that simulate the user experience before development.",
        features: [
          "Low to high-fidelity options",
          "Interactive elements",
          "User testing preparation",
          "Developer handoff",
        ],
      },
      {
        name: "Interaction Design",
        description:
          "Design of how users interact with your product, focusing on creating intuitive and engaging experiences.",
        features: ["Gesture design", "Animation concepts", "State changes", "Feedback mechanisms"],
      },
      {
        name: "Responsive UI Design",
        description: "Visually appealing interfaces that adapt seamlessly to different screen sizes and devices.",
        features: [
          "Mobile, tablet, and desktop designs",
          "Breakpoint strategy",
          "Consistent experience across devices",
          "Component-based design",
        ],
      },
      {
        name: "Mobile App Design",
        description:
          "User-centered design for iOS and Android applications that follow platform guidelines while maintaining your brand identity.",
        features: [
          "Platform-specific patterns",
          "Native component usage",
          "Gesture-based interactions",
          "App icon design",
        ],
      },
      {
        name: "Accessibility Optimization",
        description: "Ensure your digital products are usable by people with various abilities and disabilities.",
        features: [
          "WCAG compliance review",
          "Color contrast optimization",
          "Screen reader compatibility",
          "Keyboard navigation support",
        ],
      },
      {
        name: "Design Systems",
        description:
          "Comprehensive collection of reusable components and guidelines that ensure consistency across your digital products.",
        features: ["Component library", "Design tokens", "Usage guidelines", "Documentation"],
      },
      {
        name: "Figma Components",
        description: "Creation of reusable, scalable design components in Figma that streamline your design workflow.",
        features: ["Component architecture", "Variant setup", "Auto-layout implementation", "Design token integration"],
      },
      {
        name: "Micro-interactions",
        description: "Subtle animations and feedback that enhance the user experience and guide user behavior.",
        features: [
          "Trigger identification",
          "Animation design",
          "Feedback mechanisms",
          "Implementation specifications",
        ],
      },
      {
        name: "Usability Testing",
        description:
          "Evaluate your product with real users to identify usability issues and improvement opportunities.",
        features: [
          "Test plan development",
          "Participant recruitment guidance",
          "Moderation scripts",
          "Findings report with recommendations",
        ],
      },
    ],
  },
  {
    name: "Web Development",
    slug: "web-development",
    icon: <Globe className="h-8 w-8" />,
    description: "Build powerful, responsive websites and web applications that drive results for your business.",
    services: [
      {
        name: "Front-end Development",
        description: "Creation of the visual and interactive elements of your website using modern technologies.",
        features: [
          "HTML5/CSS3/JavaScript implementation",
          "Responsive design",
          "Cross-browser compatibility",
          "Performance optimization",
        ],
      },
      {
        name: "Back-end Development",
        description: "Development of server-side logic, databases, and application architecture.",
        features: ["Server setup", "Database design", "API development", "Authentication systems"],
      },
      {
        name: "Custom CMS Builds",
        description: "Tailored content management systems that make updating your website simple and efficient.",
        features: ["Custom content types", "User role management", "Workflow automation", "Content versioning"],
      },
      {
        name: "eCommerce Setup",
        description: "Online store development with secure payment processing and inventory management.",
        features: [
          "Product catalog setup",
          "Payment gateway integration",
          "Shopping cart functionality",
          "Order management system",
        ],
      },
      {
        name: "Landing Page Creation",
        description: "High-converting landing pages designed to capture leads and drive specific actions.",
        features: ["Conversion-focused design", "A/B testing setup", "Lead capture forms", "Analytics integration"],
      },
      {
        name: "Progressive Web Apps",
        description:
          "Web applications that offer app-like experiences with offline functionality and fast performance.",
        features: ["Offline support", "Push notifications", "Home screen installation", "Fast loading times"],
      },
      {
        name: "Server-side Rendering",
        description: "Implementation of SSR for improved performance and SEO benefits.",
        features: ["Next.js implementation", "SEO optimization", "Performance tuning", "Hydration strategies"],
      },
      {
        name: "Performance Optimization",
        description: "Improve your website's speed and efficiency for better user experience and search rankings.",
        features: ["Core Web Vitals optimization", "Asset optimization", "Caching strategies", "Code splitting"],
      },
      {
        name: "REST/GraphQL API Integration",
        description: "Connect your website with external services and data sources through API integration.",
        features: ["API endpoint development", "Data transformation", "Authentication handling", "Error management"],
      },
      {
        name: "WordPress/Shopify Development",
        description: "Custom themes and plugins for popular platforms like WordPress and Shopify.",
        features: ["Custom theme development", "Plugin/app creation", "Platform optimization", "Maintenance support"],
      },
    ],
  },
  {
    name: "Mobile Development",
    slug: "mobile-development",
    icon: <Smartphone className="h-8 w-8" />,
    description:
      "Create native and cross-platform mobile applications that engage users and extend your digital presence.",
    services: [
      {
        name: "Android App Development",
        description:
          "Native Android applications built with Kotlin or Java for optimal performance and user experience.",
        features: [
          "Material Design implementation",
          "Google Play services integration",
          "Device compatibility testing",
          "Performance optimization",
        ],
      },
      {
        name: "iOS App Development",
        description: "Native iOS applications built with Swift or Objective-C following Apple's design guidelines.",
        features: [
          "Human Interface Guidelines compliance",
          "Apple services integration",
          "Device family support",
          "Performance tuning",
        ],
      },
      {
        name: "Flutter Development",
        description: "Cross-platform applications with native performance using Google's Flutter framework.",
        features: [
          "Single codebase for iOS and Android",
          "Custom widget development",
          "Native feature access",
          "Performance optimization",
        ],
      },
      {
        name: "React Native Apps",
        description:
          "Cross-platform mobile applications built with React Native for efficient development and native-like experience.",
        features: [
          "JavaScript/TypeScript implementation",
          "Native module integration",
          "Code sharing with web",
          "Hot reloading workflow",
        ],
      },
      {
        name: "Mobile Prototyping",
        description: "Interactive prototypes that simulate the functionality and flow of your mobile application.",
        features: ["User flow simulation", "Gesture interactions", "Transition animations", "User testing preparation"],
      },
      {
        name: "Push Notification Setup",
        description: "Implementation of push notification systems to engage and retain your mobile app users.",
        features: [
          "Notification strategy",
          "Firebase Cloud Messaging setup",
          "Apple Push Notification Service integration",
          "Segmentation capabilities",
        ],
      },
      {
        name: "Offline-first Apps",
        description: "Mobile applications designed to work seamlessly with or without an internet connection.",
        features: ["Local data storage", "Synchronization strategies", "Conflict resolution", "Background processing"],
      },
      {
        name: "Mobile UI Testing",
        description: "Comprehensive testing of your mobile application's user interface across devices and scenarios.",
        features: [
          "Device compatibility testing",
          "Orientation handling",
          "Accessibility verification",
          "Edge case identification",
        ],
      },
      {
        name: "Play Store & App Store Submission",
        description: "Preparation and submission of your application to Google Play Store and Apple App Store.",
        features: ["Store listing optimization", "Screenshot creation", "Compliance review", "Release management"],
      },
      {
        name: "App Analytics Integration",
        description: "Implementation of analytics tools to track user behavior and app performance.",
        features: ["Event tracking setup", "Conversion funnel analysis", "Crash reporting", "User journey mapping"],
      },
      {
        name: "Mobile Bug Fixing",
        description: "Identification and resolution of issues in existing mobile applications.",
        features: ["Diagnostic analysis", "Performance profiling", "Crash resolution", "UI/UX improvements"],
      },
    ],
  },
  {
    name: "Cloud & Hosting",
    slug: "cloud-hosting",
    icon: <Cloud className="h-8 w-8" />,
    description:
      "Deploy and manage your applications with scalable, reliable cloud infrastructure and hosting solutions.",
    services: [
      {
        name: "Vercel Deployment",
        description: "Deploy and host your Next.js, React, and static sites on Vercel's global edge network.",
        features: ["Automatic deployments from Git", "Preview deployments", "Custom domains", "Performance monitoring"],
      },
      {
        name: "Firebase Setup",
        description: "Implementation of Google Firebase services for your web and mobile applications.",
        features: [
          "Authentication setup",
          "Firestore/Realtime Database configuration",
          "Cloud Functions deployment",
          "Hosting setup",
        ],
      },
      {
        name: "Supabase Integration",
        description: "Setup and integration of Supabase as an open-source Firebase alternative.",
        features: [
          "PostgreSQL database setup",
          "Authentication implementation",
          "Storage configuration",
          "Realtime subscriptions",
        ],
      },
      {
        name: "Cloud Functions",
        description: "Development and deployment of serverless functions that scale automatically.",
        features: ["Function architecture design", "Trigger configuration", "Error handling", "Monitoring setup"],
      },
      {
        name: "Database Management",
        description: "Setup, optimization, and management of cloud databases for your applications.",
        features: ["Database selection guidance", "Schema design", "Migration planning", "Performance tuning"],
      },
      {
        name: "CDN Setup",
        description: "Content Delivery Network configuration for faster global content delivery.",
        features: ["CDN provider selection", "Asset optimization", "Cache strategy", "Origin shield setup"],
      },
      {
        name: "File Storage",
        description: "Cloud storage solutions for your application's files and assets.",
        features: [
          "Storage architecture design",
          "Security configuration",
          "Upload/download workflows",
          "Lifecycle policies",
        ],
      },
      {
        name: "Domain Setup",
        description: "Domain registration, configuration, and DNS management for your web properties.",
        features: ["Domain selection guidance", "DNS configuration", "Email setup", "SSL certificate installation"],
      },
      {
        name: "Serverless Architecture",
        description: "Design and implementation of serverless architectures for scalable, cost-effective applications.",
        features: ["Architecture planning", "Service selection", "Integration design", "Deployment strategy"],
      },
      {
        name: "Backups",
        description: "Implementation of reliable backup systems for your data and applications.",
        features: [
          "Backup strategy development",
          "Automated backup configuration",
          "Verification procedures",
          "Restoration testing",
        ],
      },
      {
        name: "Uptime Monitoring",
        description: "Setup of monitoring systems to track your application's availability and performance.",
        features: [
          "Monitoring tool selection",
          "Alert configuration",
          "Performance metrics",
          "Incident response planning",
        ],
      },
    ],
  },
  {
    name: "Content & Media",
    slug: "content-media",
    icon: <Film className="h-8 w-8" />,
    description: "Create engaging visual and audio content that tells your story and connects with your audience.",
    services: [
      {
        name: "Video Editing",
        description: "Professional editing of video content for marketing, social media, or educational purposes.",
        features: ["Footage organization", "Color correction", "Audio enhancement", "Motion graphics integration"],
      },
      {
        name: "Podcast Editing",
        description: "Audio editing and production for podcasts and audio content.",
        features: ["Audio cleaning", "Episode assembly", "Music integration", "Export for distribution platforms"],
      },
      {
        name: "Explainer Videos",
        description: "Concise, engaging videos that explain your product, service, or concept.",
        features: ["Script development", "Storyboarding", "Animation/footage creation", "Voiceover coordination"],
      },
      {
        name: "Animation",
        description: "Custom animations for marketing, product demonstrations, or brand storytelling.",
        features: ["Style development", "Character design", "Scene creation", "Sound design"],
      },
      {
        name: "Graphic Design",
        description: "Visual assets for digital and print media that align with your brand identity.",
        features: ["Social media graphics", "Marketing materials", "Presentation design", "Print collateral"],
      },
      {
        name: "Photography Retouching",
        description: "Professional enhancement and correction of photographic images.",
        features: ["Color correction", "Blemish removal", "Background editing", "Composition enhancement"],
      },
      {
        name: "YouTube Channel Design",
        description: "Complete visual identity for your YouTube channel to attract and retain subscribers.",
        features: ["Channel art", "Video thumbnails", "Intro/outro templates", "Brand consistency guidance"],
      },
      {
        name: "Thumbnail Creation",
        description: "Eye-catching thumbnails for videos that improve click-through rates.",
        features: ["Template development", "Image selection", "Text overlay design", "A/B testing options"],
      },
      {
        name: "Intro/Outro Videos",
        description: "Professional video intros and outros that reinforce your brand identity.",
        features: ["Brand-aligned design", "Animation", "Music selection", "Consistent formatting"],
      },
      {
        name: "Motion Graphics",
        description: "Animated graphic elements that enhance your videos and digital content.",
        features: ["Style development", "Animation design", "Integration guidance", "Format optimization"],
      },
    ],
  },
  {
    name: "Digital Marketing",
    slug: "digital-marketing",
    icon: <BarChart className="h-8 w-8" />,
    description:
      "Grow your audience, increase engagement, and drive conversions with strategic digital marketing services.",
    services: [
      {
        name: "Social Media Strategy",
        description: "Comprehensive strategy for building your brand and engaging your audience on social platforms.",
        features: ["Platform selection", "Content pillars", "Audience targeting", "Growth tactics"],
      },
      {
        name: "Content Calendars",
        description:
          "Organized planning of your content across channels to ensure consistency and strategic alignment.",
        features: ["Editorial calendar", "Content themes", "Publishing schedule", "Campaign integration"],
      },
      {
        name: "Copywriting",
        description: "Persuasive, engaging copy for your website, emails, ads, and other marketing materials.",
        features: ["Brand voice development", "SEO optimization", "Call-to-action crafting", "Message hierarchy"],
      },
      {
        name: "SEO",
        description:
          "Search engine optimization to improve your visibility in search results and drive organic traffic.",
        features: ["Keyword research", "On-page optimization", "Technical SEO audit", "Content strategy"],
      },
      {
        name: "Email Campaigns",
        description: "Strategic email marketing campaigns that nurture leads and drive conversions.",
        features: ["Campaign strategy", "Email design", "Automation setup", "Performance analysis"],
      },
      {
        name: "Newsletter Design",
        description: "Visually appealing, conversion-focused newsletter templates that represent your brand.",
        features: ["Template design", "Responsive layouts", "CTA optimization", "Brand consistency"],
      },
      {
        name: "Performance Tracking",
        description: "Setup and analysis of marketing metrics to measure success and inform strategy.",
        features: ["KPI definition", "Analytics setup", "Regular reporting", "Insight development"],
      },
      {
        name: "Influencer Outreach",
        description: "Identification and engagement of relevant influencers to amplify your brand message.",
        features: ["Influencer research", "Outreach strategy", "Relationship management", "Campaign measurement"],
      },
      {
        name: "Affiliate Setup",
        description: "Development and management of affiliate marketing programs to extend your reach.",
        features: ["Program structure", "Commission strategy", "Tracking implementation", "Affiliate portal setup"],
      },
      {
        name: "Social Ad Campaigns",
        description:
          "Strategic paid social media campaigns that target your ideal audience and drive specific actions.",
        features: ["Platform selection", "Audience targeting", "Creative development", "Budget optimization"],
      },
      {
        name: "Community Management",
        description: "Ongoing engagement and growth of your online community across platforms.",
        features: ["Engagement strategy", "Content moderation", "Community guidelines", "Growth tactics"],
      },
    ],
  },
  {
    name: "Business & Automation",
    slug: "business-automation",
    icon: <Briefcase className="h-8 w-8" />,
    description:
      "Streamline your operations, improve efficiency, and scale your business with smart automation solutions.",
    services: [
      {
        name: "CRM Integration",
        description:
          "Setup and customization of customer relationship management systems to streamline your sales and customer service.",
        features: ["System selection", "Data migration", "Workflow setup", "Team training"],
      },
      {
        name: "Notion Dashboards",
        description: "Custom Notion workspaces and dashboards to organize your team's work and information.",
        features: ["Workspace architecture", "Template creation", "Database setup", "Automation integration"],
      },
      {
        name: "Airtable Setup",
        description: "Custom Airtable bases that organize your data and streamline your workflows.",
        features: ["Base design", "Form creation", "View configuration", "Integration setup"],
      },
      {
        name: "Zapier Automations",
        description: "Automated workflows that connect your apps and services to eliminate manual tasks.",
        features: ["Workflow mapping", "Trigger/action setup", "Error handling", "Testing and optimization"],
      },
      {
        name: "Slack Bot Creation",
        description: "Custom Slack bots and integrations that enhance team communication and automate workflows.",
        features: [
          "Bot functionality design",
          "Command structure",
          "Integration points",
          "User experience optimization",
        ],
      },
      {
        name: "Project Management Systems",
        description:
          "Setup and customization of project management tools to improve team collaboration and productivity.",
        features: ["Tool selection", "Workflow setup", "Template creation", "Team onboarding"],
      },
      {
        name: "Analytics Dashboards",
        description: "Custom dashboards that visualize your key metrics and provide actionable insights.",
        features: ["KPI identification", "Data source integration", "Visualization design", "Automated reporting"],
      },
      {
        name: "KPI Tracking",
        description:
          "Systems for tracking and visualizing your key performance indicators to drive business decisions.",
        features: ["Metric definition", "Data collection setup", "Visualization creation", "Review process design"],
      },
      {
        name: "Calendar Scheduling Tools",
        description:
          "Setup of booking systems that streamline appointment scheduling and eliminate back-and-forth emails.",
        features: ["Tool selection", "Calendar integration", "Booking page customization", "Notification setup"],
      },
      {
        name: "Internal Tools",
        description: "Custom internal tools that streamline your team's workflows and improve efficiency.",
        features: ["Needs assessment", "Tool design", "Development", "User testing and training"],
      },
    ],
  },
  {
    name: "AI & Data",
    slug: "ai-data",
    icon: <Brain className="h-8 w-8" />,
    description:
      "Harness the power of artificial intelligence and data to gain insights, automate tasks, and create new experiences.",
    services: [
      {
        name: "Chatbot Creation",
        description: "Custom AI chatbots that engage users, answer questions, and automate customer service.",
        features: [
          "Conversation design",
          "Integration setup",
          "Training data preparation",
          "Continuous improvement plan",
        ],
      },
      {
        name: "AI-Generated Content",
        description: "Implementation of AI tools to assist in content creation while maintaining your brand voice.",
        features: ["Tool selection", "Prompt engineering", "Output refinement", "Workflow integration"],
      },
      {
        name: "Prompt Engineering",
        description: "Development of effective prompts that get the best results from AI language models.",
        features: ["Prompt strategy", "Testing methodology", "Refinement process", "Documentation"],
      },
      {
        name: "Sentiment Analysis",
        description:
          "Implementation of AI tools to analyze customer sentiment from reviews, social media, and other sources.",
        features: ["Data source integration", "Analysis setup", "Visualization creation", "Action planning"],
      },
      {
        name: "Data Visualization",
        description: "Creation of clear, insightful visualizations that make your data accessible and actionable.",
        features: ["Data preparation", "Chart selection", "Interactive elements", "Narrative development"],
      },
      {
        name: "GPT Integration",
        description: "Integration of OpenAI's GPT models into your products, services, or internal tools.",
        features: ["Use case definition", "API implementation", "Response handling", "Cost optimization"],
      },
      {
        name: "OpenAI API Setups",
        description: "Implementation of OpenAI's APIs for various applications and use cases.",
        features: ["API configuration", "Authentication setup", "Request/response handling", "Error management"],
      },
      {
        name: "Recommendation Systems",
        description: "AI-powered recommendation engines that personalize user experiences and increase engagement.",
        features: ["Algorithm selection", "Data preparation", "Integration design", "Performance measurement"],
      },
      {
        name: "AI-Powered Search",
        description: "Enhanced search functionality using AI to improve relevance and user experience.",
        features: ["Search architecture", "Algorithm implementation", "Query understanding", "Result ranking"],
      },
      {
        name: "Image Generation",
        description: "Implementation of AI image generation tools for creating unique visual content.",
        features: ["Tool selection", "Prompt development", "Output refinement", "Integration into workflows"],
      },
    ],
  },
  {
    name: "Web3 & Blockchain",
    slug: "web3-blockchain",
    icon: <Wallet className="h-8 w-8" />,
    description: "Build decentralized applications, integrate blockchain technology, and enter the Web3 ecosystem.",
    services: [
      {
        name: "Wallet Integration",
        description:
          "Integration of cryptocurrency wallets into your web applications for authentication and transactions.",
        features: ["Multiple wallet support", "Connection handling", "Transaction signing", "Error management"],
      },
      {
        name: "NFT Minting",
        description: "Development of NFT minting functionality for digital assets and collectibles.",
        features: ["Smart contract development", "Metadata handling", "Minting interface", "Marketplace integration"],
      },
      {
        name: "Token-gating",
        description: "Implementation of token-based access control for exclusive content or features.",
        features: ["Token verification", "Access management", "User experience design", "Multi-chain support"],
      },
      {
        name: "Smart Contract Deployment",
        description: "Development and deployment of secure, efficient smart contracts on various blockchains.",
        features: ["Contract development", "Testing", "Audit preparation", "Deployment management"],
      },
      {
        name: "Solana/DApp Interfaces",
        description: "User interfaces for decentralized applications on Solana and other blockchains.",
        features: ["UI/UX design", "Wallet connection", "Transaction handling", "State management"],
      },
      {
        name: "DeFi Dashboards",
        description: "Custom dashboards for monitoring and managing decentralized finance investments.",
        features: ["Portfolio tracking", "Protocol integration", "Performance metrics", "Transaction history"],
      },
      {
        name: "DAO Portals",
        description: "Web interfaces for decentralized autonomous organizations to manage governance and operations.",
        features: ["Proposal system", "Voting mechanism", "Treasury management", "Member directory"],
      },
      {
        name: "Crypto Payment Setup",
        description: "Implementation of cryptocurrency payment systems for your business or platform.",
        features: [
          "Payment flow design",
          "Multiple currency support",
          "Transaction verification",
          "Accounting integration",
        ],
      },
      {
        name: "On-chain Voting",
        description: "Secure, transparent voting systems using blockchain technology.",
        features: ["Voting mechanism design", "Voter verification", "Result tabulation", "Transparency features"],
      },
      {
        name: "Gas Fee Optimization",
        description: "Strategies and implementations to reduce blockchain transaction costs for your applications.",
        features: ["Transaction batching", "Gas estimation", "Priority management", "Layer 2 solutions"],
      },
    ],
  },
  {
    name: "eCommerce",
    slug: "ecommerce",
    icon: <ShoppingBag className="h-8 w-8" />,
    description: "Build and optimize online stores that drive sales and provide seamless shopping experiences.",
    services: [
      {
        name: "Shopify Setup",
        description: "Complete setup and customization of Shopify stores for your online business.",
        features: ["Store configuration", "Theme customization", "Product setup", "Payment gateway integration"],
      },
      {
        name: "Product Catalog Design",
        description: "Strategic organization and presentation of your products to maximize sales.",
        features: ["Category structure", "Product page templates", "Filter system", "Cross-selling features"],
      },
      {
        name: "Checkout Customization",
        description: "Optimization of the checkout process to reduce abandonment and increase conversions.",
        features: ["Checkout flow analysis", "Form optimization", "Upsell opportunities", "Payment method integration"],
      },
      {
        name: "Stripe Integration",
        description: "Implementation of Stripe payment processing for secure, flexible online payments.",
        features: ["Payment element setup", "Subscription management", "Invoice system", "Webhook handling"],
      },
      {
        name: "Order Automation",
        description: "Automated workflows for order processing, fulfillment, and customer communication.",
        features: ["Order flow mapping", "Notification setup", "Integration with shipping", "Status tracking"],
      },
      {
        name: "Stock Management Systems",
        description: "Inventory tracking and management systems to prevent stockouts and overstock situations.",
        features: ["Inventory tracking", "Low stock alerts", "Supplier integration", "Reporting tools"],
      },
      {
        name: "Reviews/Testimonials Integration",
        description: "Implementation of review and testimonial systems to build trust and drive conversions.",
        features: ["Review collection", "Display options", "Moderation tools", "Schema markup for SEO"],
      },
      {
        name: "Discount Code Systems",
        description: "Strategic discount and promotion systems to drive sales and customer loyalty.",
        features: ["Coupon generation", "Usage restrictions", "Expiration handling", "Tracking and analytics"],
      },
      {
        name: "User-generated Content Feeds",
        description: "Integration of customer photos, videos, and reviews to enhance product pages and build trust.",
        features: ["Content collection", "Moderation system", "Display options", "Social platform integration"],
      },
    ],
  },
  {
    name: "Security & User Systems",
    slug: "security-user-systems",
    icon: <Shield className="h-8 w-8" />,
    description: "Implement robust security measures and user management systems to protect your data and users.",
    services: [
      {
        name: "Multi-factor Authentication",
        description: "Implementation of MFA to add an extra layer of security to user accounts.",
        features: ["Method selection", "Setup flow design", "Recovery options", "User experience optimization"],
      },
      {
        name: "OAuth Implementation",
        description: "Integration of OAuth for secure, standardized authorization across applications.",
        features: ["Provider selection", "Authentication flow", "Token management", "Scope configuration"],
      },
      {
        name: "Supabase Auth",
        description: "Implementation of Supabase authentication for secure user management.",
        features: ["Auth provider setup", "Custom flows", "Role management", "Session handling"],
      },
      {
        name: "Clerk Integration",
        description: "Integration of Clerk for comprehensive user management and authentication.",
        features: ["Authentication setup", "User profile management", "Organization support", "Theme customization"],
      },
      {
        name: "Passwordless Login",
        description: "Implementation of secure login methods that don't require passwords.",
        features: ["Method selection", "Flow design", "Security considerations", "Fallback options"],
      },
      {
        name: "Role-based Access Control",
        description: "Design and implementation of RBAC systems to manage user permissions.",
        features: ["Role definition", "Permission mapping", "UI integration", "Admin controls"],
      },
      {
        name: "Audit Logging",
        description: "Implementation of comprehensive activity logging for security and compliance.",
        features: ["Event definition", "Storage strategy", "Viewing interface", "Retention policy"],
      },
      {
        name: "Email Verification Flows",
        description: "Secure email verification processes for new user accounts.",
        features: ["Flow design", "Email template creation", "Token security", "Expiration handling"],
      },
      {
        name: "Account Management UI",
        description: "User interfaces for self-service account management and security settings.",
        features: ["Profile editing", "Security settings", "Subscription management", "Data export"],
      },
      {
        name: "Session Timeout Features",
        description: "Implementation of session management to enhance security while maintaining user experience.",
        features: [
          "Timeout configuration",
          "Inactivity detection",
          "Re-authentication flow",
          "Remember me functionality",
        ],
      },
    ],
  },
  {
    name: "Virtual Assistant",
    slug: "virtual-assistant",
    icon: <MessageSquare className="h-8 w-8" />,
    description:
      "Get administrative support, customer service, and operational assistance from our skilled virtual assistants.",
    services: [
      {
        name: "Email Management",
        description:
          "Professional handling of your email communications to keep your inbox organized and ensure timely responses.",
        features: ["Inbox organization", "Response drafting", "Follow-up tracking", "Filter setup"],
      },
      {
        name: "Scheduling",
        description: "Management of your calendar, appointments, and meetings to optimize your time.",
        features: ["Calendar management", "Meeting coordination", "Reminder setup", "Travel planning"],
      },
      {
        name: "Data Entry",
        description: "Accurate, efficient data entry services for various business needs.",
        features: ["Information processing", "Database management", "Data cleaning", "Format conversion"],
      },
      {
        name: "Social Media Replies",
        description: "Timely, on-brand responses to comments and messages on your social media platforms.",
        features: ["Comment monitoring", "Response drafting", "Escalation protocol", "Engagement tracking"],
      },
      {
        name: "Customer Support",
        description: "Professional customer service to address inquiries, resolve issues, and maintain satisfaction.",
        features: ["Inquiry handling", "Issue resolution", "Knowledge base utilization", "Satisfaction monitoring"],
      },
      {
        name: "Community Engagement",
        description: "Active participation in your online communities to foster engagement and build relationships.",
        features: ["Discussion monitoring", "Content sharing", "Question answering", "Member recognition"],
      },
      {
        name: "Transcription",
        description: "Accurate transcription of audio and video content for various business purposes.",
        features: ["Audio/video processing", "Format options", "Speaker identification", "Timestamp inclusion"],
      },
      {
        name: "Research",
        description: "Thorough research on topics relevant to your business or projects.",
        features: ["Source identification", "Information gathering", "Data organization", "Summary creation"],
      },
      {
        name: "Task Tracking",
        description: "Management of your to-do lists and project tasks to ensure nothing falls through the cracks.",
        features: ["Task organization", "Priority setting", "Deadline tracking", "Progress reporting"],
      },
      {
        name: "Document Formatting",
        description: "Professional formatting of documents according to specific requirements or standards.",
        features: ["Layout design", "Style application", "Consistency checking", "Version control"],
      },
    ],
  },
  {
    name: "Education & Creator Tools",
    slug: "education-creator-tools",
    icon: <GraduationCap className="h-8 w-8" />,
    description: "Build platforms and tools for online education, content creators, and digital product sales.",
    services: [
      {
        name: "Course Platform Setup",
        description: "Implementation of learning management systems for delivering online courses and training.",
        features: ["Platform selection", "Course structure", "Content upload", "Student management"],
      },
      {
        name: "Digital Product Delivery",
        description: "Systems for selling and delivering digital products like ebooks, templates, and software.",
        features: ["Product setup", "Secure delivery", "Access management", "Customer communication"],
      },
      {
        name: "Paywalled Content Systems",
        description: "Implementation of membership or subscription systems for exclusive content access.",
        features: ["Access control", "Payment integration", "Content organization", "Member experience"],
      },
      {
        name: "Certification Design",
        description: "Creation of professional certificates for course completion or achievements.",
        features: ["Certificate template", "Automation setup", "Verification system", "Sharing options"],
      },
      {
        name: "Online Quiz Creation",
        description: "Development of interactive quizzes for assessment, engagement, or lead generation.",
        features: ["Question types", "Scoring system", "Result display", "Data collection"],
      },
      {
        name: "Content Access Control",
        description: "Systems to manage access to different content based on user roles, subscriptions, or purchases.",
        features: ["Permission structure", "Access rules", "User experience", "Admin controls"],
      },
      {
        name: "Curriculum UI",
        description: "User interfaces for organizing and presenting educational content in an engaging, effective way.",
        features: ["Content organization", "Progress tracking", "Navigation design", "Resource integration"],
      },
      {
        name: "Mentorship Platforms",
        description: "Systems for connecting mentors and mentees, scheduling sessions, and tracking progress.",
        features: ["Profile creation", "Matching system", "Session scheduling", "Progress tracking"],
      },
      {
        name: "E-book Delivery Systems",
        description: "Solutions for selling, delivering, and protecting e-books and digital publications.",
        features: ["Format options", "Secure delivery", "Reading experience", "DRM considerations"],
      },
    ],
  },
  {
    name: "API & Developer Services",
    slug: "api-developer-services",
    icon: <Webhook className="h-8 w-8" />,
    description: "Build, document, and integrate APIs and developer tools to extend your platform's capabilities.",
    services: [
      {
        name: "Custom API Creation",
        description: "Development of tailored APIs to expose your data and functionality to other applications.",
        features: ["Endpoint design", "Authentication system", "Response formatting", "Error handling"],
      },
      {
        name: "API Documentation",
        description: "Comprehensive, user-friendly documentation to help developers integrate with your API.",
        features: ["Reference docs", "Getting started guides", "Code examples", "Interactive playground"],
      },
      {
        name: "Webhook Integration",
        description: "Implementation of webhook systems to notify external applications of events in your system.",
        features: ["Event selection", "Payload design", "Delivery management", "Security considerations"],
      },
      {
        name: "SDK Creation",
        description: "Development of software development kits to simplify integration with your API.",
        features: ["Language selection", "Method design", "Error handling", "Documentation"],
      },
      {
        name: "API Gateway Setup",
        description: "Configuration of API gateways to manage, secure, and monitor your APIs.",
        features: ["Gateway selection", "Route configuration", "Security setup", "Monitoring integration"],
      },
      {
        name: "Sandbox Environments",
        description: "Development of testing environments for safe API integration and experimentation.",
        features: ["Environment isolation", "Data simulation", "Reset capabilities", "Documentation"],
      },
      {
        name: "GraphQL Resolvers",
        description: "Implementation of GraphQL APIs with efficient resolvers for flexible data querying.",
        features: ["Schema design", "Resolver implementation", "Performance optimization", "Caching strategy"],
      },
      {
        name: "Rate Limiting",
        description: "Implementation of rate limiting strategies to protect your API from abuse and ensure fair usage.",
        features: ["Limit definition", "Tracking mechanism", "Response handling", "User communication"],
      },
      {
        name: "API Key Systems",
        description: "Development of systems for managing API access through keys or tokens.",
        features: ["Key generation", "Permission association", "Usage tracking", "Revocation handling"],
      },
      {
        name: "Developer Onboarding UI",
        description: "User interfaces to help developers get started with your API or platform quickly.",
        features: ["Registration flow", "Key management", "Documentation access", "Support resources"],
      },
    ],
  },
]
