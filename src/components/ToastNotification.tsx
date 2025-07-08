import { CheckCircle, Sparkles } from 'lucide-react';

interface ToastNotificationProps {
  show: boolean;
  message: string;
  type: 'success' | 'error';
}

export default function ToastNotification({ show, message, type }: ToastNotificationProps) {
  if (!show) return null;

  return (
    <aside 
      className={`fixed top-20 right-4 z-50 px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right duration-500 border ${
        type === 'success' 
          ? 'bg-gradient-to-r from-emerald-500 to-green-600 border-emerald-400/50' 
          : 'bg-gradient-to-r from-red-500 to-red-600 border-red-400/50'
      } text-white`} 
      role="alert" 
      aria-live="polite"
    >
      <CheckCircle className="h-5 w-5" aria-hidden="true" />
      <span className="font-medium">{message}</span>
      {type === 'success' && <Sparkles className="h-4 w-4" aria-hidden="true" />}
    </aside>
  );
}