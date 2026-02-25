import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink, Trash2, Sparkles, MessageSquare, Image, Code, PenTool, Video, Music, BarChart3, Search, Languages, Briefcase, LayoutGrid } from 'lucide-react';
import type { AITool } from '@/types';

interface FavoritesListProps {
  favorites: string[];
  tools: AITool[];
  onRemoveFavorite: (toolId: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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
  LayoutGrid,
};

export function FavoritesList({ favorites, tools, onRemoveFavorite }: FavoritesListProps) {
  const favoriteTools = tools.filter((tool) => favorites.includes(tool.id));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="p-6 bg-white/5 border-white/10 backdrop-blur-sm h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#dd23bb]/30 to-[#8729ff]/30 flex items-center justify-center">
            <Heart className="w-5 h-5 text-[#dd23bb]" />
          </div>
          <h3 className="text-lg font-semibold text-white">我的收藏</h3>
          <span className="ml-auto text-sm text-white/50">({favoriteTools.length})</span>
        </div>

        <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="popLayout">
            {favoriteTools.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8 text-white/50"
              >
                <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">还没有收藏任何工具</p>
                <p className="text-xs mt-1">点击工具卡片上的爱心图标收藏</p>
              </motion.div>
            ) : (
              favoriteTools.map((tool) => {
                const IconComponent = iconMap[tool.icon] || LayoutGrid;

                return (
                  <motion.div
                    key={tool.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 group hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8729ff]/20 to-[#511999]/20 flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-[#8729ff]" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{tool.name}</p>
                        <p className="text-white/50 text-xs line-clamp-1">{tool.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white/50 hover:text-white"
                        asChild
                      >
                        <a href={tool.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white/50 hover:text-red-400"
                        onClick={() => onRemoveFavorite(tool.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
}
