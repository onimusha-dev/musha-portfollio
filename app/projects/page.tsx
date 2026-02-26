export default function ProjectsPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 pt-12 pb-24">
            <h1 className="text-4xl font-bold mb-2">Projects</h1>
            <p className="text-sm font-mono opacity-50 mb-10">thoughts, write-ups & dev notes</p>

            {/* placeholder — replace with real posts */}
            <div className="flex flex-col gap-4">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div
                        key={i}
                        className="border border-foreground/10 rounded-2xl p-5 bg-foreground/3 animate-pulse"
                    >
                        <div className="h-4 w-1/3 bg-foreground/10 rounded mb-3" />
                        <div className="h-3 w-2/3 bg-foreground/8 rounded mb-2" />
                        <div className="h-3 w-1/2 bg-foreground/8 rounded" />
                    </div>
                ))}
            </div>

            <p className="text-center text-sm font-mono opacity-30 mt-20">
                no projects yet — check back soon
            </p>
        </main>
    );
}
