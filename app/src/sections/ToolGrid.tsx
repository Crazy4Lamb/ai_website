import { motion } from 'framer-motion';
import { ToolCard } from '@/components/ToolCard';
import type { AITool } from '@/types';
import { Sparkles } from 'lucide-react';

interface ToolGridProps {
  tools: AITool[];
  favoriteIds: string[];
  onToggleFavorite: (toolId: string) => void;
}

export function ToolGrid({ tools, favoriteIds, onToggleFavorite }: ToolGridProps) {
  if (tools.length === 0) {
    return (
      <section id="tools" className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-4 text-white/30" />
          <h3 className="text-xl font-semibold text-white mb-2">没有找到相关工具</h3>
          <p className="text-white/50">尝试使用其他关键词或分类</p>
        </div>
      </section>
    );
  }

  return (
    <section id="tools" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-white mb-2">热门AI工具</h2>
          <p className="text-white/50">发现最适合你的AI助手</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <ToolCard
              key={tool.id}
              tool={tool}
              isFavorite={favoriteIds.includes(tool.id)}
              onToggleFavorite={() => onToggleFavorite(tool.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
