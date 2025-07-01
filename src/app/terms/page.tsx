"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#ECECEC] relative overflow-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50" />
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            서비스 이용약관
          </h1>
          <p className="text-xl text-gray-600">
            Pawcus 서비스 이용에 관한 약관입니다
          </p>
          <p className="text-sm text-gray-500 mt-2">
            시행일: 2025년 1월 1일
          </p>
        </header>

        {/* Terms Content */}
        <div className="space-y-8">
          {/* Section 1: 목적 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                제1조 (목적)
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">
                이 약관은 집중(이하 &quot;회사&quot;라 합니다)이 제공하는 Pawcus 서비스(이하 &quot;서비스&quot;라 합니다)의 이용과 관련하여 
                회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </CardContent>
          </Card>

          {/* Section 2: 용어의 정의 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                제2조 (용어의 정의)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
              
              <div className="space-y-3 ml-4">
                <div>
                  <span className="font-medium text-gray-700">1. &quot;서비스&quot;</span>
                  <p className="text-sm text-gray-600 ml-4">
                    회사가 제공하는 모든 생산성 관리 및 시간 추적 관련 서비스를 의미합니다.
                  </p>
                </div>
                
                <div>
                  <span className="font-medium text-gray-700">2. &quot;이용자&quot;</span>
                  <p className="text-sm text-gray-600 ml-4">
                    본 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
                  </p>
                </div>
                
                <div>
                  <span className="font-medium text-gray-700">3. &quot;회원&quot;</span>
                  <p className="text-sm text-gray-600 ml-4">
                    회사와 서비스 이용계약을 체결하고 이용자 아이디를 부여받은 이용자를 말합니다.
                  </p>
                </div>
                
                <div>
                  <span className="font-medium text-gray-700">4. &quot;아이디(ID)&quot;</span>
                  <p className="text-sm text-gray-600 ml-4">
                    회원의 식별과 서비스 이용을 위하여 회원이 정하고 회사가 승인하는 문자와 숫자의 조합을 의미합니다.
                  </p>
                </div>
                
                <div>
                  <span className="font-medium text-gray-700">5. &quot;비밀번호&quot;</span>
                  <p className="text-sm text-gray-600 ml-4">
                    회원이 부여받은 아이디와 일치되는 회원임을 확인하기 위해 회원 자신이 정한 문자 또는 숫자의 조합을 의미합니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: 약관의 게시와 개정 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                제3조 (약관의 게시와 개정)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="text-gray-600">
                  ① 회사는 이 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.
                </p>
                <p className="text-gray-600">
                  ② 회사는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
                </p>
                <p className="text-gray-600">
                  ③ 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 서비스 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.
                </p>
                <p className="text-gray-600">
                  ④ 회원은 개정된 약관에 대해 거부할 권리가 있습니다. 회원은 개정된 약관이 공지된 후 15일 이내에 거부의사를 표명할 수 있습니다. 
                  회원이 거부하는 경우 회사는 당해 회원과의 계약을 해지할 수 있습니다.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: 서비스 이용계약의 체결 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                제4조 (서비스 이용계약의 체결)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">① 이용계약의 성립</h4>
                <p className="text-gray-600 ml-4">
                  이용계약은 회원이 되고자 하는 자(이하 &quot;가입신청자&quot;)가 약관의 내용에 대하여 동의를 한 다음 
                  회원가입신청을 하고 회사가 이러한 신청에 대하여 승낙함으로써 체결됩니다.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">② 가입신청</h4>
                <p className="text-gray-600 ml-4">
                  가입신청자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">③ 가입신청의 승낙</h4>
                <p className="text-gray-600 ml-4">
                  회사는 다음 각 호에 해당하지 않는 한 가입신청을 승낙합니다.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2 ml-8 space-y-1">
                  <li>가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우</li>
                  <li>실명이 아니거나 타인의 명의를 이용한 경우</li>
                  <li>허위의 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우</li>
                  <li>14세 미만 아동이 법정대리인의 동의를 얻지 아니한 경우</li>
                  <li>기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 5: 회원정보의 변경 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                제5조 (회원정보의 변경)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-gray-600">
                ① 회원은 개인정보관리화면을 통하여 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다.
              </p>
              <p className="text-gray-600">
                ② 회원은 회원가입신청 시 기재한 사항이 변경되었을 경우 온라인으로 수정을 하거나 전자우편 기타 방법으로 회사에 대하여 그 변경사항을 알려야 합니다.
              </p>
              <p className="text-gray-600">
                ③ 제2항의 변경사항을 회사에 알리지 않아 발생한 불이익에 대하여 회사는 책임지지 않습니다.
              </p>
            </CardContent>
          </Card>

          {/* Section 6: 서비스의 제공 및 변경 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                제6조 (서비스의 제공 및 변경)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">① 서비스의 제공</h4>
                <p className="text-gray-600">회사는 다음과 같은 서비스를 제공합니다:</p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2 ml-4 space-y-1">
                  <li>시간 추적 및 생산성 분석 서비스</li>
                  <li>리더보드 및 경쟁 시스템</li>
                  <li>개인 및 팀 분석 리포트</li>
                  <li>기타 회사가 추가 개발하거나 다른 회사와의 제휴계약 등을 통해 회원에게 제공하는 일체의 서비스</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">② 서비스의 변경</h4>
                <p className="text-gray-600">
                  회사는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부 서비스를 변경할 수 있습니다.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">③ 서비스 이용시간</h4>
                <p className="text-gray-600">
                  서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다. 다만, 회사는 서비스를 일정범위로 분할하여 각 범위별로 이용가능시간을 별도로 지정할 수 있습니다.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 7: 서비스 이용 제한 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                제7조 (서비스 이용 제한)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                회사는 회원이 이 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우, 경고, 일시정지, 영구이용정지 등으로 서비스 이용을 단계적으로 제한할 수 있습니다.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">다음의 경우 이용이 제한될 수 있습니다:</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>타인의 정보 도용</li>
                  <li>회사의 운영진, 직원 또는 관계자를 사칭하는 경우</li>
                  <li>회사, 다른 회원 또는 제3자의 지적재산권을 침해하는 경우</li>
                  <li>외설 또는 폭력적인 내용을 유포하는 경우</li>
                  <li>서비스의 안정적 운영을 방해할 목적으로 다량의 정보를 전송하는 경우</li>
                  <li>기타 불법적이거나 부당한 행위</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 8: 이용자의 의무 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                제8조 (이용자의 의무)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600 font-medium">이용자는 다음 행위를 하여서는 안 됩니다:</p>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
                  <li>신청 또는 변경 시 허위내용의 등록</li>
                  <li>타인의 정보도용</li>
                  <li>회사에 게시된 정보의 변경</li>
                  <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                  <li>회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                  <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                  <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 공개 또는 게시하는 행위</li>
                  <li>회사의 동의 없이 영리를 목적으로 서비스를 사용하는 행위</li>
                  <li>기타 불법적이거나 부당한 행위</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Section 9: 저작권의 귀속 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                제9조 (저작권의 귀속)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                ① 회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.
              </p>
              <p className="text-gray-600">
                ② 이용자는 서비스를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.
              </p>
              <p className="text-gray-600">
                ③ 회사는 약정에 따라 이용자에게 귀속된 저작권을 사용하는 경우 당해 이용자에게 통보하여야 합니다.
              </p>
            </CardContent>
          </Card>

          {/* Section 10: 계약해제, 해지 등 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                제10조 (계약해제, 해지 등)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">① 회원의 해지</h4>
                <p className="text-gray-600 ml-4">
                  회원은 언제든지 서비스 이용을 원하지 않는 경우 회원탈퇴를 통해 이용계약을 해지할 수 있습니다.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">② 회사의 해지</h4>
                <p className="text-gray-600 ml-4">
                  회사는 회원이 다음 각 호의 사유에 해당하는 경우, 이용계약을 해지할 수 있습니다:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2 ml-8 space-y-1">
                  <li>가입신청 시에 허위내용을 등록한 경우</li>
                  <li>다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우</li>
                  <li>서비스를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 11: 손해배상 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                제11조 (손해배상)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                ① 회사는 무료로 제공하는 서비스 이용과 관련하여 이용자에게 발생한 손해에 대해서는 책임을 지지 않습니다. 
                다만, 회사의 고의 또는 중과실로 인한 경우는 제외합니다.
              </p>
              <p className="text-gray-600">
                ② 회사는 서비스 이용과 관련하여 이용자에게 발생한 손해 중 이용자의 고의, 과실에 의한 손해에 대하여 책임을 지지 않습니다.
              </p>
              <p className="text-gray-600">
                ③ 이용자가 이 약관의 규정을 위반함으로 인하여 회사에 손해가 발생하게 되는 경우, 
                이 약관을 위반한 이용자는 회사에 발생하는 모든 손해를 배상하여야 합니다.
              </p>
            </CardContent>
          </Card>

          {/* Section 12: 면책조항 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                제12조 (면책조항)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                ① 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
              </p>
              <p className="text-gray-600">
                ② 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.
              </p>
              <p className="text-gray-600">
                ③ 회사는 이용자가 서비스와 관련하여 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.
              </p>
              <p className="text-gray-600">
                ④ 회사는 이용자 간 또는 이용자와 제3자 상호간에 서비스를 매개로 하여 거래 등을 한 경우에는 책임이 면제됩니다.
              </p>
            </CardContent>
          </Card>

          {/* Section 13: 분쟁해결 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                제13조 (분쟁해결)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                ① 회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.
              </p>
              <p className="text-gray-600">
                ② 회사는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 
                다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.
              </p>
              <p className="text-gray-600">
                ③ 회사와 이용자 간에 발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 
                공정거래위원회 또는 시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.
              </p>
            </CardContent>
          </Card>

          {/* Section 14: 재판권 및 준거법 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                제14조 (재판권 및 준거법)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                ① 이 약관과 회사와 이용자 간의 서비스 이용계약에 대하여는 대한민국 법을 적용합니다.
              </p>
              <p className="text-gray-600">
                ② 서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우 민사소송법상의 관할법원에 제기합니다.
              </p>
            </CardContent>
          </Card>

          {/* 부칙 */}
          <Card className="bg-amber-50 border-amber-200 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800">
                부칙
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-700">
                이 약관은 2025년 1월 1일부터 시행합니다.
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                문의사항
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                본 약관에 대한 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-sm text-gray-600">• 상호: 집중</p>
                <p className="text-sm text-gray-600">• 대표자: 김영현</p>
                <p className="text-sm text-gray-600">• 주소: 전라남도 나주시 우정로 77</p>
                <p className="text-sm text-gray-600">• 전화: 010-5172-5645</p>
                <p className="text-sm text-gray-600">• 이메일: swmaestrong@gmail.com</p>
              </div>
            </CardContent>
          </Card>

          {/* Back to Home */}
          <div className="text-center pt-8">
            <Link href="/">
              <button className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                메인으로 돌아가기
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}