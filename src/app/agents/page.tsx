'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Navigation, Footer, Select } from '@/components';
import { Search, Star, Users } from 'lucide-react';
import { agents, agentSpecialties } from '@/data/agents';

export default function AgentsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
    const [sortBy, setSortBy] = useState('experience');

    // Filter and sort agents
    const filteredAgents = useMemo(() => {
        let filtered = agents.filter((agent) => {
            const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                agent.bio.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesSpecialty = selectedSpecialty === 'All Specialties' ||
                agent.specialties.includes(selectedSpecialty);

            return matchesSearch && matchesSpecialty;
        });

        // Sort
        switch (sortBy) {
            case 'experience':
                filtered.sort((a, b) => b.yearsExperience - a.yearsExperience);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'listings':
                filtered.sort((a, b) => b.activeListings - a.activeListings);
                break;
            case 'name':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        return filtered;
    }, [searchTerm, selectedSpecialty, sortBy]);

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Page Header */}
            <section className="bg-linear-to-r from-[rgb(var(--color-primary-600))] to-[rgb(var(--color-primary-700))] py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                        Meet Our Agents
                    </h1>
                    <p className="text-xl text-[rgb(var(--color-primary-100))] max-w-2xl mx-auto lg:mx-0">
                        Connect with experienced real estate professionals dedicated to helping you find your perfect home
                    </p>
                </div>
            </section>

            {/* Filters & Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Filters */}
                <div className="mb-8 bg-[rgb(var(--color-neutral-50))] rounded-2xl p-6 relative z-30">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Search */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                                Search Agents
                            </label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(var(--color-neutral-400))]" />
                                <input
                                    type="text"
                                    placeholder="Search by name or expertise..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[rgb(var(--color-neutral-300))] focus:border-[rgb(var(--color-primary-500))] focus:ring-4 focus:ring-[rgb(var(--color-primary-500)/0.1)] outline-none transition-all bg-white"
                                />
                            </div>
                        </div>

                        {/* Specialty Filter */}
                        <div>
                            <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                                Specialty
                            </label>
                            <Select
                                value={selectedSpecialty}
                                onChange={(val) => setSelectedSpecialty(val as string)}
                                options={[
                                    { value: 'All Specialties', label: 'All Specialties' },
                                    ...agentSpecialties.map(s => ({ value: s, label: s }))
                                ]}
                            />
                        </div>

                        {/* Sort */}
                        <div>
                            <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                                Sort By
                            </label>
                            <Select
                                value={sortBy}
                                onChange={(val) => setSortBy(val as string)}
                                options={[
                                    { value: 'experience', label: 'Experience' },
                                    { value: 'rating', label: 'Rating' },
                                    { value: 'listings', label: 'Active Listings' },
                                    { value: 'name', label: 'Name (A-Z)' }
                                ]}
                            />
                        </div>
                    </div>

                    <div className="mt-4 text-sm text-[rgb(var(--color-neutral-600))]">
                        Showing <span className="font-semibold text-[rgb(var(--color-primary-600))]">{filteredAgents.length}</span> agents
                    </div>
                </div>

                {/* Agents Grid */}
                {filteredAgents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredAgents.map((agent) => (
                            <Link href={`/agents/${agent.id}`} key={agent.id}>
                                <div className="group bg-white border border-[rgb(var(--color-neutral-200))] rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                                    {/* Agent Photo */}
                                    <div className="relative h-80 overflow-hidden">
                                        <Image
                                            src={agent.image}
                                            alt={agent.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                                        {/* Rating Badge */}
                                        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-md">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="text-sm font-semibold text-[rgb(var(--color-neutral-900))]">{agent.rating}</span>
                                        </div>
                                    </div>

                                    {/* Agent Info */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-[rgb(var(--color-neutral-900))] mb-1">
                                            {agent.name}
                                        </h3>
                                        <p className="text-sm text-[rgb(var(--color-primary-600))] font-medium mb-3">
                                            {agent.role}
                                        </p>

                                        {/* Specialties */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {agent.specialties.slice(0, 2).map((specialty) => (
                                                <span
                                                    key={specialty}
                                                    className="px-3 py-1 bg-[rgb(var(--color-primary-50))] text-[rgb(var(--color-primary-700))] text-xs font-medium rounded-full"
                                                >
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-4 py-4 border-t border-[rgb(var(--color-neutral-200))]">
                                            <div className="text-center">
                                                <div className="text-lg font-bold text-[rgb(var(--color-neutral-900))]">{agent.yearsExperience}</div>
                                                <div className="text-xs text-[rgb(var(--color-neutral-600))]">Years</div>
                                            </div>
                                            <div className="text-center border-x border-[rgb(var(--color-neutral-200))]">
                                                <div className="text-lg font-bold text-[rgb(var(--color-neutral-900))]">{agent.propertiesSold}</div>
                                                <div className="text-xs text-[rgb(var(--color-neutral-600))]">Sold</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-lg font-bold text-[rgb(var(--color-neutral-900))]">{agent.activeListings}</div>
                                                <div className="text-xs text-[rgb(var(--color-neutral-600))]">Active</div>
                                            </div>
                                        </div>

                                        {/* Contact Button */}
                                        <Button variant="primary" className="w-full">
                                            View Profile
                                        </Button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <Users className="w-16 h-16 mx-auto text-[rgb(var(--color-neutral-400))] mb-4" />
                        <h3 className="text-xl font-semibold text-[rgb(var(--color-neutral-900))] mb-2">
                            No agents found
                        </h3>
                        <p className="text-[rgb(var(--color-neutral-600))]">
                            Try adjusting your search or filters
                        </p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
