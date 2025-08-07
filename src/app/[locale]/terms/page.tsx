"use client";

export const dynamic = 'force-dynamic';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {Link as IntlLink} from '@/routing';
import Navigation from '@/components/Navigation';
import { styles, createCardStyle, getHeadingStyle, getTextStyle } from '@/lib/styles';
import { useTranslations } from 'next-intl';

export default function TermsPage() {
  const t = useTranslations();
  
  return (
    <div className={styles.pageBackground}>
      {/* Navigation */}
      <Navigation />
      
      {/* Background */}
      <div className={styles.gradientBackground} />
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <main className={`${styles.cardContainer} py-16 pt-32 relative z-10`}>
        {/* Header */}
        <header className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse" />
              <Image
                src="/icons/128-mac.png"
                alt="Pomocore Logo"
                width={80}
                height={80}
                className="relative z-10"
              />
            </div>
          </div>
          
          <h1 className={`${getHeadingStyle(3)} ${styles.gradientPrimary} mb-4`}>
            {t('terms.title')}
          </h1>
          <p className={`text-xl ${getTextStyle('secondary')}`}>
            {t('terms.subtitle')}
          </p>
          <p className={`${getTextStyle('small')} ${getTextStyle('muted')} mt-2`}>
            {t('terms.effectiveDate')}
          </p>
        </header>

        {/* Terms Content */}
        <div className="space-y-8">
          {/* Section 1: 목적 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('terms.sections.section1.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">
                {t('terms.sections.section1.content')}
              </p>
            </CardContent>
          </Card>

          {/* Section 2: 용어의 정의 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('terms.sections.section2.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">{t('terms.sections.section2.content')}</p>
              
              <div className="space-y-3 ml-4">
                <div>
                  <span className="font-medium text-gray-700">1. {t('terms.sections.section2.definitions.service.term')}</span>
                  <p className="text-sm text-gray-600 ml-4">
                    {t('terms.sections.section2.definitions.service.definition')}
                  </p>
                </div>
                
                <div>
                  <span className="font-medium text-gray-700">2. {t('terms.sections.section2.definitions.user.term')}</span>
                  <p className="text-sm text-gray-600 ml-4">
                    {t('terms.sections.section2.definitions.user.definition')}
                  </p>
                </div>
                
                <div>
                  <span className="font-medium text-gray-700">3. {t('terms.sections.section2.definitions.member.term')}</span>
                  <p className="text-sm text-gray-600 ml-4">
                    {t('terms.sections.section2.definitions.member.definition')}
                  </p>
                </div>
                
                <div>
                  <span className="font-medium text-gray-700">4. {t('terms.sections.section2.definitions.id.term')}</span>
                  <p className="text-sm text-gray-600 ml-4">
                    {t('terms.sections.section2.definitions.id.definition')}
                  </p>
                </div>
                
                <div>
                  <span className="font-medium text-gray-700">5. {t('terms.sections.section2.definitions.password.term')}</span>
                  <p className="text-sm text-gray-600 ml-4">
                    {t('terms.sections.section2.definitions.password.definition')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: 약관의 게시와 개정 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('terms.sections.section3.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="text-gray-600">
                  {t('terms.sections.section3.item1')}
                </p>
                <p className="text-gray-600">
                  {t('terms.sections.section3.item2')}
                </p>
                <p className="text-gray-600">
                  {t('terms.sections.section3.item3')}
                </p>
                <p className="text-gray-600">
                  {t('terms.sections.section3.item4')}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: 서비스 이용계약의 체결 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('terms.sections.section4.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">{t('terms.sections.section4.subtitle1')}</h4>
                <p className="text-gray-600 ml-4">
                  {t('terms.sections.section4.content1')}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">{t('terms.sections.section4.subtitle2')}</h4>
                <p className="text-gray-600 ml-4">
                  {t('terms.sections.section4.content2')}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">{t('terms.sections.section4.subtitle3')}</h4>
                <p className="text-gray-600 ml-4">
                  {t('terms.sections.section4.content3')}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2 ml-8 space-y-1">
                  <li>{t('terms.sections.section4.exception1')}</li>
                  <li>{t('terms.sections.section4.exception2')}</li>
                  <li>{t('terms.sections.section4.exception3')}</li>
                  <li>{t('terms.sections.section4.exception4')}</li>
                  <li>{t('terms.sections.section4.exception5')}</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 5: 회원정보의 변경 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('terms.sections.section5.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-gray-600">
                {t('terms.sections.section5.item1')}
              </p>
              <p className="text-gray-600">
                {t('terms.sections.section5.item2')}
              </p>
              <p className="text-gray-600">
                {t('terms.sections.section5.item3')}
              </p>
            </CardContent>
          </Card>

          {/* Section 6: 서비스의 제공 및 변경 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('terms.sections.section6.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">{t('terms.sections.section6.subtitle1')}</h4>
                <p className="text-gray-600">{t('terms.sections.section6.content1')}</p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2 ml-4 space-y-1">
                  <li>{t('terms.sections.section6.service1')}</li>
                  <li>{t('terms.sections.section6.service2')}</li>
                  <li>{t('terms.sections.section6.service3')}</li>
                  <li>{t('terms.sections.section6.service4')}</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">{t('terms.sections.section6.subtitle2')}</h4>
                <p className="text-gray-600">
                  {t('terms.sections.section6.content2')}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">{t('terms.sections.section6.subtitle3')}</h4>
                <p className="text-gray-600">
                  {t('terms.sections.section6.content3')}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 7: 서비스 이용 제한 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('terms.sections.section7.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                {t('terms.sections.section7.content')}
              </p>
              
              <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50">
                <h4 className="font-semibold text-gray-700 mb-2">{t('terms.sections.section7.subtitle')}</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>{t('terms.sections.section7.restriction1')}</li>
                  <li>{t('terms.sections.section7.restriction2')}</li>
                  <li>{t('terms.sections.section7.restriction3')}</li>
                  <li>{t('terms.sections.section7.restriction4')}</li>
                  <li>{t('terms.sections.section7.restriction5')}</li>
                  <li>{t('terms.sections.section7.restriction6')}</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 8: 이용자의 의무 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('terms.sections.section8.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600 font-medium">{t('terms.sections.section8.content')}</p>
              
              <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50">
                <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2">
                  <li>{t('terms.sections.section8.prohibition1')}</li>
                  <li>{t('terms.sections.section8.prohibition2')}</li>
                  <li>{t('terms.sections.section8.prohibition3')}</li>
                  <li>{t('terms.sections.section8.prohibition4')}</li>
                  <li>{t('terms.sections.section8.prohibition5')}</li>
                  <li>{t('terms.sections.section8.prohibition6')}</li>
                  <li>{t('terms.sections.section8.prohibition7')}</li>
                  <li>{t('terms.sections.section8.prohibition8')}</li>
                  <li>{t('terms.sections.section8.prohibition9')}</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Section 9: 저작권의 귀속 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('terms.sections.section9.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                {t('terms.sections.section9.item1')}
              </p>
              <p className="text-gray-600">
                {t('terms.sections.section9.item2')}
              </p>
              <p className="text-gray-600">
                {t('terms.sections.section9.item3')}
              </p>
            </CardContent>
          </Card>

          {/* Section 10: 계약해제, 해지 등 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('terms.sections.section10.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">{t('terms.sections.section10.subtitle1')}</h4>
                <p className="text-gray-600 ml-4">
                  {t('terms.sections.section10.content1')}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">{t('terms.sections.section10.subtitle2')}</h4>
                <p className="text-gray-600 ml-4">
                  {t('terms.sections.section10.content2')}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2 ml-8 space-y-1">
                  <li>{t('terms.sections.section10.reason1')}</li>
                  <li>{t('terms.sections.section10.reason2')}</li>
                  <li>{t('terms.sections.section10.reason3')}</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 11: 손해배상 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('terms.sections.section11.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                {t('terms.sections.section11.item1')}
              </p>
              <p className="text-gray-600">
                {t('terms.sections.section11.item2')}
              </p>
              <p className="text-gray-600">
                {t('terms.sections.section11.item3')}
              </p>
            </CardContent>
          </Card>

          {/* Section 12: 면책조항 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('terms.sections.section12.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                {t('terms.sections.section12.item1')}
              </p>
              <p className="text-gray-600">
                {t('terms.sections.section12.item2')}
              </p>
              <p className="text-gray-600">
                {t('terms.sections.section12.item3')}
              </p>
              <p className="text-gray-600">
                {t('terms.sections.section12.item4')}
              </p>
            </CardContent>
          </Card>

          {/* Section 13: 분쟁해결 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('terms.sections.section13.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                {t('terms.sections.section13.item1')}
              </p>
              <p className="text-gray-600">
                {t('terms.sections.section13.item2')}
              </p>
              <p className="text-gray-600">
                {t('terms.sections.section13.item3')}
              </p>
            </CardContent>
          </Card>

          {/* Section 14: 재판권 및 준거법 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('terms.sections.section14.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                {t('terms.sections.section14.item1')}
              </p>
              <p className="text-gray-600">
                {t('terms.sections.section14.item2')}
              </p>
            </CardContent>
          </Card>

          {/* 부칙 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('terms.addendum')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {t('terms.addendumContent')}
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('terms.contact.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                {t('terms.contact.description')}
              </p>
              <div className="bg-gray-100/50 rounded-lg p-4 space-y-2 border border-gray-300/50">
                <p className="text-sm text-gray-600">• 상호: {t('terms.contact.company')}</p>
                <p className="text-sm text-gray-600">• 대표자: {t('terms.contact.representative')}</p>
                <p className="text-sm text-gray-600">• 주소: {t('terms.contact.address')}</p>
                <p className="text-sm text-gray-600">• 전화: {t('terms.contact.phone')}</p>
                <p className="text-sm text-gray-600">• 이메일: {t('terms.contact.email')}</p>
              </div>
            </CardContent>
          </Card>

          {/* Back to Home */}
          <div className="text-center pt-8">
            <IntlLink href="/" className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors shadow-lg border border-gray-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('common.backToHome')}
            </IntlLink>
          </div>
        </div>
      </main>
    </div>
  );
}