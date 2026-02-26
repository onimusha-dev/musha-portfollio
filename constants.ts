// ── Skills ────────────────────────────────────────────────── */
export const skills = [
    { name: "Next.js", image: "https://skillicons.dev/icons?i=nextjs", color: "zinc" },
    { name: "React", image: "https://skillicons.dev/icons?i=react", color: "blue" },
    { name: "TypeScript", image: "https://skillicons.dev/icons?i=ts", color: "blue" },
    { name: "Tailwind CSS", image: "https://skillicons.dev/icons?i=tailwind", color: "cyan" },
    { name: "Node.js", image: "https://skillicons.dev/icons?i=nodejs", color: "green" },
    { name: "Express.js", image: "https://skillicons.dev/icons?i=express", color: "zinc" },
    { name: "MongoDB", image: "https://skillicons.dev/icons?i=mongodb", color: "green" },
    { name: "PostgreSQL", image: "https://skillicons.dev/icons?i=postgres", color: "blue" },
    { name: "Docker", image: "https://skillicons.dev/icons?i=docker", color: "blue" },
    { name: "Kubernetes", image: "https://skillicons.dev/icons?i=kubernetes", color: "blue" },
    { name: "AWS", image: "https://skillicons.dev/icons?i=aws", color: "orange" },
    { name: "Redis", image: "https://skillicons.dev/icons?i=redis", color: "red" },
    { name: "Linux", image: "https://skillicons.dev/icons?i=linux", color: "yellow" },
    { name: "Git", image: "https://skillicons.dev/icons?i=git", color: "orange" },
]

// ── Languages ─────────────────────────────────────────────── */
export const languages = [
    { name: "C", image: "https://skillicons.dev/icons?i=c", color: "blue" },
    { name: "JavaScript", image: "https://skillicons.dev/icons?i=js", color: "yellow" },
    { name: "TypeScript", image: "https://skillicons.dev/icons?i=ts", color: "blue" },
    { name: "Python", image: "https://skillicons.dev/icons?i=py", color: "yellow" },
    { name: "Rust", image: "https://skillicons.dev/icons?i=rust", color: "orange" },
    { name: "SQL", image: "https://skillicons.dev/icons?i=postgresql", color: "blue" },
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
        handle: "@shvmmshr",
        url: "https://twitter.com/shvmmshr",
    },
    {
        platform: "LinkedIn",
        handle: "musha",
        url: "https://linkedin.com/in/musha",
    },
    {
        platform: "Discord",
        handle: "musha#0000",
        url: "https://discord.com",
    },
    {
        platform: "Email",
        handle: "musha@example.com",
        url: "mailto:musha@example.com",
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
        name: "musha-cli",
        description: "A developer CLI toolkit written in Rust. Includes scaffolding, git helpers, and one-command deployment shortcuts.",
        tags: ["Rust", "CLI", "DevOps"],
        url: "https://github.com/onimusha-dev/musha-cli",
        stars: 42,
        wip: false,
    },
    {
        name: "portfolio-v2",
        description: "This portfolio — a Next.js app with multi-scheme theming, GitHub contribution graph, and a blog engine.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        url: "https://github.com/onimusha-dev/portfolio",
        stars: 12,
        wip: false,
    },
    {
        name: "realtime-notify",
        description: "A plug-and-play real-time notification service with WebSocket support, built for scalability on top of Redis pub/sub.",
        tags: ["Node.js", "Redis", "WebSocket"],
        url: "https://github.com/onimusha-dev/realtime-notify",
        stars: 8,
        wip: true,
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
    { id: 1, src: "https://picsum.photos/seed/musha-a/600/900", title: "Abstract I", medium: "Digital", year: "2025" },
    { id: 2, src: "https://picsum.photos/seed/musha-b/800/533", title: "Landscape Study", medium: "Sketch", year: "2024" },
    { id: 3, src: "https://picsum.photos/seed/musha-c/600/750", title: "Portrait I", medium: "Digital", year: "2025" },
    { id: 4, src: "https://picsum.photos/seed/musha-d/800/600", title: "Architecture", medium: "Photo", year: "2024" },
    { id: 5, src: "https://picsum.photos/seed/musha-e/600/800", title: "Dark Study", medium: "Digital", year: "2025" },
    { id: 6, src: "https://picsum.photos/seed/musha-f/700/700", title: "Symmetry", medium: "Generative", year: "2024" },
    { id: 7, src: "https://picsum.photos/seed/musha-g/800/500", title: "Motion", medium: "Photo", year: "2025" },
    { id: 8, src: "https://picsum.photos/seed/musha-h/500/750", title: "Figures", medium: "Sketch", year: "2023" },
    { id: 9, src: "https://picsum.photos/seed/musha-i/800/600", title: "Composition", medium: "Digital", year: "2025" },
    { id: 10, src: "https://picsum.photos/seed/musha-j/600/900", title: "Shadow Play", medium: "Photo", year: "2024" },
    { id: 11, src: "https://picsum.photos/seed/musha-k/700/467", title: "Urban Texture", medium: "Mixed", year: "2023" },
    { id: 12, src: "https://picsum.photos/seed/musha-l/600/800", title: "Abstract II", medium: "Digital", year: "2024" },
];