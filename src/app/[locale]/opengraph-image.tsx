import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const revalidate = 0 // 캐시 무효화

export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  
  const isKorean = locale === 'ko'
  
  const alt = isKorean
    ? 'Co-molib - 시간을 절약하는 스마트 시간 추적'
    : 'Co-molib - Smart Time Tracking to Save Time'
  
  const texts = {
    badge: isKorean ? '시간 낭비를 멈추세요' : 'STOP WASTING TIME',
    tagline: isKorean ? '효율성을 극대화하세요' : 'Maximize Your Efficiency',
    subtitle: isKorean ? '시간을 절약하는 스마트 시간 추적' : 'Smart Time Tracking to Save Time'
  }
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #ececec 50%, #c6d4e8 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        }}
      >
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 1,
            padding: '80px',
          }}
        >
          {/* Save time badge */}
          <div
            style={{
              background: 'rgba(63, 114, 175, 0.15)',
              border: '2px solid #3f72af',
              borderRadius: '30px',
              padding: '12px 24px',
              fontSize: '20px',
              fontWeight: '700',
              color: '#3f72af',
              marginBottom: '30px',
              letterSpacing: '1px',
            }}
          >
{texts.badge}
          </div>

          {/* Title with gradient */}
          <h1
            style={{
              fontSize: '100px',
              fontWeight: '900',
              margin: '0 0 20px 0',
              background: 'linear-gradient(135deg, #2d3748 0%, #3f72af 50%, #3f72af 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-4px',
            }}
          >
            Co-molib
          </h1>
          
          {/* Main tagline */}
          <p
            style={{
              fontSize: '42px',
              margin: '0 0 20px 0',
              color: '#2d3748',
              maxWidth: '900px',
              fontWeight: '700',
              lineHeight: 1.1,
            }}
          >
{texts.tagline}
          </p>
          
          {/* Subtitle */}
          <p
            style={{
              fontSize: '28px',
              margin: '0',
              color: '#718096',
              fontWeight: '500',
            }}
          >
{texts.subtitle}
          </p>
        </div>
        
        {/* Simple brand mark */}
        <div
          style={{
            position: 'absolute',
            bottom: '50px',
            right: '60px',
            fontSize: '22px',
            color: '#3f72af',
            fontWeight: '600',
          }}
        >
          co-molib.com
        </div>
      </div>
    ),
    {
      ...size,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Last-Modified': new Date().toISOString(),
      },
    }
  )
} 