interface SkillBadgeProps {
    name: string;
    image: string;
    color?: string; // kept for compat — theme accent is used for hover
}

const SkillBadge = ({ name, image }: SkillBadgeProps) => (
    <div
        className="
            group flex items-center gap-2.5 px-2.5 py-2 rounded-xl
            cursor-default select-none
            bg-card border border-card-border
            transition-all duration-200
            hover:-translate-y-px hover:border-accent hover:bg-accent/5
            hover:cursor-pointer
        "
    >
        {/* icon */}
        <div className="w-6 h-6 shrink-0 flex items-center justify-center bg-foreground/5 animate-pulse rounded-md">
            <img
                src={image}
                alt={name}
                width={24}
                height={24}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-contain"
            />
        </div>

        {/* name */}
        <span className="text-xs font-mono whitespace-nowrap text-foreground/70 group-hover:text-foreground transition-colors duration-200">
            {name}
        </span>
    </div>
);

const SkillBadges = ({ skills }: { skills: SkillBadgeProps[] }) => (
    <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
            <SkillBadge key={skill.name} {...skill} />
        ))}
    </div>
);

export default SkillBadges;