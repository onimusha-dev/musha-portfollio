import ImageWithPlaceholder from "@/components/ui/image-with-placeholder";
import SkillGroups from "@/components/sections/skill-badges";
import GithubCommits from "@/components/sections/github-commits";
import SidebarNav from "@/components/layout/sidebar-nav";
import ExperienceTimeline from "@/components/sections/experience-timeline";
import FeaturedProjects from "@/components/sections/featured-projects";

import { skillGroups } from "@/constants";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <div className="pb-24">

        {/* ── Banner ─────────────────────────────────────────
             Mobile : full-bleed, bleeds behind the sticky navbar
             Desktop: padded rounded card (unchanged)
        ── */}

        {/* Mobile: absolute-height hero block that pulls up behind navbar */}
        <div className="sm:hidden w-full -mt-16 relative h-72">
          <ImageWithPlaceholder
            src="/images/banner.webp"
            alt="Banner"
            fill priority
            containerClassName="w-full h-full"
            className="object-cover select-none"
            sizes="100vw"
            draggable={false}
          />
          {/* bottom fade so avatar text stays readable */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent 40%, var(--background) 100%)",
            }}
          />
        </div>

        {/* Desktop: padded, rounded card inside max-width container */}
        <div className="hidden sm:block w-full px-6 pt-6">
          <div className="max-w-5xl mx-auto h-60 bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden relative">
            <ImageWithPlaceholder
              src="/images/banner.webp"
              alt="Banner"
              fill priority
              containerClassName="w-full h-full"
              className="object-cover border select-none"
              sizes="(max-width: 1024px) 100vw, 1024px"
              draggable={false}
            />
          </div>
        </div>

        {/* ── Content area ──────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Avatar + name — peeks below banner */}
          {/* Mobile: -mt-20 to pull up from the taller full-bleed banner */}
          {/* Desktop: -mt-14 as before */}
          <div className="flex gap-4 items-end -mt-20 sm:-mt-14 pl-2">
            <div className="w-28 h-28 md:w-36 md:h-36 bg-neutral-300 dark:bg-neutral-800 rounded-full overflow-hidden border-4 border-background shrink-0 relative backdrop-blur-3xl shadow-lg">
              <ImageWithPlaceholder
                src="/images/logo.webp"
                alt="musha avatar"
                fill priority
                containerClassName="w-full h-full"
                className="object-cover select-none"
                sizes="144px"
                draggable={false}
              />
            </div>
            <div className="mb-2">
              <h1 className="text-3xl font-bold select-none leading-tight">鬼 musha</h1>
              <p className="text-sm font-mono opacity-60 cursor-text mt-0.5">
                20 · self taught · developer · artist
              </p>
            </div>
          </div>

          {/* ── Two-column layout (lg+) ─────────────────────── */}
          <div className="flex gap-10 mt-12">

            {/* Left: sticky sidebar */}
            <SidebarNav />

            {/* Right: all sections */}
            <main className="flex-1 min-w-0">

              {/* ── Bio, tags, socials ─────────────────────── */}
              <section id="hero" className="scroll-mt-24">
                <p className="text-lg font-mono opacity-70 leading-relaxed max-w-2xl">
                  I&apos;m a 20 year old self-taught developer and student who likes to make cool stuff.
                  I have a lot of experience in web development and I&apos;m always learning new things.
                  More interested in low-level programming and backend development.
                </p>

                {/* role tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  <div className="bg-red-500/10    text-red-400    rounded-full px-3.5 py-1.5 text-sm font-bold select-none cursor-pointer transition-all duration-150 hover:bg-red-500/20">Backend</div>
                  <div className="bg-green-500/10  text-green-400  rounded-full px-3.5 py-1.5 text-sm font-bold select-none cursor-pointer transition-all duration-150 hover:bg-green-500/20">Cloud Architect</div>
                  <div className="bg-blue-500/10   text-blue-400   rounded-full px-3.5 py-1.5 text-sm font-bold select-none cursor-pointer transition-all duration-150 hover:bg-blue-500/20">DevOps</div>
                  <div className="bg-yellow-500/10 text-yellow-400 rounded-full px-3.5 py-1.5 text-sm font-bold select-none cursor-pointer transition-all duration-150 hover:bg-yellow-500/20">Security</div>
                </div>
              </section>

              {/* ── GitHub Contributions ───────────────────── */}
              <section id="contributions" className="mt-14 scroll-mt-24">
                <p className="text-2xl font-bold select-none mb-4">Contributions</p>
                <GithubCommits />
              </section>

              {/* ── Experience ─────────────────────────────── */}
              <section id="experience" className="mt-14 scroll-mt-24">
                <p className="text-2xl font-bold select-none mb-5">Experience</p>
                <ExperienceTimeline />
              </section>

              {/* ── Skills (grouped) ──────────────────────── */}
              <section id="skills" className="mt-14 scroll-mt-24">
                <p className="text-2xl font-bold select-none mb-6">Skills</p>
                <SkillGroups groups={skillGroups} />
              </section>

              {/* ── Featured Projects ──────────────────────── */}
              <section id="projects" className="mt-14 scroll-mt-24">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-2xl font-bold select-none">Projects</p>
                  <a
                    href="/projects"
                    className="text-sm font-mono text-muted hover:text-accent transition-colors select-none"
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
      <Footer />
    </>
  );
}
