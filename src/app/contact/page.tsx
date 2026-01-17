'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Input, Navigation, Footer } from '@/components';

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
                                        <svg className="w-6 h-6 text-[rgb(var(--color-primary-600))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
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
                                        <svg className="w-6 h-6 text-[rgb(var(--color-secondary-600))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
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
                                        <svg className="w-6 h-6 text-[rgb(var(--color-warning))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
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
                                        <svg className="w-6 h-6 text-[rgb(var(--color-info))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[rgb(var(--color-neutral-900))] mb-2">Follow Us</h3>
                                        <div className="flex gap-3">
                                            <a href="#" className="w-10 h-10 rounded-lg bg-[rgb(var(--color-neutral-100))] hover:bg-[rgb(var(--color-primary-50))] text-[rgb(var(--color-neutral-600))] hover:text-[rgb(var(--color-primary-600))] flex items-center justify-center transition-colors">
                                                <span className="sr-only">Facebook</span>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                            </a>
                                            <a href="#" className="w-10 h-10 rounded-lg bg-[rgb(var(--color-neutral-100))] hover:bg-[rgb(var(--color-primary-50))] text-[rgb(var(--color-neutral-600))] hover:text-[rgb(var(--color-primary-600))] flex items-center justify-center transition-colors">
                                                <span className="sr-only">Twitter</span>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                </svg>
                                            </a>
                                            <a href="#" className="w-10 h-10 rounded-lg bg-[rgb(var(--color-neutral-100))] hover:bg-[rgb(var(--color-primary-50))] text-[rgb(var(--color-neutral-600))] hover:text-[rgb(var(--color-primary-600))] flex items-center justify-center transition-colors">
                                                <span className="sr-only">Instagram</span>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                </svg>
                                            </a>
                                            <a href="#" className="w-10 h-10 rounded-lg bg-[rgb(var(--color-neutral-100))] hover:bg-[rgb(var(--color-primary-50))] text-[rgb(var(--color-neutral-600))] hover:text-[rgb(var(--color-primary-600))] flex items-center justify-center transition-colors">
                                                <span className="sr-only">LinkedIn</span>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
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
                                        <select
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-[rgb(var(--color-neutral-300))] focus:border-[rgb(var(--color-primary-500))] focus:ring-4 focus:ring-[rgb(var(--color-primary-500)/0.1)] outline-none transition-all bg-white"
                                            required
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="buying">I'm interested in buying</option>
                                            <option value="selling">I want to sell my property</option>
                                            <option value="renting">I'm looking to rent</option>
                                            <option value="general">General inquiry</option>
                                            <option value="support">Customer support</option>
                                        </select>
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
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
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
                            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
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
