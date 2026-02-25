import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Newspaper, ExternalLink } from 'lucide-react';
import { newsItems } from '@/data/tools';

export function NewsTicker() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="p-6 bg-white/5 border-white/10 backdrop-blur-sm h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2d62ff]/30 to-[#8729ff]/30 flex items-center justify-center">
            <Newspaper className="w-5 h-5 text-[#2d62ff]" />
          </div>
          <h3 className="text-lg font-semibold text-white">每日AI快讯</h3>
        </div>

        <div className="relative h-48 overflow-hidden">
          <motion.div
            animate={{ y: ['0%', '-50%'] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="space-y-3"
          >
            {[...newsItems, ...newsItems].map((news, index) => (
              <a
                key={`${news.id}-${index}`}
                href={news.url}
                className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-white/80 text-sm line-clamp-2 group-hover:text-white transition-colors">
                      {news.title}
                    </p>
                    <p className="text-white/40 text-xs mt-1">{news.date}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/60 flex-shrink-0" />
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
