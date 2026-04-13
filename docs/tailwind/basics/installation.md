# 安装与配置

## 环境要求

Tailwind CSS 需要 Node.js 12.0.0 或更高版本。在开始之前，请确保你的开发环境已安装 Node.js：

```bash
# 检查 Node.js 版本
node --version

# 检查 npm 版本
npm --version
```

## 安装方式

### 方式一：通过 npm 安装（推荐）

这是最常用的安装方式，适合大多数项目：

```bash
# 1. 创建项目目录
mkdir my-tailwind-project
cd my-tailwind-project

# 2. 初始化项目
npm init -y

# 3. 安装 Tailwind CSS 及相关依赖
npm install -D tailwindcss postcss autoprefixer

# 4. 初始化 Tailwind 配置文件
npx tailwindcss init -p
```

执行上述命令后，会在项目根目录生成两个文件：
- `tailwind.config.js` - Tailwind 配置文件
- `postcss.config.js` - PostCSS 配置文件

### 方式二：使用 Vite

如果你使用 Vite 构建工具，可以更快捷地集成 Tailwind CSS：

```bash
# 1. 创建 Vite 项目
npm create vite@latest my-app -- --template vue

# 2. 进入项目目录
cd my-app

# 3. 安装 Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# 4. 初始化配置
npx tailwindcss init -p
```

### 方式三：通过 CDN（仅用于学习）

对于简单的学习或原型项目，可以使用 CDN 快速尝试：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind CSS CDN 示例</title>
  <!-- 使用 Play CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-8">
  <h1 class="text-3xl font-bold text-blue-600">
    Hello, Tailwind CSS!
  </h1>
</body>
</html>
```

> ⚠️ 注意：CDN 方式不适用于生产环境，仅用于学习或简单原型。

## 配置文件详解

### tailwind.config.js

这是 Tailwind CSS 的核心配置文件，用于自定义主题、添加插件等：

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // content 指定需要扫描的文件路径
  // Tailwind 会扫描这些文件，找出使用的工具类，生成对应的 CSS
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue,svelte}",
  ],
  
  // theme 用于自定义设计系统
  theme: {
    // extend 允许你扩展默认配置，而不是完全覆盖
    extend: {
      // 自定义颜色
      colors: {
        'brand': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
      },
      
      // 自定义间距
      spacing: {
        '128': '32rem',
      },
      
      // 自定义断点
      screens: {
        '3xl': '1920px',
      },
    },
  },
  
  // plugins 用于添加官方或第三方插件
  plugins: [
    // 例如：@tailwindcss/forms, @tailwindcss/typography 等
  ],
  
  // 深色模式配置
  darkMode: 'class', // 或 'media'
}
```

### postcss.config.js

PostCSS 是 Tailwind CSS 的依赖，用于处理 CSS：

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### content 配置详解

`content` 配置是最重要的设置之一，它告诉 Tailwind 需要扫描哪些文件来生成样式：

```javascript
// 方式一：扫描特定目录下的所有文件
content: [
  "./src/**/*.{html,js,jsx,ts,tsx}",
],

// 方式二：排除特定文件
content: [
  "./src/**/*.{html,js}",
  "!src/**/*.test.{html,js}",
],

// 方式三：使用 glob 模式
content: [
  "./src/**/*",
  "./public/**/*.html",
],

// 方式四：使用函数（高级用法）
content: (() => {
  return [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './public/**/*.html',
  ];
})(),
```

## 配置 CSS 文件

### 创建主 CSS 文件

在你的源文件目录（通常是 `src`）下创建 `input.css`：

```css
/* src/input.css */

/* @tailwind 指令会生成对应的 CSS */

/* 基础层：Tailwind 的基础样式和重置 */
@tailwind base;

/* 组件层：可重用的组件样式（可选） */
@tailwind components;

/* 工具层：所有工具类 */
@tailwind utilities;

/* 你也可以在这里添加自定义样式 */
@layer components {
  .btn-primary {
    @apply bg-blue-500 text-white px-4 py-2 rounded;
  }
}

@layer utilities {
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
}
```

### 构建命令

在 `package.json` 中添加构建脚本：

```json
{
  "scripts": {
    "dev": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch",
    "build": "tailwindcss -i ./src/input.css -o ./dist/output.css --minify",
    "build:prod": "NODE_ENV=production tailwindcss -i ./src/input.css -o ./dist/output.css --minify"
  }
}
```

