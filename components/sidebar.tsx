"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react"

const routes = [
  { name: "Overview", path: "/" },
  { name: "Plan of Attack", path: "/plan-of-attack" },
  { name: "Analyses", path: "/analyses" },
  { name: "DeepDiligence", path: "/deep-diligence" },
  { name: "Model Info | SERAF", path: "/model-info-seraf" },
  { name: "GPT Agents Tips", path: "/gpt-agents-tips" },
  { name: "Unique Strategies", path: "/unique-strategies" },
  { name: "Visualization", path: "/visualization" },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const [isMobileView, setIsMobileView] = useState(false)
  const pathname = usePathname()

  // Check if we're in mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add event listener
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (isMobileView) {
      setIsOpen(false)
    }
  }, [pathname, isMobileView])

  // Add a class to the body element to adjust the layout
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("sidebar-open")
    } else {
      document.body.classList.remove("sidebar-open")
    }

    return () => {
      document.body.classList.remove("sidebar-open")
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile menu button */}
      {isMobileView && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-background text-foreground border border-border md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      )}

      {/* Desktop toggle button */}
      {!isMobileView && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`fixed top-4 ${isOpen ? "left-[260px]" : "left-4"} z-50 p-2 rounded-md bg-background text-foreground border border-border hidden md:flex items-center justify-center transition-all duration-300`}
          aria-label="Toggle sidebar"
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:fixed inset-y-0 left-0 z-40 w-64 bg-sidebar border-r border-border transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-border">
            <div className="flex flex-col">
              <span className="text-xl font-semibold">VCIC</span>
              <div className="flex items-center text-sm mt-1">
                <span className="text-muted-foreground">Aalto</span>
                <div className="h-[2px] w-6 mx-2 bg-gradient-to-r from-primary/40 to-primary/80"></div>
                <span className="text-muted-foreground">UNC</span>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1">
              {routes.map((route) => {
                const isActive = pathname === route.path
                return (
                  <li key={route.path}>
                    <Link
                      href={route.path}
                      className={isActive ? "nav-item nav-item-active" : "nav-item nav-item-inactive"}
                    >
                      {route.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="p-4 border-t border-border">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-medium">
                D
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && isMobileView && (
        <div className="fixed inset-0 bg-black/20 z-30 md:hidden" onClick={() => setIsOpen(false)} />
      )}
    </>
  )
}
