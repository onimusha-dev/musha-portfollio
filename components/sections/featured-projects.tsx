import Link from "next/link";
import { projects } from "@/constants";
import { Icons } from "@/components/ui/icons";

export default function FeaturedProjects() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projects.map((project) => (
                <Link
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-accent"
                    style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}
                >
                    {/* top */}
                    <div>
                        <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-bold font-mono group-hover:text-accent transition-colors duration-200">
                                {project.name}
                            </p>
                            <div className="flex items-center gap-2 shrink-0">
                                {project.wip && (
                                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 select-none">
                                        WIP
                                    </span>
                                )}
                                <span className="flex items-center gap-1 text-[11px] font-mono opacity-60">
                                    <Icons.Star className="w-3 h-3" /> {project.stars}
                                </span>
                            </div>
                        </div>
                        <p className="text-xs font-mono mt-2 leading-relaxed opacity-60">
                            {project.description}
                        </p>
                    </div>

                    {/* bottom */}
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex flex-wrap gap-1.5">
                            {project.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="text-[10px] font-mono px-2 py-0.5 rounded-full select-none"
                                    style={{ background: "var(--c0)", color: "var(--muted)" }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <span className="text-foreground/30 group-hover:text-accent transition-colors duration-200">
                            <Icons.External className="w-3.5 h-3.5" />
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
