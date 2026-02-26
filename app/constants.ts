// ── Skill Groups (categorised, text-pill style) ──────────────── */
export const skillGroups = [
    {
        label: "Languages",
        items: ["TypeScript", "JavaScript", "Python", "C", "Rust", "SQL"],
    },
    {
        label: "Frameworks",
        items: ["React", "Next.js", "React Native", "Expo", "Express.js", "Hono"],
    },
    {
        label: "Tools & Infra",
        items: ["Docker", "Kubernetes", "AWS", "PostgreSQL", "Redis", "MongoDB", "Git", "Linux", "n8n"],
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
        role: "Software Engineer Intern",
        company: "Acme Corp",
        location: "Remote",
        start: "Jun 2024",
        end: null,           // null = current/present
        description: "Building and maintaining full-stack product features using Next.js and Node.js. Shipped a real-time notification system now serving 50k+ users.",
        tags: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    },
    {
        role: "Backend Developer Intern",
        company: "TechStartup",
        location: "Remote",
        start: "Jan 2024",
        end: "May 2024",
        description: "Designed and documented REST APIs, optimised slow database queries, and built caching layers that cut average response time by 40%.",
        tags: ["Express.js", "MongoDB", "Docker"],
    },
    {
        role: "Open Source Contributor",
        company: "Various",
        location: "GitHub",
        start: "2023",
        end: "Present",
        description: "Regular contributions to developer tooling projects. Merged PRs in ecosystem packages reaching 1M+ weekly downloads.",
        tags: ["TypeScript", "Rust", "Open Source"],
    },
]

// ── Featured Projects ─────────────────────────────────────── */
export const projects = [

    {
        name: "Chai-Chan",
        description: "A ai chat bot with multi-scheme theming, GitHub contribution graph, and a blog engine.",
        tags: ["Node.js", "Redis", "WebSocket"],
        repoUrl: "https://github.com/onimusha-dev/Chai-Chan",
        liveUrl: "",
        stars: 1,
        wip: true,
        category: "Backend",
        image: "/projects/chai-chan.webp",
    },
    {
        name: "portfolio",
        description: "This portfolio — a Next.js app with multi-scheme theming, GitHub contribution graph, and a blog engine.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        repoUrl: "https://github.com/onimusha-dev/portfolio",
        liveUrl: "https://musha.vercel.app/",
        stars: 1,
        wip: false,
        category: "Web App",
        image: "/projects/portfollio.webp",
    },
]

// ── Education ─────────────────────────────────────────────── */
export const education = [
    {
        degree: "B.Tech Computer Science",
        school: "Demo University",
        location: "India",
        start: "2022",
        end: "2026",
        current: true,
    },
]

/* ── Demo gallery data (replace src with real art paths later) ── */
export const GALLERY = [
    {
        src: "/art/sleepy_girl.webp",
        title: "Sleepy Girl",
        medium: "Digital Art",
        year: "2026",
    },
    {
        src: "/art/golden_elf_sketch.webp",
        title: "Golden Elf Sketch",
        medium: "Digital Art",
        year: "2026",
    }
]
