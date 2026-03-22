export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
  images: string[];
  features: string[];
}

export const profile = {
  name: "Nazim Djebloun",
  role: "Full Stack Software Developer",
  description:
    "Full-stack developer based in Algeria, building production-grade web applications with React, Next.js, and Node.js. I've shipped CRM systems, digital menus, e-commerce platforms, and internal tooling — end-to-end. I care about clean architecture, real usability, and getting things actually deployed.",
  github: "https://github.com/nazimdjebloun",
  linkedin: "https://linkedin.com/in/nazim-djebloun",
  email: "nazimdjebloun@example.com",
}
export const skills = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Framer Motion",
      "React Query",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "SQL",
      "REST APIs",
      "API Design",
      "Database Design",
    ],
  },
  {
    category: "Tools & Others",
    items: ["Git", "Convex", "Clerk", "Vercel"],
  },
]

export const experience = [
  {
    role: "Software Developer",
    company: "Digitkom",
    period: "Oct 2025 – Present",
    description:
      "Building full-stack web applications and complex internal systems end-to-end.",
    achievements: [
      "Built an end-to-end e-commerce platform.",
      "Developing an internal CRM and ERP system to streamline business operations.",
      "Built a digital menu for restaurants featuring a comprehensive admin panel for real-time management.",
    ],
  },
  {
    role: "Software Developer (Freelancer)",
    company: "Self-Employed",
    period: "2024 – Present",
    description:
      "Independent full-stack development work alongside employment, focusing on scalable web applications.",
    achievements: [],
  },
  {
    role: "TS Internship",
    company: "ANEP",
    period: "Sep 2023 – Apr 2024",
    description:
      "Designed and developed a full-stack production management application to optimize manufacturing workflows and resource allocation.",
    achievements: [
      "Architected database schema with 12+ relational PostgreSQL tables for manufacturing operations.",
      "Implemented responsive UI/UX with Next.js and Tailwind CSS.",
      "Developed order tracking system with real-time status updates.",
    ],
  },
]

export const education = [
  {
    degree: "Computer Science (TS)",
    institution: "Ibn Rochde",
    location: "Algiers, Algeria",
    period: "Sep 2022 - Apr 2024",
    description: "Completed a comprehensive Computer Science program with a focus on Databases design, implementation, administration and management.",
  },
  {
    degree: "Master's degree in Service Marketing",
    institution: "University of Algiers 3",
    location: "Algiers, Algeria",
    period: "Sep 2022 - Jul 2024",
    description: "Strategic Service marketing and digital Service marketing techniques.",
  },
  {
    degree: "Bachelor's degree in Marketing",
    institution: "University of Algiers 3",
    location: "Algiers, Algeria",
    period: "Sep 2019 - Jul 2022",
    description: "Focus on core Marketing principles.",
  },
];

