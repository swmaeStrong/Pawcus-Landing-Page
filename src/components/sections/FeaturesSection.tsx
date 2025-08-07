import FeatureCard from '@/components/FeatureCard';
import { styles, getHeadingStyle, getTextStyle } from '@/lib/styles';
import { useTranslations } from 'next-intl';

export default function FeaturesSection() {
  const t = useTranslations('features');
  return (
    <section className="py-24 relative" aria-labelledby="features-heading">
      
      {/* Focus Score System */}
      <div className="mb-32">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            {t('focusScore.title')}
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('focusScore.description')}
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-700 hover:scale-[1.02]">
            <img 
              src="/screenshots/ScoringSystem.png" 
              alt="집중점수 시스템"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Category Analysis */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="lg:pl-8">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            {t('categoryAnalysis.title')}
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {t('categoryAnalysis.description')}
            <br />{t('categoryAnalysis.descriptionSub')}
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">{t('categoryAnalysis.features.autoCategory')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">{t('categoryAnalysis.features.realTimeUpdate')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-gray-700">{t('categoryAnalysis.features.personalizedReport')}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-700 hover:scale-105">
            <img 
              src="/screenshots/CA.png" 
              alt="카테고리 분석"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Daily Goal */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-700 hover:scale-105">
            <img 
              src="/screenshots/DailyGoal.png" 
              alt="매일 목표 설정"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="lg:pr-8">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            {t('dailyGoal.title')}
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {t('dailyGoal.description')}
            <br />{t('dailyGoal.descriptionSub')}
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700">{t('dailyGoal.features.goalSetting')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              <span className="text-gray-700">{t('dailyGoal.features.realTimeProgress')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
              <span className="text-gray-700">{t('dailyGoal.features.visualFeedback')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Group Overview */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="lg:pl-8">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            {t('groupOverview.title')}
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {t('groupOverview.description')}
            <br />{t('groupOverview.descriptionSub')}
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
              <span className="text-gray-700">{t('groupOverview.features.teamCompetition')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
              <span className="text-gray-700">{t('groupOverview.features.motivationalRanking')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <span className="text-gray-700">{t('groupOverview.features.groupPerformance')}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-700 hover:scale-105">
            <img 
              src="/screenshots/GroupOverview.png" 
              alt="팀 간 경쟁"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Overview Dashboard */}
      <div className="mb-32">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">{t('dashboard.title')}</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('dashboard.description')}
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-700 hover:scale-[1.02]">
            <img 
              src="/screenshots/Overview.png" 
              alt="통합 대시보드"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

    </section>
  );
}