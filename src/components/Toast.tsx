'use client';

import React, { useEffect } from 'react';
import { Check, AlertCircle, AlertTriangle, Info, X } from 'lucide-react';

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
        success: <Check className="w-5 h-5" />,
        error: <AlertCircle className="w-5 h-5" />,
        warning: <AlertTriangle className="w-5 h-5" />,
        info: <Info className="w-5 h-5" />,
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
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}
