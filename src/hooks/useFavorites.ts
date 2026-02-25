import { useLocalStorage } from './useLocalStorage';

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<string[]>('ai-nav-favorites', []);

  const addFavorite = (toolId: string) => {
    setFavorites((prev) => {
      if (prev.includes(toolId)) return prev;
      return [...prev, toolId];
    });
  };

  const removeFavorite = (toolId: string) => {
    setFavorites((prev) => prev.filter((id) => id !== toolId));
  };

  const toggleFavorite = (toolId: string) => {
    if (favorites.includes(toolId)) {
      removeFavorite(toolId);
    } else {
      addFavorite(toolId);
    }
  };

  const isFavorite = (toolId: string) => favorites.includes(toolId);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  };
}
