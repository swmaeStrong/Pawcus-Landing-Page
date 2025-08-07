import FeatureCard from '@/components/FeatureCard';
import { styles, getHeadingStyle, getTextStyle } from '@/lib/styles';

export default function FeaturesSection() {
  return (
    <section className="py-24 relative" aria-labelledby="features-heading">
      
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-gray-800">
          모든 것을 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">한눈에</span>
        </h2>
        <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          복잡한 설정 없이, 설치하는 순간부터 모든 작업이 자동으로 추적됩니다.
        </p>
      </div>

      {/* Overview Dashboard */}
      <div className="mb-32">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">통합 대시보드</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            모든 생산성 데이터를 하나의 화면에서 직관적으로 확인하세요
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

      {/* Focus Score System */}
      <div className="mb-32">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            이제 시간이 아닌 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">집중도</span>를 측정하세요
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            단순히 앉아있던 시간이 아닌, <strong>실제로 얼마나 집중했는지</strong>를 정확하게 점수화합니다.
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
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            6가지 핵심 영역 분석
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Development, Design, Research, Communication, Learning, Break 
            <br />각 영역별 시간 분배를 레이더 차트로 한눈에 파악하세요.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">자동 카테고리 분류</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">실시간 데이터 업데이트</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-gray-700">개인화된 분석 리포트</span>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-700 hover:scale-105">
            <img 
              src="/screenshots/CategoryAnalysis.png" 
              alt="카테고리 분석"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>



    </section>
  );
}