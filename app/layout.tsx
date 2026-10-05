import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = { title: 'Աղ ու Հաց | Արագ սնունդ Երևանում', description: 'Աղ ու Հաց — համեղ, թարմ և արագ սնունդ։ Պատվիրեք առցանց և ստացեք ձեր սիրելի ուտեստները։', metadataBase: new URL('https://agh-u-hats.vercel.app'), openGraph: { title: 'Աղ ու Հաց | Agh u Hats', description: 'Հայկական ջերմություն՝ յուրաքանչյուր կծումում', type: 'website' }, icons: { icon: '/apple-icon.png' } }
export const viewport: Viewport = { themeColor: '#303236', colorScheme: 'light', userScalable: false }
export default function RootLayout({children}:{children:React.ReactNode}){ return <html lang="hy"><body>{children}{process.env.NODE_ENV==='production'&&<Analytics/>}</body></html> }
