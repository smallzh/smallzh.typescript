# 自定义配置

## 0x01 配置文件概述

Tailwind CSS 的核心优势之一就是可以通过 `tailwind.config.js` 文件完全自定义设计系统。这个配置文件允许开发者定义自己的颜色、间距、字体、断点等，从而创建符合项目需求的设计系统。

### 配置文件位置

默认情况下，Tailwind CSS 会自动查找项目根目录下的 `tailwind.config.js` 文件。如果需要使用其他名称或位置，可以通过以下方式指定：

```javascript
// 使用特定配置文件
npx tailwindcss -c ./custom-config.js -i ./src/input.css -o ./dist/output.css
```

或者在 CSS 文件中使用 `@config` 指令：

```css
@config "./tailwind.custom.config.js";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 0x02 主题配置详解

### 颜色系统自定义

Tailwind CSS 内置了一套完整的颜色系统，但通常需要根据项目设计规范进行自定义。以下是颜色配置的详细说明：

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    // extend 用于扩展默认配置，而不是完全覆盖
    extend: {
      // 方式一：完全自定义颜色
      colors: {
        // 使用颜色名称和色值
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // 简单定义
        primary: '#3b82f6',
        secondary: '#8b5cf6',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
      },
      
      // 方式二：基于现有颜色扩展
      colors: {
        // 添加新的颜色级别
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          // ... 默认值 ...
          900: '#111827',
          950: '#030712', // 新增
        },
      },
    },
  },
}
```

### 颜色使用示例

```html
<!-- 使用自定义颜色 -->
<div class="bg-brand-500 text-white">Brand 500</div>
<div class="bg-primary text-white">Primary</div>
<div class="text-success">Success 文本</div>

<!-- 使用任意值覆盖 -->
<div class="bg-[#1e3a8a]">自定义颜色值</div>
```

### 间距系统自定义

间距系统基于 0.25rem（4px）的倍数，可以通过配置进行自定义：

```javascript
module.exports = {
  theme: {
    extend: {
      // 自定义间距
      spacing: {
        '18': '4.5rem',    // 72px
        '22': '5.5rem',    // 88px
        '30': '7.5rem',    // 120px
        '128': '32rem',    // 512px
      },
      
      // 基于现有间距的快捷方式
      spacing: {
        'card': '1.5rem',
        'section': '4rem',
      },
    },
  },
}
```

### 字体系统自定义

字体配置允许你定义字体家族、字体大小、行高和字重：

```javascript
module.exports = {
  theme: {
    extend: {
      // 字体家族
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      
      // 字体大小
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        // 自定义
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      
      // 字重
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      
      // 行高
      lineHeight: {
        'none': '1',
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },
    },
  },
}
```

### 圆角系统自定义

```javascript
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        'none': '0px',
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
        // 自定义
        '4xl': '2rem',
      },
    },
  },
}
```

### 阴影系统自定义

```javascript
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        // 自定义
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'glow': '0 0 15px rgba(59, 130, 246, 0.5)',
      },
    },
  },
}
```

## 0x03 断点自定义

### 默认断点回顾

Tailwind CSS 默认提供五个断点：

| 断点 | 最小宽度 |
|------|----------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

### 自定义断点配置

```javascript
module.exports = {
  theme: {
    screens: {
      // 使用自定义名称和值
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      
      // 使用其他单位
      'tablet': '1024px',
      'laptop': '1280px',
      'desktop': '1920px',
      
      // 自定义范围（最大宽度）
      'max-sm': { 'max': '639px' },
      'max-md': { 'max': '767px' },
      'max-lg': { 'max': '1023px' },
    },
  },
}
```

### 最大宽度断点使用

```html
<!-- 使用自定义断点 -->
<div class="hidden xs:block">
  在 xs 断点及以上显示
</div>

<!-- 使用最大宽度断点 -->
<div class="block max-sm:hidden">
  在 640px 以下隐藏
</div>
```

## 0x04 动画与过渡自定义

### 自定义动画

```javascript
module.exports = {
  theme: {
    extend: {
      animation: {
        // 简单的动画名称
        'spin-slow': 'spin 3s linear infinite',
        'bounce-once': 'bounce 1s infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.3s ease-out',
        
        // 多步骤动画
        'pulse-once': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 1',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
      },
    },
  },
}
```

### 动画使用示例

```html
<!-- 使用自定义动画 -->
<div class="animate-fade-in">淡入效果</div>
<div class="animate-slide-up">上滑效果</div>
<div class="animate-shake">摇晃效果</div>
```

