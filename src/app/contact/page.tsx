'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Input, Navigation, Footer, Select } from '@/components';
import { Phone, Mail, MapPin, Share2, Facebook, Twitter, Instagram, Linkedin, Send, Map } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[rgb(var(--color-primary-600))] to-[rgb(var(--color-primary-700))] py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        Get in Touch
                    </h1>
                    <p className="text-xl text-[rgb(var(--color-primary-100))] max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-[rgb(var(--color-neutral-900))] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                                Contact Information
                            </h2>
                            <p className="text-[rgb(var(--color-neutral-600))] mb-8 leading-relaxed">
                                Whether you're looking to buy, sell, or just have a question, our team is here to help you navigate the real estate market.
                            </p>

                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-[rgb(var(--color-primary-50))] flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-[rgb(var(--color-primary-600))]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[rgb(var(--color-neutral-900))] mb-1">Phone</h3>
                                        <p className="text-[rgb(var(--color-neutral-600))]">(555) 123-4567</p>
                                        <p className="text-sm text-[rgb(var(--color-neutral-500))]">Mon-Fri 9am-6pm PST</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-[rgb(var(--color-secondary-50))] flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-[rgb(var(--color-secondary-600))]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[rgb(var(--color-neutral-900))] mb-1">Email</h3>
                                        <p className="text-[rgb(var(--color-neutral-600))]">info@estatehub.com</p>
                                        <p className="text-sm text-[rgb(var(--color-neutral-500))]">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-[rgb(var(--color-warning))]/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-[rgb(var(--color-warning))]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[rgb(var(--color-neutral-900))] mb-1">Office</h3>
                                        <p className="text-[rgb(var(--color-neutral-600))]">123 Real Estate Blvd, Suite 400</p>
                                        <p className="text-[rgb(var(--color-neutral-600))]">San Francisco, CA 94102</p>
                                    </div>
                                </div>

                                {/* Social */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-[rgb(var(--color-info))]/10 flex items-center justify-center flex-shrink-0">
                                        <Share2 className="w-6 h-6 text-[rgb(var(--color-info))]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[rgb(var(--color-neutral-900))] mb-2">Follow Us</h3>
                                        <div className="flex gap-3">
                                            <a href="#" className="w-10 h-10 rounded-lg bg-[rgb(var(--color-neutral-100))] hover:bg-[rgb(var(--color-primary-50))] text-[rgb(var(--color-neutral-600))] hover:text-[rgb(var(--color-primary-600))] flex items-center justify-center transition-colors">
                                                <span className="sr-only">Facebook</span>
                                                <Facebook className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="w-10 h-10 rounded-lg bg-[rgb(var(--color-neutral-100))] hover:bg-[rgb(var(--color-primary-50))] text-[rgb(var(--color-neutral-600))] hover:text-[rgb(var(--color-primary-600))] flex items-center justify-center transition-colors">
                                                <span className="sr-only">Twitter</span>
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="w-10 h-10 rounded-lg bg-[rgb(var(--color-neutral-100))] hover:bg-[rgb(var(--color-primary-50))] text-[rgb(var(--color-neutral-600))] hover:text-[rgb(var(--color-primary-600))] flex items-center justify-center transition-colors">
                                                <span className="sr-only">Instagram</span>
                                                <Instagram className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="w-10 h-10 rounded-lg bg-[rgb(var(--color-neutral-100))] hover:bg-[rgb(var(--color-primary-50))] text-[rgb(var(--color-neutral-600))] hover:text-[rgb(var(--color-primary-600))] flex items-center justify-center transition-colors">
                                                <span className="sr-only">LinkedIn</span>
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-[rgb(var(--color-neutral-50))] rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-[rgb(var(--color-neutral-900))] mb-6">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input
                                        label="Name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                    <Input
                                        label="Email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input
                                        label="Phone"
                                        type="tel"
                                        placeholder="(555) 123-4567"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                    <div>
                                        <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                                            Subject
                                        </label>
                                        <Select
                                            value={formData.subject}
                                            onChange={(val) => setFormData({ ...formData, subject: val as string })}
                                            options={[
                                                { value: '', label: 'Select a subject' },
                                                { value: 'buying', label: "I'm interested in buying" },
                                                { value: 'selling', label: "I want to sell my property" },
                                                { value: 'renting', label: "I'm looking to rent" },
                                                { value: 'general', label: "General inquiry" },
                                                { value: 'support', label: "Customer support" }
                                            ]}
                                            placeholder="Select a subject"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[rgb(var(--color-neutral-700))] mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        placeholder="Tell us more about what you're looking for..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-lg border border-[rgb(var(--color-neutral-300))] focus:border-[rgb(var(--color-primary-500))] focus:ring-4 focus:ring-[rgb(var(--color-primary-500)/0.1)] outline-none transition-all resize-none bg-white"
                                        required
                                    ></textarea>
                                </div>

                                <Button variant="primary" className="w-full" type="submit">
                                    <Send className="w-5 h-5 mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="bg-[rgb(var(--color-neutral-100))] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[rgb(var(--color-neutral-300))] rounded-2xl h-96 flex items-center justify-center">
                        <div className="text-center text-[rgb(var(--color-neutral-600))]">
                            <Map className="w-16 h-16 mx-auto mb-4" />
                            <p className="text-lg font-medium">Map Location</p>
                            <p className="text-sm">123 Real Estate Blvd, San Francisco, CA</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
