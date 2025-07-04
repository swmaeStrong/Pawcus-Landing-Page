"use client";

export const dynamic = 'force-dynamic';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 opacity-50" />
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32 relative z-10">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse" />
              <Image
                src="/icons/final_icon_128x128.png"
                alt="Pawcus Logo"
                width={80}
                height={80}
                className="relative z-10"
              />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            개인정보 처리방침
          </h1>
          <p className="text-xl text-gray-300">
            귀하의 개인정보를 소중하게 보호합니다
          </p>
          <p className="text-sm text-gray-400 mt-2">
            시행일: 2025년 7월 4일
          </p>
        </header>

        {/* Privacy Policy Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-100">
                개인정보 처리방침 개요
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-gray-300 leading-relaxed">
                집중(이하 '회사')은 이용자의 개인정보를 중요시하며, 「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 준수하고 있습니다. 
                회사는 개인정보 처리방침을 통하여 이용자가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
              </p>
            </CardContent>
          </Card>

          {/* Section 1: 개인정보의 처리 목적 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100">
                1. 개인정보의 처리 목적
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <h4 className="font-semibold text-gray-100 mb-2">
                    가. 홈페이지 회원가입 및 관리
                  </h4>
                  <p className="text-sm text-gray-300 ml-6">
                    회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 만14세 미만 아동의 개인정보 처리 시 법정대리인의 동의여부 확인, 각종 고지·통지, 고충처리 등을 목적으로 개인정보를 처리합니다.
                  </p>
                </div>
                
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <h4 className="font-semibold text-gray-100 mb-2">
                    나. 재화 또는 서비스 제공
                  </h4>
                  <p className="text-sm text-gray-300 ml-6">
                    구독제 서비스 제공, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 구독료 결제·정산, 서비스 이용 통계 분석 등을 목적으로 개인정보를 처리합니다.
                  </p>
                </div>
                
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <h4 className="font-semibold text-gray-100 mb-2">
                    다. 마케팅 및 광고에의 활용
                  </h4>
                  <p className="text-sm text-gray-300 ml-6">
                    신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: 처리하는 개인정보의 항목 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100">
                2. 처리하는 개인정보의 항목
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                회사는 다음의 개인정보 항목을 처리하고 있습니다.
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <h4 className="font-semibold text-gray-100 mb-2">가. 회원가입 및 관리</h4>
                  <div className="ml-4 space-y-2">
                    <p className="text-sm text-gray-300">
                      <span className="font-medium text-gray-200">필수항목:</span> 이메일 주소, 사용자의 서비스 이용 기록, 접속 로그, 접속 IP 정보, 쿠키, 서비스 이용 시간
                    </p>
                    <p className="text-sm text-gray-300">
                      <span className="font-medium text-gray-200">선택항목:</span> 결제 정보(카드번호, 계좌정보 등 - 암호화하여 관리), 프로필 정보
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <h4 className="font-semibold text-gray-100 mb-2">나. 구독 서비스 제공</h4>
                  <p className="text-sm text-gray-300 ml-4">
                    <span className="font-medium text-gray-200">필수항목:</span> 구독 플랜 정보, 결제 주기, 서비스 이용 내역, 구독 시작일 및 종료일
                  </p>
                </div>
                
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <h4 className="font-semibold text-gray-100 mb-2">다. 인터넷 서비스 이용과정에서 자동 생성되어 수집되는 정보</h4>
                  <p className="text-sm text-gray-300 ml-4">
                    IP주소, 쿠키, MAC주소, 서비스 이용기록, 방문기록, 앱 사용 패턴, 집중도 측정 데이터, 작업 수행 시간 등
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: 개인정보의 처리 및 보유 기간 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100">
                3. 개인정보의 처리 및 보유 기간
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <h4 className="font-semibold text-gray-100 mb-2">가. 홈페이지 회원가입 및 관리</h4>
                  <p className="text-sm text-gray-300">
                    회원 탈퇴 시까지. 다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-300 ml-4 mt-2 space-y-1">
                    <li>관계 법령 위반에 따른 수사·조사 등이 진행중인 경우: 해당 수사·조사 종료 시까지</li>
                    <li>홈페이지 이용에 따른 채권·채무관계 잔존 시: 해당 채권·채무관계 정산 시까지</li>
                  </ul>
                </div>
                
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <h4 className="font-semibold text-gray-100 mb-2">나. 구독 서비스 제공</h4>
                  <p className="text-sm text-gray-300">
                    구독 서비스 이용 종료 및 요금결제·정산 완료 시까지. 다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료 시까지
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="bg-gray-600/20 rounded p-3">
                      <p className="text-sm text-gray-200 font-medium">전자상거래 등에서의 소비자 보호에 관한 법률</p>
                      <ul className="list-disc list-inside text-sm text-gray-400 ml-4 mt-1">
                        <li>표시·광고에 관한 기록: 6개월</li>
                        <li>계약 또는 청약철회, 구독료 결제, 서비스 이용 기록: 5년</li>
                        <li>소비자 불만 또는 분쟁처리에 관한 기록: 3년</li>
                      </ul>
                    </div>
                    <div className="bg-gray-600/20 rounded p-3">
                      <p className="text-sm text-gray-200 font-medium">통신비밀보호법</p>
                      <ul className="list-disc list-inside text-sm text-gray-400 ml-4 mt-1">
                        <li>가입자 전기통신일시, 개시·종료시간, 상대방 가입자번호 등: 1년</li>
                        <li>컴퓨터통신, 인터넷 로그기록자료, 접속지 추적자료: 3개월</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: 개인정보의 파기 절차 및 파기 방법 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100">
                4. 개인정보의 파기 절차 및 파기 방법
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <h4 className="font-semibold text-gray-100 mb-2">가. 파기절차</h4>
                  <p className="text-sm text-gray-300">
                    이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.
                  </p>
                </div>
                
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <h4 className="font-semibold text-gray-100 mb-2">나. 파기기한</h4>
                  <p className="text-sm text-gray-300">
                    이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.
                  </p>
                </div>
                
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <h4 className="font-semibold text-gray-100 mb-2">다. 파기방법</h4>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-300">
                      <span className="font-medium text-gray-200">• 전자적 파일 형태의 정보:</span> 기록을 재생할 수 없는 기술적 방법을 사용하여 완전히 삭제
                    </p>
                    <p className="text-sm text-gray-300">
                      <span className="font-medium text-gray-200">• 종이에 출력된 개인정보:</span> 분쇄기로 분쇄하거나 소각을 통하여 파기
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 5: 정보주체의 권리·의무 및 행사방법 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100">
                5. 정보주체의 권리·의무 및 행사방법
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <h4 className="font-semibold text-gray-100 mb-2">가. 정보주체의 권리</h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 ml-4 space-y-1">
                    <li>개인정보 열람요구</li>
                    <li>오류 등이 있을 경우 정정 요구</li>
                    <li>삭제요구</li>
                    <li>처리정지 요구</li>
                  </ul>
                </div>
                
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <h4 className="font-semibold text-gray-100 mb-2">나. 권리 행사 방법</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• 회사에 대해 개인정보 보호법 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.</p>
                    <p>• 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.</p>
                    <p>• 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.</p>
                    <p>• 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한될 수 있습니다.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 6: 개인정보의 제3자 제공 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100">
                6. 개인정보의 제3자 제공
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
              </p>
              
              <ul className="list-disc list-inside text-sm text-gray-300 ml-4 space-y-1">
                <li>이용자들이 사전에 동의한 경우</li>
                <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
              </ul>
              
              <div className="bg-gray-700/30 rounded-lg p-4 mt-4 border border-gray-600/30">
                <h4 className="font-semibold text-gray-100 mb-2">
                  현재 개인정보 제3자 제공 내역
                </h4>
                <p className="text-sm text-gray-300">
                  회사는 현재 이용자의 개인정보를 제3자에게 제공하고 있지 않습니다.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 7: 개인정보 처리 위탁 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100">
                7. 개인정보 처리 위탁
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                회사는 현재 개인정보 처리업무를 외부에 위탁하고 있지 않습니다. 향후 개인정보 처리업무를 위탁하게 될 경우, 관련 법령에 따라 위탁 사실을 사전에 고지하고 필요한 경우 동의를 받겠습니다.
              </p>
            </CardContent>
          </Card>

          {/* Section 8: 개인정보의 국외 이전 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100">
                8. 개인정보의 국외 이전
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                회사는 현재 이용자의 개인정보를 국외로 이전하고 있지 않습니다. 향후 서비스 제공을 위해 국외 이전이 필요한 경우, 관련 법령에 따라 이전 사실을 사전에 고지하고 필요한 동의를 받겠습니다.
              </p>
            </CardContent>
          </Card>

          {/* Section 9: 개인정보 보호조치 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100">
                9. 개인정보의 안전성 확보조치
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <h4 className="font-semibold text-gray-100 mb-2">
                    가. 관리적 조치
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 ml-6 space-y-1">
                    <li>내부관리계획 수립 및 시행</li>
                    <li>개인정보 취급 담당자의 최소화 및 교육</li>
                    <li>개인정보 보호 전담조직의 구성 및 운영</li>
                    <li>정기적인 자체 감사 실시</li>
                  </ul>
                </div>
                
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <h4 className="font-semibold text-gray-100 mb-2">
                    나. 기술적 조치
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 ml-6 space-y-1">
                    <li>개인정보처리시스템 등의 접근권한 관리</li>
                    <li>접근통제시스템 설치</li>
                    <li>고유식별정보 등의 암호화</li>
                    <li>보안프로그램 설치 및 주기적 점검·갱신</li>
                    <li>접속기록의 보관 및 위변조 방지</li>
                    <li>문서보안을 위한 보안장치 사용</li>
                  </ul>
                </div>
                
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <h4 className="font-semibold text-gray-100 mb-2">
                    다. 물리적 조치
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 ml-6 space-y-1">
                    <li>전산실, 자료보관실 등의 접근통제</li>
                    <li>비인가자에 대한 출입 통제</li>
                    <li>개인정보가 포함된 서류, 보조저장매체 등의 잠금장치</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 10: 개정 전 고지 의무 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100">
                10. 개인정보 처리방침의 변경
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                이 개인정보 처리방침은 2025년 7월 4일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
              </p>
              
              <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                <h4 className="font-semibold text-gray-100 mb-2">개정 전 고지 의무</h4>
                <p className="text-sm text-gray-300">
                  회사는 개인정보 처리방침을 개정하는 경우 그 개정사유 및 변경내용을 지체없이 공지하며, 개정된 내용은 이용자가 언제든지 확인할 수 있도록 게시합니다. 다만, 이용자의 권리 또는 의무에 중요한 내용의 변경이 있을 경우에는 최소 30일전에 공지합니다.
                </p>
              </div>
              
            </CardContent>
          </Card>

          {/* Section 11: 개인정보 보호책임자 및 담당자 연락처 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100">
                11. 개인정보 보호책임자 및 담당자 연락처
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              
              <div className="flex justify-center">
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30 w-full max-w-md">
                  <h4 className="font-semibold text-gray-100 mb-3">
                    개인정보 보호책임자
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-300">
                      <span className="font-medium text-gray-200">성명:</span> 김영현
                    </p>
                    <p className="text-gray-300">
                      <span className="font-medium text-gray-200">직책:</span> 대표
                    </p>
                    <p className="text-gray-300">
                      <span className="font-medium text-gray-200">연락처:</span> 010-5172-5645
                    </p>
                    <p className="text-gray-300">
                      <span className="font-medium text-gray-200">이메일:</span> swmaestrong@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-4 mt-4">
                <p className="text-sm text-gray-200">
                  정보주체께서는 회사의 서비스(또는 사업)를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
                </p>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-100 mb-3">기타 개인정보침해 신고 및 상담기관</h4>
                <p className="text-sm text-gray-300 mb-3">
                  회사 이외의 기관에 개인정보 침해신고나 상담이 필요하신 경우 아래 기관으로 문의하시기 바랍니다.
                </p>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• 개인정보보호 포털 (privacy.kisa.or.kr / 118)</li>
                  <li>• 개인정보 침해신고센터 (privacy.kisa.or.kr / 118)</li>
                  <li>• 대검찰청 사이버수사과 (www.spo.go.kr / 1301)</li>
                  <li>• 경찰청 사이버수사국 (ecrm.cyber.go.kr / 182)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Back to Home */}
          <div className="text-center pt-8">
            <Link href="/" className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium rounded-lg transition-colors shadow-lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              메인으로 돌아가기
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}