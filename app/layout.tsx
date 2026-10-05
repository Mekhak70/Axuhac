import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const imageUrl =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMAGE%202026-10-05%2020%3A43%3A21-2gRkjzWgD3YVzBD6dbsKZyF1Q1RrFI.jpg'

export const metadata: Metadata = {
  title: 'Աղ ու Հաց | Արագ սնունդ Երևանում',

  description:
    'Աղ ու Հաց — համեղ, թարմ և արագ սնունդ։ Պատվիրեք առցանց և ստացեք ձեր սիրելի ուտեստները։',

  metadataBase: new URL('https://agh-u-hats.vercel.app'),

  openGraph: {
    title: 'Աղ ու Հաց | Agh u Hats',
    description: 'Հայկական ջերմություն՝ յուրաքանչյուր կծումում',
    type: 'website',
    url: 'https://agh-u-hats.vercel.app',
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: 'Աղ ու Հաց | Agh u Hats',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Աղ ու Հաց | Agh u Hats',
    description: 'Հայկական ջերմություն՝ յուրաքանչյուր կծումում',
    images: [imageUrl],
  },

  icons: {
    icon: imageUrl,
    shortcut: imageUrl,
    apple: imageUrl,
  },
}

export const viewport: Viewport = {
  themeColor: '#303236',
  colorScheme: 'light',
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hy">
      <body>
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
} 