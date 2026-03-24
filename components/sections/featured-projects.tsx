import { projects } from "@/app/constants";
import { Icons } from "@/components/ui/icons";

export default function FeaturedProjects() {
    // Show up to 4 projects
    const featuredProjects = projects.slice(0, 4);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredProjects.map((project) => (
                <div
                    key={project.name}
                    className="group flex flex-col p-5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-accent"
                    style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}
                >
                    {/* header row — name + wip + stars */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                        <h3 className="font-bold text-2xl font-mono group-hover:text-accent transition-colors duration-200">
                            {project.name}
                        </h3>
                        <div className="flex items-center gap-2 shrink-0">
                            {project.wip && (
                                <span className="text-sm font-mono px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 select-none">
                                    WIP
                                </span>
                            )}
                            <span className="flex items-center gap-1 text-sm font-mono opacity-75">
                                <Icons.Star className="w-4 h-4" /> {project.stars}
                            </span>
                        </div>
                    </div>

                    {/* tags */}
                    <div className="flex flex-wrap gap-5 mb-2.5">
                        {project.tags.map(tag => (
                            <span
                                key={tag}
                                className="text-xs font-mono px-2 py-0.5 rounded-full select-none"
                                style={{ background: "var(--c0)", color: "var(--muted)" }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* description */}
                    <p className="text-sm font-mono leading-relaxed opacity-75 mb-4 line-clamp-3 min-h-18">
                        {project.description}
                    </p>

                    {/* ── Action buttons ── */}
                    <div
                        className="flex items-center gap-2 pt-4"
                        style={{ borderTop: "1px solid var(--card-border)" }}
                    >
                        {/* GitHub */}
                        {project.repoUrl && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-mono transition-all duration-150 hover:-translate-y-px hover:text-accent hover:border-accent/40"
                                style={{
                                    background: "var(--c0)",
                                    border: "1px solid var(--card-border)",
                                    color: "var(--muted)",
                                }}
                            >
                                <Icons.GitHub className="w-4 h-4 shrink-0" />
                                GitHub
                            </a>
                        )}

                        {/* Live View */}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-mono transition-all duration-150 hover:-translate-y-px"
                                style={{
                                    background: "var(--accent)",
                                    border: "1px solid transparent",
                                    color: "var(--card)",
                                }}
                            >
                                <Icons.External className="w-4 h-4 shrink-0" />
                                Live View
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
