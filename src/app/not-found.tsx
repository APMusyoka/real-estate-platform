import Link from 'next/link';
import { Button } from '@/components';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-linear-to-br from-[rgb(var(--color-primary-50))] via-white to-[rgb(var(--color-secondary-50))] flex items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center">
                {/* 404 Illustration */}
                <div className="relative mb-12">
                    <div className="text-[200px] md:text-[280px] font-bold leading-none bg-linear-to-br from-[rgb(var(--color-primary-300))] to-[rgb(var(--color-primary-100))] bg-clip-text text-transparent select-none" style={{ fontFamily: 'var(--font-display)' }}>
                        404
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Home className="w-32 h-32 md:w-40 md:h-40 text-[rgb(var(--color-primary-400))] opacity-50" />
                    </div>
                </div>

                {/* Message */}
                <h1 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-neutral-900))] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Page Not Found
                </h1>
                <p className="text-lg text-[rgb(var(--color-neutral-600))] mb-10 max-w-md mx-auto leading-relaxed">
                    Oops! The property you're looking for has been sold... just kidding! This page doesn't exist.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <Button variant="primary" size="lg">
                            <Home className="w-5 h-5 mr-2" />
                            Go Home
                        </Button>
                    </Link>
                    <Link href="/properties">
                        <Button variant="secondary" size="lg">
                            <Search className="w-5 h-5 mr-2" />
                            Browse Properties
                        </Button>
                    </Link>
                </div>

                {/* Popular Links */}
                <div className="mt-16 pt-12 border-t border-[rgb(var(--color-neutral-200))]">
                    <p className="text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-4">
                        Popular Links
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/properties" className="text-[rgb(var(--color-primary-600))] hover:text-[rgb(var(--color-primary-700))] hover:underline">
                            Properties
                        </Link>
                        <span className="text-[rgb(var(--color-neutral-300))]">•</span>
                        <Link href="/about" className="text-[rgb(var(--color-primary-600))] hover:text-[rgb(var(--color-primary-700))] hover:underline">
                            About Us
                        </Link>
                        <span className="text-[rgb(var(--color-neutral-300))]">•</span>
                        <Link href="/contact" className="text-[rgb(var(--color-primary-600))] hover:text-[rgb(var(--color-primary-700))] hover:underline">
                            Contact
                        </Link>
                        <span className="text-[rgb(var(--color-neutral-300))]">•</span>
                        <Link href="/" className="text-[rgb(var(--color-primary-600))] hover:text-[rgb(var(--color-primary-700))] hover:underline">
                            Help Center
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
