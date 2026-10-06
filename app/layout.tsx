import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const siteUrl = 'https://axuhac.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: 'Աղ ու Հաց | Արագ սնունդ Երևանում',

  description:
    'Աղ ու Հաց — համեղ, թարմ և արագ սնունդ։ Պատվիրեք առցանց և ստացեք ձեր սիրելի ուտեստները։',

  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },

  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Աղ ու Հաց',
    locale: 'hy_AM',
    title: 'Աղ ու Հաց | Agh u Hats',
    description: 'Հայկական ջերմություն՝ յուրաքանչյուր պատառիկում',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Աղ ու Հաց | Agh u Hats',
    description: 'Հայկական ջերմություն՝ յուրաքանչյուր պատառիկում',
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