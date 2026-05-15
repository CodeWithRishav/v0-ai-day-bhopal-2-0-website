"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react"
import { FadeIn } from "@/components/motion"
import { motion } from "framer-motion"
import { Logo } from "@/components/logo"
import { GoogleForDevelopers } from "@/components/google-for-developers"
import { EVENT } from "@/lib/event"

const eventLinks = [
  { href: "#speakers", label: "Speakers" },
  { href: "#agenda", label: "Agenda" },
  { href: "#venue", label: "Venue" },
  { href: "/tickets", label: "Tickets" },
  { href: "/internship", label: "Internship" },
  { href: "#sponsors", label: "Sponsor us" },
]

const communityLinks = [
  { href: EVENT.links.parent, label: "ML Bhopal", external: true },
  { href: EVENT.links.commudle, label: "Commudle", external: true },
  { href: EVENT.links.github, label: "GitHub", external: true },
]

const legalLinks = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
]

const socialLinks = [
  { href: EVENT.links.twitter, icon: Twitter, label: "Twitter" },
  { href: EVENT.links.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: EVENT.links.instagram, icon: Instagram, label: "Instagram" },
  { href: EVENT.links.youtube, icon: Youtube, label: "YouTube" },
  { href: EVENT.links.github, icon: Github, label: "GitHub" },
]

export function Footer() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const resolveHref = (href: string) =>
    href.startsWith("#") && !isHome ? `/${href}` : href

  return (
    <footer className="relative border-t border-border/80 mt-12">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeIn>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr_1.1fr]">
            {/* Brand block */}
            <div>
              <Link href="/" className="inline-block mb-4">
                <Logo />
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-5">
                Central India&apos;s biggest AI builder event — organized by ML
                Bhopal, supported by Google for Developers.
              </p>

              <Link
                href={EVENT.links.parent}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Visit ML Bhopal community
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Event */}
            <nav aria-label="Event">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 mb-4">
                Event
              </h3>
              <ul className="space-y-2.5">
                {eventLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={resolveHref(link.href)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Community */}
            <nav aria-label="Community">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 mb-4">
                Community
              </h3>
              <ul className="space-y-2.5">
                {communityLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                      {link.external && (
                        <ArrowUpRight className="w-3 h-3 opacity-60" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Legal */}
            <nav aria-label="Legal">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 mb-4">
                Legal
              </h3>
              <ul className="space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 mb-4">
                Contact
              </h3>
              <ul className="space-y-2.5 mb-5">
                <li>
                  <Link
                    href={`mailto:${EVENT.contact.email}`}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {EVENT.contact.email}
                  </Link>
                </li>
                <li>
                  <Link
                    href={EVENT.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {EVENT.contact.phone}
                  </Link>
                </li>
              </ul>

              <div className="flex items-center gap-2">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-lg bg-secondary/60 border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-colors"
                    aria-label={s.label}
                  >
                    <s.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} ML Bhopal · AI Day Bhopal 2.0 ·
              All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground/70">
                Backed by
              </span>
              <GoogleForDevelopers className="h-5 w-auto opacity-85" />
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
