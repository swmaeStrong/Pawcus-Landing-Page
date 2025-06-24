import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Pawcus - 개발자를 위한 스마트 시간 추적'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              margin: '0 0 20px 0',
              background: 'linear-gradient(45deg, #ffffff, #e0e7ff)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Pawcus
          </h1>
          
          {/* Subtitle */}
          <p
            style={{
              fontSize: '36px',
              margin: '0 0 20px 0',
              opacity: 0.9,
              maxWidth: '800px',
            }}
          >
            개발자를 위한 스마트 시간 추적
          </p>
          
          {/* Description */}
          <p
            style={{
              fontSize: '24px',
              margin: '0',
              opacity: 0.8,
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            생산성을 게임처럼 즐겁게 • 실시간 리더보드 • AI 기반 분석
          </p>
        </div>
        
        {/* Logo/Icon placeholder */}
        <div
          style={{
            position: 'absolute',
            top: '60px',
            right: '60px',
            width: '80px',
            height: '80px',
            borderRadius: '20px',
            background: 'rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '40px',
          }}
        >
          ⚡
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 