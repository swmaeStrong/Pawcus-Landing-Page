import { redirect } from 'next/navigation';

interface InviteCodePageProps {
  params: {
    locale: string;
    code: string;
  };
}

export default function InviteCodePage({ params }: InviteCodePageProps) {
  const { locale, code } = params;


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">초대 코드: {code}</h1>
        <p className="text-gray-600 mb-6">초대 코드가 확인되었습니다.</p>
      </div>
    </div>
  );
}