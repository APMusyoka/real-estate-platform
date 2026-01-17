'use client';

import React from 'react';
import Link from 'next/link';
import Button from './Button';
import { Home } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[rgb(var(--color-neutral-900))] text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-linear-to-br from-[rgb(var(--color-primary-500))] to-[rgb(var(--color-primary-700))] rounded-lg flex items-center justify-center">
                                <Home className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                                EstateHub
                            </span>
                        </div>
                        <p className="text-[rgb(var(--color-neutral-400))] max-w-[200px]">
                            Your trusted partner in finding the perfect property.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-[rgb(var(--color-neutral-400))]">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-[rgb(var(--color-neutral-400))]">
                            <li><Link href="/properties" className="hover:text-white transition-colors">Properties</Link></li>
                            <li><Link href="/agents" className="hover:text-white transition-colors">Find an Agent</Link></li>
                            <li><Link href="/mortgage" className="hover:text-white transition-colors">Mortgage Calculator</Link></li>
                            <li><Link href="/guides" className="hover:text-white transition-colors">Buying Guides</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='flex items-start justify-between max-md:flex-col max-md:gap-2 mb-2'>
                    <div className='flex flex-col'>
                        <h4 className="font-semibold">Newsletter</h4>
                        <p className="text-[rgb(var(--color-neutral-400))]">
                            Subscribe to get the latest properties and news.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 max-sm:w-full max-sm:justify-center my-auto h-full">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="min-w-[200px] px-4 py-2 rounded-lg bg-[rgb(var(--color-neutral-800))] border border-[rgb(var(--color-neutral-700))] text-white placeholder:text-[rgb(var(--color-neutral-500))] focus:outline-none focus:border-[rgb(var(--color-primary-500))]"
                        />
                        <Button variant="primary" size="sm">
                            Subscribe
                        </Button>
                    </div>
                </div>

                <div className="pt-8 border-t border-[rgb(var(--color-neutral-800))] text-center text-[rgb(var(--color-neutral-400))]">
                    <p>&copy; 2026 EstateHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
