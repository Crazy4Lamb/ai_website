import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Category } from '@/types';
import {
  LayoutGrid,
  MessageSquare,
  Image,
  Code,
  PenTool,
  Video,
  Music,
  BarChart3,
  Search,
  Languages,
  Briefcase,
} from 'lucide-react';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutGrid,
  MessageSquare,
  Image,
  Code,
  PenTool,
  Video,
  Music,
  BarChart3,
  Search,
  Languages,
  Briefcase,
};

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {categories.map((category, index) => {
        const IconComponent = iconMap[category.icon] || LayoutGrid;
        const isSelected = selectedCategory === category.id;

        return (
          <motion.button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={cn(
              'relative px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300',
              isSelected
                ? 'text-white'
                : 'text-white/70 hover:text-white bg-white/5 hover:bg-white/10'
            )}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSelected && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-gradient-to-r from-[#8729ff] to-[#511999] rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <IconComponent className="w-4 h-4" />
              {category.name}
              <span className="text-xs opacity-60">({category.count})</span>
            </span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}
