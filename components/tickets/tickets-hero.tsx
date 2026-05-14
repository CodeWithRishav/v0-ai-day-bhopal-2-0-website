"use client"

import { FadeIn } from "@/components/motion"
import { Calendar, MapPin } from "lucide-react"
import { EVENT } from "@/lib/event"

export function TicketsHero() {
  return (
    <section className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-50" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.18),transparent_60%)]"
        aria-hidden
      />

      <div className="container relative mx-auto px-4 z-10">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary/90 mb-5">
            <span className="h-px w-6 bg-primary/60" />
            Tickets
            <span className="h-px w-6 bg-primary/60" />
          </span>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-5">
            <span className="text-foreground">Pick your </span>
            <span className="text-gradient-amber animate-amber-shimmer">pass.</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Same room, same speakers, same lunch. Choose how much swag you walk
            home with.
          </p>
        </FadeIn>

        <FadeIn
          delay={0.2}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="font-medium text-foreground/90">
              {EVENT.dateLabel}
            </span>
          </span>
          <span className="hidden sm:block text-border/80" aria-hidden>
            ·
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-medium text-foreground/90">
              {EVENT.venue.name}, {EVENT.venue.city}
            </span>
          </span>
        </FadeIn>

        <FadeIn
          delay={0.3}
          className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground"
        >
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-70 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
            </span>
            Only Builder Pass available — last few seats
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            All other passes sold out
          </span>
        </FadeIn>
      </div>
    </section>
  )
}
