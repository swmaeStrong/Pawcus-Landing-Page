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
  // 배포 환경에서 안정적인 아이콘 로딩을 위한 설정
  let iconArrayBuffer: ArrayBuffer | null = null
  
  try {
    // 절대 URL 사용
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : process.env.NODE_ENV === 'production'
      ? 'https://pawcus-landing-page.vercel.app'
      : 'http://localhost:3000'
    
    // 캐시 버스팅을 위한 타임스탬프 추가
    const cacheBuster = Date.now()
    const iconResponse = await fetch(`${baseUrl}/icons/final_icon_256x256.png?v=${cacheBuster}`, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    })
    
    if (iconResponse.ok) {
      iconArrayBuffer = await iconResponse.arrayBuffer()
    }
  } catch (error) {
    console.log('Failed to fetch icon:', error)
    // 아이콘 로드 실패 시 null로 설정하여 fallback 사용
    iconArrayBuffer = null
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 30%, #f1f5f9 100%)',
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
            background: 'radial-gradient(circle at 25% 25%, rgba(139,92,246,0.03) 1px, transparent 1px)',
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
            opacity: 0.1,
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
            opacity: 0.1,
          }}
        />
        
        {/* Version indicator for cache busting */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            fontSize: '12px',
            color: '#e5e7eb',
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
          {/* Pawcus Icon */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
            }}
          >
            {iconArrayBuffer ? (
              <img
                src={`data:image/png;base64,${Buffer.from(iconArrayBuffer).toString('base64')}`}
                alt="Pawcus Logo"
                width="120"
                height="120"
                style={{
                  borderRadius: '24px',
                  boxShadow: '0 20px 40px rgba(139,92,246,0.3)',
                  border: '4px solid white',
                }}
              />
            ) : (
              // Fallback: 더 정교한 아이콘 디자인
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 25%, #7c3aed 50%, #10b981 75%, #059669 100%)',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 20px 40px rgba(139,92,246,0.4)',
                  border: '4px solid white',
                  position: 'relative',
                }}
              >
                {/* 내부 아이콘 디자인 */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(255,255,255,0.95)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(45deg, #8b5cf6, #10b981)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        color: 'white',
                        fontSize: '24px',
                        fontWeight: '900',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                      }}
                    >
                      P
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Title with gradient */}
          <h1
            style={{
              fontSize: '90px',
              fontWeight: '800',
              margin: '0 0 16px 0',
              background: 'linear-gradient(135deg, #1f2937 0%, #7c3aed 40%, #2563eb 100%)',
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
              color: '#374151',
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
                color: '#6b7280',
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
                color: '#6b7280',
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
                color: '#6b7280',
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
        
        {/* Enhanced brand mark with fallback */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '60px',
            fontSize: '18px',
            color: '#9ca3af',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {iconArrayBuffer ? (
            <img
              src={`data:image/png;base64,${Buffer.from(iconArrayBuffer).toString('base64')}`}
              alt="Pawcus Logo"
              width="32"
              height="32"
              style={{
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(139,92,246,0.2)',
              }}
            />
          ) : (
            <div
              style={{
                width: '32px',
                height: '32px',
                background: 'linear-gradient(135deg, #8b5cf6, #10b981)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 8px rgba(139,92,246,0.2)',
                border: '2px solid white',
              }}
            >
              <div
                style={{
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: '900',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                }}
              >
                P
              </div>
            </div>
          )}
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