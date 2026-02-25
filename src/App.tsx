import { useState, useMemo, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { AnimatedGrid } from '@/components/AnimatedGrid';
import { Hero } from '@/sections/Hero';
import { CategoryNav } from '@/sections/CategoryNav';
import { ToolGrid } from '@/sections/ToolGrid';
import { UtilityTools } from '@/sections/UtilityTools';
import { Stats } from '@/sections/Stats';
import { SubmitCTA } from '@/sections/SubmitCTA';
import { Footer } from '@/sections/Footer';
import { categories, tools } from '@/data/tools';
import { useFavorites } from '@/hooks/useFavorites';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { favorites, toggleFavorite, removeFavorite } = useFavorites();

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
        searchInput?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter tools based on search and category
  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        searchQuery === '' ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'all' || tool.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedGrid />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        
        <CategoryNav
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <ToolGrid
          tools={filteredTools}
          favoriteIds={favorites}
          onToggleFavorite={toggleFavorite}
        />

        <div id="utilities">
          <UtilityTools
            tools={tools}
            favorites={favorites}
            onRemoveFavorite={removeFavorite}
          />
        </div>

        <Stats />

        <SubmitCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
