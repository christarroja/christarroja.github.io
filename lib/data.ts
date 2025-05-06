type HeaderInfo = {
  name: string
  title: string
  description: string
}

type Skills = {
  languages: string[]
  tech_stack: string[]
  tools: string[]
  interests: string[]
}
type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const HEADER_INFO: HeaderInfo = {
  name: 'Christopher Tarroja',
  title: 'Front End Developer',
  description:
    '3+ years of web development experience building responsive, production-ready interfaces using React and TypeScript. Worked on live dApps, CMS-based sites, and gaming launch sites. Focused on creating intuitive and performant web experiences. Bridging the gap between design and development. Based in Quezon City, Philippines.',
}

export const SKILLS: Skills = {
  languages: ['Javascript', 'TypeScript', 'HTML', 'PHP'],
  tech_stack: [
    'React',
    'React Native (Expo)',
    'NextJS',
    'Tailwind CSS',
    'Three.js',
    'Tanstack React Query',
    'Redux (RTK)',
    'Zustand',
  ],
  tools: [
    'Git',
    'Figma',
    'Postman',
    'Docker',
    'Jira',
    'MongoDB',
    'GraphQL',
    'Adobe Creative Suite',
    'WordPress',
    'WooCommerce',
  ],
  interests: [
    'Instrumental Music',
    'Games (Action RPGs, Rogue-like)',
    'Home-cooked meals',
    'PC Hardware',
  ],
}

export const PROJECTS: Project[] = [
  {
    name: 'InvestDoor',
    description:
      'A dynamic resource that empowers Australian real estate brokers with the tools, insights, and expertise they need to thrive in the competitive property investment landscape',
    link: 'https://investdoor.com.au/',
    video:
      'https://res.cloudinary.com/da5gpqjxd/video/upload/v1746514130/investdoor_wxpjvs.mp4',
    id: 'project1',
  },
  {
    name: 'CreatorVerse',
    description:
      'Delivered Creatorverse leaderboard and compendium, supporting over 13,000 Alpha playtest signups',
    link: 'https://creatorverse.gg/',
    video:
      'https://res.cloudinary.com/da5gpqjxd/video/upload/v1746514130/creatorverse_xio4zp.mp4',
    id: 'project2',
  },
  {
    name: 'Ray A. Gapuz Review System',
    description:
      'A fully built and styled ReactJS site focused on promoting and delivering review program requirements for exams like NCLEX, NLE, LET, IELTS, and more',
    link: 'https://www.raygapuzreviewsystem.com/',
    video:
      'https://res.cloudinary.com/da5gpqjxd/video/upload/v1746522071/gapuzreview_qt7vxb.mp4',
    id: 'project3',
  },
  {
    name: 'Pokedex',
    description:
      'Explore and search for Pokémon by type. Achieved an impressive score of 95-100 on the Lighthouse web page test. ReactJS, GraphQL, Apollo',
    link: 'https://pokedex-graphql-two.vercel.app/',
    video:
      'https://res.cloudinary.com/da5gpqjxd/video/upload/v1746517637/pokedex_hqjpmo.mp4',
    id: 'project4',
  },
  {
    name: 'Best Season Agri-venture',
    description:
      'A simple, responsive, and fast website showcasing their product range and invites partnerships to make a positive impact in the agricultural sector',
    link: 'https://bestseasonagri.com/',
    video:
      'https://res.cloudinary.com/da5gpqjxd/video/upload/v1746516328/bestseasonagri_hy1se0.mp4',
    id: 'project5',
  },
  {
    name: 'GIG Rewards',
    description:
      'A token-based app built around React Native (Expo), with 50,000+ active users for mobile rewards and Web3 quests',
    link: 'https://gigrewards.ph/',
    video:
      'https://res.cloudinary.com/da5gpqjxd/video/upload/v1746514129/gigrewards_l7ivnq.mp4',
    id: 'project6',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Sovrun (formerly BreederDAO)',
    title: 'Front End Developer',
    start: 'Dec 2023',
    end: 'Present',
    link: 'https://sovrun.org',
    id: 'work1',
  },
  {
    company: 'Getaka Labs',
    title: 'Associate Software Engineer',
    start: 'Mar 2022',
    end: 'Jan 2024',
    link: 'https://getakalabs.com',
    id: 'work2',
  },
  {
    company: 'Capitol City Baptist Church',
    title: 'Communications Specialist',
    start: 'Nov 2014',
    end: 'Mar 2022',
    link: 'https://ccbc.ph',
    id: 'work3',
  },
  {
    company: 'Freelance',
    title: 'Web Developer',
    start: '2019',
    end: 'Present',
    link: 'https://christarroja.github.io',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/christarroja',
  },
  // {
  //   label: 'Twitter',
  //   link: 'https://twitter.com/ibelick',
  // },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/chris-tarroja',
  },
  // {
  //   label: 'Instagram',
  //   link: 'https://www.instagram.com/ibelick',
  // },
]

export const EMAIL = 'christarroja@gmail.com'
