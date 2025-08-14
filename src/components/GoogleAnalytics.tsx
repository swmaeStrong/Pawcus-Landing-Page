'use client';

import Script from 'next/script';

const GA_ID = 'G-H02Z2DTRG4';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // UTM 파라미터 추출 함수
          function getUTMParams() {
            const params = new URLSearchParams(window.location.search);
            return {
              utm_source: params.get('utm_source') || '',
              utm_medium: params.get('utm_medium') || '',
              utm_campaign: params.get('utm_campaign') || '',
              utm_term: params.get('utm_term') || '',
              utm_content: params.get('utm_content') || ''
            };
          }
          
          // 트래픽 소스 감지 함수
          function getTrafficSource() {
            const referrer = document.referrer;
            const utm = getUTMParams();
            
            // UTM이 있으면 UTM 우선
            if (utm.utm_source) {
              return {
                source: utm.utm_source,
                medium: utm.utm_medium || 'unknown',
                campaign: utm.utm_campaign || '(not set)'
              };
            }
            
            // 레퍼러가 없으면 직접 유입
            if (!referrer) {
              return { source: 'direct', medium: 'none', campaign: '(not set)' };
            }
            
            // 소셜 미디어 감지
            const socialPlatforms = {
              'facebook.com': 'facebook',
              'instagram.com': 'instagram',
              'twitter.com': 'twitter',
              'x.com': 'twitter',
              'linkedin.com': 'linkedin',
              'youtube.com': 'youtube',
              'tiktok.com': 'tiktok',
              'reddit.com': 'reddit',
              'pinterest.com': 'pinterest',
              't.co': 'twitter',
              'fb.me': 'facebook',
              'instagram.fbsbx.com': 'instagram'
            };
            
            // 검색 엔진 감지
            const searchEngines = {
              'google.com': 'google',
              'bing.com': 'bing',
              'yahoo.com': 'yahoo',
              'naver.com': 'naver',
              'daum.net': 'daum',
              'duckduckgo.com': 'duckduckgo',
              'baidu.com': 'baidu'
            };
            
            try {
              const referrerHost = new URL(referrer).hostname.toLowerCase();
              
              // 소셜 미디어 체크
              for (const [domain, platform] of Object.entries(socialPlatforms)) {
                if (referrerHost.includes(domain)) {
                  return { source: platform, medium: 'social', campaign: '(not set)' };
                }
              }
              
              // 검색 엔진 체크
              for (const [domain, engine] of Object.entries(searchEngines)) {
                if (referrerHost.includes(domain)) {
                  return { source: engine, medium: 'organic', campaign: '(not set)' };
                }
              }
              
              // 같은 도메인이면 내부 유입
              if (referrerHost === window.location.hostname) {
                return { source: 'internal', medium: 'referral', campaign: '(not set)' };
              }
              
              // 그 외는 레퍼럴
              return { source: referrerHost, medium: 'referral', campaign: '(not set)' };
            } catch (e) {
              return { source: 'unknown', medium: 'unknown', campaign: '(not set)' };
            }
          }
          
          const trafficSource = getTrafficSource();
          const utmParams = getUTMParams();
          
          // 향상된 설정으로 GA4 초기화
          gtag('config', '${GA_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            page_referrer: document.referrer,
            // 트래픽 소스 정보
            traffic_source: trafficSource.source,
            traffic_medium: trafficSource.medium,
            traffic_campaign: trafficSource.campaign,
            // UTM 파라미터
            campaign_source: utmParams.utm_source,
            campaign_medium: utmParams.utm_medium,
            campaign_name: utmParams.utm_campaign,
            campaign_term: utmParams.utm_term,
            campaign_content: utmParams.utm_content,
            // 추가 정보
            user_agent: navigator.userAgent,
            screen_resolution: screen.width + 'x' + screen.height,
            viewport_size: window.innerWidth + 'x' + window.innerHeight,
            // 커스텀 디멘션
            custom_map: {
              dimension1: 'traffic_source',
              dimension2: 'traffic_medium',
              dimension3: 'traffic_campaign'
            }
          });
          
          // 향상된 페이지뷰 이벤트
          gtag('event', 'enhanced_page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_referrer: document.referrer,
            traffic_type: trafficSource.medium,
            traffic_source_detail: trafficSource.source,
            has_utm: !!utmParams.utm_source,
            landing_page: window.location.pathname,
            query_string: window.location.search,
            timestamp: new Date().toISOString()
          });
          
          // 세션 시작 이벤트 (첫 방문 or 30분 이상 비활성 후)
          if (!sessionStorage.getItem('session_started')) {
            gtag('event', 'session_start', {
              traffic_source: trafficSource.source,
              traffic_medium: trafficSource.medium,
              entry_page: window.location.pathname,
              entry_url: window.location.href
            });
            sessionStorage.setItem('session_started', 'true');
          }
        `}
      </Script>
    </>
  );
}