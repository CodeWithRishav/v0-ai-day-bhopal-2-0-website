"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useMemo } from "react"
import { LogoMark } from "@/components/logo"
import { GoogleForDevelopers } from "@/components/google-for-developers"
import { Countdown } from "@/components/countdown"
import { CursorSpotlight } from "@/components/cursor-spotlight"
import { Magnetic } from "@/components/magnetic"
import { SponsorMarquee, type MarqueeItem } from "@/components/sponsor-marquee"
import { EVENT } from "@/lib/event"
import {
  sponsors,
  talentPartners,
  communityPartners,
} from "@/lib/sponsors"

/**
 * Compose a single flat list for the hero marquee:
 *   Gold sponsor(s) → Silver sponsor(s) → Talent Partners → Community Partners.
 *
 * Google for Developers already has its own "Backed by" pill in the trust
 * strip, so we don't duplicate it in the marquee.
 */
const heroMarqueeItems: MarqueeItem[] = [
  ...sponsors.gold.map((s) => ({
    name: s.name,
    logo: s.logo,
    logoLight: s.logoLight,
    url: s.url,
    // Klariqo: white lockup + black light-variant + theme-adaptive tile is
    // handled automatically by the marquee when `logoLight` is present, so
    // we don't need an explicit tileVariant here.
    tileVariant: ("light" as const),
  })),
  ...sponsors.silver.map((s) => ({
    name: s.name,
    logo: s.logo,
    logoLight: s.logoLight,
    url: s.url,
    tileVariant: "light" as const,
  })),
  ...talentPartners.map((p) => ({
    name: p.name,
    logo: p.logo,
    logoLight: p.logoLight,
    url: p.url,
    tileVariant: p.tileVariant ?? ("light" as const),
  })),
  ...communityPartners.map((p) => ({
    name: p.name,
    logo: p.logo,
    logoLight: p.logoLight,
    url: p.url,
    tileVariant: p.tileVariant ?? ("light" as const),
  })),
]

/**
 * Deterministic pseudo-random sequence so server + client render the
 * same particle positions and we don't hydrate-mismatch.
 */
function seeded(seed: number) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

