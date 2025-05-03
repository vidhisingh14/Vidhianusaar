import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import StarBackground from "@/components/star-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vidhianusaar - Technical Writer, Designer & Frontend Developer",
  description:
    "Portfolio of Vidhianusaar, showcasing technical writing, design work, and frontend development projects.",
    generator: 'vidhi'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <StarBackground />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
