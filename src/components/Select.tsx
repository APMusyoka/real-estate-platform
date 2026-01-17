'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface Option {
    value: string | number;
    label: string;
}

interface SelectProps {
    value: string | number;
    onChange: (value: any) => void;
    options: Option[];
    placeholder?: string;
    label?: string;
    className?: string;
}

export default function Select({
    value,
    onChange,
    options,
    placeholder = 'Select option',
    className = '',
}: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const selectedOption = options.find((opt) => opt.value === value);

    const handleSelect = (optionValue: string | number) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <div className={`relative ${className}`} ref={containerRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    w-full px-4 py-2.5 rounded-lg border text-left flex items-center justify-between transition-all duration-200
                    bg-white text-[rgb(var(--color-neutral-900))]
                    ${isOpen
                        ? 'border-[rgb(var(--color-primary-500))] ring-4 ring-[rgb(var(--color-primary-500)/0.1)]'
                        : 'border-[rgb(var(--color-neutral-300))] hover:border-[rgb(var(--color-primary-500))]'
                    }
                    outline-none
                `}
            >
                <span className={selectedOption ? 'text-[rgb(var(--color-neutral-900))]' : 'text-[rgb(var(--color-neutral-400))]'}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown
                    className={`
                        w-5 h-5 text-[rgb(var(--color-neutral-500))] transition-transform duration-200
                        ${isOpen ? 'rotate-180' : ''}
                    `}
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-lg border border-[rgb(var(--color-neutral-200))] shadow-xl z-50 max-h-60 overflow-y-auto animate-in fade-in zoom-in-95 duration-100">
                    <ul className="py-1">
                        {options.map((option) => (
                            <li key={String(option.value)}>
                                <button
                                    type="button"
                                    onClick={() => handleSelect(option.value)}
                                    className={`
                                        w-full text-left px-4 py-2.5 text-sm transition-colors
                                        ${option.value === value
                                            ? 'bg-[rgb(var(--color-primary-50))] text-[rgb(var(--color-primary-700))] font-medium'
                                            : 'text-[rgb(var(--color-neutral-700))] hover:bg-[rgb(var(--color-neutral-50))] hover:text-[rgb(var(--color-neutral-900))]'
                                        }
                                    `}
                                >
                                    {option.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
