import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Աղ ու Հաց | Agh u Hats'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#303236',
          color: '#ffffff',
          textAlign: 'center',
          padding: '60px',
        }}
      >
        <img
          src="https://axuhac.vercel.app/logo.png"
          alt="Աղ ու Հաց"
          width="240"
          height="240"
          style={{
            objectFit: 'contain',
            marginBottom: '30px',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: '-2px',
            }}
          >
            ԱՂ ՈՒ ՀԱՑ
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: 20,
              fontSize: 32,
              fontWeight: 500,
            }}
          >
            Հայկական ջերմություն՝ յուրաքանչյուր պատառիկում
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: 24,
              fontSize: 24,
              opacity: 0.75,
            }}
          >
            Agh u Hats
          </div>
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    },
  )
}