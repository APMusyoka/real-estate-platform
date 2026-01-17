'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MapPin, Search, ArrowRight } from "lucide-react";
import { Button, PropertyCard, Navigation, Footer, Select } from "@/components";
import { featuredProperties, propertyTypes } from "@/data/mockData";

export default function Home() {
  const router = useRouter();
  const [searchType, setSearchType] = useState('All Types');
  const [searchLocation, setSearchLocation] = useState('');

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // Build query parameters
    const params = new URLSearchParams();
    if (searchType && searchType !== 'All Types') {
      params.set('type', searchType);
    }
    if (searchLocation.trim()) {
      params.set('search', searchLocation.trim());
    }

    // Navigate to properties page with search params
    router.push(`/properties?${params.toString()}`);
  };

  const handleQuickFilter = (filterType: string, filterValue: string) => {
    const params = new URLSearchParams();
    params.set(filterType, filterValue);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-[rgb(var(--color-primary-50))] via-white to-[rgb(var(--color-secondary-50))] opacity-60"></div>

        {/* Mesh Gradient Effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(var(--color-primary-200))] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(var(--color-secondary-200))] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[rgb(var(--color-neutral-900))] mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Find Your Dream Home{" "}
              <span className="bg-linear-to-r from-[rgb(var(--color-primary-500))] to-[rgb(var(--color-primary-700))] bg-clip-text text-transparent">
                Today
              </span>
            </h1>
            <p className="text-xl text-[rgb(var(--color-neutral-600))] mb-10 leading-relaxed max-w-2xl mx-auto">
              Discover the perfect property from our extensive collection of homes, apartments, and villas in prime locations.
            </p>
          </div>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                  Property Type
                </label>
                <Select
                  value={searchType}
                  onChange={(val) => setSearchType(val as string)}
                  options={[
                    { value: 'All Types', label: 'All Types' },
                    { value: 'House', label: 'House' },
                    { value: 'Apartment', label: 'Apartment' },
                    { value: 'Condo', label: 'Condo' },
                    { value: 'Villa', label: 'Villa' }
                  ]}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(var(--color-neutral-400))]" />
                  <input
                    type="text"
                    placeholder="Enter city, neighborhood, or ZIP"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-[rgb(var(--color-neutral-300))] focus:border-[rgb(var(--color-primary-500))] focus:ring-4 focus:ring-[rgb(var(--color-primary-500)/0.1)] outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                  &nbsp;
                </label>
                <Button variant="primary" type="submit" className="w-full h-[52px]">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-[rgb(var(--color-neutral-200))]">
              <button
                type="button"
                onClick={() => handleQuickFilter('status', 'for-sale')}
                className="px-4 py-2 rounded-full bg-[rgb(var(--color-primary-50))] text-[rgb(var(--color-primary-700))] text-sm font-medium hover:bg-[rgb(var(--color-primary-100))] transition-colors"
              >
                For Sale
              </button>
              <button
                type="button"
                onClick={() => handleQuickFilter('status', 'for-rent')}
                className="px-4 py-2 rounded-full bg-[rgb(var(--color-neutral-100))] text-[rgb(var(--color-neutral-700))] text-sm font-medium hover:bg-[rgb(var(--color-neutral-200))] transition-colors"
              >
                For Rent
              </button>
              <button
                type="button"
                onClick={() => handleQuickFilter('priceRange', '500k-1m')}
                className="px-4 py-2 rounded-full bg-[rgb(var(--color-neutral-100))] text-[rgb(var(--color-neutral-700))] text-sm font-medium hover:bg-[rgb(var(--color-neutral-200))] transition-colors"
              >
                $500k - $1M
              </button>
              <button
                type="button"
                onClick={() => handleQuickFilter('bedrooms', '3')}
                className="px-4 py-2 rounded-full bg-[rgb(var(--color-neutral-100))] text-[rgb(var(--color-neutral-700))] text-sm font-medium hover:bg-[rgb(var(--color-neutral-200))] transition-colors"
              >
                3+ Bedrooms
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-linear-to-r from-[rgb(var(--color-primary-600))] to-[rgb(var(--color-primary-700))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                10K+
              </div>
              <div className="text-[rgb(var(--color-primary-100))] font-medium">
                Properties Listed
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                5K+
              </div>
              <div className="text-[rgb(var(--color-primary-100))] font-medium">
                Happy Customers
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                500+
              </div>
              <div className="text-[rgb(var(--color-primary-100))] font-medium">
                Verified Agents
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                98%
              </div>
              <div className="text-[rgb(var(--color-primary-100))] font-medium">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[rgb(var(--color-neutral-50))]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-[rgb(var(--color-neutral-900))] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Featured Properties
              </h2>
              <p className="text-lg text-[rgb(var(--color-neutral-600))]">
                Handpicked properties just for you
              </p>
            </div>
            <Link href="/properties">
              <Button variant="ghost">
                View All
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[rgb(var(--color-neutral-900))] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Browse by Property Type
            </h2>
            <p className="text-lg text-[rgb(var(--color-neutral-600))]">
              Find the perfect property that matches your lifestyle
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyTypes.map((type) => (
              <Link href={`/properties?type=${type.name.toLowerCase()}`} key={type.name}>
                <div className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{type.name}</h3>
                    <p className="text-white/90">{type.count} properties</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[rgb(var(--color-primary-600))] to-[rgb(var(--color-primary-800))] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-[rgb(var(--color-primary-100))] mb-10 max-w-2xl mx-auto">
            Join thousands of happy homeowners who found their perfect property with EstateHub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-[rgb(var(--color-primary-700))] border-white hover:bg-[rgb(var(--color-neutral-50))]">
              Browse Properties
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-2 border-white hover:bg-white/10">
              Contact an Agent
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
