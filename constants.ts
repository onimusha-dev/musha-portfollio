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
    { id: 1, src: "https://i.pinimg.com/736x/0b/a2/9d/0ba29d40e5a35c036ce14e765fc6dde8.jpg", title: "Abstract I", medium: "Digital", year: "2025" },
    { id: 2, src: "https://i.pinimg.com/736x/06/5c/ac/065cacf99f4c19c42eb2b622d252fb25.jpg", title: "Landscape Study", medium: "Sketch", year: "2024" },
    { id: 3, src: "https://i.pinimg.com/1200x/8c/1d/24/8c1d246dc322b35302cc1cd44e15a79c.jpg", title: "Portrait I", medium: "Digital", year: "2025" },
    { id: 4, src: "https://i.pinimg.com/736x/bc/56/f2/bc56f25a6c7a99c9a1bbb4cd8f0629f4.jpg", title: "Architecture", medium: "Photo", year: "2024" },
    { id: 5, src: "https://i.pinimg.com/736x/2a/62/49/2a624911a25ad63c4e8e18d66c582b07.jpg", title: "Pimon", medium: "Photo", year: "2025" },

];