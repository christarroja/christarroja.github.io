type HeaderInfo = {
  name: string;
  title: string;
  description: string;
};

type Skills = {
  languages: string[];
  frameworks: string[];
  styling: string[];
  state_mgmt: string[];
  libraries: string[];
  tools: string[];
  interests: string[];
};
type Project = {
  name: string;
  description: string;
  link: string;
  video?: string;
  image?: string;
};

type WorkExperience = {
  company: string;
  title: string;
  start: string;
  end: string;
  link: string;
};

type BlogPost = {
  title: string;
  description: string;
  link: string;
  uid: string;
};

type SocialLink = {
  label: string;
  link: string;
};

export const HEADER_INFO: HeaderInfo = {
  name: "Christopher Tarroja",
  title: "Front End Developer",
  description:
    "Web developer with 4 years of crafting tailored, performant web experiences — where clean code meets intentional design. Focused on accessibility, storytelling, and closing the gap between design and engineering. Experienced collaborating cross-functionally with UI/UX designers, PMs, Backend Developers, DevOps, and QA teams. Based in Quezon City, Philippines.",
};

export const SKILLS: Skills = {
  languages: ["TypeScript", "JavaScript", "HTML"],
  frameworks: ["React", "Next.js", "React Native (Expo)"],
  styling: ["Tailwind CSS, CSS Modules"],
  state_mgmt: ["Zustand", "TanStack React Query (server-state)", "Redux (RTK)"],
  libraries: [
    "shadcn/ui",
    "Radix UI",
    "Framer Motion",
    "React Hook Form",
    "Zod",
    "nuqs",
    "Vitest",
    "Playwright",
    "Three.js",
  ],
  tools: ["Git", "Figma", "Docker", "Postman", "Claude and other AI tools"],
  interests: [
    "Instrumental Music",
    "Games (Action RPGs, Rogue-like)",
    "Home-cooked meals",
    "PC Hardware",
  ],
};

export const PROJECTS: Project[] = [
  {
    name: "GIG Rewards",
    description:
      "A token-based app built around React Native (Expo), with 50,000+ active users for mobile rewards and Web3 quests",
    link: "https://gigrewards.ph/",
    video: "https://res.cloudinary.com/da5gpqjxd/video/upload/v1746514129/gigrewards_l7ivnq.mp4",
  },
  {
    name: "CreatorVerse",
    description:
      "Delivered Creatorverse leaderboard and compendium, supporting over 13,000 Alpha playtest signups",
    link: "https://creatorverse.gg/",
    video: "https://res.cloudinary.com/da5gpqjxd/video/upload/v1746514130/creatorverse_xio4zp.mp4",
  },
  {
    name: "Ask Gemini About Image",
    description:
      "Ask a natural-language question about an image, rendering the Think → Act → Observe timeline via Gemini's Agentic Vision",
    link: "#",
    image: "./gemini-vision.jpg",
  },
  {
    name: "Lego 3D Playground",
    description:
      "A simple demonstration of r3f (React Three Fiber) and feature LEGO physics with the cursor.",
    link: "#",
    image: "lego3d-rf.jpg",
  },
  {
    name: "InvestDoor",
    description:
      "A dynamic resource that empowers Australian real estate brokers with the tools, insights, and expertise they need to thrive in the competitive property investment landscape",
    link: "https://investdoor.com.au/",
    video: "https://res.cloudinary.com/da5gpqjxd/video/upload/v1746514130/investdoor_wxpjvs.mp4",
  },
  {
    name: "Best Season Agri-venture",
    description:
      "A simple, responsive, and fast website showcasing their product range and invites partnerships to make a positive impact in the agricultural sector",
    link: "https://bestseasonagri.com/",
    video:
      "https://res.cloudinary.com/da5gpqjxd/video/upload/v1746516328/bestseasonagri_hy1se0.mp4",
  },
  {
    name: "Pokedex",
    description:
      "Explore and search for Pokémon by type. Achieved an impressive score of 95-100 on the Lighthouse web page test. ReactJS, GraphQL, Apollo",
    link: "https://pokedex-graphql-two.vercel.app/",
    video: "https://res.cloudinary.com/da5gpqjxd/video/upload/v1746517637/pokedex_hqjpmo.mp4",
  },
  {
    name: "Ray A. Gapuz Review System",
    description:
      "A fully built and styled ReactJS site focused on promoting and delivering review program requirements for exams like NCLEX, NLE, LET, IELTS, and more",
    link: "https://www.raygapuzreviewsystem.com/",
    video: "https://res.cloudinary.com/da5gpqjxd/video/upload/v1746522071/gapuzreview_qt7vxb.mp4",
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "WINAS Technologies Inc. (Philippines)",
    title: "Frontend Engineer (React)",
    start: "Feb 2026",
    end: "Present",
    link: "https://www.winas.jp/",
  },
  {
    company: "Sovrun (formerly BreederDAO)",
    title: "Front End Developer",
    start: "Dec 2023",
    end: "Feb 2026",
    link: "https://sovrun.org",
  },
  {
    company: "Getaka Labs",
    title: "Associate Software Engineer",
    start: "Mar 2022",
    end: "Jan 2024",
    link: "https://getakalabs.com",
  },
  {
    company: "Capitol City Baptist Church",
    title: "Communications Specialist",
    start: "Nov 2014",
    end: "Mar 2022",
    link: "https://ccbc.ph",
  },
  {
    company: "Freelance",
    title: "Web Developer",
    start: "2019",
    end: "Present",
    link: "https://christarroja.github.io",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Exploring the Intersection of Design, AI, and Design Engineering",
    description: "How AI is changing the way we design",
    link: "/blog/exploring-the-intersection-of-design-ai-and-design-engineering",
    uid: "blog-1",
  },
  {
    title: "Why I left my job to start my own company",
    description: "A deep dive into my decision to leave my job and start my own company",
    link: "/blog/exploring-the-intersection-of-design-ai-and-design-engineering",
    uid: "blog-2",
  },
  {
    title: "What I learned from my first year of freelancing",
    description: "A look back at my first year of freelancing and what I learned",
    link: "/blog/exploring-the-intersection-of-design-ai-and-design-engineering",
    uid: "blog-3",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Github",
    link: "https://github.com/christarroja",
  },
  // {
  //   label: 'Twitter',
  //   link: 'https://twitter.com/ibelick',
  // },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/chris-tarroja",
  },
  // {
  //   label: 'Instagram',
  //   link: 'https://www.instagram.com/ibelick',
  // },
];

export const EMAIL = "christarroja@gmail.com";
