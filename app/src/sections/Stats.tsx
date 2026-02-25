import { motion } from 'framer-motion';
import { CounterAnimation } from '@/components/CounterAnimation';

export function Stats() {
  const stats = [
    { value: 1000, suffix: '+', label: 'AI工具收录' },
    { value: 50, suffix: '+', label: '工具分类' },
    { value: 10000, suffix: '+', label: '日活跃用户' },
    { value: 365, suffix: '', label: '天持续更新' },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CounterAnimation
                  value={stat.value}
                  suffix={stat.suffix}
                  className="bg-gradient-to-r from-[#8729ff] to-[#dd23bb] bg-clip-text text-transparent"
                />
              </div>
              <p className="text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
