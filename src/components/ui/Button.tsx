import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  variant = 'primary',
  children,
  className = '',
  size = 'md',
  ...props
}: ButtonProps) => {
  const baseStyles =
    'relative rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center';

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const variants = {
    primary:
      'bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40',
    outline:
      'border border-white/10 text-white hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/5',
    ghost: 'text-gray-400 hover:text-blue-400 hover:bg-blue-500/5',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} group`}
      {...props}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* Content */}
      <div className="relative z-10 flex items-center gap-2">{children}</div>

      {/* Shine effect */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000" />
      </div>
    </button>
  );
};

export default Button;
