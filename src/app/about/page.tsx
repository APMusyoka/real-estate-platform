import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Navigation } from '@/components';

export default function AboutPage() {
    const stats = [
        { label: 'Years in Business', value: '15+' },
        { label: 'Properties Sold', value: '10K+' },
        { label: 'Happy Clients', value: '5K+' },
        { label: 'Expert Agents', value: '500+' },
    ];

    const values = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Trust & Integrity',
            description: 'We build lasting relationships based on honesty, transparency, and ethical practices.'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            ),
            title: 'Client-First Approach',
            description: 'Your goals are our priority. We listen, understand, and deliver personalized solutions.'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Innovation',
            description: 'We leverage cutting-edge technology to provide the best real estate experience.'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Excellence',
            description: 'We strive for excellence in every transaction, big or small.'
        },
    ];

    const team = [
        {
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
        },
        {
            name: 'Michael Chen',
            role: 'Head of Sales',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
        },
        {
            name: 'Emily Rodriguez',
            role: 'Chief Marketing Officer',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
        },
        {
            name: 'David Kim',
            role: 'Director of Operations',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-[rgb(var(--color-primary-600))] to-[rgb(var(--color-primary-700))] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        About EstateHub
                    </h1>
                    <p className="text-xl text-[rgb(var(--color-primary-100))] max-w-2xl mx-auto leading-relaxed">
                        We're on a mission to make real estate transactions simple, transparent, and accessible for everyone.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="relative -mt-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-2xl p-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-4xl md:text-5xl font-bold text-[rgb(var(--color-primary-600))] mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                                        {stat.value}
                                    </div>
                                    <div className="text-[rgb(var(--color-neutral-600))] font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-[rgb(var(--color-neutral-900))] mb-6 text-center" style={{ fontFamily: 'var(--font-display)' }}>
                        Our Story
                    </h2>
                    <div className="space-y-6 text-lg text-[rgb(var(--color-neutral-700))] leading-relaxed">
                        <p>
                            Founded in 2008, EstateHub started with a simple vision: to revolutionize the way people buy and sell homes.
                            Our founders, experienced real estate professionals themselves, recognized the need for a more transparent,
                            efficient, and customer-centric approach to real estate.
                        </p>
                        <p>
                            Over the past 15 years, we've grown from a small local agency to a trusted name in real estate, serving
                            thousands of clients across the country. Our success is built on the foundation of putting our clients first,
                            embracing innovation, and maintaining the highest standards of integrity.
                        </p>
                        <p>
                            Today, EstateHub combines cutting-edge technology with personalized service to provide an unmatched real
                            estate experience. Whether you're a first-time homebuyer, seasoned investor, or looking to sell your property,
                            we're here to guide you every step of the way.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="bg-[rgb(var(--color-neutral-50))] py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-[rgb(var(--color-neutral-900))] mb-4 text-center" style={{ fontFamily: 'var(--font-display)' }}>
                        Our Values
                    </h2>
                    <p className="text-lg text-[rgb(var(--color-neutral-600))] text-center mb-16 max-w-2xl mx-auto">
                        These core principles guide everything we do
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value) => (
                            <div key={value.title} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[rgb(var(--color-primary-500))] to-[rgb(var(--color-primary-700))] text-white flex items-center justify-center mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[rgb(var(--color-neutral-900))] mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-[rgb(var(--color-neutral-600))] leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-[rgb(var(--color-neutral-900))] mb-4 text-center" style={{ fontFamily: 'var(--font-display)' }}>
                        Leadership Team
                    </h2>
                    <p className="text-lg text-[rgb(var(--color-neutral-600))] text-center mb-16 max-w-2xl mx-auto">
                        Meet the dedicated professionals leading EstateHub
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member) => (
                            <div key={member.name} className="group">
                                <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                </div>
                                <h3 className="text-xl font-bold text-[rgb(var(--color-neutral-900))] mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-[rgb(var(--color-neutral-600))]">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-[rgb(var(--color-primary-600))] to-[rgb(var(--color-primary-700))] py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-[rgb(var(--color-primary-100))] mb-10 max-w-2xl mx-auto">
                        Join thousands of satisfied clients who have found their dream homes with EstateHub
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/properties">
                            <Button variant="secondary" size="lg" className="bg-white text-[rgb(var(--color-primary-700))] border-white hover:bg-[rgb(var(--color-neutral-50))]">
                                Browse Properties
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="ghost" size="lg" className="text-white border-2 border-white hover:bg-white/10">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
