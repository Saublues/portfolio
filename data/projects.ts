export interface ApproachStep {
  step: string;
  title: string;
  detail: string;
}

export interface EvidenceSlide {
  image: string;
  title: string;
  caption: string;
}

export interface Project {
  num: string;
  title: string;
  section: "data" | "web";
  category: string;
  tag: string;
  subtitle: string;
  image: string; // Fast local real photography for hover menu (no external network latency)
  liveUrl?: string; // Optional URL to live production web app
  
  // The 6 Anton & Irene Case Study Sections:
  // 1. The Hook (Hero)
  hookTitle: string;
  hookImpact: string;

  // 2. The Context (Max 2 short paragraphs)
  client: string;
  contextParagraphs: string[];

  // 3. The Evidence (Visual - Laptop Mockup & Carousel / Dual Device)
  evidenceImage: string;
  evidenceCaption: string;
  evidenceSlides?: EvidenceSlide[];
  mobileEvidenceImage?: string; 
  mobileEvidenceCaption?: string;
  mobileEvidenceSlides?: EvidenceSlide[];

  // 4. The Approach (Large typography bullet list, NOT paragraphs)
  approachSteps: ApproachStep[];

  // 5. The Core Insight (Typographic Highlight in giant font)
  coreInsight: string;

  // 6. The Outcome (Concrete measurable results)
  outcomes: { label: string; metric: string; description: string }[];

  tools: string[];
}

