'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const FAVORITES_KEY = 'estatehub_favorites';

interface FavoritesContextType {
    favorites: string[];
    toggleFavorite: (propertyId: string) => void;
    isFavorite: (propertyId: string) => boolean;
    removeFavorite: (propertyId: string) => void;
    clearAllFavorites: () => void;
    count: number;
    isLoaded: boolean;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load favorites from localStorage on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem(FAVORITES_KEY);
            if (stored) {
                try {
                    setFavorites(JSON.parse(stored));
                } catch (e) {
                    console.error('Error loading favorites:', e);
                }
            }
        }
        setIsLoaded(true);
    }, []);

    // Save favorites to localStorage whenever they change
    useEffect(() => {
        if (isLoaded && typeof window !== 'undefined') {
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

    return (
        <FavoritesContext.Provider value={{
            favorites,
            toggleFavorite,
            isFavorite,
            removeFavorite,
            clearAllFavorites,
            count: favorites.length,
            isLoaded,
        }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavoritesContext() {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within FavoritesProvider');
    }
    return context;
}
