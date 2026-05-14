import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { NoiseGrain } from "@/components/noise-grain"
import { Footer } from "@/components/footer"
import { TicketsHero } from "@/components/tickets/tickets-hero"
import { TicketCards } from "@/components/tickets/ticket-cards"
import { TicketFaq } from "@/components/tickets/ticket-faq"

export const metadata: Metadata = {
  title: "Get Tickets | AI Day Bhopal 2.0",
  description:
    "Almost every pass is sold out. Grab the Builder Pass — the last one open at ₹299 — and secure your seat at Central India's biggest AI Builder event.",
}

export default function TicketsPage() {
  return (
    <main className="min-h-screen">
      <NoiseGrain />
      <ScrollProgress />
      <Navbar />
      <TicketsHero />
      <TicketCards />
      <TicketFaq />
      <Footer />
    </main>
  )
}
