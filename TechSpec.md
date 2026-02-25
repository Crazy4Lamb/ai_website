# AI导航网站技术规划

## 组件清单

### shadcn/ui 组件
- `button` - 按钮组件
- `input` - 输入框
- `card` - 卡片容器
- `badge` - 标签徽章
- `dialog` - 弹窗对话框
- `tabs` - 标签切换
- `scroll-area` - 滚动区域
- `separator` - 分隔线
- `skeleton` - 加载骨架
- `tooltip` - 提示工具

### 自定义组件
- `AnimatedGrid` - 动画网格背景
- `ToolCard` - AI工具卡片
- `CategoryFilter` - 分类筛选器
- `SearchBox` - 搜索框
- `PromptGenerator` - 提示词生成器
- `ToolComparator` - 工具对比器
- `NewsTicker` - 新闻滚动
- `FavoritesList` - 收藏列表
- `CounterAnimation` - 数字计数动画
- `GlowButton` - 发光按钮

## 动画实现规划

| 动画 | 库 | 实现方式 | 复杂度 |
|------|------|----------|--------|
| 背景网格动画 | CSS + Framer Motion | 持续移动的渐变网格，使用CSS keyframes和Framer Motion的motion.div | 中 |
| 滚动进入动画 | Framer Motion | useInView hook + motion.div，淡入上滑效果 | 中 |
| 卡片悬停效果 | Framer Motion | whileHover属性，上浮+发光+边框变色 | 低 |
| 数字计数动画 | Framer Motion | useSpring + useMotionValue，数字滚动效果 | 中 |
| 标签切换动画 | Framer Motion | AnimatePresence + layoutId，平滑过渡 | 中 |
| 按钮发光效果 | CSS | box-shadow动画，hover时增强发光 | 低 |
| 交错动画 | Framer Motion | staggerChildren + delayChildren | 低 |
| 新闻滚动 | CSS | 垂直滚动动画，无限循环 | 低 |

## 动画库选择

### Framer Motion (主要)
- React组件动画
- 手势交互 (拖拽、悬停)
- AnimatePresence 进/出动画
- useInView 滚动检测
- useSpring 物理动画

### CSS Animations (辅助)
- 背景持续动画
- 简单hover效果
- 性能关键的动画

## 项目文件结构

```
app/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui 组件
│   │   ├── AnimatedGrid.tsx
│   │   ├── ToolCard.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── SearchBox.tsx
│   │   ├── PromptGenerator.tsx
│   │   ├── ToolComparator.tsx
│   │   ├── NewsTicker.tsx
│   │   ├── FavoritesList.tsx
│   │   ├── CounterAnimation.tsx
│   │   └── GlowButton.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── CategoryNav.tsx
│   │   ├── ToolGrid.tsx
│   │   ├── UtilityTools.tsx
│   │   ├── Stats.tsx
│   │   ├── SubmitCTA.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useLocalStorage.ts
│   │   └── useFavorites.ts
│   ├── data/
│   │   └── tools.ts
│   ├── types/
│   │   └── index.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── images/
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 依赖安装

```bash
# shadcn/ui 组件
npx shadcn add button input card badge dialog tabs scroll-area separator skeleton tooltip

# 动画库
npm install framer-motion

# 图标库
npm install lucide-react

# 字体
npm install @fontsource/outfit
```

## 数据结构

### AI工具
```typescript
interface AITool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  tags: string[];
  url: string;
  isFree: boolean;
  isFeatured: boolean;
}
```

### 分类
```typescript
interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}
```

## 功能规划

### 核心功能
1. **工具展示** - 网格展示AI工具卡片
2. **分类筛选** - 按分类筛选工具
3. **搜索功能** - 实时搜索工具名称和描述
4. **收藏功能** - 本地存储收藏的工具

### 小工具功能
1. **提示词生成器** - 根据需求生成AI提示词
2. **工具对比器** - 对比两个AI工具的功能
3. **AI快讯** - 展示最新AI资讯
4. **收藏夹** - 管理收藏的工具

## 性能优化

- 使用 `will-change` 优化动画元素
- 图片懒加载
- 虚拟滚动（工具数量多时）
- 减少重绘重排
- 支持 `prefers-reduced-motion`