export const projects = [
  {
    title: "DigitKom Admin",
    description:
      "Comprehensive CRM and Agency Management System for a digital marketing agency. Handles full client lifecycle from prospect tracking to service delivery and payment management.",
    tech: [
      "Next.js 16 (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui + Radix UI",
      "Clerk Authentication",
      "Convex (Real-time Backend)",
      "React Hook Form + Zod",
      "next-themes",
    ],
    images: [],
    features: [
      "Landing page with smooth navigation",
      "Admin panel with full control",
      "User management with roles (Admin, Manager, User)",
      "Multi-location management",
      "Category and item management",
      "Location-specific pricing for items",
      "Item availability toggle per location",
      "Best seller and Dish of the Day designation",
      "Image upload for items and categories",
      "User authentication with Better Auth",
      "Forgot password and reset password",
      "User profile management",
      "About Us page",
      "Location selection page",
      "Menu page with dynamic location fetching (/location-slug)",
      "Responsive design for all devices",
    ],
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce application with admin panel and real-time inventory management.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "TypeScript"],
    images: [],
    features: [
      "User authentication with Clerk",
      "Product catalog with categories and search",
      "Shopping cart with real-time updates",
      "Admin dashboard for inventory management",
      "Order tracking and history",
      "Mobile responsive design",
    ],
  },
  {
    title: "Expense Tracker",
    description:
      "Personal finance app with real-time sync, authentication, expense/income categorization, and spending analytics with charts.",
    tech: ["Next.js", "Convex", "Clerk", "TypeScript", "Recharts"],
    repo: "https://github.com/nazimdjebloun/expense-tracker",
    images: [],
    features: [
      "Authentication with Clerk (sign-up, sign-in, session management)",
      "Real-time data sync powered by Convex",
      "Expense and income tracking with categorization",
      "Date filtering with calendar picker",
      "Spending analytics and charts via Recharts",
      "Form validation with React Hook Form and Zod",
      "Dark/light mode support",
    ],
  },
  {
    title: "Restaurant Digital Menu (Shladty)",
    description:
      "Digital menu system for restaurants featuring a comprehensive admin panel for real-time menu management and updates.",
    tech: ["Next.js", "Tailwind CSS", "REST APIs"],
    images: [
      "/images/projects/shladty/shladty-menu.png",
      "/images/projects/shladty/shladty-linktree.png",
      "/images/projects/shladty/shladty-checkout.png",
    ],
    features: [
      "Interactive digital menu with categories",
      "Real-time menu updates from admin panel",
      "QR code generation for table linking",
      "Specials and promotions display",
      "Allergen and dietary information",
      "Order management integration",
    ],
  },
  {
    title: "Production Management System (ANEP)",
    description:
      "Full-stack application to optimize manufacturing workflows with order tracking, workshop assignment, and material consumption monitoring.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    repo: "https://github.com/nazimdjebloun/production-system",
    images: [
      "/images/projects/productionapp/dossier.png",
      "/images/projects/productionapp/create-dossier.png",
      "/images/projects/productionapp/client.png",
      "/images/projects/productionapp/create-fiche.png",
      "/images/projects/productionapp/affiche-dossier.png",
      "/images/projects/productionapp/pv.png",
    ],
    features: [
      "Order tracking with real-time status updates",
      "Workshop assignment and scheduling",
      "Material consumption tracking",
      "Production workflow management",
      "Automated status reporting",
    ],
  },
  {
    title: "DigitKom Admin",
    description:
      "Comprehensive CRM and Agency Management System for a digital marketing agency. Handles full client lifecycle from prospect tracking to service delivery and payment management.",
    tech: [
      "Next.js 16 (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui + Radix UI",
      "Clerk Authentication",
      "Convex (Real-time Backend)",
      "React Hook Form + Zod",
      "next-themes",
    ],
    repo: "https://github.com/nazimdjebloun/digitkom",
    images: [
      "/images/projects/digitkomAdmin/Screenshot 2026-02-25 at 21-28-19 DigitKom.png",
      "/images/projects/digitkomAdmin/Screenshot 2026-02-25 at 21-28-26 DigitKom.png",
      "/images/projects/digitkomAdmin/Screenshot 2026-02-25 at 21-28-43 DigitKom.png",
      "/images/projects/digitkomAdmin/Screenshot 2026-02-25 at 21-28-50 DigitKom.png",
      "/images/projects/digitkomAdmin/Screenshot 2026-02-25 at 21-28-58 DigitKom.png",
      "/images/projects/digitkomAdmin/Screenshot 2026-02-25 at 21-29-19 DigitKom.png",
      "/images/projects/digitkomAdmin/Screenshot 2026-02-25 at 21-27-50 DigitKom.png",
      "/images/projects/digitkomAdmin/Screenshot 2026-02-25 at 21-27-58 DigitKom.png",
    ],
    features: [
      "Full CRM with prospect-to-client conversion pipeline",
      "Multi-service management (SMM, Web Dev, Video Editing, Graphic Design)",
      "Payment tracking with multiple payment methods",
      "Role-based access control (Admin, Sales, SMM, Designers, etc.)",
      "Content production workflow with approval stages",
      "Meeting scheduling and interaction logging",
      "Contract renewal and service status tracking",
      "Role-specific dashboards (Admin, Sales, Designer, SMM workspaces)",
      "Real-time database updates with Convex",
      "Dark/Light theme support",
      "French-localized user interface",
      "Toast notifications with Sonner",
      "Feature-based modular architecture",
    ],
  },
  {
    title: "DevSpace",
    description:
      "A developer community platform for posting tech articles, news, and insights. Built for developers to share and discover content.",
    tech: [
      "Next.js 16 (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui + Radix UI",
      "Clerk Authentication",
      "Convex (Real-time Backend)",
      "React Hook Form + Zod",
    ],
    images: [],
    features: [
      "User authentication with Clerk",
      "Real-time article and post creation",
      "Tech news and article feed",
      "Comment system for discussions",
      "Like and bookmark functionality",
      "User profiles with post history",
      "Category-based content filtering",
      "Dark/Light theme support",
    ],
  },
]


        