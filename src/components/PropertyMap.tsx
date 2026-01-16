'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface PropertyMapProps {
    lat: number;
    lng: number;
    title?: string;
    address?: string;
    height?: string;
    zoom?: number;
}

export default function PropertyMap({
    lat,
    lng,
    title,
    address,
    height = '400px',
    zoom = 15
}: PropertyMapProps) {
    return (
        <div className="rounded-2xl overflow-hidden border border-[rgb(var(--color-neutral-200))] shadow-lg" style={{ height }}>
            <MapContainer
                center={[lat, lng]}
                zoom={zoom}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lng]}>
                    {(title || address) && (
                        <Popup>
                            {title && <div className="font-bold text-lg mb-1">{title}</div>}
                            {address && <div className="text-sm text-gray-600">{address}</div>}
                        </Popup>
                    )}
                </Marker>
            </MapContainer>
        </div>
    );
}
