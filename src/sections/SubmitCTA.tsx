import { motion } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';
import { GlowButton } from '@/components/GlowButton';

export function SubmitCTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl p-8 md:p-16"
          style={{
            background: 'linear-gradient(135deg, rgba(135, 41, 255, 0.2) 0%, rgba(81, 25, 153, 0.2) 100%)',
          }}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full opacity-30"
              style={{
                background: 'radial-gradient(circle, #8729ff 0%, transparent 70%)',
                filter: 'blur(100px)',
              }}
            />
            <div
              className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full opacity-20"
              style={{
                background: 'radial-gradient(circle, #dd23bb 0%, transparent 70%)',
                filter: 'blur(100px)',
              }}
            />
          </div>

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6"
            >
              <Plus className="w-8 h-8 text-[#8729ff]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-semibold text-white mb-4"
            >
              有优秀的AI工具想要分享？
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/70 text-lg mb-8 max-w-xl mx-auto"
            >
              提交你的AI工具，让更多人发现它。我们会对每个提交的工具进行审核，确保质量。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <GlowButton>
                立即提交
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </GlowButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