export function HeroSection() {
  const particles = useMemo(() => {
    const rand = seeded(7)
    return Array.from({ length: 24 }, () => ({
      x: rand() * 100,
      delay: rand() * 6,
      duration: 12 + rand() * 10,
      scale: 0.6 + rand() * 0.8,
    }))
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Cursor-following spotlight (no-op on touch / reduced-motion) */}
      <CursorSpotlight />

      {/* Layered background */}
      <div className="absolute inset-0 bg-dot-grid opacity-60" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.18),transparent_60%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(120,60,180,0.10),transparent_60%)]"
        aria-hidden
      />

      {/* Ambient orbs — decorative only */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute -top-32 -left-20 w-[28rem] h-[28rem] rounded-full bg-primary/30 blur-[140px]"
        aria-hidden
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.35 }}
        transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
        className="absolute -bottom-32 -right-20 w-[26rem] h-[26rem] rounded-full bg-amber-500/25 blur-[140px]"
        aria-hidden
      />

      {/* Floating particles — deterministic seed → no hydration mismatch */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "-15%", opacity: [0, 0.8, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
            style={{
              left: `${p.x}%`,
              transform: `scale(${p.scale})`,
            }}
            className="absolute bottom-0 w-1 h-1 rounded-full bg-primary/70 shadow-[0_0_8px_rgba(245,158,11,0.7)]"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand chip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/60 backdrop-blur-md border border-primary/30 mb-8 shadow-[0_0_24px_rgba(245,158,11,0.08)]"
        >
          <LogoMark className="h-4 w-auto" />
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            ML Bhopal Presents
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight leading-[0.95] mb-6"
        >
          <span className="block text-foreground">AI Day</span>
          <span className="block text-gradient-amber animate-amber-shimmer">
            Bhopal {EVENT.edition}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg sm:text-2xl md:text-3xl text-foreground/90 font-medium mb-4 px-2 text-balance"
        >
          {EVENT.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[36ch] sm:max-w-xl md:max-w-2xl mx-auto mb-10 leading-relaxed px-2 text-pretty"
        >
          {EVENT.description}
        </motion.p>

        {/* Event meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-8 text-sm"
        >
          <span className="inline-flex items-center gap-2 text-foreground/80">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="font-medium">{EVENT.dateLabel}</span>
          </span>
          <span className="hidden sm:block text-border/80" aria-hidden>
            ·
          </span>
          <span className="inline-flex items-center gap-2 text-foreground/80">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-medium">
              {EVENT.venue.name}, {EVENT.venue.city}
            </span>
          </span>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-3 mb-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
            Countdown to {EVENT.dateShort}
          </span>
          <Countdown targetISO={EVENT.dateISO} />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Magnetic strength={0.35} range={80}>
            <motion.div whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] transition-shadow text-base px-8 py-6 rounded-xl"
                asChild
              >
                <Link href="/tickets">
                  Get Tickets
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </Magnetic>
          <Magnetic strength={0.25} range={70}>
            <motion.div whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-border/80 bg-card/40 text-foreground hover:bg-primary/10 hover:text-foreground hover:border-primary/50 text-base px-8 py-6 rounded-xl backdrop-blur-sm transition-colors"
                asChild
              >
                <Link href="#agenda">Explore Event</Link>
              </Button>
            </motion.div>
          </Magnetic>
        </motion.div>

        {/* Trust strip — stacks on mobile, single row from sm: up.
            Each row centers its own contents; "Backed by Google for Developers"
            always lives on its own line on mobile so the lockup never gets clipped. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mt-10 text-sm text-muted-foreground"
        >
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-y-2 sm:gap-x-6 sm:gap-y-3">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-70 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-foreground/80">
                <span className="font-semibold text-foreground">500+</span>{" "}
                Developers Joining
              </span>
            </span>
            <span className="hidden sm:block text-border/80" aria-hidden>
              |
            </span>
            <span>Guaranteed Internship Opportunities</span>
            <span className="hidden sm:block text-border/80" aria-hidden>
              |
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                Backed by
              </span>
              <GoogleForDevelopers className="h-[14px] w-auto opacity-85" />
            </span>
          </div>
        </motion.div>

        {/* Speaker preview — stacks vertically on tiny screens so the avatars
            and label never crowd each other off the edge. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-14 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <div className="flex -space-x-3">
            <div className="relative w-11 h-11 rounded-full border-2 border-background overflow-hidden ring-1 ring-primary/30">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rishiraj%20speaker-AkZ0xv3mWtc9jovIpPcFP3rfaED5op.png"
                alt="Rishiraj Acharya"
                fill
                sizes="44px"
                className="object-cover object-top"
              />
            </div>
            <div className="relative w-11 h-11 rounded-full border-2 border-background overflow-hidden ring-1 ring-primary/30">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anukriti%20speaker-q9PlIGbF1E33qMKYaxi95GEHe0AtTf.png"
                alt="Dr. Anukriti Bansal"
                fill
                sizes="44px"
                className="object-cover object-top"
              />
            </div>
            <div className="w-11 h-11 rounded-full border-2 border-background bg-primary/15 flex items-center justify-center text-xs font-semibold text-primary backdrop-blur-sm">
              +2
            </div>
          </div>
          <span className="text-sm text-muted-foreground text-center">
            <span className="text-foreground font-medium">
              Expert Speakers
            </span>{" "}
            Confirmed
          </span>
        </motion.div>

        {/* ── Sponsor / Partner marquee ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-14 -mx-4 sm:-mx-6 lg:-mx-8"
        >
          <SponsorMarquee
            items={heroMarqueeItems}
            label="Sponsors & partners"
          />
        </motion.div>
      </div>
    </section>
  )
}
