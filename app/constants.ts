// ── Skill Groups (categorised, text-pill style) ──────────────── */
export const skillGroups = [
    {
        label: "Languages",
        items: ["C", "C++", "JavaScript", "TypeScript", "Python", "Dart", "SQL"],
    },
    {
        label: "Frontend",
        items: ["Flutter", "React", "Next.js", "shadcn/ui", "Tailwind CSS"],
    },
    {
        label: "Backend",
        items: ["Django", "Express.js", "Node.js"],
    },
    {
        label: "Database",
        items: ["MongoDB", "PostgreSQL"],
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
        name: "Chai-Chan",
        description: `
      A GPT-style AI chatbot powered by Ollama local models, featuring MongoDB-backed persistent storage, 
      user-based authentication, and secure token visualization. making it a fully-featured, self-hosted AI chat platform.
    `,
        tags: ["Node.js", "MongoDB", "React", "shadcn/ui"],
        repoUrl: "https://github.com/onimusha-dev/Chai-Chan",
        liveUrl: "",
        stars: 1,
        wip: true,
        category: "Backend",
        image: "/projects/chai-chan.webp",
    },
    {
        name: "Task Manager",
        description: `
      A task manager built with Flutter and Firebase, featuring task management, 
      user-based authentication, and real-time updates. 
      Supports multi-scheme theming, offline backup, Notification system, task sharing, and more. 
    `,
        tags: ["Flutter", "Firebase", "Dart"],
        repoUrl: "https://github.com/onimusha-dev/task-manager",
        liveUrl: "https://github.com/onimusha-dev/simple-task-manager-app",
        stars: 1,
        wip: true,
        category: "Mobile App",
        image: "/projects/any_task.webp",
    },
    {
        name: "Portfolio",
        description: `
      This personal portfolio built with Next.js showcases multi-scheme theming, 
      a live GitHub contribution graph, and a blog engine. Fully typed with TypeScript 
      and styled using Tailwind CSS for a modern, responsive UI.
    `,
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        repoUrl: "https://github.com/onimusha-dev/portfolio",
        liveUrl: "https://musha.vercel.app/",
        stars: 1,
        wip: false,
        category: "Web App",
        image: "/projects/portfolio.webp",
    },
    // {
    //     name: "SysFlow",
    //     description: `
    //   A lightweight system monitoring tool written in Go, providing real-time 
    //   CPU, memory, and network usage stats with zero external dependencies.
    //   Designed for low-overhead monitoring in containerized environments.
    // `,
    //     tags: ["Go", "Systems", "Monitoring"],
    //     repoUrl: "https://github.com/onimusha-dev/SysFlow",
    //     liveUrl: "",
    //     stars: 3,
    //     wip: false,
    //     category: "Backend",
    //     image: "/projects/sys-flow.webp",
    // }
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

/* ── Demo gallery data (replace src with real art paths later) ── */
export const GALLERY = [
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
