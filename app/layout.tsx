import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VCIC",
  description: "Ultimate Platform for Agentic Due Diligence",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Sidebar />
        <main className="transition-all duration-300 ease-in-out ml-0 md:sidebar-adjusted-margin">{children}</main>
      </body>
    </html>
  )
}
