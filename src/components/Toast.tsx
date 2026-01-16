'use client';

import React, { useEffect } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
    id: string;
    message: string;
    type: ToastType;
    duration?: number;
}

interface ToastItemProps {
    toast: Toast;
    onClose: (id: string) => void;
}

export default function ToastItem({ toast, onClose }: ToastItemProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(toast.id);
        }, toast.duration || 3000);

        return () => clearTimeout(timer);
    }, [toast, onClose]);

    const icons = {
        success: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        ),
        error: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        ),
        warning: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
        info: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    };

    const styles = {
        success: 'bg-[rgb(var(--color-success))] text-white',
        error: 'bg-[rgb(var(--color-error))] text-white',
        warning: 'bg-[rgb(var(--color-warning))] text-white',
        info: 'bg-[rgb(var(--color-info))] text-white',
    };

    return (
        <div
            className={`
        ${styles[toast.type]}
        px-4 py-3 rounded-lg shadow-lg
        flex items-center gap-3
        min-w-[300px] max-w-md
        animate-in slide-in-from-right
        backdrop-blur-sm
      `}
        >
            <div className="flex-shrink-0">
                {icons[toast.type]}
            </div>
            <p className="flex-1 text-sm font-medium">
                {toast.message}
            </p>
            <button
                onClick={() => onClose(toast.id)}
                className="flex-shrink-0 hover:opacity-75 transition-opacity"
                aria-label="Close notification"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}
