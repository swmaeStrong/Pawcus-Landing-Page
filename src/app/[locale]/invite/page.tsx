import { redirect } from 'next/navigation';

interface InviteCodePageProps {
  params: {
    locale: string;
  };
}

export default function InviteCodePage({ params }: InviteCodePageProps) {
  const { locale } = params;


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600 mb-6">초대 코드가 확인되었습니다.</p>
      </div>
    </div>
  );
}