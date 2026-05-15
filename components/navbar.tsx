"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Logo } from "@/components/logo"
import { Magnetic } from "@/components/magnetic"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { hash: "#speakers", label: "Speakers" },
  { hash: "#agenda", label: "Agenda" },
  { hash: "#showcase", label: "Showcase" },
  { hash: "#venue", label: "Venue" },
  { hash: "#sponsors", label: "Sponsors" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  // From any sub-route (e.g. /tickets), hash links must point back to "/#…".
  const hashHref = (hash: string) => (isHome ? hash : `/${hash}`)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-background/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="ML Bhopal — home"
            >
              <Logo />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.hash}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + index * 0.05, duration: 0.3 }}
              >
                <Link
                  href={hashHref(link.hash)}
                  className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {link.label}
                  <span className="absolute left-3 right-3 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.05 + navLinks.length * 0.05,
                duration: 0.3,
              }}
            >
              <Link
                href="/internship"
                className={`relative px-3 py-2 text-sm font-medium transition-colors group ${
                  pathname === "/internship"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Internship
                <span className="absolute left-3 right-3 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.3 }}
            >
              <ThemeToggle />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                asChild
              >
                <Link href={hashHref("#sponsors")}>Sponsor us</Link>
              </Button>
            </motion.div>
            <Magnetic strength={0.3} range={60}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_30px_rgba(245,158,11,0.45)] transition-shadow"
                  asChild
                >
                  <Link href="/tickets">Get Tickets</Link>
                </Button>
              </motion.div>
            </Magnetic>
          </div>

          {/* Mobile actions: theme toggle + menu */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="text-foreground p-2 rounded-lg hover:bg-secondary/60 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden border-t border-border/60"
            >
              <div className="flex flex-col gap-1 py-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.hash}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={hashHref(link.hash)}
                      className="block py-3 px-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="/internship"
                  className="block py-3 px-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Internship
                </Link>
                <div className="grid grid-cols-2 gap-2 pt-3 mt-2 border-t border-border/60">
                  <Button
                    variant="outline"
                    className="border-border bg-card/40 text-foreground hover:bg-primary/10 hover:text-foreground hover:border-primary/50 transition-colors"
                    asChild
                  >
                    <Link
                      href={hashHref("#sponsors")}
                      onClick={() => setIsOpen(false)}
                    >
                      Sponsor us
                    </Link>
                  </Button>
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                    asChild
                  >
                    <Link href="/tickets" onClick={() => setIsOpen(false)}>
                      Get Tickets
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