### 自定义过渡

```javascript
module.exports = {
  theme: {
    extend: {
      transitionDuration: {
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
        // 自定义
        '2000': '2s',
      },
      
      transitionTimingFunction: {
        'linear': 'linear',
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        // 自定义
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'opacity': 'opacity',
        'transform': 'transform',
        // 自定义
        'colors': 'background-color, border-color, color, fill, stroke',
      },
    },
  },
}
```

## 0x05 变体配置

### 启用/禁用变体

```javascript
module.exports = {
  variants: {
    // 完全覆盖默认值
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    borderColor: ['responsive', 'hover', 'focus'],
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    
    // 禁用某些变体
    margin: ['responsive'],
    padding: ['responsive'],
  },
}
```

### 扩展变体

```javascript
module.exports = {
  theme: {
    extend: {
      variants: {
        // 扩展现有变体
        extend: {
          // 为特定工具类添加变体
          backgroundColor: ['checked', 'disabled', 'group-checked'],
          textColor: ['group-hover', 'placeholder-shown'],
          
          // 添加新的变体
          scale: ['hover', 'focus', 'active', 'group-hover'],
          rotate: ['hover', 'focus'],
        },
      },
    },
  },
}
```

## 0x06 插件配置

### 常用官方插件

```javascript
module.exports = {
  plugins: [
    // 表单样式插件
    require('@tailwindcss/forms'),
    
    // 排版插件
    require('@tailwindcss/typography'),
    
    // 宽高比插件
    require('@tailwindcss/aspect-ratio'),
    
    // 容器查询插件
    require('@tailwindcss/container-queries'),
  ],
}
```

### 插件配置选项

```javascript
module.exports = {
  plugins: [
    // 带有选项的插件
    require('@tailwindcss/forms')({
      strategy: 'class', // 或 'base'
    }),
    
    require('@tailwindcss/typography')({
      // 自定义类名
      className: 'prose',
      
      // 选择性启用样式
      modifiers: {
        'headings': true,
        'links': true,
        'lists': true,
      },
    }),
  ],
}
```

## 0x07 高级配置技巧

### 使用函数配置

配置文件可以返回函数以访问环境变量：

```javascript
module.exports = ({ file, env }) => ({
  // 根据环境调整配置
  ...(env === 'production' && {
    // 生产环境特定配置
    prefix: 'tw-',
  }),
  
  // 根据文件路径调整
  ...(file.filename.includes('admin') && {
    extend: {
      colors: {
        admin: '#9333ea',
      },
    },
  }),
})
```

### 嵌套配置

Tailwind CSS 支持嵌套的配置对象：

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // 嵌套颜色
        primary: {
          light: '#60a5fa',
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
      },
    },
  },
}
```

使用方式：

```html
<div class="bg-primary-light">浅色</div>
<div class="bg-primary">默认色</div>
<div class="bg-primary-dark">深色</div>
```

### 引用其他配置值

可以在配置中引用其他值：

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        // 基于 primary 的其他颜色
        'primary-light': '#60a5fa',
        'primary-dark': '#1d4ed8',
      },
      
      // 引用颜色
      textColor: {
        primary: '#3b82f6',
      },
      
      backgroundColor: {
        primary: '#3b82f6',
      },
    },
  },
}
```

## 0x08 配置示例

### 完整配置示例

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // 内容配置
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './public/**/*.html',
  ],
  
  // 深色模式
  darkMode: 'class', // 或 'media'
  
  // 主题配置
  theme: {
    extend: {
      // 颜色
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      
      // 字体
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      
      // 间距
      spacing: {
        '128': '32rem',
      },
      
      // 圆角
      borderRadius: {
        '4xl': '2rem',
      },
      
      // 断点
      screens: {
        'xs': '480px',
      },
      
      // 动画
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  
  // 变体配置
  variants: {
    extend: {
      backgroundColor: ['checked', 'group-checked'],
    },
  },
  
  // 插件
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

## 最佳实践

1. **使用 extend 扩展**：尽量使用 `extend` 而不是完全覆盖默认配置
2. **保持一致性**：自定义值应与设计系统保持一致
3. **文档化**：为团队成员文档化自定义配置
4. **测试响应式**：确保自定义断点在不同设备上正常工作

## 参考

- [Tailwind CSS 配置文档](https://tailwindcss.com/docs/configuration)
- [Tailwind CSS 主题文档](https://tailwindcss.com/docs/theme