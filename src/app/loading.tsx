import Image from 'next/image'
import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#ECECEC] relative overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50" />
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-yellow-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-xl animate-pulse" />
            <Image
              src="/icons/final_icon_128x128.png"
              alt="Pawcus Logo"
              width={80}
              height={80}
              className="relative z-10 animate-pulse"
            />
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="mb-4">
          <Loader2 className="w-8 h-8 text-purple-600 mx-auto animate-spin" />
        </div>

        {/* Loading Text */}
        <p className="text-lg text-gray-600 animate-pulse">
          로딩 중...
        </p>
      </div>
    </div>
  )
}