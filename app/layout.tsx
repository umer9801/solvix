import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Syne } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#00FFFF',
}

export const metadata: Metadata = {
  title: 'Solvix Core - Premium Tech Solutions',
  description: 'Next-generation technology solutions including AI, automation, web development, and e-commerce platforms for your business.',
  generator: 'Solvix Core',
  keywords: ['AI Solutions', 'Web Development', 'Automation', 'Shopify', 'App Development', 'SEO', 'Marketing'],
  authors: [{ name: 'Solvix Core' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://solvixcore.com',
    title: 'Solvix Core - Premium Tech Solutions',
    description: 'Transform your business with cutting-edge technology solutions.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
