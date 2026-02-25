import { Sparkles, Github, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    工具分类: ['对话AI', '图像生成', '编程助手', '写作助手', '视频制作'],
    关于我们: ['关于', '联系方式', '加入我们', '合作伙伴'],
    资源: ['使用教程', 'API文档', '开发者', '博客'],
    法律: ['隐私政策', '服务条款', 'Cookie政策'],
  };

  return (
    <footer className="py-16 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8729ff] to-[#511999] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-white">AI导航</span>
            </div>
            <p className="text-white/50 mb-6 max-w-sm">
              发现最优质的AI工具，提升工作效率，释放创意潜能。我们致力于为用户提供最新、最全的AI工具导航服务。
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-medium mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-[#8729ff] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2024 AI导航. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Made with ❤️ for AI enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
}
