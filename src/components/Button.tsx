import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-[rgb(var(--color-primary-500))] text-white hover:bg-[rgb(var(--color-primary-600))] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0',
    secondary: 'bg-transparent text-[rgb(var(--color-primary-500))] border-2 border-[rgb(var(--color-primary-500))] hover:bg-[rgb(var(--color-primary-50))] hover:-translate-y-0.5',
    ghost: 'bg-transparent text-[rgb(var(--color-neutral-700))] hover:bg-[rgb(var(--color-neutral-100))]',
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
