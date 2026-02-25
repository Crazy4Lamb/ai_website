import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink, Star, MessageSquare, Image, Code, PenTool, Video, Music, BarChart3, Search, Languages, Briefcase, LayoutGrid } from 'lucide-react';
import type { AITool } from '@/types';
import { cn } from '@/lib/utils';

interface ToolCardProps {
  tool: AITool;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  index: number;
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

export function ToolCard({ tool, isFavorite, onToggleFavorite, index }: ToolCardProps) {
  const IconComponent = iconMap[tool.icon] || LayoutGrid;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.165, 0.84, 0.44, 1],
      }}
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <Card
          className={cn(
            'relative p-6 bg-white/5 border-white/10 backdrop-blur-sm',
            'hover:border-[#8729ff]/50 transition-all duration-300',
            'group overflow-hidden'
          )}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(135, 41, 255, 0.15), transparent 70%)',
              }}
            />
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8729ff]/30 to-[#511999]/30 flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-[#8729ff]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">{tool.name}</h3>
                  <div className="flex items-center gap-2">
                    {tool.isFree && (
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 text-xs">
                        免费
                      </Badge>
                    )}
                    {tool.isFeatured && (
                      <Badge variant="secondary" className="bg-[#8729ff]/20 text-[#8729ff] text-xs">
                        <Star className="w-3 h-3 mr-1" />
                        精选
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <motion.button
                onClick={onToggleFavorite}
                className={cn(
                  'p-2 rounded-full transition-colors',
                  isFavorite
                    ? 'bg-[#8729ff]/20 text-[#8729ff]'
                    : 'bg-white/5 text-white/50 hover:text-white/80'
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className={cn('w-5 h-5', isFavorite && 'fill-current')} />
              </motion.button>
            </div>

            {/* Description */}
            <p className="text-white/70 text-sm mb-4 line-clamp-2">{tool.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tool.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button
                asChild
                className="flex-1 bg-gradient-to-r from-[#8729ff] to-[#511999] hover:opacity-90 text-white"
              >
                <a href={tool.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  访问
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
