'use client';

import React, { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Input, PropertyCard, Navigation, Footer } from '@/components';
import { Star, ShieldCheck, Mail, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';
import { agents } from '@/data/agents';
import { allProperties } from '@/data/allProperties';
import { notFound } from 'next/navigation';

export default function AgentProfilePage({ params }: { params: Promise<{ id: string }> }) {
    // Unwrap the params Promise (Next.js 15+)
    const { id } = use(params);
    const agent = agents.find((a) => a.id === id);

    if (!agent) {
        notFound();
    }

    // Get agent's properties (mock: filter by first letter of city matching agent ID)
    const agentProperties = allProperties.slice(0, 6);

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Agent Header */}
            <section className="relative bg-linear-to-r from-[rgb(var(--color-primary-600))] to-[rgb(var(--color-primary-700))] py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        {/* Agent Photo */}
                        <div className="relative w-48 h-48 rounded-2xl overflow-hidden ring-4 ring-white shadow-2xl shrink-0">
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
                                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
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
                                        <ShieldCheck className="w-5 h-5 text-[rgb(var(--color-success))]" />
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
                                        <Mail className="w-5 h-5 text-[rgb(var(--color-primary-600))]" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-[rgb(var(--color-neutral-500))]">Email</div>
                                        <div className="text-sm font-medium">{agent.email}</div>
                                    </div>
                                </a>

                                <a href={`tel:${agent.phone}`} className="flex items-center gap-3 text-[rgb(var(--color-neutral-700))] hover:text-[rgb(var(--color-primary-600))] transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-[rgb(var(--color-secondary-50))] flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-[rgb(var(--color-secondary-600))]" />
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
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                        )}
                                        {agent.socialMedia.twitter && (
                                            <a href={agent.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[rgb(var(--color-neutral-100))] hover:bg-[rgb(var(--color-primary-50))] text-[rgb(var(--color-neutral-600))] hover:text-[rgb(var(--color-primary-600))] flex items-center justify-center transition-colors">
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                        )}
                                        {agent.socialMedia.instagram && (
                                            <a href={agent.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[rgb(var(--color-neutral-100))] hover:bg-[rgb(var(--color-primary-50))] text-[rgb(var(--color-neutral-600))] hover:text-[rgb(var(--color-primary-600))] flex items-center justify-center transition-colors">
                                                <Instagram className="w-5 h-5" />
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
            <Footer />
        </div>
    );
}
