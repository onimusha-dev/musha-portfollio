import Link from "next/link";
import { socials } from "@/constants";
import { Icons } from "@/components/ui/icons";

export default function SocialLinks() {
    return (
        <div className="flex flex-wrap gap-2 mt-4">
            {socials.map(({ platform, handle, url }) => {
                const Icon = Icons[platform as keyof typeof Icons];
                return (
                    <Link
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group flex items-center gap-2 px-3 py-1.5 rounded-xl
                            bg-card border border-card-border
                            text-foreground/60 hover:text-foreground
                            hover:border-accent hover:bg-accent/5
                            transition-all duration-200 hover:-translate-y-px
                            text-xs font-mono select-none
                        "
                    >
                        <span className="text-foreground/40 group-hover:text-accent transition-colors duration-200 flex items-center justify-center">
                            {Icon ? <Icon className="w-4 h-4" /> : null}
                        </span>
                        {handle}
                    </Link>
                );
            })}
        </div>
    );
}
