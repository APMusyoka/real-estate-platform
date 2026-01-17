'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components';
import { Home, Menu, X } from 'lucide-react';

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[rgb(var(--color-neutral-200))]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-linear-to-br from-[rgb(var(--color-primary-500))] to-[rgb(var(--color-primary-700))] rounded-lg flex items-center justify-center">
                            <Home className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-[rgb(var(--color-neutral-900))]" style={{ fontFamily: 'var(--font-display)' }}>
                            EstateHub
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
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

                    {/* CTA Button (Desktop) */}
                    <div className="hidden md:block">
                        <Button variant="primary" size="sm">
                            List Property
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-[rgb(var(--color-neutral-700))] hover:text-[rgb(var(--color-primary-500))] p-2 focus:outline-none"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-[rgb(var(--color-neutral-200))] animate-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-4 space-y-3">
                        <Link href="/properties"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-lg text-base font-medium text-[rgb(var(--color-neutral-700))] hover:text-[rgb(var(--color-primary-500))] hover:bg-[rgb(var(--color-neutral-50))] transition-colors">
                            Properties
                        </Link>
                        <Link href="/agents"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-lg text-base font-medium text-[rgb(var(--color-neutral-700))] hover:text-[rgb(var(--color-primary-500))] hover:bg-[rgb(var(--color-neutral-50))] transition-colors">
                            Agents
                        </Link>
                        <Link href="/favorites"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-lg text-base font-medium text-[rgb(var(--color-neutral-700))] hover:text-[rgb(var(--color-primary-500))] hover:bg-[rgb(var(--color-neutral-50))] transition-colors">
                            Favorites
                        </Link>
                        <Link href="/about"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-lg text-base font-medium text-[rgb(var(--color-neutral-700))] hover:text-[rgb(var(--color-primary-500))] hover:bg-[rgb(var(--color-neutral-50))] transition-colors">
                            About
                        </Link>
                        <Link href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-lg text-base font-medium text-[rgb(var(--color-neutral-700))] hover:text-[rgb(var(--color-primary-500))] hover:bg-[rgb(var(--color-neutral-50))] transition-colors">
                            Contact
                        </Link>
                        <div className="pt-2">
                            <Button variant="primary" size="sm" className="w-full justify-center">
                                List Property
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
