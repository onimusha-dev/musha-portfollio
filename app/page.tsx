import ImageWithPlaceholder from "@/components/ui/image-with-placeholder";
import SkillBadges from "@/components/sections/skill-badges";
import GithubCommits from "@/components/sections/github-commits";
import SidebarNav from "@/components/layout/sidebar-nav";
import ExperienceTimeline from "@/components/sections/experience-timeline";
import FeaturedProjects from "@/components/sections/featured-projects";

import { languages, skills } from "@/constants";

export default function Home() {
  return (
    <div className="pb-24">

      {/* ── Full-width Banner ──────────────────────────────── */}
      <div className="w-full px-6 pt-6">
        <div className="max-w-5xl mx-auto h-52 bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden relative">
          <ImageWithPlaceholder
            src="/images/banner.png"
            alt="Banner"
            fill priority
            containerClassName="w-full h-full"
            className="object-cover border select-none"
            sizes="(max-width: 1024px) 100vw, 1024px"
            draggable={false}
          // onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </div>

      {/* ── Content area ──────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6">

        {/* Avatar + name — peeks below banner */}
        <div className="flex gap-4 items-end -mt-12 pl-2">
          <div className="w-32 h-32 bg-neutral-300 dark:bg-neutral-800 rounded-full overflow-hidden border-4 border-background shrink-0 relative backdrop-blur-3xl">
            <ImageWithPlaceholder
              src="/images/logo.png"
              alt="musha avatar"
              fill priority
              containerClassName="w-full h-full"
              className="object-cover select-none"
              sizes="128px"
              draggable={false}
            />
          </div>
          <div className="mb-1">
            <h1 className="text-2xl font-bold select-none leading-tight">鬼 musha</h1>
            <p className="text-sm font-mono opacity-60 select-none">
              20 · self taught · developer · artist
            </p>
          </div>
        </div>

        {/* ── Two-column layout (lg+) ─────────────────────── */}
        <div className="flex gap-10 mt-10">

          {/* Left: sticky sidebar */}
          <SidebarNav />

          {/* Right: all sections */}
          <main className="flex-1 min-w-0">

            {/* ── Bio, tags, socials ─────────────────────── */}
            <section id="hero" className="scroll-mt-24">
              <p className="text-base font-mono opacity-70 leading-relaxed max-w-2xl">
                I&apos;m a 20 year old self-taught developer and student who likes to make cool stuff.
                I have a lot of experience in web development and I&apos;m always learning new things.
                More interested in low-level programming and backend development.
              </p>

              {/* role tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="bg-red-500/10    text-red-400    rounded-full px-3 py-1 text-xs font-bold select-none cursor-pointer">Backend</div>
                <div className="bg-green-500/10  text-green-400  rounded-full px-3 py-1 text-xs font-bold select-none cursor-pointer">Cloud Architect</div>
                <div className="bg-blue-500/10   text-blue-400   rounded-full px-3 py-1 text-xs font-bold select-none cursor-pointer">DevOps</div>
                <div className="bg-yellow-500/10 text-yellow-400 rounded-full px-3 py-1 text-xs font-bold select-none cursor-pointer">Security</div>
              </div>

              {/* social / connection links */}
              {/* <SocialLinks /> */}
            </section>

            {/* ── GitHub Contributions ───────────────────── */}
            <section id="contributions" className="mt-12 scroll-mt-24">
              <p className="text-xl font-bold select-none mb-3">Contributions</p>
              <GithubCommits />
            </section>

            {/* ── Experience ─────────────────────────────── */}
            <section id="experience" className="mt-12 scroll-mt-24">
              <p className="text-xl font-bold select-none mb-4">Experience</p>
              <ExperienceTimeline />
            </section>

            {/* ── Skills ────────────────────────────────── */}
            <section id="skills" className="mt-12 scroll-mt-24">
              <p className="text-xl font-bold select-none mb-3">Skills</p>
              <SkillBadges skills={skills} />
            </section>

            {/* ── Languages ─────────────────────────────── */}
            <section id="languages" className="mt-10 scroll-mt-24">
              <p className="text-xl font-bold select-none mb-3">Languages</p>
              <SkillBadges skills={languages} />
            </section>

            {/* ── Featured Projects ──────────────────────── */}
            <section id="projects" className="mt-12 scroll-mt-24">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xl font-bold select-none">Projects</p>
                <a
                  href="/projects"
                  className="text-xs font-mono text-muted hover:text-accent transition-colors select-none"
                >
                  view all →
                </a>
              </div>
              <FeaturedProjects />
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
