"use client"

import { Mic2, Wrench, Rocket, Users, Briefcase, ArrowRight } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

type Pillar = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  accent: string
  gradient: string
}

const pillars: Pillar[] = [
  {
    icon: Mic2,
    title: "Talks worth your time",
    description:
      "From people writing AI in production. Two GDEs confirmed, two more reveals incoming. No 'AI is the future' nonsense — what works, what doesn't, what's next.",
    accent: "var(--g-blue)",
    gradient: "from-blue-500/10 to-transparent",
  },
  {
    icon: Wrench,
    title: "Workshops you'll actually use",
    description:
      "Open your laptop, leave with code. GenAI, LLMs, agents, cloud — pick your poison. We bring the WiFi, the API keys, and the people who know what they're doing.",
    accent: "var(--g-yellow)",
    gradient: "from-yellow-500/10 to-transparent",
  },
  {
    icon: Rocket,
    title: "AI-Thon Showcase",
    description:
      "Demo your build to peers, recruiters, and a panel that will tell you the truth. Best builds get on the wall — and offers.",
    accent: "var(--g-red)",
    gradient: "from-red-500/10 to-transparent",
  },
  {
    icon: Users,
    title: "Find your people",
    description:
      "500 builders, 9 institutes, recruiters from Bangalore. The Bhopal AI scene compressed into one day. Bring stickers.",
    accent: "var(--g-green)",
    gradient: "from-green-500/10 to-transparent",
  },
]

export function ExpectSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary/90 mb-5">
            <span className="h-px w-6 bg-primary/60" />
            What to expect
            <span className="h-px w-6 bg-primary/60" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
            A day made for shipping.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four things happen in this room on May 16. All of them are worth
            your train ticket.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          staggerDelay={0.08}
        >
          {pillars.map((p, i) => (
            <StaggerItem key={p.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative h-full p-6 rounded-2xl bg-card/70 border border-border/80 backdrop-blur-sm overflow-hidden transition-colors duration-300 hover:border-[color-mix(in_srgb,var(--accent-color)_50%,transparent)]"
                style={
                  {
                    "--accent-color": p.accent,
                  } as React.CSSProperties
                }
              >
                {/* accent corner glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  aria-hidden
                />

                {/* numeric eyebrow */}
                <div className="relative flex items-center justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: `color-mix(in srgb, ${p.accent} 14%, transparent)`,
                      boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${p.accent} 30%, transparent)`,
                    }}
                  >
                    <p.icon
                      className="w-5 h-5"
                      style={{ color: p.accent }}
                    />
                  </div>
                  <span
                    className="font-mono text-xs uppercase tracking-wider text-muted-foreground/70"
                  >
                    0{i + 1} / 04
                  </span>
                </div>

                <h3 className="relative text-lg font-semibold text-foreground mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>

                {/* underline accent */}
                <div
                  className="absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
                  style={{ background: p.accent }}
                  aria-hidden
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Internship callout strip */}
        <FadeIn delay={0.3}>
          <div className="relative mt-8 p-5 sm:p-6 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/15 via-amber-500/10 to-primary/15 overflow-hidden">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(245,158,11,0.18),transparent_60%)]"
              aria-hidden
            />
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                      Guaranteed
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                      Internship Opportunities
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-foreground">
                    Every attendee gets in front of a hiring team.
                  </h4>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    We&apos;re partnered with the companies and startups recruiting
                    Central India this year. Internship intros happen on the
                    floor — guaranteed.
                  </p>
                </div>
              </div>
              <a
                href="#tickets"
                className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Apply with a ticket
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
