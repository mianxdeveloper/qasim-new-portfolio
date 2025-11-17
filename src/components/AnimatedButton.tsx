import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, LucideIcon } from 'lucide-react';

interface AnimatedButtonProps {
  text1: string;
  text2: string;
  to?: string;
  onClick?: () => void;
  icon1?: LucideIcon;
  icon2?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

export function AnimatedButton({ 
  text1, 
  text2, 
  to, 
  onClick, 
  icon1: Icon1 = ArrowRight,
  icon2: Icon2 = ArrowLeft,
  variant = 'primary',
  type = 'button',
  fullWidth = false,
  size = 'md',
  className = ''
}: AnimatedButtonProps) {
  
  const sizeClasses = {
    xs: `h-[36px] px-4 min-w-[120px]`,
    sm: `h-[42px] px-5 min-w-[140px]`,
    md: `h-[52px] px-8 min-w-[180px]`,
    lg: `h-[60px] px-10 min-w-[200px]`,
  };
  
  const textSizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-base',
  };
  
  const iconSizeMap = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
  };
  
  const baseClasses = `relative ${fullWidth ? 'w-full' : 'w-auto'} ${sizeClasses[size]} text-white rounded-full border-none outline-none cursor-pointer overflow-hidden group transition-all`;
  
  const variantClasses = {
    primary: 'bg-[#1f2a38]',
    secondary: 'bg-lime-500 text-gray-900',
    outline: 'bg-transparent border-2 border-[#1f2a38] text-[#1f2a38]',
  };
  
  const shadowStyle = variant === 'primary' && size !== 'sm' && size !== 'xs' ? '0 15px 30px rgba(0, 0, 0, 0.5)' : 'none';
  
  const buttonContent = (
    <button 
      onClick={onClick}
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ boxShadow: shadowStyle }}
    >
      <span className={`btn-text-one absolute w-full left-0 flex items-center justify-center gap-2 ${textSizeClasses[size]} font-medium uppercase tracking-wider transition-[top] duration-500 ease-in-out top-1/2 -translate-y-1/2`}>
        {text1}
        {Icon1 && <Icon1 size={iconSizeMap[size]} className="animate-icon-pulse" />}
      </span>
      <span className={`btn-text-two absolute w-full left-0 flex items-center justify-center gap-2 ${textSizeClasses[size]} font-medium uppercase tracking-wider transition-[top] duration-500 ease-in-out top-[150%] -translate-y-1/2`}>
        {Icon2 && <Icon2 size={iconSizeMap[size]} className="animate-icon-pulse" />}
        {text2}
      </span>
    </button>
  );

  if (to && !onClick) {
    return <Link to={to} className="inline-block">{buttonContent}</Link>;
  }

  return buttonContent;
}
