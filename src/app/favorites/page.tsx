'use client';

import React from 'react';
import Link from 'next/link';
import { Button, PropertyCard } from '@/components';
import { useFavorites } from '@/hooks/useFavorites';
import { allProperties } from '@/data/allProperties';

export default function FavoritesPage() {
    const { favorites, clearAllFavorites, count } = useFavorites();

    // Get favorite properties
    const favoriteProperties = allProperties.filter(property =>
        favorites.includes(property.id)
    );

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[rgb(var(--color-neutral-200))]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
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

                        <div className="hidden md:flex items-center gap-8">
                            <Link href="/properties" className="text-[rgb(var(--color-neutral-700))] hover:text-[rgb(var(--color-primary-500))] font-medium transition-colors">
                                Properties
                            </Link>
                            <Link href="/agents" className="text-[rgb(var(--color-neutral-700))] hover:text-[rgb(var(--color-primary-500))] font-medium transition-colors">
                                Agents
                            </Link>
                            <Link href="/about" className="text-[rgb(var(--color-neutral-700))] hover:text-[rgb(var(--color-primary-500))] font-medium transition-colors">
                                About
                            </Link>
                            <Link href="/contact" className="text-[rgb(var(--color-neutral-700))] hover:text-[rgb(var(--color-primary-500))] font-medium transition-colors">
                                Contact
                            </Link>
                        </div>

                        <Button variant="primary" size="sm">
                            List Property
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Page Header */}
            <section className="bg-gradient-to-r from-[rgb(var(--color-primary-600))] to-[rgb(var(--color-primary-700))] py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                My Favorites
                            </h1>
                            <p className="text-xl text-[rgb(var(--color-primary-100))]">
                                {count === 0 ? 'No properties saved yet' : `${count} ${count === 1 ? 'property' : 'properties'} saved`}
                            </p>
                        </div>
                        {count > 0 && (
                            <Button
                                variant="secondary"
                                onClick={clearAllFavorites}
                                className="bg-white/20 text-white border-white hover:bg-white/30"
                            >
                                Clear All
                            </Button>
                        )}
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {favoriteProperties.length > 0 ? (
                    <>
                        <div className="mb-8">
                            <p className="text-[rgb(var(--color-neutral-600))]">
                                Click the heart icon on any property to remove it from your favorites
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {favoriteProperties.map((property) => (
                                <PropertyCard key={property.id} {...property} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[rgb(var(--color-neutral-100))] flex items-center justify-center">
                            <svg className="w-12 h-12 text-[rgb(var(--color-neutral-400))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-[rgb(var(--color-neutral-900))] mb-4">
                            No Favorites Yet
                        </h2>
                        <p className="text-lg text-[rgb(var(--color-neutral-600))] mb-8 max-w-md mx-auto">
                            Start browsing properties and click the heart icon to save your favorites here
                        </p>
                        <Link href="/properties">
                            <Button variant="primary" size="lg">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                Browse Properties
                            </Button>
                        </Link>
                    </div>
                )}
            </section>

            {/* Tips Section */}
            {favoriteProperties.length > 0 && (
                <section className="bg-[rgb(var(--color-neutral-50))] py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold text-[rgb(var(--color-neutral-900))] mb-8">
                            Ready for the Next Step?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl p-6">
                                <div className="w-12 h-12 rounded-lg bg-[rgb(var(--color-primary-50))] flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-[rgb(var(--color-primary-600))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-[rgb(var(--color-neutral-900))] mb-2">Compare Properties</h3>
                                <p className="text-sm text-[rgb(var(--color-neutral-600))]">
                                    Review your saved properties side by side to make the best decision
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6">
                                <div className="w-12 h-12 rounded-lg bg-[rgb(var(--color-secondary-50))] flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-[rgb(var(--color-secondary-600))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-[rgb(var(--color-neutral-900))] mb-2">Contact an Agent</h3>
                                <p className="text-sm text-[rgb(var(--color-neutral-600))]">
                                    Schedule viewings and get expert guidance from our professionals
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6">
                                <div className="w-12 h-12 rounded-lg bg-[rgb(var(--color-info))]/10 flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-[rgb(var(--color-info))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-[rgb(var(--color-neutral-900))] mb-2">Calculate Mortgage</h3>
                                <p className="text-sm text-[rgb(var(--color-neutral-600))]">
                                    Use our mortgage calculator to estimate your monthly payments
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
