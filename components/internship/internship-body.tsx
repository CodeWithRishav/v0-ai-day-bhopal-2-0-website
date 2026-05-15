"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Briefcase, Globe, ExternalLink, Copy, Check } from "lucide-react"
import { FadeIn } from "@/components/motion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { EVENT } from "@/lib/event"
import { INTERNSHIP_FORM_URL } from "@/lib/internship"
import { talentPartners } from "@/lib/sponsors"
import type { Partner } from "@/lib/sponsors"
import { cn } from "@/lib/utils"

function PartnerDetailCard({ partner }: { partner: Partner }) {
  const hasThemedLogo = Boolean(partner.logoLight)
  const tileBg = hasThemedLogo
    ? "bg-white ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/10"
    : partner.tileVariant === "dark"
      ? "bg-neutral-900 ring-1 ring-white/10"
      : "bg-white ring-1 ring-black/5"

  const renderLogo = (cls: string) => {
    if (!partner.logo) return null
    if (!hasThemedLogo) {
      return (
        <Image src={partner.logo} alt={partner.name} fill className={cls} />
      )
    }
    return (
      <>
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className={cn(cls, "hidden dark:block")}
        />
        <Image
          src={partner.logoLight!}
          alt=""
          aria-hidden
          fill
          className={cn(cls, "block dark:hidden")}
        />
      </>
    )
  }

  return (
    <Card
      className={cn(
        "relative flex h-full min-h-[280px] flex-col overflow-hidden border-border/80 bg-card/70 backdrop-blur-sm transition-colors hover:border-primary/35 sm:min-h-[300px]",
      )}
    >
      <CardHeader className="flex flex-1 flex-col gap-3 space-y-0 pb-2">
        <div className="flex flex-row items-start gap-4">
          {partner.logo && (
            <div
              className={cn(
                "relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl p-2",
                tileBg,
              )}
            >
              {renderLogo("object-contain")}
            </div>
          )}
          <div className="min-w-0 flex-1 pt-0.5">
            <CardTitle className="text-lg leading-tight">{partner.name}</CardTitle>
          </div>
        </div>
        {partner.description && (
          <CardDescription className="line-clamp-5 flex-1 text-sm leading-relaxed">
            {partner.description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="mt-auto border-t border-border/50 pt-4">
        {partner.url ? (
          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-border/70 bg-background/60 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <Globe className="h-4 w-4 shrink-0 text-primary" />
            Website
          </a>
        ) : (
          <p className="text-center text-sm text-muted-foreground">—</p>
        )}
      </CardContent>
    </Card>
  )
}

export function InternshipBody() {
  const [copied, setCopied] = useState(false)

  const handleCopyFormLink = async () => {
    try {
      await navigator.clipboard.writeText(INTERNSHIP_FORM_URL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-14">
        <div className="bg-dot-grid absolute inset-0 opacity-50" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.18),transparent_60%)]"
          aria-hidden
        />

        <div className="container relative z-10 mx-auto px-4">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary/90">
              <span className="h-px w-6 bg-primary/60" />
              Internships
              <span className="h-px w-6 bg-primary/60" />
            </span>

            <h1 className="mb-5 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="text-foreground">Build with AI — </span>
              <span className="text-gradient-amber animate-amber-shimmer">
                land the role.
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
              Our talent partners are hiring at {EVENT.dateShort}. Meet them on
              the floor at {EVENT.venue.name}, then tell them who you are in one
              short form — powered by{" "}
              <a
                href="https://polyform.to"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Polyform
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative px-4 pb-16 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.08),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl">
          <FadeIn className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
              Talent{" "}
              <span className="text-gradient-amber">partners</span>
            </h2>
            <p className="mx-auto inline-flex max-w-2xl flex-wrap items-center justify-center gap-2 text-base text-muted-foreground">
              <Briefcase className="h-4 w-4 text-primary" />
              Organizations bringing internships and opportunities to AI Day
              Bhopal — each card links to their website.
            </p>
          </FadeIn>

          <div className="grid auto-rows-[minmax(0,1fr)] gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {talentPartners.map((partner, index) => (
              <FadeIn
                key={`${partner.name}-${index}`}
                delay={index * 0.04}
                className="h-full min-h-0"
              >
                <PartnerDetailCard partner={partner} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <FadeIn className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
              Apply on{" "}
              <span className="text-gradient-amber">Polyform</span>
            </h2>
            <p className="text-muted-foreground">
              Open the Polyform link in a new tab to apply. Copy the URL if you
              want to share it or open it elsewhere.
            </p>
          </FadeIn>

          <FadeIn delay={0.08} className="space-y-5">
            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Button
                asChild
                className="bg-primary font-semibold text-primary-foreground shadow-[0_0_24px_rgba(245,158,11,0.28)] hover:bg-primary/90"
              >
                <a
                  href={INTERNSHIP_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open form in new tab
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/#sponsors">Back to sponsors</Link>
              </Button>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border/80 bg-background/40 px-4 py-4 shadow-[0_0_40px_rgba(0,0,0,0.12)] dark:shadow-[0_0_50px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <a
                  href={INTERNSHIP_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 flex-1 break-all text-left text-sm font-mono text-primary underline-offset-2 hover:underline sm:text-base"
                >
                  {INTERNSHIP_FORM_URL}
                </a>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="shrink-0 gap-2 self-stretch sm:self-auto"
                  onClick={handleCopyFormLink}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" aria-hidden />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" aria-hidden />
                      Copy link
                    </>
                  )}
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
