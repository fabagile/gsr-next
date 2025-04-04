// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

import Header from '@/lib/components/layout/Header'
import Footer from '@/lib/components/layout/Footer'

import '@/lib/styles/globals.css'

// export const metadata: Metadata = {
//   title: "Gestion de la salle de recette",
//   description: "Gestion matérielle et logicielle des équipements de la salle de recette",
// };

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  return (
    <>
      {/* <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        > */}
      <Header />
      <main className='my-8 flex-1'>{children}</main>
      <Footer />
      {/* </body>
    </html> */}
    </>
  )
}
