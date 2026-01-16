'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, PropertyCard } from "@/components";
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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[rgb(var(--color-neutral-200))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
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

            {/* Navigation Links */}
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

            {/* CTA Button */}
            <Button variant="primary" size="sm">
              List Property
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary-50))] via-white to-[rgb(var(--color-secondary-50))] opacity-60"></div>

        {/* Mesh Gradient Effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(var(--color-primary-200))] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(var(--color-secondary-200))] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[rgb(var(--color-neutral-900))] mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Find Your Dream Home{" "}
              <span className="bg-gradient-to-r from-[rgb(var(--color-primary-500))] to-[rgb(var(--color-primary-700))] bg-clip-text text-transparent">
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
                <select
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[rgb(var(--color-neutral-300))] focus:border-[rgb(var(--color-primary-500))] focus:ring-4 focus:ring-[rgb(var(--color-primary-500)/0.1)] outline-none transition-all"
                >
                  <option>All Types</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Condo</option>
                  <option>Villa</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                  Location
                </label>
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(var(--color-neutral-400))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
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
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
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
      <section className="py-16 bg-gradient-to-r from-[rgb(var(--color-primary-600))] to-[rgb(var(--color-primary-700))]">
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
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[rgb(var(--color-primary-600))] to-[rgb(var(--color-primary-800))] relative overflow-hidden">
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

      {/* Footer */}
      <footer className="bg-[rgb(var(--color-neutral-900))] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[rgb(var(--color-primary-500))] to-[rgb(var(--color-primary-700))] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  EstateHub
                </span>
              </div>
              <p className="text-[rgb(var(--color-neutral-400))]">
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

            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-[rgb(var(--color-neutral-400))] mb-4">
                Subscribe to get the latest properties and news.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-[rgb(var(--color-neutral-800))] border border-[rgb(var(--color-neutral-700))] text-white placeholder:text-[rgb(var(--color-neutral-500))] focus:outline-none focus:border-[rgb(var(--color-primary-500))]"
                />
                <Button variant="primary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[rgb(var(--color-neutral-800))] text-center text-[rgb(var(--color-neutral-400))]">
            <p>&copy; 2026 EstateHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
