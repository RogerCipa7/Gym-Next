import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'IRON CORE — Gimnasio Premium | Bogotá',
  description:
    'El centro de entrenamiento definitivo en Bogotá. Maquinaria de élite, pesos libres ilimitados y la mejor comunidad. Aquí no hay excusas.',
  keywords: ['gimnasio bogota', 'entrenamiento funcional', 'iron core', 'crossfit bogota', 'powerlifting'],
  authors: [{ name: 'Iron Core', url: 'https://ironcore.co' }],
  openGraph: {
    title: 'IRON CORE Gym',
    description: 'No somos un club social. Somos una forja.',
    type: 'website',
    locale: 'es_CO',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased grain`}>
        {children}
      </body>
    </html>
  )
}
