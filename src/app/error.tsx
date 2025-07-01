'use client'

export const dynamic = 'force-dynamic';

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { RefreshCw, Home, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#ECECEC] relative overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50" />
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-400/20 to-orange-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-red-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-4">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-full blur-xl animate-pulse" />
            <Image
              src="/icons/final_icon_128x128.png"
              alt="Pawcus Logo"
              width={80}
              height={80}
              className="relative z-10"
            />
          </div>
        </div>

        {/* Error Icon */}
        <div className="mb-6">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto animate-bounce" />
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          오류가 발생했습니다
        </h1>
        <p className="text-gray-600 mb-8">
          예상치 못한 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={reset}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg inline-flex items-center justify-center transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            다시 시도
          </button>
          <Link href="/" className="w-full sm:w-auto border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-lg inline-flex items-center justify-center transition-colors">
            <Home className="w-4 h-4 mr-2" />
            홈으로 돌아가기
          </Link>
        </div>

        {/* Error Details (development only) */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="text-sm text-gray-500 cursor-pointer">
              개발자 정보 (개발 환경에서만 표시)
            </summary>
            <pre className="mt-4 p-4 bg-gray-100 rounded-lg text-xs text-gray-800 overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}