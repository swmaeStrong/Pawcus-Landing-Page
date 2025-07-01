"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function PrivacyPage() {
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
            개인정보 처리방침
          </h1>
          <p className="text-xl text-gray-600">
            귀하의 개인정보를 소중하게 보호합니다
          </p>
          <p className="text-sm text-gray-500 mt-2">
            시행일: 2025년 1월 1일
          </p>
        </header>

        {/* Privacy Policy Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">
                개인정보 처리방침 개요
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">
                집중(이하 &apos;회사&apos;)은 이용자의 개인정보를 중요시하며, 「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 준수하고 있습니다. 
                회사는 개인정보 처리방침을 통하여 이용자가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
              </p>
            </CardContent>
          </Card>

          {/* Section 1: 수집하는 개인정보 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                1. 수집하는 개인정보 항목 및 수집방법
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">가. 수집하는 개인정보 항목</h4>
                <div className="ml-4 space-y-3">
                  <div>
                    <p className="font-medium text-gray-700">• 회원가입 시</p>
                    <p className="text-sm text-gray-600 ml-4">- 필수항목: 이메일 주소, 비밀번호, 닉네임</p>
                    <p className="text-sm text-gray-600 ml-4">- 선택항목: 프로필 사진</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">• 유료 서비스 이용 시</p>
                    <p className="text-sm text-gray-600 ml-4">- 필수항목: 결제 정보(신용카드 정보, 계좌 정보 등)</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">• 서비스 이용 과정에서 자동 수집</p>
                    <p className="text-sm text-gray-600 ml-4">- IP 주소, 쿠키, 서비스 이용 기록, 기기 정보</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">나. 개인정보 수집방법</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                  <li>홈페이지, 모바일 앱을 통한 회원가입</li>
                  <li>고객센터를 통한 상담 과정</li>
                  <li>이벤트 응모 및 참여</li>
                  <li>제휴사로부터의 제공</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: 개인정보 이용목적 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                2. 개인정보의 수집 및 이용목적
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="font-medium text-gray-700">• 회원관리</p>
                <p className="text-sm text-gray-600 ml-4">회원제 서비스 이용에 따른 본인확인, 개인식별, 불량회원의 부정이용 방지, 가입의사 확인, 연령확인, 분쟁조정을 위한 기록보존, 불만처리 등 민원처리, 고지사항 전달</p>
              </div>
              
              <div className="space-y-2">
                <p className="font-medium text-gray-700">• 서비스 제공</p>
                <p className="text-sm text-gray-600 ml-4">콘텐츠 제공, 맞춤 서비스 제공, 본인인증, 요금 결제 및 정산</p>
              </div>
              
              <div className="space-y-2">
                <p className="font-medium text-gray-700">• 마케팅 및 광고 활용</p>
                <p className="text-sm text-gray-600 ml-4">신규 서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공, 서비스의 유효성 확인, 접속빈도 파악, 회원의 서비스 이용에 대한 통계</p>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: 개인정보 보유기간 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                3. 개인정보의 보유 및 이용기간
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 
                단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div>
                  <p className="font-medium text-gray-700">• 계약 또는 청약철회 등에 관한 기록</p>
                  <p className="text-sm text-gray-600">- 보존이유: 전자상거래 등에서의 소비자보호에 관한 법률</p>
                  <p className="text-sm text-gray-600">- 보존기간: 5년</p>
                </div>
                
                <div>
                  <p className="font-medium text-gray-700">• 대금결제 및 재화 등의 공급에 관한 기록</p>
                  <p className="text-sm text-gray-600">- 보존이유: 전자상거래 등에서의 소비자보호에 관한 법률</p>
                  <p className="text-sm text-gray-600">- 보존기간: 5년</p>
                </div>
                
                <div>
                  <p className="font-medium text-gray-700">• 소비자의 불만 또는 분쟁처리에 관한 기록</p>
                  <p className="text-sm text-gray-600">- 보존이유: 전자상거래 등에서의 소비자보호에 관한 법률</p>
                  <p className="text-sm text-gray-600">- 보존기간: 3년</p>
                </div>
                
                <div>
                  <p className="font-medium text-gray-700">• 웹사이트 방문기록</p>
                  <p className="text-sm text-gray-600">- 보존이유: 통신비밀보호법</p>
                  <p className="text-sm text-gray-600">- 보존기간: 3개월</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: 개인정보 제3자 제공 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                4. 개인정보의 제3자 제공
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                <li>이용자들이 사전에 동의한 경우</li>
                <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 5: 개인정보 처리 위탁 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                5. 개인정보 처리 위탁
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                회사는 서비스 향상을 위해서 아래와 같이 개인정보를 위탁하고 있으며, 
                관계 법령에 따라 위탁계약 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-medium text-gray-700">수탁업체</th>
                      <th className="text-left py-2 font-medium text-gray-700">위탁 업무 내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">AWS</td>
                      <td className="py-2 text-gray-600">데이터 보관 및 서버 운영</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-600">결제대행사</td>
                      <td className="py-2 text-gray-600">결제 처리 및 정산</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Section 6: 이용자의 권리 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                6. 이용자 및 법정대리인의 권리와 행사방법
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며, 
                회원탈퇴를 요청할 수도 있습니다.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">이용자의 권리</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>개인정보 열람 요구</li>
                  <li>오류 등이 있을 경우 정정 요구</li>
                  <li>삭제 요구</li>
                  <li>처리정지 요구</li>
                </ul>
              </div>
              
              <p className="text-sm text-gray-600">
                개인정보 조회, 수정을 위해서는 &apos;개인정보변경&apos;(또는 &apos;회원정보수정&apos; 등)을, 
                가입해지(동의철회)를 위해서는 &quot;회원탈퇴&quot;를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다.
              </p>
            </CardContent>
          </Card>

          {/* Section 7: 개인정보 보호조치 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                7. 개인정보의 안전성 확보조치
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:
              </p>
              
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-700">• 관리적 조치</p>
                  <p className="text-sm text-gray-600 ml-4">내부관리계획 수립 및 시행, 정기적 직원 교육</p>
                </div>
                
                <div>
                  <p className="font-medium text-gray-700">• 기술적 조치</p>
                  <p className="text-sm text-gray-600 ml-4">개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 개인정보의 암호화</p>
                </div>
                
                <div>
                  <p className="font-medium text-gray-700">• 물리적 조치</p>
                  <p className="text-sm text-gray-600 ml-4">전산실, 자료보관실 등의 접근통제</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 8: 개인정보 보호책임자 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                8. 개인정보 보호책임자
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 
                아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <h4 className="font-semibold text-gray-800">개인정보 보호책임자</h4>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-600">• 성명: 김영현</p>
                  <p className="text-gray-600">• 직책: 대표</p>
                  <p className="text-gray-600">• 연락처: 010-5172-5645</p>
                  <p className="text-gray-600">• 이메일: swmaestrong@gmail.com</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600">
                이용자는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 
                개인정보 보호책임자에게 문의하실 수 있습니다. 회사는 이용자의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
              </p>
            </CardContent>
          </Card>

          {/* Section 9: 정책 변경 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                9. 개인정보 처리방침의 변경
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                이 개인정보 처리방침은 2025년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 
                변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
              </p>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-800">
                  회사는 개인정보 처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.
                </p>
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