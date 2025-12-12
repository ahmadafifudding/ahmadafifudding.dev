import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import type { ReactNode } from "react"
import { Navbar } from "@/components/navbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ahmad Afifuddin | Portfolio",
  description: "I am a software engineer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-dvh w-dvw overflow-hidden bg-[url(/images/wallpaper.png) bg-center bg-cover bg-no-repeat antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
