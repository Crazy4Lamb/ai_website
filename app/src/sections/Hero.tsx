import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Plus } from 'lucide-react';
import { SearchBox } from '@/components/SearchBox';
import { GlowButton } from '@/components/GlowButton';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function Hero({ searchQuery, onSearchChange }: HeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-20 pb-16 px-4">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#8729ff]" />
          <span className="text-sm text-white/70">已收录 1000+ 优质AI工具</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight"
        >
          发现最强大的
          <span
            className="block mt-2"
            style={{
              background: 'linear-gradient(135deg, #8729ff 0%, #dd23bb 50%, #2d62ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AI工具
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto"
        >
          汇集全球优质AI工具，助你提升工作效率，释放创意潜能
        </motion.p>

        {/* Search Box */}
        <SearchBox value={searchQuery} onChange={onSearchChange} />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <GlowButton href="#tools">
            探索工具
            <ArrowRight className="w-4 h-4 ml-2 inline" />
          </GlowButton>
          <GlowButton variant="secondary">
            <Plus className="w-4 h-4 mr-2 inline" />
            提交工具
          </GlowButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-12"
        >
          {[
            { value: '1000+', label: 'AI工具' },
            { value: '50+', label: '分类' },
            { value: '10K+', label: '日活跃用户' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
