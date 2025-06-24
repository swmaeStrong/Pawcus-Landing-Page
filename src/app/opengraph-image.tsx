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
          background: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 2px, transparent 2px)',
            backgroundSize: '60px 60px',
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
            padding: '40px',
          }}
        >
          {/* Logo/Icon */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '30px',
              background: 'rgba(255,255,255,0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '60px',
              marginBottom: '30px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            }}
          >
            ⚡
          </div>
          
          {/* Title */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: '900',
              margin: '0 0 20px 0',
              background: 'linear-gradient(45deg, #ffffff, #f0f9ff)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-2px',
            }}
          >
            Pawcus
          </h1>
          
          {/* Subtitle */}
          <p
            style={{
              fontSize: '32px',
              margin: '0 0 15px 0',
              opacity: 0.95,
              maxWidth: '800px',
              fontWeight: '600',
            }}
          >
            개발자를 위한 스마트 시간 추적
          </p>
          
          {/* Description */}
          <p
            style={{
              fontSize: '22px',
              margin: '0',
              opacity: 0.85,
              maxWidth: '900px',
              lineHeight: 1.4,
              fontWeight: '400',
            }}
          >
            생산성을 게임처럼 즐겁게 • 실시간 리더보드 • AI 기반 분석
          </p>
        </div>
        
        {/* Corner decoration */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            fontSize: '20px',
            opacity: 0.7,
            fontWeight: '500',
          }}
        >
          pawcus.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 