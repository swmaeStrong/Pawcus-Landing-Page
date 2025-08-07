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

export default function PrivacyPage() {
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
            {t('privacy.title')}
          </h1>
          <p className={`text-xl ${getTextStyle('secondary')}`}>
            {t('privacy.subtitle')}
          </p>
          <p className={`${getTextStyle('small')} ${getTextStyle('muted')} mt-2`}>
            {t('privacy.effectiveDate')}
          </p>
        </header>

        {/* Privacy Policy Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-700">
                {t('privacy.overview.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">
                {t('privacy.overview.content')}
              </p>
            </CardContent>
          </Card>

          {/* Section 1: 개인정보의 처리 목적 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('privacy.sections.section1.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                {t('privacy.sections.section1.content')}
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    {t('privacy.sections.section1.purposes.membership.title')}
                  </h4>
                  <p className="text-sm text-gray-600 ml-6">
                    {t('privacy.sections.section1.purposes.membership.description')}
                  </p>
                </div>
                
                <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    {t('privacy.sections.section1.purposes.service.title')}
                  </h4>
                  <p className="text-sm text-gray-600 ml-6">
                    {t('privacy.sections.section1.purposes.service.description')}
                  </p>
                </div>
                
                <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    {t('privacy.sections.section1.purposes.marketing.title')}
                  </h4>
                  <p className="text-sm text-gray-600 ml-6">
                    {t('privacy.sections.section1.purposes.marketing.description')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: 처리하는 개인정보의 항목 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('privacy.sections.section2.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                {t('privacy.sections.section2.content')}
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50">
                  <h4 className="font-semibold text-gray-700 mb-2">{t('privacy.sections.section2.categories.membership.title')}</h4>
                  <div className="ml-4 space-y-2">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium text-gray-700">{t('privacy.sections.section2.categories.membership.required')}</span> {t('privacy.sections.section2.categories.membership.requiredItems')}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium text-gray-700">{t('privacy.sections.section2.categories.membership.optional')}</span> {t('privacy.sections.section2.categories.membership.optionalItems')}
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50">
                  <h4 className="font-semibold text-gray-700 mb-2">{t('privacy.sections.section2.categories.subscription.title')}</h4>
                  <p className="text-sm text-gray-600 ml-4">
                    <span className="font-medium text-gray-700">{t('privacy.sections.section2.categories.subscription.required')}</span> {t('privacy.sections.section2.categories.subscription.requiredItems')}
                  </p>
                </div>
                
                <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50">
                  <h4 className="font-semibold text-gray-700 mb-2">{t('privacy.sections.section2.categories.automatic.title')}</h4>
                  <p className="text-sm text-gray-600 ml-4">
                    {t('privacy.sections.section2.categories.automatic.items')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: 개인정보의 처리 및 보유 기간 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('privacy.sections.section3.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                {t('privacy.sections.section3.content')}
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50">
                  <h4 className="font-semibold text-gray-700 mb-2">{t('privacy.sections.section3.periods.membership.title')}</h4>
                  <p className="text-sm text-gray-600">
                    {t('privacy.sections.section3.periods.membership.period')}
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600 ml-4 mt-2 space-y-1">
                    <li>{t('privacy.sections.section3.periods.membership.exception1')}</li>
                    <li>{t('privacy.sections.section3.periods.membership.exception2')}</li>
                  </ul>
                </div>
                
                <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50">
                  <h4 className="font-semibold text-gray-700 mb-2">{t('privacy.sections.section3.periods.subscription.title')}</h4>
                  <p className="text-sm text-gray-600">
                    {t('privacy.sections.section3.periods.subscription.period')}
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="bg-gray-200/50 rounded p-3">
                      <p className="text-sm text-gray-700 font-medium">{t('privacy.sections.section3.periods.subscription.ecommerce.title')}</p>
                      <ul className="list-disc list-inside text-sm text-gray-500 ml-4 mt-1">
                        <li>{t('privacy.sections.section3.periods.subscription.ecommerce.item1')}</li>
                        <li>{t('privacy.sections.section3.periods.subscription.ecommerce.item2')}</li>
                        <li>{t('privacy.sections.section3.periods.subscription.ecommerce.item3')}</li>
                      </ul>
                    </div>
                    <div className="bg-gray-200/50 rounded p-3">
                      <p className="text-sm text-gray-700 font-medium">{t('privacy.sections.section3.periods.subscription.telecom.title')}</p>
                      <ul className="list-disc list-inside text-sm text-gray-500 ml-4 mt-1">
                        <li>{t('privacy.sections.section3.periods.subscription.telecom.item1')}</li>
                        <li>{t('privacy.sections.section3.periods.subscription.telecom.item2')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: 개인정보의 파기 절차 및 파기 방법 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('privacy.dataDestruction.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                {t('privacy.dataDestruction.content')}
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50">
                  <h4 className="font-semibold text-gray-700 mb-2">{t('privacy.dataDestruction.procedure.title')}</h4>
                  <p className="text-sm text-gray-600">
                    {t('privacy.dataDestruction.procedure.description')}
                  </p>
                </div>
                
                <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50">
                  <h4 className="font-semibold text-gray-700 mb-2">{t('privacy.dataDestruction.deadline.title')}</h4>
                  <p className="text-sm text-gray-600">
                    {t('privacy.dataDestruction.deadline.description')}
                  </p>
                </div>
                
                <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50">
                  <h4 className="font-semibold text-gray-700 mb-2">{t('privacy.dataDestruction.method.title')}</h4>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      {t('privacy.dataDestruction.method.electronic')}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t('privacy.dataDestruction.method.paper')}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 5: 정보주체의 권리·의무 및 행사방법 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('privacy.userRights.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                {t('privacy.userRights.content')}
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50">
                  <h4 className="font-semibold text-gray-700 mb-2">{t('privacy.userRights.rights.title')}</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 ml-4 space-y-1">
                    <li>{t('privacy.userRights.rights.items.access')}</li>
                    <li>{t('privacy.userRights.rights.items.correction')}</li>
                    <li>{t('privacy.userRights.rights.items.deletion')}</li>
                    <li>{t('privacy.userRights.rights.items.stopProcessing')}</li>
                  </ul>
                </div>
                
                <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50">
                  <h4 className="font-semibold text-gray-700 mb-2">{t('privacy.userRights.exercise.title')}</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>{t('privacy.userRights.exercise.method1')}</p>
                    <p>{t('privacy.userRights.exercise.method2')}</p>
                    <p>{t('privacy.userRights.exercise.method3')}</p>
                    <p>{t('privacy.userRights.exercise.method4')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 6: 개인정보의 제3자 제공 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('privacy.thirdParty.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                {t('privacy.thirdParty.content')}
              </p>
              
              <ul className="list-disc list-inside text-sm text-gray-600 ml-4 space-y-1">
                <li>{t('privacy.thirdParty.exception1')}</li>
                <li>{t('privacy.thirdParty.exception2')}</li>
              </ul>
              
              <div className="bg-gray-100/50 rounded-lg p-4 mt-4 border border-gray-300/50">
                <h4 className="font-semibold text-gray-700 mb-2">
                  {t('privacy.thirdParty.current.title')}
                </h4>
                <p className="text-sm text-gray-600">
                  {t('privacy.thirdParty.current.description')}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 7: 개인정보 처리 위탁 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('privacy.consignment.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                {t('privacy.consignment.content')}
              </p>
            </CardContent>
          </Card>

          {/* Section 8: 개인정보의 국외 이전 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('privacy.internationalTransfer.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                {t('privacy.internationalTransfer.content')}
              </p>
            </CardContent>
          </Card>

          {/* Section 9: 개인정보 보호조치 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('privacy.securityMeasures.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                {t('privacy.securityMeasures.content')}
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    {t('privacy.securityMeasures.administrative.title')}
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 ml-6 space-y-1">
                    <li>{t('privacy.securityMeasures.administrative.item1')}</li>
                    <li>{t('privacy.securityMeasures.administrative.item2')}</li>
                    <li>{t('privacy.securityMeasures.administrative.item3')}</li>
                    <li>{t('privacy.securityMeasures.administrative.item4')}</li>
                  </ul>
                </div>
                
                <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    {t('privacy.securityMeasures.technical.title')}
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 ml-6 space-y-1">
                    <li>{t('privacy.securityMeasures.technical.item1')}</li>
                    <li>{t('privacy.securityMeasures.technical.item2')}</li>
                    <li>{t('privacy.securityMeasures.technical.item3')}</li>
                    <li>{t('privacy.securityMeasures.technical.item4')}</li>
                    <li>{t('privacy.securityMeasures.technical.item5')}</li>
                    <li>{t('privacy.securityMeasures.technical.item6')}</li>
                  </ul>
                </div>
                
                <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    {t('privacy.securityMeasures.physical.title')}
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 ml-6 space-y-1">
                    <li>{t('privacy.securityMeasures.physical.item1')}</li>
                    <li>{t('privacy.securityMeasures.physical.item2')}</li>
                    <li>{t('privacy.securityMeasures.physical.item3')}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 10: 개정 전 고지 의무 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                {t('privacy.policyChanges.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                {t('privacy.policyChanges.content')}
              </p>
              
              <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50">
                <h4 className="font-semibold text-gray-700 mb-2">{t('privacy.policyChanges.notice.title')}</h4>
                <p className="text-sm text-gray-600">
                  {t('privacy.policyChanges.notice.description')}
                </p>
              </div>
              
            </CardContent>
          </Card>

          {/* Section 11: 개인정보 보호책임자 및 담당자 연락처 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                11. {t('privacy.responsiblePerson.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                {t('privacy.responsiblePersonDetailed.content')}
              </p>
              
              <div className="flex justify-center">
                <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-300/50 w-full max-w-md">
                  <h4 className="font-semibold text-gray-700 mb-3">
                    {t('privacy.responsiblePerson.title')}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-700">성명:</span> {t('privacy.responsiblePerson.name')}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-700">직책:</span> {t('privacy.responsiblePerson.position')}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-700">연락처:</span> {t('privacy.responsiblePerson.phone')}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-700">이메일:</span> {t('privacy.responsiblePerson.email')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50/50 border border-blue-300/50 rounded-lg p-4 mt-4">
                <p className="text-sm text-gray-700">
                  {t('privacy.responsiblePersonDetailed.notice')}
                </p>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-700 mb-3">{t('privacy.additionalInquiries.title')}</h4>
                <p className="text-sm text-gray-600 mb-3">
                  {t('privacy.additionalInquiries.description')}
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• {t('privacy.additionalInquiries.agency1')}</li>
                  <li>• {t('privacy.additionalInquiries.agency2')}</li>
                  <li>• {t('privacy.additionalInquiries.agency3')}</li>
                  <li>• {t('privacy.additionalInquiries.agency4')}</li>
                </ul>
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