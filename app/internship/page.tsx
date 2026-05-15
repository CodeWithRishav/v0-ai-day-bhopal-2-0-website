import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { NoiseGrain } from "@/components/noise-grain"
import { Footer } from "@/components/footer"
import { InternshipBody } from "@/components/internship/internship-body"

export const metadata: Metadata = {
  title: "Internships & Opportunities | AI Day Bhopal 2.0",
  description:
    "Meet our talent partners hiring at AI Day Bhopal 2.0 — and apply for internships & opportunities via Polyform.",
  openGraph: {
    title: "Internships & Opportunities | AI Day Bhopal 2.0",
    description:
      "Talent partners, links, and the Polyform application for AI Day Bhopal 2.0.",
    url: "https://aiday.mlbhopal.tech/internship",
    type: "website",
  },
  alternates: {
    canonical: "/internship",
  },
}

export default function InternshipPage() {
  return (
    <main className="min-h-screen">
      <NoiseGrain />
      <ScrollProgress />
      <Navbar />
      <InternshipBody />
      <Footer />
    </main>
  )
}
