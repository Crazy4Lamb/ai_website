import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBox({ value, onChange, placeholder = '搜索AI工具...' }: SearchBoxProps) {
  return (
    <motion.div
      className="relative w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-4 h-14 bg-white/5 border-white/10 rounded-xl text-white placeholder:text-white/50 focus:border-[#8729ff] focus:ring-[#8729ff]/20 transition-all"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <kbd className="hidden sm:inline-block px-2 py-1 text-xs rounded bg-white/10 text-white/50">
            Ctrl K
          </kbd>
        </div>
      </div>
    </motion.div>
  );
}
