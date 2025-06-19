import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/navigation"
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Joseph Mawulorm Mensah - Data Analyst & AI Developer",
  description:
    "Portfolio of Joseph Mawulorm Mensah - Data Analyst, AI Developer, and Backend Engineer specializing in renewable energy solutions and machine learning.",
  keywords: "Data Analyst, AI Developer, Machine Learning, Python, JavaScript, Renewable Energy, Ghana",
  authors: [{ name: "Joseph Mawulorm Mensah" }],
  openGraph: {
    title: "Joseph Mawulorm Mensah - Data Analyst & AI Developer",
    description: "Portfolio showcasing expertise in data analysis, AI development, and renewable energy solutions.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
