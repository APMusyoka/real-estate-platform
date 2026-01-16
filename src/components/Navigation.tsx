'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components';

export default function Navigation() {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[rgb(var(--color-neutral-200))]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-[rgb(var(--color-primary-500))] to-[rgb(var(--color-primary-700))] rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-[rgb(var(--color-neutral-900))]" style={{ fontFamily: 'var(--font-display)' }}>
                            EstateHub
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/properties" className="text-[rgb(var(--color-neutral-700))] hover:text-[rgb(var(--color-primary-500))] font-medium transition-colors">
                            Properties
                        </Link>
                        <Link href="/agents" className="text-[rgb(var(--color-neutral-700))] hover:text-[rgb(var(--color-primary-500))] font-medium transition-colors">
                            Agents
                        </Link>
                        <Link href="/favorites" className="text-[rgb(var(--color-neutral-700))] hover:text-[rgb(var(--color-primary-500))] font-medium transition-colors">
                            Favorites
                        </Link>
                        <Link href="/about" className="text-[rgb(var(--color-neutral-700))] hover:text-[rgb(var(--color-primary-500))] font-medium transition-colors">
                            About
                        </Link>
                        <Link href="/contact" className="text-[rgb(var(--color-neutral-700))] hover:text-[rgb(var(--color-primary-500))] font-medium transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <Button variant="primary" size="sm">
                        List Property
                    </Button>
                </div>
            </div>
        </nav>
    );
}
