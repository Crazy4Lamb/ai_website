import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GitCompare, X, Check } from 'lucide-react';
import type { AITool } from '@/types';

interface ToolComparatorProps {
  tools: AITool[];
}

export function ToolComparator({ tools }: ToolComparatorProps) {
  const [toolA, setToolA] = useState<string>('');
  const [toolB, setToolB] = useState<string>('');
  const [isComparing, setIsComparing] = useState(false);

  const selectedToolA = tools.find((t) => t.id === toolA);
  const selectedToolB = tools.find((t) => t.id === toolB);

  const startCompare = () => {
    if (toolA && toolB && toolA !== toolB) {
      setIsComparing(true);
    }
  };

  const clearComparison = () => {
    setIsComparing(false);
    setToolA('');
    setToolB('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="p-6 bg-white/5 border-white/10 backdrop-blur-sm h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2d62ff]/30 to-[#dd23bb]/30 flex items-center justify-center">
            <GitCompare className="w-5 h-5 text-[#2d62ff]" />
          </div>
          <h3 className="text-lg font-semibold text-white">工具对比器</h3>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Select value={toolA} onValueChange={setToolA}>
              <SelectTrigger className="bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="选择工具 A" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a2e] border-white/10 max-h-60">
                {tools.map((tool) => (
                  <SelectItem
                    key={tool.id}
                    value={tool.id}
                    disabled={tool.id === toolB}
                    className="text-white hover:bg-white/10"
                  >
                    {tool.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={toolB} onValueChange={setToolB}>
              <SelectTrigger className="bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="选择工具 B" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a2e] border-white/10 max-h-60">
                {tools.map((tool) => (
                  <SelectItem
                    key={tool.id}
                    value={tool.id}
                    disabled={tool.id === toolA}
                    className="text-white hover:bg-white/10"
                  >
                    {tool.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {!isComparing ? (
            <Button
              onClick={startCompare}
              disabled={!toolA || !toolB || toolA === toolB}
              className="w-full bg-gradient-to-r from-[#8729ff] to-[#511999] hover:opacity-90 text-white disabled:opacity-50"
            >
              <GitCompare className="w-4 h-4 mr-2" />
              开始对比
            </Button>
          ) : (
            <Button
              onClick={clearComparison}
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10"
            >
              <X className="w-4 h-4 mr-2" />
              清除对比
            </Button>
          )}

          <AnimatePresence>
            {isComparing && selectedToolA && selectedToolB && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 space-y-3"
              >
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="text-white/50">特性</div>
                  <div className="text-white font-medium text-center">{selectedToolA.name}</div>
                  <div className="text-white font-medium text-center">{selectedToolB.name}</div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-sm items-center py-2 border-t border-white/10">
                  <div className="text-white/50">免费</div>
                  <div className="text-center">
                    {selectedToolA.isFree ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    )}
                  </div>
                  <div className="text-center">
                    {selectedToolB.isFree ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-sm items-center py-2 border-t border-white/10">
                  <div className="text-white/50">精选</div>
                  <div className="text-center">
                    {selectedToolA.isFeatured ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    )}
                  </div>
                  <div className="text-center">
                    {selectedToolB.isFeatured ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-sm py-2 border-t border-white/10">
                  <div className="text-white/50">标签</div>
                  <div className="text-center text-xs text-white/70">
                    {selectedToolA.tags.slice(0, 2).join(', ')}
                  </div>
                  <div className="text-center text-xs text-white/70">
                    {selectedToolB.tags.slice(0, 2).join(', ')}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
}