参数说明：
- `-i` / `--input`：输入文件路径
- `-o` / `--output`：输出文件路径
- `--watch`：监听文件变化（开发模式）
- `--minify`：压缩 CSS 文件（生产模式）

## 与主流框架集成

### 与 React 集成

```bash
# 使用 Create React App
npx create-react-app my-app
cd my-app

# 安装 Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

在 `tailwind.config.js` 中配置 content：

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  // ...
}
```

### 与 Next.js 集成

Next.js 对 Tailwind CSS 有内置支持：

```bash
# 创建 Next.js 项目时指定 Tailwind CSS
npx create-next-app@latest my-app --typescript --tailwind

# 或者在现有项目中添加
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Next.js 会自动读取 `tailwind.config.js` 并配置 PostCSS。

### 与 Vue 集成

```bash
# 使用 Vite 创建 Vue 项目
npm create vite@latest my-vue-app -- --template vue
cd my-vue-app

# 安装 Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

配置 `tailwind.config.js`：

```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  // ...
}
```

在 Vue 组件中直接使用：

```vue
<template>
  <div class="p-4 bg-white rounded-lg shadow">
    <h1 class="text-2xl font-bold text-gray-800">Hello Vue + Tailwind!</h1>
  </div>
</template>
```

### 与 Nuxt 集成

Nuxt.js 提供了 `@nuxtjs/tailwindcss` 模块：

```bash
# 安装模块
npm install -D @nuxtjs/tailwindcss

# 在 nuxt.config.ts 中配置
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    // 配置选项
    configPath: 'tailwind.config.js',
  },
})
```

## 配置详解

### 完整的 tailwind.config.js 示例

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // 内容配置 - 最重要
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './public/**/*.html',
  ],
  
  // 深色模式
  darkMode: 'class', // 'class' | 'media' | 'selector'
  
  // 主题配置
  theme: {
    // 扩展默认主题
    extend: {
      // 颜色系统
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      
      // 字体家族
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      
      // 字体大小
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      },
      
      // 间距
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      
      // 圆角
      borderRadius: {
        '4xl': '2rem',
      },
      
      // 断点
      screens: {
        'xs': '480px',
        '2xl': '1536px',
      },
      
      // 动画
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-once': 'bounce 1s infinite',
      },
      
      // 阴影
      boxShadow: {
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
      
      // 变体
      variants: {
        extend: {
          'responsive': ['hover', 'focus'],
        },
      },
    },
  },
  
  // 插件
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
```

### 配置校验

Tailwind 3.3+ 提供了配置校验功能，可以验证你的配置是否正确：

```bash
# 校验配置文件
npx tailwindcss --validate-config
```

## 环境变量

在构建时可以通过环境变量控制 Tailwind CSS 的行为：

```bash
# 生产环境构建
NODE_ENV=production npx tailwindcss -i ./src/input.css -o ./dist/output.css

# 指定配置文件
TAILWIND_CONFIG=tailwind.custom.config.js npx tailwindcss ...

# JIT 模式（Tailwind 3 默认为 JIT）
TAILWIND_MODE=watch npx tailwindcss ...
```

## 常见问题

### Q: 为什么修改配置后样式没有变化？

1. 确保配置文件在正确的位置
2. 确保 content 路径配置正确
3. 重新运行构建命令
4. 如果使用 `--watch`，确保它正在运行

### Q: 如何只生成特定的工具类？

```javascript
// 只包含特定工具类
module.exports = {
  corePlugins: {
    // 禁用不需要的插件
    container: false,
    preflight: false,
  },
}
```

### Q: 如何处理第三方库的样式冲突？

```css
/* 在自定义 CSS 中覆盖 */
.third-party-component {
  @apply !important; /* 慎用 */
}
```

或者使用 Tailwind 的 `!important` 变体：

```html
<div class="text-red-500!">
  这个文本会是红色
</div>
```

## 最佳实践

1. **始终配置 content 路径**：这直接影响生成的 CSS 大小
2. **使用 extend 扩展配置**：避免完全覆盖默认主题
3. **保持配置文件在项目根目录**：便于团队协作
4. **定期更新 Tailwind 版本**：获取最新功能和修复

## 参考

- [Tailwind CSS 安装指南](https://tailwindcss.com/docs/installation)
- [Tailwind CSS 配置文档](https://tailwindcss.com/docs/configuration