import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PropertyCardProps {
    id: string;
    title: string;
    price: number;
    address: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    image: string;
    status: 'for-sale' | 'for-rent' | 'sold' | 'pending' | 'new' | 'featured';
}

export default function PropertyCard({
    id,
    title,
    price,
    address,
    bedrooms,
    bathrooms,
    sqft,
    image,
    status,
}: PropertyCardProps) {
    const statusColors = {
        'for-sale': 'bg-[rgb(var(--color-status-for-sale))]',
        'for-rent': 'bg-[rgb(var(--color-status-for-rent))]',
        'sold': 'bg-[rgb(var(--color-status-sold))]',
        'pending': 'bg-[rgb(var(--color-status-pending))]',
        'new': 'bg-[rgb(var(--color-status-new))]',
        'featured': 'bg-[rgb(--color-status-featured))]',
    };

    const statusLabels = {
        'for-sale': 'For Sale',
        'for-rent': 'For Rent',
        'sold': 'Sold',
        'pending': 'Pending',
        'new': 'New',
        'featured': 'Featured',
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <Link href={`/properties/${id}`}>
            <div className="group bg-white border border-[rgb(var(--color-neutral-200))] rounded-xl overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:border-[rgb(var(--color-primary-200))]">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 ${statusColors[status]} text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider`}>
                        {statusLabels[status]}
                    </div>
                    {/* Favorite Button */}
                    <button
                        className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            // TODO: Implement favorite functionality
                        }}
                    >
                        <svg className="w-5 h-5 text-[rgb(var(--color-neutral-700))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Price */}
                    <div className="text-3xl font-bold text-[rgb(var(--color-primary-700))] mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                        {formatPrice(price)}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-[rgb(var(--color-neutral-900))] mb-2 line-clamp-1">
                        {title}
                    </h3>

                    {/* Address */}
                    <p className="text-[rgb(var(--color-neutral-600))] text-sm mb-4 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {address}
                    </p>

                    {/* Property Details */}
                    <div className="flex items-center gap-4 text-sm text-[rgb(var(--color-neutral-600))]">
                        <div className="flex items-center gap-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="font-medium">{bedrooms}</span> beds
                        </div>
                        <div className="flex items-center gap-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>
                            <span className="font-medium">{bathrooms}</span> baths
                        </div>
                        <div className="flex items-center gap-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                            <span className="font-medium">{sqft.toLocaleString()}</span> sqft
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
