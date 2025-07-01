import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#ECECEC] relative overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50" />
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-yellow-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-4">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-xl animate-pulse" />
            <Image
              src="/icons/final_icon_128x128.png"
              alt="Pawcus Logo"
              width={80}
              height={80}
              className="relative z-10"
            />
          </div>
        </div>

        {/* 404 Message */}
        <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          페이지를 찾을 수 없습니다
        </h2>
        <p className="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700">
              <Home className="w-4 h-4 mr-2" />
              홈으로 돌아가기
            </Button>
          </Link>
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            이전 페이지로
          </Button>
        </div>
      </div>
    </div>
  )
}