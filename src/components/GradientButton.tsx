import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface GradientButtonProps {
  to?: string;
  onClick?: () => void;
}

export function GradientButton({ to = '/contact', onClick }: GradientButtonProps) {
  const buttonContent = (
    <button 
      onClick={onClick}
      className="relative w-[180px] h-[52px] bg-[#1f2a38] text-white rounded-[50px] border-none outline-none cursor-pointer overflow-hidden group transition-all"
      style={{ boxShadow: '0 15px 30px rgba(31, 42, 56, 0.3)' }}
    >
      <span className="btn-text-one absolute w-full left-0 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider transition-[top] duration-500 ease-in-out top-1/2 -translate-y-1/2">
        Get in Touch
        <ArrowRight size={16} className="animate-icon-pulse" />
      </span>
      <span className="btn-text-two absolute w-full left-0 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider transition-[top] duration-500 ease-in-out top-[150%] -translate-y-1/2">
        <ArrowLeft size={16} className="animate-icon-pulse" />
        Let's Work!
      </span>
    </button>
  );

  if (to && !onClick) {
    return <Link to={to}>{buttonContent}</Link>;
  }

  return buttonContent;
}