export const projectsList: Project[] = [
  {
    num: "01",
    title: "Visensa 3D Vision",
    section: "web",
    category: "Computer Vision & Digital Rehabilitation",
    tag: "AMCC Finalist 2026",
    subtitle: "Real-Time 3D Hand Landmark Telemetry & Kinematic Rehabilitation",
    image: "/img/projects/visensa.jpg",
    liveUrl: "https://visensa.vercel.app/",
    
    // 1. The Hook (Hero)
    hookTitle: "Visensa: Real-Time 3D Kinematic Web Rehabilitation Innovation",
    hookImpact: "Delivering a precision digital therapy solution with real-time 3D motion tracking directly through a standard camera—no external sensors required. AMCC 2026 National Finalist.",

    // 2. The Context (Max 2 short paragraphs)
    client: "AMCC 2026 National Competition // Digital Healthcare & Physical Rehabilitation",
    contextParagraphs: [
      "Visensa is an interactive web-based platform specifically designed to support the physical rehabilitation process, with a primary focus on hand and wrist therapy.",
      "By leveraging real-time 3D motion-tracking technology directly through the user's device camera without needing external sensors, Visensa visualizes movement metrics so medical professionals and patients can monitor therapy progress precisely, measurably, and enjoyably.",
    ],

    // 3. The Evidence (Visual: Laptop Carousel)
    evidenceImage: "/img/showcase/visensa-1.jpg",
    evidenceCaption: "Visensa production interface: 3D bone mapping, wrist angle tracking, and real-time camera calibration.",
    evidenceSlides: [
      {
        image: "/img/showcase/visensa-1.jpg",
        title: "3D Motion-Tracking Telemetry",
        caption: "3D bone mapping and real-time wrist joint angle tracking directly within the browser.",
      },
      {
        image: "/img/showcase/visensa-2.jpg",
        title: "Clinical Progress Dashboard",
        caption: "Dashboard for monitoring daily patient sessions, visualizing kinematic accuracy metrics, and facilitating medical evaluation.",
      },
    ],

    // 4. The Approach (List)
    approachSteps: [
      {
        step: "01",
        title: "Precision 3D Bone Mapping & Movement",
        detail: "Translating 21 hand landmark coordinates into quaternion rotations and accurate kinematic bone mapping calculations.",
      },
      {
        step: "02",
        title: "Kinematic Therapy Tracking (Kalidokit)",
        detail: "Integrating Kalidokit algorithms with Three.js to render virtual hand visualizations at a seamless 30 FPS with zero frame drops.",
      },
      {
        step: "03",
        title: "Dashboard Architecture & Laravel Backend",
        detail: "Building modular React interface components connected to a Laravel backend for telemetry logging and patient progress tracking.",
      },
    ],

    // 5. The Core Insight (Typographic Highlight)
    coreInsight: "Combining Three.js and Kalidokit on the client side proves that high-precision kinematic therapy can run without expensive hardware sensors.",

    // 6. The Outcome
    outcomes: [
      { label: "Hardware Cost", metric: "$0 Sensor", description: "Requires only a standard webcam, eliminating the need for external sensor gloves" },
      { label: "Rendering Speed", metric: "30 FPS", description: "Seamless real-time kinematic motion tracking" },
      { label: "Achievement", metric: "Finalist", description: "Qualified as a National Finalist at the AMCC 2026 competition" },
    ],
    tools: ["React", "Three.js", "Kalidokit", "Next.js", "Computer Vision", "Supabase (PostgreSQL)", "Express JS"],
  },
  {
    num: "02",
    title: "ReCircle Marketplace",
    section: "web",
    category: "Full-Stack Marketplace (Web & App)",
    tag: "Mobile-First Platform",
    subtitle: "University Preloved E-Commerce & API Architecture",
    image: "/img/projects/recircle.jpg",
    liveUrl: "https://frontend-recircle-seven.vercel.app/",
    
    // 1. The Hook (Hero)
    hookTitle: "ReCircle: Mobile-First Preloved E-Commerce Marketplace",
    hookImpact: "An end-to-end student preloved e-commerce platform featuring a high-performance RESTful API architecture and Midtrans payment gateway integration.",

    // 2. The Context (Max 2 short paragraphs)
    client: "Sustainable Commerce Initiative // University Preloved Marketplace",
    contextParagraphs: [
      "ReCircle is an e-commerce marketplace startup platform (available in Web and App formats) specifically targeting university students for buying and selling preloved (second-hand) goods.",
      "Built with a mobile-first web approach, its interface is optimized for mobile browsers and applications to suit user habits. ReCircle handles the entire digital transaction lifecycle end-to-end with high performance, thanks to a decoupled frontend and backend API architecture.",
    ],

    // 3. The Evidence (Visual: Dual Device Laptop + Mobile App - Opsi B)
    evidenceImage: "/img/showcase/recircle-web-1.jpg",
    evidenceCaption: "ReCircle dual-device exploration: Web Marketplace view on desktop and mobile app interface on smartphone.",
    mobileEvidenceImage: "/img/showcase/recircle-mobile/mobile-1-home.jpg",
    mobileEvidenceCaption: "ReCircle Mobile Application Interface",
    evidenceSlides: [
      {
        image: "/img/showcase/recircle-web-1.jpg",
        title: "Landing Page & Hero Curation",
        caption: "ReCircle desktop web interface: 'Safe Wallet. Cozy Room.', curated student preloved items, and a guarantee of 12k+ successful transactions.",
      },
      {
        image: "/img/showcase/recircle-web-2.jpg",
        title: "Seller Verification (Student ID)",
        caption: "Trusted seller identity verification flow based on Student ID Card (KTM) uploads to ensure a safe transaction ecosystem within the campus.",
      },
      {
        image: "/img/showcase/recircle-web-3.jpg",
        title: "Wishlist & Favorites Management",
        caption: "Save feature for students' desired preloved items with instant state management tracking.",
      },
      {
        image: "/img/showcase/recircle-web-4.jpg",
        title: "Shopping Cart & Order Flow",
        caption: "Managing multi-item preloved purchases before redirecting to the integrated payment gateway.",
      },
    ],
    mobileEvidenceSlides: [
      {
        image: "/img/showcase/recircle-mobile/mobile-1-home.jpg",
        title: "Home Feed & Quick Categories",
        caption: "Mobile app home screen with a preloved product feed, student promo banners, and rapid category navigation.",
      },
      {
        image: "/img/showcase/recircle-mobile/mobile-2-products.jpg",
        title: "Student Product Management (Seller)",
        caption: "'My Products' page for sellers: active products tab, drafts, archives, and preloved inventory management.",
      },
      {
        image: "/img/showcase/recircle-mobile/mobile-3-store.jpg",
        title: "My Store Dashboard & Sales Metrics",
        caption: "Student store statistics hub: sold items metrics, active orders, price negotiation offers, and seller wallet.",
      },
      {
        image: "/img/showcase/recircle-mobile/mobile-4-checkout.jpg",
        title: "Checkout Flow & Shipping Options",
        caption: "Mobile-first checkout form: COD (Meet-up) vs. Parcel Delivery options, and an instant payment summary.",
      },
      {
        image: "/img/showcase/recircle-mobile/mobile-5-profile.jpg",
        title: "User Profile & Order Tracking",
        caption: "Verified student account status, real-time order tracking, and e-commerce transaction history.",
      },
    ],

    // 4. The Approach (List)
    approachSteps: [
      {
        step: "01",
        title: "Automated Checkout System",
        detail: "Building a multi-item order flow with instant stock reservation to prevent duplicate orders of unique preloved items.",
      },
      {
        step: "02",
        title: "Logistics Calculation & Shipping APIs",
        detail: "Integrating real-time shipping cost calculation endpoints based on package weight and buyer coordinates.",
      },
      {
        step: "03",
        title: "Laravel Backend API & Midtrans Webhook",
        detail: "Architecting a Laravel REST API that handles automated payment verification webhooks from Midtrans directly into the relational database.",
      },
    ],

    // 5. The Core Insight (Typographic Highlight)
    coreInsight: "A decoupled API architecture approach between the Mobile-First React frontend and Laravel Backend results in lightning-fast checkout performance and high transaction security.",

    // 6. The Outcome
    outcomes: [
      { label: "Platform", metric: "Web & App", description: "Responsive mobile-first design for seamless student accessibility" },
      { label: "Payment Safety", metric: "100% Real-Time", description: "Automated payment verification via Midtrans webhook integration" },
      { label: "Architecture", metric: "REST API", description: "Modular Laravel backend separating business logic and database" },
    ],
    tools: ["React (Mobile-First)", "Laravel Backend REST API", "Midtrans Payment", "MySQL", "Tailwind CSS"],
  },
  {
    num: "03",
    title: "Saintara",
    section: "web",
    category: "Digital Character Testing & System Architecture",
    tag: "Qbest Institute",
    subtitle: "Automated Psychometric Assessment & Seamless Payment Flow",
    image: "/img/projects/saintara.jpg",
    
    // 1. The Hook (Hero)
    hookTitle: "Saintara: Qbest Institute Automated Digital Character Testing Platform",
    hookImpact: "Transforming conventional psychological assessments into a fully automated digital platform with instant matrix calculations and integrated payments.",

    // 2. The Context (Max 2 short paragraphs)
    client: "Qbest Institute // Assessment & Character Evaluation Platform",
    contextParagraphs: [
      "Saintara is a digital character testing platform specifically designed to meet the assessment needs of Qbest Institute, converting conventional psychological evaluations into a fully automated digital experience.",
      "It ensures frictionless premium test access for end-users through a seamlessly integrated purchasing flow, while instantly delivering character test analysis results with highly accurate calculation logic.",
    ],

    // 3. The Evidence (Visual: Multi-Slide Laptop Carousel)
    evidenceImage: "/img/showcase/saintara-1.jpg",
    evidenceCaption: "Saintara assessment interface on laptop: Interactive digital test sheet, matrix score calculation, and database architecture.",
    evidenceSlides: [
      {
        image: "/img/showcase/saintara-1.jpg",
        title: "Interactive Digital Character Test Sheet",
        caption: "Interactive psychometric assessment interface with question navigation and an evaluation progress bar.",
      },
      {
        image: "/img/showcase/saintara-2.jpg",
        title: "Instant Score Calculation Matrix",
        caption: "Automated character score report published instantly upon the participant completing the test session.",
      },
      {
        image: "/img/showcase/saintara-3.jpg",
        title: "Character Profile Analysis Dashboard",
        caption: "Visualization module of the participant's psychological spectrum for in-depth review by Qbest Institute counselors.",
      },
      {
        image: "/img/showcase/saintara-4.jpg",
        title: "3NF Relational Database Architecture",
        caption: "Normalized Entity-Relationship Diagram (ERD) blueprint and Laravel database schema migrations.",
      },
    ],

    // 4. The Approach (List)
    approachSteps: [
      {
        step: "01",
        title: "Automated Scoring Matrix",
        detail: "Formulating a multi-dimensional psychometric character score calculation algorithm executed instantly upon test completion.",
      },
      {
        step: "02",
        title: "Digital Test Session & State Management",
        detail: "Managing exam session authentication tokens to guarantee participant answer integrity and prevent duplicate submissions.",
      },
      {
        step: "03",
        title: "Laravel Backend Controllers & Payment Gateway",
        detail: "Building Laravel backend controllers, structured relational database migrations, and payment gateway integration for premium test access.",
      },
    ],

    // 5. The Core Insight (Typographic Highlight)
    coreInsight: "Automating the scoring matrix logic at the Laravel service layer slashed character assessment report release times from 48 hours to real-time.",

    // 6. The Outcome
    outcomes: [
      { label: "Report Time", metric: "Instant", description: "Character evaluation results are published instantly upon completion" },
      { label: "Exam Access", metric: "Frictionless", description: "Purchasing is seamlessly connected to test token activation" },
      { label: "Data Structure", metric: "3NF Relational", description: "Neat, normalized, and scalable Laravel database migrations" },
    ],
    tools: ["React Frontend", "Laravel Backend Controllers", "MySQL Migrations", "Payment Gateway", "OOP Architecture"],
  },
  {
    num: "04",
    title: "Tumbuh Berbagi",
    section: "web",
    category: "Academic Information System & EdTech Architecture",
    tag: "UTBK Preparation",
    subtitle: "Academic Information System & Advanced Database Design",
    image: "/img/projects/tumbuh.jpg",
    
    // 1. The Hook (Hero)
    hookTitle: "Tumbuh Berbagi: Academic Information & UTBK Preparation System",
    hookImpact: "Bridging a structured learning pipeline between students and educational institutions through in-depth business process mapping and a solid database architecture.",

    // 2. The Context (Max 2 short paragraphs)
    client: "Yayasan Tumbuh Berbagi // Educational Mentoring & UTBK Preparation",
    contextParagraphs: [
      "Tumbuh Berbagi is a comprehensive web-based academic information system dedicated to facilitating educational mentoring programs and Computer-Based Written Test (UTBK) preparation.",
      "This system bridges interactions between students and the institution through a structured learning workflow. The primary focus lies in deep business process mapping and architecting a solid software foundation for user management, mentoring scheduling, and scalable academic data tracking.",
    ],

    // 3. The Evidence (Visual: Laptop Carousel)
    evidenceImage: "/img/showcase/tumbuh-1.jpg",
    evidenceCaption: "The Tumbuh Berbagi digital ecosystem: Public portal for university aspirants, integrated scholarship student dashboard, and live admin telemetry.",
    evidenceSlides: [
      {
        image: "/img/showcase/tumbuh-1.jpg",
        title: "Tumbuh Berbagi Public Landing Page",
        caption: "'Room to Grow for Dream Campus Aspirants' — public portal for UTBK preparation, scholarship program information, and user authentication gateway.",
      },
      {
        image: "/img/showcase/tumbuh-2.jpg",
        title: "Student Learning Dashboard",
        caption: "Scholarship student dashboard: real-time UTBK countdown widget, structured learning activity calendar, active practice test modules, and grade trend charts.",
      },
      {
        image: "/img/showcase/tumbuh-3.jpg",
        title: "Admin Operational & Telemetry Portal",
        caption: "Admin control center: live daily access monitoring, student management, question banks, mentoring scheduling, and tryout performance summaries.",
      },
    ],

    // 4. The Approach (List)
    approachSteps: [
      {
        step: "01",
        title: "User Academic Workflow Management",
        detail: "Structuring a unified interaction scenario mapping out roles for students, mentors/instructors, and institution administrators.",
      },
      {
        step: "02",
        title: "Advanced Database Design (ERD, DFD, Use Case)",
        detail: "Drafting hierarchical Data Flow Diagrams (DFD) and normalized Entity Relationship Diagrams (ERD) to ensure grade and schedule data integrity.",
      },
      {
        step: "03",
        title: "Scalable Laravel Backend Implementation",
        detail: "Building academic service endpoints on top of the Laravel framework alongside comprehensive system architecture documentation.",
      },
    ],

    // 5. The Core Insight (Typographic Highlight)
    coreInsight: "Strict foundational mapping of ERD and Use Case Diagrams from day one eliminated mentoring schedule redundancies and student grade inconsistencies.",

    // 6. The Outcome
    outcomes: [
      { label: "Documentation", metric: "Comprehensive", description: "Methodologically structured Use Case Diagrams, DFDs, and ERDs" },
      { label: "Management", metric: "Scalable", description: "Centralized management of hundreds of mentoring schedules and student accounts" },
      { label: "Backend", metric: "Laravel", description: "Clean and scalable service layer architecture ready for future expansion" },
    ],
    tools: ["System Architecture", "Laravel Backend", "ERD / DFD", "Use Case Modeling", "MySQL"],
  },
  {
    num: "05",
    title: "Vora",
    section: "web",
    category: "Contemporary Furniture & Interior E-Commerce",
    tag: "Interior Commerce",
    subtitle: "Modern Interior Catalog Experience & Intuitive Checkout Flow",
    image: "/img/projects/vora.jpg",
    
    // 1. The Hook (Hero)
    hookTitle: "Vora: Contemporary Furniture & Interior Design E-Commerce",
    hookImpact: "A clean, premium visual shopping experience featuring a dynamic shopping cart system and an intuitive interior product catalog.",

    // 2. The Context (Max 2 short paragraphs)
    client: "Contemporary Furniture Brand // Interior Living Catalog",
    contextParagraphs: [
      "Vora is a modern e-commerce platform dedicated to contemporary furniture and interior design products, prioritizing an aesthetic, clean, and premium visual experience when exploring interior catalogs.",
      "Given the complex details of furniture products, the interface is designed to be highly user-friendly for showcasing specifications, product variations, and room styling inspiration, facilitating the entire modern shopping flow from cart management to order completion.",
    ],

    // 3. The Evidence (Visual: Laptop Carousel)
    evidenceImage: "/img/showcase/vora-1.jpg",
    evidenceCaption: "Vora interface exploration: Contemporary 'YOUR FUTURE FURNITURE' hero display, dynamic catalog with filters, minimalist product gallery, and material specifications.",
    evidenceSlides: [
      {
        image: "/img/showcase/vora-1.jpg",
        title: "Hero Showcase: 'YOUR FUTURE FURNITURE'",
        caption: "Contemporary dark-themed hero interface with massive typography, global reputation metrics (12+ years, 8.4K collections), and precision navigation.",
      },
      {
        image: "/img/showcase/vora-2.jpg",
        title: "Filterable Contemporary Catalog",
        caption: "Furniture catalog exploration with dynamic live search and instant category filters (Chairs, Tables, Storage, Seating, Lighting, Sofas).",
      },
      {
        image: "/img/showcase/vora-3.jpg",
        title: "Product Grid & Quick Acquire",
        caption: "Curated visual cards for minimalist furniture (Slab Dining Table, Grid Shelf, Void Floor Lamp) complete with material specs and quick-action buttons.",
      },
      {
        image: "/img/showcase/vora-4.jpg",
        title: "Detailed Specs & Material Living",
        caption: "Interactive product detail page: construction density specs, edition selections, reactive quantity calculation, and white-glove courier information.",
      },
    ],

    // 4. The Approach (List)
    approachSteps: [
      {
        step: "01",
        title: "Modern Visual Product Catalog Exploration",
        detail: "Building an elegant React user interface to showcase material details, dimensions, and room inspiration photos.",
      },
      {
        step: "02",
        title: "Dynamic Shopping Cart System",
        detail: "Implementing reactive state management for instant adjustments of product variants, quantities, and total estimations.",
      },
      {
        step: "03",
        title: "Laravel Backend & E-Commerce Transaction Schema",
        detail: "Structuring Laravel backend logic and inventory database management to handle order flows, stock, and transaction mutations.",
      },
    ],

    // 5. The Core Insight (Typographic Highlight)
    coreInsight: "A minimalist-themed visual catalog design significantly enhances the comfort of exploring high-value furniture product specifications.",

    // 6. The Outcome
    outcomes: [
      { label: "Visual Experience", metric: "Premium", description: "An aesthetic and modern interior catalog that is satisfying to explore" },
      { label: "Cart", metric: "Dynamic", description: "Instant variant and quantity calculations without page refreshes" },
      { label: "Backend Core", metric: "Laravel", description: "Structured inventory catalog management and transaction schemas" },
    ],
    tools: ["React Frontend", "Laravel Backend Logic", "Catalog Database", "Tailwind CSS", "E-Commerce Architecture"],
  },
  {
    num: "06",
    title: "WeaveFlow Studio",
    section: "web",
    category: "Creative Digital Agency & Solutions Architecture",
    tag: "Digital Solutions Studio",
    subtitle: "Weaving Systems. Flowing Experiences. Multi-Project Agency Ecosystem",
    image: "/img/projects/weaveflow.jpg",
    
    // 1. The Hook (Hero)
    hookTitle: "WeaveFlow Studio: Digital Engineering Solutions & Scalable Web Architecture",
    hookImpact: "Fusing high-performance software architecture with precision visual design to build scalable and seamless digital client solutions.",

    // 2. The Context (Max 2 short paragraphs)
    client: "WeaveFlow Digital Solutions // Agency Portfolio & Multi-Project Ecosystem",
    contextParagraphs: [
      "WeaveFlow Studio was conceived as a digital engineering agency platform bridging technical architectural excellence with modern design aesthetics. Championing the philosophy 'Weaving Systems. Flowing Experiences', this platform showcases a curated selection of digital products developed for diverse client sectors.",
      "The interface is built upon a clean modular grid system, responsive micro-interactions, and integrated dark mode support. The showcase system houses a cross-platform portfolio ranging from character assessment web apps and preloved e-commerce, to wireless laundry reservations and terminal automation.",
    ],

    // 3. The Evidence (Visual: Laptop Carousel)
    evidenceImage: "/img/showcase/weaveflow-1.jpg",
    evidenceCaption: "WeaveFlow Studio interface: Interactive typography hero, minimalist studio navigation, and modular client product showcases.",
    evidenceSlides: [
      {
        image: "/img/showcase/weaveflow-1.jpg",
        title: "Hero Showcase: 'Weaving Systems. Flowing Experiences.'",
        caption: "Hero typography display against a minimalist architectural grid background, dynamic dark/light mode toggle, and a digital consultation call-to-action.",
      },
      {
        image: "/img/showcase/weaveflow-2.jpg",
        title: "Client Multi-Project Architecture Showcase",
        caption: "Agency work gallery module: Saintara (Full-Stack), Student Preloved Marketplace, Resik Laundry (Serverless Sheets API), and Surya Kshana (Python CLI).",
      },
    ],

    // 4. The Approach (List)
    approachSteps: [
      {
        step: "01",
        title: "Modular Architecture & Precision Design",
        detail: "Structuring an elegant React interface foundation utilizing contemporary grotesque typography systems and adaptive grid layouts.",
      },
      {
        step: "02",
        title: "Multi-Project Client Ecosystem",
        detail: "Organizing the presentation of diverse client solutions (Full-Stack web, serverless integration, to CLI tooling) within interactive curated cards.",
      },
      {
        step: "03",
        title: "Performance & Fluid Interactivity",
        detail: "Applying fluid transitions, adaptive dark-light themes, and micro-interactions for a credible and highly professional agency impression.",
      },
    ],

    // 5. The Core Insight (Typographic Highlight)
    coreInsight: "Presenting digital products that combine deep system architecture with visual simplicity solidifies trust among both corporate and startup clients.",

    // 6. The Outcome
    outcomes: [
      { label: "Client Solutions", metric: "4+ Systems", description: "Showcasing a portfolio across web, serverless, and Python CLI domains" },
      { label: "Design System", metric: "100% Fluid", description: "Responsive grid featuring instantaneous dark/light mode switching" },
      { label: "Core Stack", metric: "React & Vite", description: "Lightning-fast rendering performance via a modular component architecture" },
    ],
    tools: ["React", "Vite", "Tailwind CSS", "Design Systems", "UI/UX Engineering"],
  },
  {
    num: "07",
    title: "Olist E-Commerce BI",
    section: "data",
    category: "Data Analytics & Business Intelligence",
    tag: "Commercial Dashboard",
    subtitle: "Star Schema Modeling & Executive Analytics Suite (100K Orders)",
    image: "/img/projects/olist.jpg",
    
    // 1. The Hook (Hero)
    hookTitle: "Olist: Engineering Executive Clarity Across 100K Orders",
    hookImpact: "Transformed 99,442 fragmented marketplace transactions into a 5-page Star Schema BI suite that pinpointed SLA friction across 26 states.",

    // 2. The Context (Max 2 short paragraphs)
    client: "Brazilian Marketplace Operations & Commercial Leadership",
    contextParagraphs: [
      "Brazilian e-commerce giant Olist connected tens of thousands of independent merchants to buyers across South America, but leadership lacked centralized visibility into why customer satisfaction ratings plunged during peak fulfillment cycles.",
      "Raw relational databases were trapped in transactional silos with no standardized dimension models, making it impossible to separate courier transit bottlenecks from merchant dispatch delays.",
    ],

    // 3. The Evidence (Visual: Laptop Carousel)
    evidenceImage: "/img/showcase/olist.jpg",
    evidenceCaption: "Macro-crop of the 5-page Power BI executive suite showcasing regional SLA elasticity and cohort retention curves.",
    evidenceSlides: [
      {
        image: "/img/showcase/olist.jpg",
        title: "Executive Power BI Suite",
        caption: "Executive PostgreSQL Star Schema dashboard mapping logistics bottlenecks, delay rates, and cohort retention.",
      },
    ],

    // 4. The Approach (List)
    approachSteps: [
      {
        step: "01",
        title: "Relational Star Schema Staging",
        detail: "Engineered 1 centralized fact table (fact_orders) joined cleanly to 4 core dimension tables (customers, products, geolocation, sellers) inside PostgreSQL.",
      },
      {
        step: "02",
        title: "DAX Cohort & Freight Elasticity Modeling",
        detail: "Authored 14 specialized DAX metrics calculating MoM customer lifetime retention, freight-to-value sensitivity ratios, and regional fulfillment lag.",
      },
      {
        step: "03",
        title: "Executive Storytelling Interface",
        detail: "Constructed a 5-page decision matrix mapping logistics heatmaps, merchant review score regressions, and product category churn.",
      },
    ],

    // 5. The Core Insight (Typographic Highlight)
    coreInsight: "Fulfillment delays accounted for 42% of 1-star reviews—not product defects or pricing disputes.",

    // 6. The Outcome
    outcomes: [
      { label: "Orders Analyzed", metric: "99,442", description: "Cleaned and staged with zero schema duplication" },
      { label: "SLA Accountability", metric: "42%", description: "Of negative reviews traced directly to logistics transit" },
      { label: "Executive Adoption", metric: "5 Pages", description: "Interactive dashboards deployed for commercial operations" },
    ],
    tools: ["PostgreSQL", "Star Schema", "Power BI", "DAX", "Data Modeling"],
  },
  {
    num: "08",
    title: "Job Market Pipeline",
    section: "data",
    category: "Data Engineering & Pipeline Automation",
    tag: "ETL & Audit Engine",
    subtitle: "Multi-Source Extraction & Automated Verification Suite",
    image: "/img/projects/pipeline.jpg",
    
    // 1. The Hook (Hero)
    hookTitle: "Job Market Pipeline: Automated Ingestion & 95-Script Audit Suite",
    hookImpact: "Harvested 12,000+ Southeast Asian tech job postings with an automated 95-script verification suite achieving 99.4% schema integrity.",

    // 2. The Context (Max 2 short paragraphs)
    client: "Talent Intelligence & Labour Market Research",
    contextParagraphs: [
      "Job market analytics in Southeast Asia is notoriously chaotic: salary brackets are obscured, job titles are inconsistent across platforms (Glints, Kalibrr, JobStreet), and duplicate postings poison statistical trend analysis.",
      "Downstream machine learning models required an unyielding data contract where messy unstructured vacancy posts were converted into validated, audit-checked relational records.",
    ],

    // 3. The Evidence (Visual: Laptop Carousel)
    evidenceImage: "/img/showcase/pipeline.jpg",
    evidenceCaption: "Asynchronous Python pipeline telemetry displaying real-time parser throughput, JSON schema checks, and deduplication audit logs.",
    evidenceSlides: [
      {
        image: "/img/showcase/pipeline.jpg",
        title: "Pipeline Telemetry & 95-Script Audit",
        caption: "Asynchronous Python scraper throughput, JSON Schema verification gates, and data anomaly cleansing logs.",
      },
    ],

    // 4. The Approach (List)
    approachSteps: [
      {
        step: "01",
        title: "Asynchronous Multi-Source Scraping",
        detail: "Implemented distributed Python scrapers with rate-limiting, dynamic header rotation, and automated pagination handling.",
      },
      {
        step: "02",
        title: "Rigorous 95-Script Data Audit Engine",
        detail: "Executed automated validation gates checking salary bounds, null value frequencies, and strict JSON Schema conformance.",
      },
      {
        step: "03",
        title: "Taxonomy Normalization & Deduplication",
        detail: "Normalized 140+ role titles and localized salary currencies using regex tokenization and cosine similarity matching.",
      },
    ],

    // 5. The Core Insight (Typographic Highlight)
    coreInsight: "Over 68% of 'Junior' data roles secretly demanded production ETL & SQL pipelining experience beyond basic reporting.",

    // 6. The Outcome
    outcomes: [
      { label: "Audit Pass Rate", metric: "99.4%", description: "Verified across 95 automated data health checks" },
      { label: "Listings Processed", metric: "12,000+", description: "Normalized records across 3 major employment platforms" },
      { label: "Latency Reduction", metric: "4.2x", description: "Faster data turnaround via asynchronous batch scrapers" },
    ],
    tools: ["Python", "Pandas", "JSON Schema", "Data Audit", "ETL Architecture"],
  },
  {
    num: "09",
    title: "Ames Housing Data Mining",
    section: "data",
    category: "Advanced Data Mining & Econometric Modeling",
    tag: "R & Machine Learning Suite",
    subtitle: "Integrated EDA, K-Means Clustering, Multiple Linear Regression & Decision Tree",
    image: "/img/projects/ameshousing.jpg",
    
    // 1. The Hook (Hero)
    hookTitle: "Ames Housing: Integrated Data Mining & Property Value Predictive Modeling",
    hookImpact: "Extracted 2,930 property observations into 3 Machine Learning paradigms: Market Segmentation (K-Means), Multivariate Linear Regression (88.33% R²), and Price Tier Classification (Decision Tree 79.5%).",

    // 2. The Context (Max 2 short paragraphs)
    client: "Integrated Data Mining Case Study // Econometrics & Applied Machine Learning Research",
    contextParagraphs: [
      "The Ames Housing dataset comprises 2,930 observations featuring 82 architectural and geographical variables. Processing all dimensions in their raw state leads to visual distortion and high multicollinearity, necessitating targeted dimensionality reduction and standardization of functional metrics.",
      "Through operational feature engineering (total functional area, building age, consolidated bathroom calculations, and missing value sanitation), this analysis combines in-depth Exploratory Data Analysis (EDA) with three Machine Learning models to uncover the dynamics driving property prices.",
    ],

    // 3. The Evidence (Visual: Laptop Carousel)
    evidenceImage: "/img/showcase/ameshousing-1.jpg",
    evidenceCaption: "Ames Housing analytical telemetry visualization: Price driver correlations (Pearson), spatial PCA segmentation (K-Means), and classification decision trees.",
    evidenceSlides: [
      {
        image: "/img/showcase/ameshousing-1.jpg",
        title: "Mapping Key Price Drivers",
        caption: "Pearson correlation coefficient rankings against property sales value: Overall Quality (0.80) and Total SqFt (0.79) proved to be dominant determinants, while Building Age correlated negatively (-0.56).",
      },
      {
        image: "/img/showcase/ameshousing-2.jpg",
        title: "Automated Property Segmentation (3 K-Means Clusters)",
        caption: "2D PCA projection of K-Means clustering (K=3) validated by Elbow & Silhouette methods: segregating the portfolio into Economy ($125K), Mid-Range ($185K), and Premium ($312K) clusters based purely on physical utility similarities.",
      },
      {
        image: "/img/showcase/ameshousing-3.jpg",
        title: "Multivariate Linear Regression Diagnostics & Evaluation",
        caption: "Residual feasibility testing (Residuals vs Fitted, Normal Q-Q, Scale-Location, Cook's Distance) yielding an 88.33% Test R², $18,445.52 MAE, and $27,272.25 RMSE on the testing data.",
      },
      {
        image: "/img/showcase/ameshousing-4.jpg",
        title: "Classification Rule Structure (CART Decision Tree)",
        caption: "White-box Decision Tree achieving 79.49% accuracy (Kappa 0.69) splitting 3 balanced price tiers (Low, Medium, High) using logical total area and construction quality splits.",
      },
      {
        image: "/img/showcase/ameshousing-5.jpg",
        title: "Outlier Detection & Price Valuation Distribution",
        caption: "Univariate density analysis confirming a right-skewed pattern with a $160,000 median, alongside the identification of upper-whisker observations as the luxury property segment.",
      },
    ],

    // 4. The Approach (List)
    approachSteps: [
      {
        step: "01",
        title: "Data Sanitation & Functional Feature Engineering",
        detail: "Reducing 82 raw dimensions into key features: transforming area combinations into total_sqft (correlation jumped from 0.54 to 0.63) and eliminating isolated missing values.",
      },
      {
        step: "02",
        title: "Unsupervised Market Segmentation (K-Means)",
        detail: "Applying Z-Score Standardization to prevent Euclidean distance bias, followed by K=3 validation via the Elbow curve and Average Silhouette Width evaluation.",
      },
      {
        step: "03",
        title: "Dual Supervised Modeling (Regression & Decision Tree)",
        detail: "Training a Multiple Linear Regression for continuous value estimation ($18.4K MAE) and a CART Decision Tree for categorical price tier rules presentable to business stakeholders.",
      },
    ],

    // 5. The Core Insight (Typographic Highlight)
    coreInsight: "Upgrading house construction quality from a score of 4 to 5 provides marginal added value, yet leaping from a score of 8 to 9 (the premium segment) exponentially multiplies property valuation.",

    // 6. The Outcome
    outcomes: [
      { label: "Model Accuracy", metric: "88.33% R²", description: "Linear regression model generalization performance on the test set" },
      { label: "Tolerance Margin", metric: "±$27.2K", description: "RMSE tolerance limit serving as the margin of error for real-world price negotiations" },
      { label: "Decision Tree", metric: "79.49%", description: "Classification accuracy across 3 balanced property price tiers (Low, Medium, High)" },
    ],
    tools: ["R", "tidyverse", "caret", "rpart / rpart.plot", "factoextra", "corrplot", "K-Means", "Data Mining"],
  },
];