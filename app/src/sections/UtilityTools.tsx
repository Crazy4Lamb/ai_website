import { motion } from 'framer-motion';
import { PromptGenerator } from '@/components/PromptGenerator';
import { NewsTicker } from '@/components/NewsTicker';
import { FavoritesList } from '@/components/FavoritesList';
import { ToolComparator } from '@/components/ToolComparator';
import type { AITool } from '@/types';

interface UtilityToolsProps {
  tools: AITool[];
  favorites: string[];
  onRemoveFavorite: (toolId: string) => void;
}

export function UtilityTools({ tools, favorites, onRemoveFavorite }: UtilityToolsProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-white mb-4">实用小工具</h2>
          <p className="text-white/50 max-w-xl mx-auto">
            提升你的AI使用体验，这些工具帮你更好地利用AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PromptGenerator />
          <NewsTicker />
          <FavoritesList
            favorites={favorites}
            tools={tools}
            onRemoveFavorite={onRemoveFavorite}
          />
          <ToolComparator tools={tools} />
        </div>
      </div>
    </section>
  );
}
