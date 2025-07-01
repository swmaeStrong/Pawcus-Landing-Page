import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const revalidate = 0 // 캐시 무효화

export const alt = 'Pawcus - 개발자를 위한 스마트 생산성 관리'
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
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #334155 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 25% 25%, rgba(139,92,246,0.08) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Purple accent elements */}
        <div
          style={{
            position: 'absolute',
            top: '80px',
            left: '80px',
            width: '120px',
            height: '120px',
            background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
            borderRadius: '30px',
            opacity: 0.2,
          }}
        />
        
        <div
          style={{
            position: 'absolute',
            bottom: '100px',
            right: '100px',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            borderRadius: '20px',
            opacity: 0.2,
          }}
        />
        
        {/* Version indicator for cache busting */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            fontSize: '12px',
            color: '#475569',
            opacity: 0.5,
          }}
        >
          v2.0
        </div>
        
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 1,
            padding: '60px',
          }}
        >

          {/* Title with gradient */}
          <h1
            style={{
              fontSize: '90px',
              fontWeight: '800',
              margin: '0 0 16px 0',
              background: 'linear-gradient(135deg, #f8fafc 0%, #a855f7 40%, #3b82f6 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-4px',
            }}
          >
            Pawcus
          </h1>
          
          {/* Subtitle */}
          <p
            style={{
              fontSize: '40px',
              margin: '0 0 12px 0',
              color: '#cbd5e1',
              maxWidth: '800px',
              fontWeight: '600',
              lineHeight: 1.2,
            }}
          >
            개발자를 위한 스마트 생산성 관리
          </p>
          
          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              margin: '20px 0',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '24px',
                color: '#94a3b8',
                fontWeight: '500',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  background: '#a855f7',
                  borderRadius: '50%',
                }}
              />
              시간 추적 자동화
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '24px',
                color: '#94a3b8',
                fontWeight: '500',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  background: '#10b981',
                  borderRadius: '50%',
                }}
              />
              실시간 리더보드
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '24px',
                color: '#94a3b8',
                fontWeight: '500',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  background: '#3b82f6',
                  borderRadius: '50%',
                }}
              />
              생산성 게임화
            </div>
          </div>
        </div>
        
        {/* Enhanced brand mark */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '60px',
            fontSize: '18px',
            color: '#64748b',
            fontWeight: '500',
          }}
        >
          pawcus.dev
        </div>
      </div>
    ),
    {
      ...size,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    }
  )
} 