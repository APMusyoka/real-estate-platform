'use client';

import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'estatehub_favorites';

export function useFavorites() {
    const [favorites, setFavorites] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load favorites from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(FAVORITES_KEY);
        if (stored) {
            try {
                setFavorites(JSON.parse(stored));
            } catch (e) {
                console.error('Error loading favorites:', e);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save favorites to localStorage whenever they change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
        }
    }, [favorites, isLoaded]);

    const toggleFavorite = (propertyId: string) => {
        setFavorites(prev => {
            if (prev.includes(propertyId)) {
                return prev.filter(id => id !== propertyId);
            } else {
                return [...prev, propertyId];
            }
        });
    };

    const isFavorite = (propertyId: string) => {
        return favorites.includes(propertyId);
    };

    const removeFavorite = (propertyId: string) => {
        setFavorites(prev => prev.filter(id => id !== propertyId));
    };

    const clearAllFavorites = () => {
        setFavorites([]);
    };

    return {
        favorites,
        toggleFavorite,
        isFavorite,
        removeFavorite,
        clearAllFavorites,
        count: favorites.length,
        isLoaded,
    };
}
