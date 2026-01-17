'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ChevronDown, Search, LayoutGrid, List, SearchX } from 'lucide-react';
import { Button, PropertyCard, Navigation, Footer } from '@/components';
import { allProperties, cities, propertyTypesFilter, priceRanges } from '@/data/allProperties';

// Custom chevron for select inputs
// const chevronDown = ... (Removed in favor of Lucide icon)

// Reusable select styles (without background image)
const selectClassName = "w-full px-4 py-2.5 rounded-lg border border-[rgb(var(--color-neutral-300))] bg-white text-[rgb(var(--color-neutral-900))] focus:border-[rgb(var(--color-primary-500))] focus:ring-4 focus:ring-[rgb(var(--color-primary-500)/0.1)] outline-none transition-all appearance-none cursor-pointer";

// Component that uses useSearchParams - must be wrapped in Suspense
function PropertiesContent() {
    const searchParams = useSearchParams();

    // Initialize state from URL parameters
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState('All Cities');
    const [selectedType, setSelectedType] = useState('All Types');
    const [selectedPriceRange, setSelectedPriceRange] = useState(0);
    const [sortBy, setSortBy] = useState('newest');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    // Read URL parameters on mount
    useEffect(() => {
        const search = searchParams.get('search');
        const type = searchParams.get('type');
        const city = searchParams.get('city');
        const status = searchParams.get('status');
        const bedrooms = searchParams.get('bedrooms');
        const priceRange = searchParams.get('priceRange');

        if (search) setSearchTerm(search);
        if (type) setSelectedType(type);
        if (city) setSelectedCity(city);

        // Handle price range filtering
        if (priceRange === '500k-1m') {
            setSelectedPriceRange(2); // Index for $500k - $1M
        }

        // Handle bedroom filtering
        if (bedrooms) {
            setSearchTerm(prev => prev ? `${prev} ${bedrooms}+ bed` : `${bedrooms}+ bedrooms`);
        }

        // Handle status filtering
        if (status) {
            // Filter by status in the search term for now
            setSearchTerm(prev => prev ? `${prev} ${status}` : status);
        }
    }, [searchParams]);

    // Filter and sort properties
    const filteredProperties = useMemo(() => {
        let filtered = allProperties.filter((property) => {
            // Search filter
            const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                property.address.toLowerCase().includes(searchTerm.toLowerCase());

            // City filter
            const matchesCity = selectedCity === 'All Cities' || property.city === selectedCity;

            // Type filter
            const matchesType = selectedType === 'All Types' ||
                property.type.toLowerCase() === selectedType.toLowerCase();

            // Price range filter
            const priceRange = priceRanges[selectedPriceRange];
            const matchesPrice = property.price >= priceRange.min && property.price <= priceRange.max;

            return matchesSearch && matchesCity && matchesType && matchesPrice;
        });

        // Sort
        switch (sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'sqft':
                filtered.sort((a, b) => b.sqft - a.sqft);
                break;
            case 'newest':
            default:
                filtered.sort((a, b) => b.yearBuilt - a.yearBuilt);
                break;
        }

        return filtered;
    }, [searchTerm, selectedCity, selectedType, selectedPriceRange, sortBy]);

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedCity('All Cities');
        setSelectedType('All Types');
        setSelectedPriceRange(0);
        setSortBy('newest');
    };

    return (
        <div className="min-h-screen bg-[rgb(var(--color-neutral-50))]">
            <Navigation />

            {/* Page Header */}
            <section className="bg-gradient-to-r from-[rgb(var(--color-primary-600))] to-[rgb(var(--color-primary-700))] py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                        Browse Properties
                    </h1>
                    <p className="text-xl text-[rgb(var(--color-primary-100))] max-w-2xl">
                        Explore our collection of {allProperties.length}+ premium properties
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <aside className="lg:w-80 flex-shrink-0">
                        <div className="bg-white rounded-2xl p-6 shadow-md sticky top-28">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-[rgb(var(--color-neutral-900))]">Filters</h2>
                                <button
                                    onClick={clearFilters}
                                    className="text-sm text-[rgb(var(--color-primary-500))] hover:text-[rgb(var(--color-primary-700))] font-medium"
                                >
                                    Clear All
                                </button>
                            </div>

                            {/* Search */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                                    Search
                                </label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(var(--color-neutral-400))]" />
                                    <input
                                        type="text"
                                        placeholder="Search by title or address"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[rgb(var(--color-neutral-300))] focus:border-[rgb(var(--color-primary-500))] focus:ring-4 focus:ring-[rgb(var(--color-primary-500)/0.1)] outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* City */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                                    City
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedCity}
                                        onChange={(e) => setSelectedCity(e.target.value)}
                                        className={`${selectClassName} pr-10`}
                                    >
                                        {cities.map((city) => (
                                            <option key={city} value={city}>{city}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(var(--color-neutral-500))] pointer-events-none" />
                                </div>
                            </div>

                            {/* Property Type */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                                    Property Type
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedType}
                                        onChange={(e) => setSelectedType(e.target.value)}
                                        className={`${selectClassName} pr-10`}
                                    >
                                        {propertyTypesFilter.map((type) => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(var(--color-neutral-500))] pointer-events-none" />
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                                    Price Range
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedPriceRange}
                                        onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
                                        className={`${selectClassName} pr-10`}
                                    >
                                        {priceRanges.map((range, index) => (
                                            <option key={index} value={index}>{range.label}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(var(--color-neutral-500))] pointer-events-none" />
                                </div>
                            </div>

                            {/* Active Filters Count */}
                            <div className="pt-6 border-t border-[rgb(var(--color-neutral-200))]">
                                <div className="text-sm text-[rgb(var(--color-neutral-600))]">
                                    Showing <span className="font-semibold text-[rgb(var(--color-primary-600))]">{filteredProperties.length}</span> properties
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1">
                        {/* Toolbar */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                            <div className="flex items-center gap-4">
                                <label className="text-sm font-medium text-[rgb(var(--color-neutral-700))]">Sort by:</label>
                                <div className="relative">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="px-4 py-2 rounded-lg border border-[rgb(var(--color-neutral-300))] bg-white text-[rgb(var(--color-neutral-900))] focus:border-[rgb(var(--color-primary-500))] focus:ring-4 focus:ring-[rgb(var(--color-primary-500)/0.1)] outline-none transition-all appearance-none cursor-pointer pr-10"
                                    >
                                        <option value="newest">Newest First</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                        <option value="sqft">Square Footage</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[rgb(var(--color-neutral-500))] pointer-events-none" />
                                </div>
                            </div>

                            {/* View Toggle */}
                            <div className="flex items-center gap-2 bg-[rgb(var(--color-neutral-100))] rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-md transition-all ${viewMode === 'grid'
                                        ? 'bg-white text-[rgb(var(--color-primary-500))] shadow-sm'
                                        : 'text-[rgb(var(--color-neutral-600))] hover:text-[rgb(var(--color-neutral-900))]'
                                        }`}
                                >
                                    <LayoutGrid className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-md transition-all ${viewMode === 'list'
                                        ? 'bg-white text-[rgb(var(--color-primary-500))] shadow-sm'
                                        : 'text-[rgb(var(--color-neutral-600))] hover:text-[rgb(var(--color-neutral-900))]'
                                        }`}
                                >
                                    <List className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Properties Grid/List */}
                        {filteredProperties.length > 0 ? (
                            <div className={
                                viewMode === 'grid'
                                    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                                    : 'flex flex-col gap-6'
                            }>
                                {filteredProperties.map((property) => (
                                    <PropertyCard key={property.id} {...property} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <SearchX className="w-16 h-16 mx-auto text-[rgb(var(--color-neutral-400))] mb-4" />
                                <h3 className="text-xl font-semibold text-[rgb(var(--color-neutral-900))] mb-2">
                                    No properties found
                                </h3>
                                <p className="text-[rgb(var(--color-neutral-600))] mb-6">
                                    Try adjusting your filters to see more results
                                </p>
                                <Button variant="primary" onClick={clearFilters}>
                                    Clear Filters
                                </Button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default function PropertiesPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[rgb(var(--color-neutral-50))] flex items-center justify-center">Loading...</div>}>
            <PropertiesContent />
        </Suspense>
    );
}
