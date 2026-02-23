import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-brand-red hover:bg-brand-maroon text-white focus:ring-brand-red',
    secondary: 'bg-brand-maroon hover:bg-brand-red text-white focus:ring-brand-maroon',
    ghost: 'bg-transparent hover:bg-dark-500/10 text-dark-500 border border-dark-300 hover:border-dark-400 focus:ring-dark-300',
  };

  const sizeStyles = {
    small: 'text-sm px-4 py-2',
    medium: 'px-5 py-2.5',
    large: 'text-lg px-6 py-3',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
