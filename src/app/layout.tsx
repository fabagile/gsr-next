import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

// import Header from '@/lib/components/layout/Header'
// import Footer from '@/lib/components/layout/Footer'

import '@/lib/styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Gestion de la salle de recette',
  description:
    'Gestion matérielle et logicielle des équipements de la salle de recette'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  return (
    <html lang='fr'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id='app'>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  )
}
