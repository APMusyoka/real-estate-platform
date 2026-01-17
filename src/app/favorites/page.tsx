'use client';

import React from 'react';
import Link from 'next/link';
import { Button, PropertyCard, Navigation, Footer } from '@/components';
import { useFavorites } from '@/hooks/useFavorites';
import { Heart, Search, ClipboardList, Users, Calculator } from 'lucide-react';
import { allProperties } from '@/data/allProperties';

export default function FavoritesPage() {
    const { favorites, clearAllFavorites, count } = useFavorites();

    // Get favorite properties
    const favoriteProperties = allProperties.filter(property =>
        favorites.includes(property.id)
    );

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

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
                            <Heart className="w-12 h-12 text-[rgb(var(--color-neutral-400))]" />
                        </div>
                        <h2 className="text-2xl font-bold text-[rgb(var(--color-neutral-900))] mb-4">
                            No Favorites Yet
                        </h2>
                        <p className="text-lg text-[rgb(var(--color-neutral-600))] mb-8 max-w-md mx-auto">
                            Start browsing properties and click the heart icon to save your favorites here
                        </p>
                        <Link href="/properties">
                            <Button variant="primary" size="lg">
                                <Search className="w-5 h-5 mr-2" />
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
                                    <ClipboardList className="w-6 h-6 text-[rgb(var(--color-primary-600))]" />
                                </div>
                                <h3 className="font-bold text-[rgb(var(--color-neutral-900))] mb-2">Compare Properties</h3>
                                <p className="text-sm text-[rgb(var(--color-neutral-600))]">
                                    Review your saved properties side by side to make the best decision
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6">
                                <div className="w-12 h-12 rounded-lg bg-[rgb(var(--color-secondary-50))] flex items-center justify-center mb-4">
                                    <Users className="w-6 h-6 text-[rgb(var(--color-secondary-600))]" />
                                </div>
                                <h3 className="font-bold text-[rgb(var(--color-neutral-900))] mb-2">Contact an Agent</h3>
                                <p className="text-sm text-[rgb(var(--color-neutral-600))]">
                                    Schedule viewings and get expert guidance from our professionals
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6">
                                <div className="w-12 h-12 rounded-lg bg-[rgb(var(--color-info))]/10 flex items-center justify-center mb-4">
                                    <Calculator className="w-6 h-6 text-[rgb(var(--color-info))]" />
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
            <Footer />
        </div>
    );
}
