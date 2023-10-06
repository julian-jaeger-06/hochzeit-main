import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '100',
})

export const metadata: Metadata = {
  title: 'Hochzeit Aline & Louis',
  description: 'Digitale Einladung zur Hochzeit von Aline & Louis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
 