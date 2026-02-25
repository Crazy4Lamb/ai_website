import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Wand2, Copy, Check } from 'lucide-react';
import { promptTemplates } from '@/data/tools';

export function PromptGenerator() {
  const [category, setCategory] = useState('writing');
  const [input, setInput] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);

  const categories = [
    { id: 'writing', name: '写作' },
    { id: 'code', name: '编程' },
    { id: 'image', name: '图像' },
    { id: 'analysis', name: '分析' },
  ];

  const generatePrompt = () => {
    const templates = promptTemplates.find((t) => t.category === categories.find((c) => c.id === category)?.name)?.templates || [];
    if (templates.length > 0) {
      const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
      const filledPrompt = randomTemplate
        .replace('{主题}', input || '人工智能')
        .replace('{字数}', '1000')
        .replace('{风格}', '专业')
        .replace('{内容}', input || '示例内容')
        .replace('{产品/服务}', input || '产品')
        .replace('{编程语言}', 'Python')
        .replace('{功能}', input || '数据处理')
        .replace('{代码}', input || 'function example() {}')
        .replace('{描述}', input || '美丽的风景')
        .replace('{场景}', input || '未来城市')
        .replace('{数据}', input || '销售数据')
        .replace('{文本}', input || '示例文本')
        .replace('{选项A}', '方案A')
        .replace('{选项B}', '方案B');
      setGeneratedPrompt(filledPrompt);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 bg-white/5 border-white/10 backdrop-blur-sm h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8729ff]/30 to-[#511999]/30 flex items-center justify-center">
            <Wand2 className="w-5 h-5 text-[#8729ff]" />
          </div>
          <h3 className="text-lg font-semibold text-white">AI提示词生成器</h3>
        </div>

        <div className="space-y-4">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white">
              <SelectValue placeholder="选择类别" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a2e] border-white/10">
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.id} className="text-white hover:bg-white/10">
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="输入你的需求..."
            className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
          />

          <Button
            onClick={generatePrompt}
            className="w-full bg-gradient-to-r from-[#8729ff] to-[#511999] hover:opacity-90 text-white"
          >
            <Wand2 className="w-4 h-4 mr-2" />
            生成提示词
          </Button>

          {generatedPrompt && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4"
            >
              <div className="relative p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-white/80 text-sm pr-10">{generatedPrompt}</p>
                <button
                  onClick={copyToClipboard}
                  className="absolute top-2 right-2 p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-white/50" />
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
