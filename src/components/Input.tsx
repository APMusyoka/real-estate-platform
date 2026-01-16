import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

export default function Input({
    label,
    error,
    helperText,
    className = '',
    ...props
}: InputProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                    {label}
                </label>
            )}
            <input
                className={`
          w-full px-4 py-3 rounded-lg border transition-all duration-200
          bg-white text-[rgb(var(--color-neutral-900))]
          ${error
                        ? 'border-[rgb(var(--color-error))] focus:ring-[rgb(var(--color-error)/0.1)] focus:border-[rgb(var(--color-error))]'
                        : 'border-[rgb(var(--color-neutral-300))] focus:border-[rgb(var(--color-primary-500))] focus:ring-4 focus:ring-[rgb(var(--color-primary-500)/0.1)]'
                    }
          outline-none
          placeholder:text-[rgb(var(--color-neutral-400))]
          disabled:bg-[rgb(var(--color-neutral-100))] disabled:cursor-not-allowed
          ${className}
        `}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-[rgb(var(--color-error))]">{error}</p>
            )}
            {helperText && !error && (
                <p className="mt-1 text-sm text-[rgb(var(--color-neutral-500))]">{helperText}</p>
            )}
        </div>
    );
}
