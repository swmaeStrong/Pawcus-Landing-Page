import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import { styles, createCardStyle, getHeadingStyle, getTextStyle } from '@/lib/styles';
import { getTranslations } from 'next-intl/server';
import { 
  Clock, 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  Rocket,
  Star,
  Trophy,
  Brain,
  Activity
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pomocore 소개 - 개발자를 위한 스마트 생산성 관리',
  description: 'Pomocore는 AI 기반 시간 추적과 게임화된 경쟁 시스템으로 개발자의 생산성을 혁신적으로 향상시키는 도구입니다.',
  keywords: ['Pomocore', '개발자', '생산성', '시간 추적', '리더보드', 'AI', '소개'],
  alternates: {
    canonical: 'https://www.pomocore.com/about',
  },
  openGraph: {
    title: 'Pomocore 소개 - 개발자를 위한 스마트 생산성 관리',
    description: 'Pomocore는 AI 기반 시간 추적과 게임화된 경쟁 시스템으로 개발자의 생산성을 혁신적으로 향상시키는 도구입니다.',
    url: 'https://www.pomocore.com/about',
    type: 'website',
  },
};

export default async function AboutPage() {
  const t = await getTranslations('about');
  
  const features = [
    {
      icon: Brain,
      title: t('features.aiCategorization.title'),
      description: t('features.aiCategorization.description'),
      details: Array.isArray(t.raw('features.aiCategorization.details')) 
        ? t.raw('features.aiCategorization.details') 
        : []
    },
    {
      icon: Activity,
      title: t('features.realTimeMonitoring.title'),
      description: t('features.realTimeMonitoring.description'),
      details: Array.isArray(t.raw('features.realTimeMonitoring.details')) 
        ? t.raw('features.realTimeMonitoring.details') 
        : []
    },
    {
      icon: BarChart3,
      title: t('features.dataVisualization.title'),
      description: t('features.dataVisualization.description'),
      details: Array.isArray(t.raw('features.dataVisualization.details')) 
        ? t.raw('features.dataVisualization.details') 
        : []
    },
    {
      icon: Trophy,
      title: t('features.gamification.title'),
      description: t('features.gamification.description'),
      details: Array.isArray(t.raw('features.gamification.details')) 
        ? t.raw('features.gamification.details') 
        : []
    },
    {
      icon: Target,
      title: t('features.personalInsights.title'),
      description: t('features.personalInsights.description'),
      details: Array.isArray(t.raw('features.personalInsights.details')) 
        ? t.raw('features.personalInsights.details') 
        : []
    },
    {
      icon: Shield,
      title: t('features.security.title'),
      description: t('features.security.description'),
      details: Array.isArray(t.raw('features.security.details')) 
        ? t.raw('features.security.details') 
        : []
    }
  ];

  const useCases = [
    {
      title: t('useCases.individualDeveloper.title'),
      description: t('useCases.individualDeveloper.description'),
      benefits: Array.isArray(t.raw('useCases.individualDeveloper.benefits')) 
        ? t.raw('useCases.individualDeveloper.benefits') 
        : []
    },
    {
      title: t('useCases.developmentTeam.title'),
      description: t('useCases.developmentTeam.description'),
      benefits: Array.isArray(t.raw('useCases.developmentTeam.benefits')) 
        ? t.raw('useCases.developmentTeam.benefits') 
        : []
    },
    {
      title: t('useCases.startup.title'),
      description: t('useCases.startup.description'),
      benefits: Array.isArray(t.raw('useCases.startup.benefits')) 
        ? t.raw('useCases.startup.benefits') 
        : []
    }
  ];
  return (
    <div className={`${styles.pageBackground} ${styles.pageBackgroundSecondary}`}>
      <Navigation />
      
      {/* Animated Background */}
      <div className={styles.gradientBackground} />
      <div className={styles.animatedBackground}>
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-r from-[#3f72af]/20 to-[#c6d4e8]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-r from-[#c6d4e8]/25 to-[#3f72af]/15 rounded-full blur-3xl" />
      </div>
      
      <main className={`${styles.container} relative z-10 pt-24 pb-16`}>
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="mb-8">
            <h1 className={`${getHeadingStyle(3)} mb-6`}>
              {t('heroTitle')}
            </h1>
            <p className={`text-base sm:text-xl md:text-2xl ${getTextStyle('secondary')} max-w-4xl mx-auto leading-relaxed px-4`}>
              {t('heroDescription')}
            </p>
          </div>
          
        </section>

        {/* Core Features */}
        <section className="mb-20">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${styles.text.primary}`}>
            {t('coreFeatures')}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={`${createCardStyle('modern')} hover:shadow-lg transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className={`text-xl ${styles.text.primary} mb-3`}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${getTextStyle('secondary')} mb-4`}>
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail: string, detailIndex: number) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <span className={`${styles.text.primary} mt-0.5 flex-shrink-0`}>•</span>
                        <span className={getTextStyle('small')}>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-20">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${styles.text.primary}`}>
            {t('useCasesTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className={`${createCardStyle('modern')} hover:shadow-lg transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className={`text-xl ${styles.text.primary}`}>
                    {useCase.title}
                  </CardTitle>
                  <p className={getTextStyle('secondary')}>
                    {useCase.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit: string, benefitIndex: number) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <span className={`${styles.text.primary} flex-shrink-0`}>•</span>
                        <span className={getTextStyle('small')}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>


      </main>
    </div>
  );
}