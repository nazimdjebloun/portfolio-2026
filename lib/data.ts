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
  description: "I'm a full-stack software developer passionate about turning ideas into engaging digital experiences. I believe in crafting applications that are not just functional but also intuitive and visually captivating. With a focus on creativity, analytical thinking and a relentless pursuit of excellence, I approach every project with enthusiasm and dedication.",
  github: "https://github.com/nazimdjebloun",
  linkedin: "https://linkedin.com/in/nazim-djebloun",
  email: "nazimdjebloun@example.com",
};

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
    items: ["Git", "GitHub", "VS Code", "Postman", "npm/pnpm", "Vercel"],
  },
];

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
      "Focusing on building scalable and robust Full stack web apps.",
    achievements: ["In the process of building an Ecommerce store"],
  },
  {
    role: "TS Internship",
    company: "ANEP",
    period: "Sep 2024 – Apr 2024",
    description:
      "Designed and developed a full-stack production management application to optimize manufacturing workflows and resource allocation.",
    achievements: [
      "Architected database schema with 12+ relational PostgreSQL tables for manufacturing operations.",
      "Implemented responsive UI/UX with Next.js and Tailwind CSS.",
      "Developed order tracking system with real-time status updates.",
    ],
  },
];

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
    title: "E-commerce Platform",
    description: "Full-stack e-commerce application with admin panel and real-time inventory management.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "TypeScript"],
    repo: "https://github.com/nazimdjebloun/shladty",
    images: [],
    features: [
      "User authentication with JWT tokens",
      "Product catalog with categories and search",
      "Shopping cart with real-time updates",
      "Admin dashboard for inventory management",
      "Order tracking and history",
      "Review and rating system",
      "Mobile responsive design",
    ],
  },
  {
    title: "Restaurant Digital Menu (Shladty)",
    description: "Digital menu system for restaurants featuring a comprehensive admin panel for real-time menu management and updates.",
    tech: ["Next.js", "Tailwind CSS", "REST APIs"],
    repo: "https://github.com/nazimdjebloun/shladty",
    link: "https://shladty.com",
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
      "Multi-language support",
      "Analytics dashboard for popular items",
    ],
  },
  {
    title: "Production Management System (ANEP)",
    description: "Full-stack application to optimize manufacturing workflows with order tracking, workshop assignment, and material consumption monitoring.",
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
      "12+ relational PostgreSQL tables",
      "Order tracking with real-time status updates",
      "Workshop assignment and scheduling",
      "Material consumption tracking",
      "Production workflow management",
      "Automated status reporting",
      "Dashboard with analytics",
      "Role-based access control",
    ],
  },
  {
    title: "CRM & ERP System (Digitkom)",
    description: "Internal business management system to streamline operations including inventory, orders, and employee management.",
    tech: ["React", "Node.js", "PostgreSQL"],
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
      "Customer relationship management",
      "Inventory tracking and control",
      "Order processing automation",
      "Employee management module",
      "Financial reporting and analytics",
      "Document management system",
      "Email notification system",
      "Customizable dashboards",
    ],
  },
];
