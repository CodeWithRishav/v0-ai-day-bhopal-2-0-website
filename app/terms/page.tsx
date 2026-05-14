import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NoiseGrain } from "@/components/noise-grain"
import { ScrollProgress } from "@/components/scroll-progress"
import { EVENT } from "@/lib/event"

export const metadata: Metadata = {
  title: "Terms & Conditions | AI Day Bhopal 2.0",
  description:
    "Terms and conditions for purchasing a pass to or attending AI Day Bhopal 2.0, organised by ML Bhopal on May 16, 2026.",
}

const LAST_UPDATED = "12 May 2026"

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <NoiseGrain />
      <ScrollProgress />
      <Navbar />

      <section className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] font-semibold text-primary">
                Legal
              </span>
              <span className="h-px flex-1 bg-border/60" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4 text-balance">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm text-muted-foreground">
              Last updated: {LAST_UPDATED}
            </p>
          </header>

          <div className="space-y-10 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                1. About these terms
              </h2>
              <p>
                These terms apply to anyone purchasing a pass to, or attending,{" "}
                {EVENT.name} — organised by ML Bhopal on {EVENT.dateLabel} at{" "}
                {EVENT.venue.name}, {EVENT.venue.city}. By buying a pass or
                showing up at the venue, you agree to what&apos;s on this page.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                2. Tickets &amp; passes
              </h2>
              <p>
                Passes are purchased per attendee and are non-transferable
                without written approval from the organisers. You may be asked
                to present a government-issued ID at the venue that matches the
                name on the pass.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                3. Refund policy
              </h2>
              <p className="text-foreground font-semibold">
                No refund of passes in any case.
              </p>
              <p>
                In the unlikely event that the event is postponed or
                rescheduled, your pass will be honoured at the new date — or,
                at the organisers&apos; discretion, you may be offered an
                alternative arrangement. Cancellations or refunds initiated by
                the attendee are never available, for any reason.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                4. Hiring process &amp; internships
              </h2>
              <p>
                As part of the experience, your data may be shared with our
                talent and hiring partners for the internship and hiring
                matchmaking process.
              </p>
              <p className="text-foreground font-semibold">
                ML Bhopal does not guarantee any internship or job offer.
              </p>
              <p>
                We only facilitate the opportunity — connecting attendees with
                participating companies. The hiring decision, including
                interviews, evaluation, offers, and timelines, sits entirely
                with the partner companies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                5. Code of conduct
              </h2>
              <p>
                Attendees agree to behave respectfully towards speakers,
                volunteers, partners, and fellow attendees. Harassment, hate
                speech, threatening behaviour, or any conduct that disrupts the
                event can result in being asked to leave the venue without a
                refund and without further notice.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                6. Photography &amp; recordings
              </h2>
              <p>
                Photos, video, and audio may be captured at the event for
                marketing, recap, and future-edition promotion. By attending,
                you consent to appearing in such material. If you&apos;d rather
                not appear, email the organisers in advance at{" "}
                <Link
                  href={`mailto:${EVENT.contact.email}`}
                  className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
                >
                  {EVENT.contact.email}
                </Link>{" "}
                and we&apos;ll do our best to keep you out of frame.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                7. Liability
              </h2>
              <p>
                ML Bhopal is not responsible for the loss of, or damage to,
                personal property at the venue. We&apos;re also not responsible
                for the outcomes of any conversations, agreements, or
                arrangements that happen between attendees and partner
                companies — those are between you and them.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                8. Updates to these terms
              </h2>
              <p>
                These terms may be updated from time to time. The &quot;last
                updated&quot; date at the top of this page will always reflect
                the latest version.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                9. Contact
              </h2>
              <p>
                Questions about these terms? Reach the organisers at{" "}
                <Link
                  href={`mailto:${EVENT.contact.email}`}
                  className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
                >
                  {EVENT.contact.email}
                </Link>{" "}
                or on WhatsApp at{" "}
                <Link
                  href={EVENT.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
                >
                  {EVENT.contact.phone}
                </Link>
                .
              </p>
            </section>
          </div>
        </article>
      </section>

      <Footer />
    </main>
  )
}
