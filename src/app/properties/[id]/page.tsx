'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Heart, Maximize, MapPin, Bed, Bath, Calendar, Check, Phone } from 'lucide-react';
import { Button, Input, Lightbox, Navigation, Footer } from '@/components';
import { useFavorites } from '@/hooks/useFavorites';
import { useToast } from '@/context/ToastContext';
import { allProperties } from '@/data/allProperties';
import { notFound } from 'next/navigation';

// Dynamically import PropertyMap to avoid SSR issues with Leaflet
const PropertyMap = dynamic(() => import('@/components/PropertyMap'), {
    ssr: false,
    loading: () => <div className="h-[400px] bg-[rgb(var(--color-neutral-100))] rounded-2xl flex items-center justify-center">Loading map...</div>
});

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    // Unwrap the params Promise (Next.js 15+)
    const { id } = use(params);
    const property = allProperties.find((p) => p.id === id);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [showContactForm, setShowContactForm] = useState(false);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const { toggleFavorite, isFavorite } = useFavorites();
    const { success } = useToast();

    if (!property) {
        notFound();
    }

    const favorited = isFavorite(property.id);

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        toggleFavorite(property.id);

        if (favorited) {
            success('Removed from favorites');
        } else {
            success('Added to favorites! ❤️');
        }
    };

    // Mock additional images (in real app, these would come from the property data)
    const images = [
        property.image,
        property.image.replace('?w=800', '?w=800&sat=-100'),
        property.image.replace('?w=800', '?w=800&hue=30'),
        property.image.replace('?w=800', '?w=800&brightness=-10'),
    ];

    const statusColors = {
        'for-sale': 'bg-[rgb(var(--color-status-for-sale))]',
        'for-rent': 'bg-[rgb(var(--color-status-for-rent))]',
        'sold': 'bg-[rgb(var(--color-status-sold))]',
        'pending': 'bg-[rgb(var(--color-status-pending))]',
        'new': 'bg-[rgb(var(--color-status-new))]',
        'featured': 'bg-[rgb(var(--color-status-featured))]',
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

    const relatedProperties = allProperties
        .filter((p) => p.id !== property.id && p.city === property.city)
        .slice(0, 3);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setIsLightboxOpen(true);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Lightbox */}
            <Lightbox
                images={images}
                initialIndex={lightboxIndex}
                isOpen={isLightboxOpen}
                onClose={() => setIsLightboxOpen(false)}
                title={property.title}
            />

            {/* Image Gallery */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Main Image */}
                    <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden group">
                        <button
                            onClick={() => openLightbox(activeImageIndex)}
                            className="relative w-full h-full cursor-zoom-in block focus:outline-none"
                        >
                            <Image
                                src={images[activeImageIndex]}
                                alt={property.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Zoom indicator on hover */}
                            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                                Click to view full size
                            </div>
                        </button>

                        <div className={`absolute top-4 right-4 ${statusColors[property.status]} text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider pointer-events-none`}>
                            {statusLabels[property.status]}
                        </div>

                        <button
                            onClick={handleFavoriteClick}
                            className={`absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all z-10 ${favorited ? 'scale-110' : ''
                                }`}
                        >
                            <Heart
                                className={`w-6 h-6 transition-colors ${favorited ? 'text-red-500 fill-red-500' : 'text-[rgb(var(--color-neutral-700))]'
                                    }`}
                                fill={favorited ? 'currentColor' : 'none'}
                            />
                        </button>
                    </div>

                    {/* Thumbnail Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {images.slice(0, 3).map((img, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setActiveImageIndex(index);
                                    openLightbox(index);
                                }}
                                className={`relative h-[190px] lg:h-[290px] rounded-xl overflow-hidden border-4 transition-all cursor-pointer ${activeImageIndex === index
                                    ? 'border-[rgb(var(--color-primary-500))]'
                                    : 'border-transparent hover:border-[rgb(var(--color-neutral-300))]'
                                    }`}
                            >
                                <Image
                                    src={img}
                                    alt={`${property.title} - Image ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </button>
                        ))}
                        <button
                            onClick={() => openLightbox(0)}
                            className="relative h-[190px] lg:h-[290px] rounded-xl overflow-hidden bg-linear-to-br from-[rgb(var(--color-primary-100))] to-[rgb(var(--color-primary-200))] flex items-center justify-center hover:from-[rgb(var(--color-primary-200))] hover:to-[rgb(var(--color-primary-300))] transition-all"
                        >
                            <div className="text-center">
                                <Maximize className="w-8 h-8 text-[rgb(var(--color-primary-600))] mx-auto mb-2" />
                                <span className="text-sm font-medium text-[rgb(var(--color-primary-700))]">View All</span>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Property Details */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="mb-8">
                            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-neutral-900))] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                        {property.title}
                                    </h1>
                                    <p className="text-base md:text-lg text-[rgb(var(--color-neutral-600))] flex items-center gap-2">
                                        <MapPin className="w-5 h-5 shrink-0" />
                                        {property.address}
                                    </p>
                                </div>
                                <div className="text-left md:text-right">
                                    <div className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-primary-700))] mb-1" style={{ fontFamily: 'var(--font-mono)' }}>
                                        {formatPrice(property.price)}
                                    </div>
                                    <div className="text-sm text-[rgb(var(--color-neutral-600))]">
                                        ${Math.round(property.price / property.sqft)}/sqft
                                    </div>
                                </div>
                            </div>

                            {/* Key Features */}
                            <div className="flex flex-wrap gap-6 py-6 border-y border-[rgb(var(--color-neutral-200))]">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-lg bg-[rgb(var(--color-primary-50))] flex items-center justify-center">
                                        <Bed className="w-6 h-6 text-[rgb(var(--color-primary-600))]" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-[rgb(var(--color-neutral-900))]">{property.bedrooms}</div>
                                        <div className="text-sm text-[rgb(var(--color-neutral-600))]">Bedrooms</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-lg bg-[rgb(var(--color-secondary-50))] flex items-center justify-center">
                                        <Bath className="w-6 h-6 text-[rgb(var(--color-secondary-600))]" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-[rgb(var(--color-neutral-900))]">{property.bathrooms}</div>
                                        <div className="text-sm text-[rgb(var(--color-neutral-600))]">Bathrooms</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-lg bg-[rgb(var(--color-warning))]/10 flex items-center justify-center">
                                        <Maximize className="w-6 h-6 text-[rgb(var(--color-warning))]" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-[rgb(var(--color-neutral-900))]">{property.sqft.toLocaleString()}</div>
                                        <div className="text-sm text-[rgb(var(--color-neutral-600))]">Square Feet</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-lg bg-[rgb(var(--color-info))]/10 flex items-center justify-center">
                                        <Calendar className="w-6 h-6 text-[rgb(var(--color-info))]" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-[rgb(var(--color-neutral-900))]">{property.yearBuilt}</div>
                                        <div className="text-sm text-[rgb(var(--color-neutral-600))]">Year Built</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-[rgb(var(--color-neutral-900))] mb-4">Description</h2>
                            <p className="text-[rgb(var(--color-neutral-700))] leading-relaxed">
                                This stunning {property.type} offers {property.bedrooms} bedrooms and {property.bathrooms} bathrooms in the heart of {property.city}.
                                Built in {property.yearBuilt}, this property features modern finishes and premium amenities throughout its {property.sqft.toLocaleString()} square feet of living space.
                                Perfect for those seeking comfort and style in one of the most desirable neighborhoods. The property boasts an open floor plan, high-end appliances,
                                and abundant natural light. Located close to schools, shopping, and dining, this home provides the perfect blend of convenience and luxury living.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-[rgb(var(--color-neutral-900))] mb-4">Property Features</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {['Hardwood Floors', 'Central AC', 'Walk-in Closet', 'Updated Kitchen', 'Granite Countertops', 'Stainless Appliances', 'In-Unit Laundry', 'Parking Included'].map((feature) => (
                                    <div key={feature} className="flex items-center gap-2 text-[rgb(var(--color-neutral-700))]">
                                        <Check className="w-5 h-5 text-[rgb(var(--color-success))]" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Location & Map */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-[rgb(var(--color-neutral-900))] mb-4">Location</h2>
                            <div className="mb-4 flex items-start gap-2 text-[rgb(var(--color-neutral-700))]">
                                <MapPin className="w-5 h-5 mt-0.5 text-[rgb(var(--color-primary-600))]" />
                                <span className="text-lg">{property.address}</span>
                            </div>
                            {property.lat && property.lng && (
                                <PropertyMap
                                    lat={property.lat}
                                    lng={property.lng}
                                    title={property.title}
                                    address={property.address}
                                    height="450px"
                                />
                            )}
                        </div>
                    </div>

                    {/* Sidebar - Contact Form */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-white border border-[rgb(var(--color-neutral-200))] rounded-2xl p-6 shadow-lg">
                            <h3 className="text-xl font-bold text-[rgb(var(--color-neutral-900))] mb-6">Contact Agent</h3>
                            <form className="space-y-4">
                                <Input label="Name" placeholder="Your full name" />
                                <Input label="Email" type="email" placeholder="your@email.com" />
                                <Input label="Phone" type="tel" placeholder="(555) 123-4567" />
                                <div>
                                    <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        placeholder="I'm interested in this property..."
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-[rgb(var(--color-neutral-300))] focus:border-[rgb(var(--color-primary-500))] focus:ring-4 focus:ring-[rgb(var(--color-primary-500)/0.1)] outline-none transition-all resize-none"
                                    ></textarea>
                                </div>
                                <Button variant="primary" className="w-full">
                                    Send Message
                                </Button>
                                <Button variant="secondary" className="w-full">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Request a Showing
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Similar Properties */}
            {relatedProperties.length > 0 && (
                <section className="bg-[rgb(var(--color-neutral-50))] py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-[rgb(var(--color-neutral-900))] mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                            Similar Properties in {property.city}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedProperties.map((p) => {
                                const PropertyCard = require('@/components').PropertyCard;
                                return <PropertyCard key={p.id} {...p} />;
                            })}
                        </div>
                    </div>
                </section>
            )}
            <Footer />
        </div>
    );
}
