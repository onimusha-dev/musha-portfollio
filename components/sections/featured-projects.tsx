import { projects } from "@/constants";
import { Icons } from "@/components/ui/icons";

export default function FeaturedProjects() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project) => (
                <div
                    key={project.name}
                    className="group flex flex-col justify-between p-5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-accent"
                    style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}
                >
                    {/* top */}
                    <div>
                        <div className="flex items-start justify-between gap-2">
                            <p className="text-base font-bold font-mono group-hover:text-accent transition-colors duration-200">
                                {project.name}
                            </p>
                            <div className="flex items-center gap-2 shrink-0">
                                {project.wip && (
                                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 select-none">
                                        WIP
                                    </span>
                                )}
                                <span className="flex items-center gap-1 text-sm font-mono opacity-60">
                                    <Icons.Star className="w-4 h-4" /> {project.stars}
                                </span>
                            </div>
                        </div>
                        <p className="text-sm font-mono mt-2.5 leading-relaxed opacity-60">
                            {project.description}
                        </p>
                    </div>

                    {/* bottom */}
                    <div className="flex items-center justify-between mt-5">
                        {/* tags */}
                        <div className="flex flex-wrap gap-1.5">
                            {project.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="text-xs font-mono px-2.5 py-0.5 rounded-full select-none"
                                    style={{ background: "var(--c0)", color: "var(--muted)" }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* links */}
                        <div className="flex items-center gap-1 shrink-0 ml-2">
                            {/* GitHub */}
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="View on GitHub"
                                className="p-2 rounded-lg text-foreground/30 hover:text-accent hover:bg-accent/10 transition-all duration-150"
                            >
                                <Icons.GitHub className="w-4 h-4" />
                            </a>
                            {/* Live */}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="View live site"
                                    className="p-2 rounded-lg text-foreground/30 hover:text-accent hover:bg-accent/10 transition-all duration-150"
                                >
                                    <Icons.External className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
