import type { Metadata } from 'next'

import Providers from '@/app/providers'

import { Toaster } from '@/components/ui/sonner'

import { geistMono, geistSans, lora } from '@/lib/fonts'

import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Amplify Next.js Starter',
    default: 'Amplify Next.js Starter',
  },
  description: 'Amplify Next.js Starter by Aryasena',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} antialiased`}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}
