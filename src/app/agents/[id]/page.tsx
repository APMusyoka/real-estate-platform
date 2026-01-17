'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Input, PropertyCard, Navigation } from '@/components';
import { agents } from '@/data/agents';
import { allProperties } from '@/data/allProperties';
import { notFound } from 'next/navigation';

export default function AgentProfilePage({ params }: { params: { id: string } }) {
    const agent = agents.find((a) => a.id === params.id);

    if (!agent) {
        notFound();
    }

    // Get agent's properties (mock: filter by first letter of city matching agent ID)
    const agentProperties = allProperties.slice(0, 6);

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Agent Header */}
            <section className="relative bg-gradient-to-r from-[rgb(var(--color-primary-600))] to-[rgb(var(--color-primary-700))] py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        {/* Agent Photo */}
                        <div className="relative w-48 h-48 rounded-2xl overflow-hidden ring-4 ring-white shadow-2xl flex-shrink-0">
                            <Image
                                src={agent.image}
                                alt={agent.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Agent Info */}
                        <div className="flex-1 text-center md:text-left text-white">
                            <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                {agent.name}
                            </h1>
                            <p className="text-xl text-[rgb(var(--color-primary-100))] mb-6">{agent.role}</p>

                            {/* Specialties */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                                {agent.specialties.map((specialty) => (
                                    <span
                                        key={specialty}
                                        className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full"
                                    >
                                        {specialty}
                                    </span>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-8">
                                <div>
                                    <div className="text-3xl font-bold" style={{ fontFamily: 'var(--font-mono)' }}>{agent.yearsExperience}+</div>
                                    <div className="text-sm text-[rgb(var(--color-primary-100))]">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold" style={{ fontFamily: 'var(--font-mono)' }}>{agent.propertiesSold}</div>
                                    <div className="text-sm text-[rgb(var(--color-primary-100))]">Properties Sold</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold" style={{ fontFamily: 'var(--font-mono)' }}>{agent.activeListings}</div>
                                    <div className="text-sm text-[rgb(var(--color-primary-100))]">Active Listings</div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">
                                        <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <span className="text-3xl font-bold" style={{ fontFamily: 'var(--font-mono)' }}>{agent.rating}</span>
                                    </div>
                                    <div className="text-sm text-[rgb(var(--color-primary-100))]">{agent.reviews} Reviews</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About */}
                        <div>
                            <h2 className="text-2xl font-bold text-[rgb(var(--color-neutral-900))] mb-4">About {agent.name.split(' ')[0]}</h2>
                            <p className="text-[rgb(var(--color-neutral-700))] leading-relaxed text-lg">
                                {agent.bio}
                            </p>
                        </div>

                        {/* Certifications */}
                        <div>
                            <h3 className="text-xl font-bold text-[rgb(var(--color-neutral-900))] mb-4">Certifications & Credentials</h3>
                            <div className="space-y-2 ">
                                {agent.certifications.map((cert) => (
                                    <div key={cert} className="flex items-center gap-2 text-[rgb(var(--color-neutral-700))]">
                                        <svg className="w-5 h-5 text-[rgb(var(--color-success))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {cert}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div>
                            <h3 className="text-xl font-bold text-[rgb(var(--color-neutral-900))] mb-4">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {agent.languages.map((language) => (
                                    <span
                                        key={language}
                                        className="px-4 py-2 bg-[rgb(var(--color-neutral-100))] text-[rgb(var(--color-neutral-700))] rounded-lg font-medium"
                                    >
                                        {language}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Active Listings */}
                        <div>
                            <h3 className="text-2xl font-bold text-[rgb(var(--color-neutral-900))] mb-6">Active Listings</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {agentProperties.map((property) => (
                                    <PropertyCard key={property.id} {...property} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Contact Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-white border border-[rgb(var(--color-neutral-200))] rounded-2xl p-6 shadow-lg">
                            <h3 className="text-xl font-bold text-[rgb(var(--color-neutral-900))] mb-6">Contact {agent.name.split(' ')[0]}</h3>

                            {/* Contact Info */}
                            <div className="space-y-4 mb-6">
                                <a href={`mailto:${agent.email}`} className="flex items-center gap-3 text-[rgb(var(--color-neutral-700))] hover:text-[rgb(var(--color-primary-600))] transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-[rgb(var(--color-primary-50))] flex items-center justify-center">
                                        <svg className="w-5 h-5 text-[rgb(var(--color-primary-600))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-[rgb(var(--color-neutral-500))]">Email</div>
                                        <div className="text-sm font-medium">{agent.email}</div>
                                    </div>
                                </a>

                                <a href={`tel:${agent.phone}`} className="flex items-center gap-3 text-[rgb(var(--color-neutral-700))] hover:text-[rgb(var(--color-primary-600))] transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-[rgb(var(--color-secondary-50))] flex items-center justify-center">
                                        <svg className="w-5 h-5 text-[rgb(var(--color-secondary-600))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-[rgb(var(--color-neutral-500))]">Phone</div>
                                        <div className="text-sm font-medium">{agent.phone}</div>
                                    </div>
                                </a>
                            </div>

                            {/* Social Media */}
                            {agent.socialMedia && (
                                <div className="mb-6">
                                    <div className="text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-3">Connect</div>
                                    <div className="flex gap-2">
                                        {agent.socialMedia.linkedin && (
                                            <a href={agent.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[rgb(var(--color-neutral-100))] hover:bg-[rgb(var(--color-primary-50))] text-[rgb(var(--color-neutral-600))] hover:text-[rgb(var(--color-primary-600))] flex items-center justify-center transition-colors">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </a>
                                        )}
                                        {agent.socialMedia.twitter && (
                                            <a href={agent.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[rgb(var(--color-neutral-100))] hover:bg-[rgb(var(--color-primary-50))] text-[rgb(var(--color-neutral-600))] hover:text-[rgb(var(--color-primary-600))] flex items-center justify-center transition-colors">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                </svg>
                                            </a>
                                        )}
                                        {agent.socialMedia.instagram && (
                                            <a href={agent.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[rgb(var(--color-neutral-100))] hover:bg-[rgb(var(--color-primary-50))] text-[rgb(var(--color-neutral-600))] hover:text-[rgb(var(--color-primary-600))] flex items-center justify-center transition-colors">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Contact Form */}
                            <form className="space-y-4">
                                <Input label="Your Name" placeholder="John Doe" />
                                <Input label="Email" type="email" placeholder="john@example.com" />
                                <Input label="Phone" type="tel" placeholder="(555) 123-4567" />
                                <div>
                                    <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        placeholder="I'm interested in working with you..."
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-[rgb(var(--color-neutral-300))] focus:border-[rgb(var(--color-primary-500))] focus:ring-4 focus:ring-[rgb(var(--color-primary-500)/0.1)] outline-none transition-all resize-none"
                                    ></textarea>
                                </div>
                                <Button variant="primary" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
