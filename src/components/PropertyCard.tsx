'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, MapPin, Bed, Bath, Maximize } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';
import { useToast } from '@/context/ToastContext';

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
    layout?: 'grid' | 'list';
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
    layout = 'grid',
}: PropertyCardProps) {
    const { toggleFavorite, isFavorite } = useFavorites();
    const { success } = useToast();
    const favorited = isFavorite(id);
    const isList = layout === 'list';

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.preventDefault();
        toggleFavorite(id);

        if (favorited) {
            success('Removed from favorites');
        } else {
            success('Added to favorites! ❤️');
        }
    };

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
            maximumFractionDigits: 0,
        }).format(price);
    };

    return (
        <Link href={`/properties/${id}`} className="block h-full">
            <div className={`
                group bg-white border border-[rgb(var(--color-neutral-200))] rounded-xl overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:border-[rgb(var(--color-primary-200))] h-full
                ${isList ? 'flex flex-row' : ''}
            `}>
                {/* Image Container */}
                <div className={`
                    relative overflow-hidden flex-shrink-0
                    ${isList ? 'w-[120px] sm:w-[280px] h-auto' : 'h-64 w-full'}
                `}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 ${statusColors[status]} text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${isList ? 'hidden sm:block' : ''}`}>
                        {statusLabels[status]}
                    </div>
                    {/* Favorite Button */}
                    <button
                        className={`absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all ${favorited ? 'scale-110' : ''
                            } ${isList ? 'scale-75 top-2 left-2 sm:scale-100 sm:top-4 sm:left-4' : ''}`}
                        onClick={handleFavoriteClick}
                        aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
                    >
                        <Heart
                            className={`w-5 h-5 transition-colors ${favorited ? 'text-red-500 fill-red-500' : 'text-[rgb(var(--color-neutral-700))]'
                                }`}
                            fill={favorited ? 'currentColor' : 'none'}
                        />
                    </button>
                </div>

                {/* Content */}
                <div className={`
                    ${isList ? 'flex-1 flex flex-col justify-center p-3 sm:p-6' : 'p-6'}
                `}>
                    {/* Price */}
                    <div className="text-xl sm:text-3xl font-bold text-[rgb(var(--color-primary-700))] mb-1 sm:mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                        {formatPrice(price)}
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-xl font-semibold text-[rgb(var(--color-neutral-900))] mb-1 sm:mb-2 line-clamp-1">
                        {title}
                    </h3>

                    {/* Address */}
                    <p className="text-[rgb(var(--color-neutral-600))] text-xs sm:text-sm mb-2 sm:mb-4 flex items-center gap-1">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="line-clamp-1">{address}</span>
                    </p>

                    {/* Property Details */}
                    <div className={`flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[rgb(var(--color-neutral-600))] ${!isList ? 'pt-4 border-t border-[rgb(var(--color-neutral-100))] mt-auto' : ''}`}>
                        <div className="flex items-center gap-1">
                            <Bed className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="font-medium">{bedrooms}</span> <span className="hidden sm:inline">beds</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Bath className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="font-medium">{bathrooms}</span> <span className="hidden sm:inline">baths</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="font-medium">{sqft.toLocaleString()}</span> <span className="hidden sm:inline">sqft</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
