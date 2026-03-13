// ── Skill Groups (categorised, text-pill style) ──────────────── */
export const skillGroups = [
    {
        label: "Languages",
        items: ["C", "C++", "JavaScript", "TypeScript", "Dart", "SQL"],
    },
    {
        label: "Frontend",
        items: ["Flutter", "React", "Next.js", "shadcn/ui", "Tailwind CSS"],
    },
    {
        label: "Backend",
        items: ["Express.js", "Node.js"],
    },
    {
        label: "Database",
        items: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma"],
    },
    {
        label: "Tools & Infra",
        items: ["Docker", "Git", "Linux", "Postman"],
    },
]

// ── Social / Connection links ─────────────────────────────── */
export const socials = [
    {
        platform: "GitHub",
        handle: "@onimusha-dev",
        url: "https://github.com/onimusha-dev",
    },
    {
        platform: "Twitter",
        handle: "@Onimusha_Dev",
        url: "https://twitter.com/Onimusha_Dev",
    },
    {
        platform: "LinkedIn",
        handle: "oni-musha-a70459360",
        url: "https://www.linkedin.com/in/oni-musha-a70459360",
    },
    {
        platform: "Discord",
        handle: "onimusha.dev",
        url: "https://discord.com/users/1302743050518265969",
    },
    {
        platform: "Email",
        handle: "musaddik.dev@gmail.com",
        url: "mailto:musaddik.dev@gmail.com",
    },
]

// ── Experience ────────────────────────────────────────────── */
export const experience = [
    {
        role: "Software Developer Intern",
        company: "Neocap",
        location: "Remote",
        start: "Sep 2025",
        end: "Dec 2025",
        description: `Developed and maintained full-stack features using Node.js and React.js, enhancing team productivity and user experience. Designed and implemented an internal dashboard to streamline team management, improving operational efficiency.`,
        tags: ["React.js", "Node.js", "shadcn/ui", "Tailwind CSS"],
    }
];

// ── Featured Projects ─────────────────────────────────────── */
export const projects = [
    {
        name: "Zerra",
        description: `
      A Twitter clone monorepo built with MERN stack, Prisma, and Next.js. 
      Focuses on scalable backend architecture with clean OOP principles.
    `,
        tags: ["Next.js", "Prisma", "MERN", "OOP"],
        repoUrl: "https://github.com/onimusha-dev/Zerra",
        liveUrl: "https://zerra-nine.vercel.app/",
        stars: 1,
        wip: true,
        category: "Web App",
        image: "/projects/zerra.png",
    },
    {
        name: "Ascend",
        description: `
        A Flutter & Firebase task manager with real-time updates, 
        offline backup, and multi-scheme theming for a seamless experience.
    `,
        tags: ["Flutter", "Firebase", "Dart"],
        repoUrl: "https://github.com/onimusha-dev/ascend-mobile",
        liveUrl: "https://github.com/onimusha-dev/ascend-mobile/releases/tag/v1.0.0-beta.1",
        stars: 1,
        wip: true,
        category: "Mobile App",
        image: "/projects/ascend.png",
    },
    {
        name: "Chai-Chan",
        description: `
      A local AI chatbot powered by Ollama with MongoDB storage and 
      user authentication, creating a secure, self-hosted AI chat platform.
    `,
        tags: ["Node", "MongoDB", "React", "shadcn"],
        repoUrl: "https://github.com/onimusha-dev/Chai-Chan",
        liveUrl: "",
        stars: 1,
        wip: false,
        category: "Web App",
        image: "/projects/chai-chan.webp",
    },
    {
        name: "Portfolio",
        description: `
      This personal portfolio built with Next.js showcases multi-scheme theming, 
      a live GitHub contribution graph, and a blog engine. Fully typed with TypeScript 
      and styled using Tailwind CSS for a modern, responsive UI.
    `,
        tags: ["Next.js", "TypeScript", "Tailwind"],
        repoUrl: "https://github.com/onimusha-dev/musha-portfollio",
        liveUrl: "https://musha.vercel.app/",
        stars: 1,
        wip: false,
        category: "Web App",
        image: "/projects/portfolio.webp",
    },
    {
        name: "Vercel Clone",
        description: `
      My oldest project where I tried to recreate the Vercel landing page 
      to practice modern frontend layouts and design principles.
    `,
        tags: ["React", "TypeScript", "Netlify"],
        repoUrl: "https://github.com/onimusha-dev/vercel-clone",
        liveUrl: "https://vercel-clone-by-miku.netlify.app/",
        stars: 1,
        wip: false,
        category: "Website",
        image: "/projects/vercel-clone.png",
    },
];

// ── Education ─────────────────────────────────────────────── */
export const education = [
    {
        degree: "BCA",
        school: "",
        location: "India",
        start: "2025",
        end: "2028",
        current: true,
    },
]

// ── Quotes (cycling) ─────────────────────────────────────── */
export const QUOTES = [
    { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
    { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
    { text: "Truth can only be found in one place: the code.", author: "Robert C. Martin" },
];

/* ── Demo gallery data (replace src with real art paths later) ── */
export const GALLERY = [
    {
        src: "/art/miku_chan.jpg",
        title: "Miku Chan",
        medium: "Digital Art",
        year: "2026",
    },
    {
        src: "/art/golden_elf_sketch.webp",
        title: "Golden Elf Sketch",
        medium: "Digital Art",
        year: "2026",
    },
    {
        src: "/art/nazuna_chan.png",
        title: "Nazuna Chan",
        medium: "Digital Art",
        year: "2026",
    },
    {
        src: "/art/sleepy_girl.webp",
        title: "Sleepy Girl",
        medium: "Digital Art",
        year: "2026",
    },
    {
        src: "/art/Silent_Watcher_Behind_the_Mask.png",
        title: "Silent Watcher Behind the Mask",
        medium: "Digital Art",
        year: "2026",
    },
    {
        src: "/art/girl.png",
        title: "A Girl",
        medium: "Photography",
        year: "2026",
    },
    {
        src: "/art/image.png",
        title: "image",
        medium: "Digital Art",
        year: "2026",
    },
    {
        src: "https://i.pinimg.com/736x/ac/2b/53/ac2b5393d88d00d823b362ba5050e882.jpg",
        title: "Cat Girl",
        medium: "Digital Art",
        year: "2026",
    },
    {
        src: "https://i.pinimg.com/1200x/b5/17/55/b51755ce08aa1dbf5b834710ce56f855.jpg",
        title: "Cat Girl",
        medium: "Digital Art",
        year: "2026",
    }
]
