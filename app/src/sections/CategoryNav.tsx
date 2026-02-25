import { motion } from 'framer-motion';
import { CategoryFilter } from '@/components/CategoryFilter';
import type { Category } from '@/types';

interface CategoryNavProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export function CategoryNav({ categories, selectedCategory, onSelectCategory }: CategoryNavProps) {
  return (
    <section className="py-8 px-4 sticky top-0 z-40 bg-black/80 backdrop-blur-lg border-b border-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />
      </motion.div>
    </section>
  );
}
