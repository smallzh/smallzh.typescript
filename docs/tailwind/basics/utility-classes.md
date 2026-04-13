# 常用工具类

## 0x01 布局类工具

### 容器与显示

```html
<!-- 容器 - 居中并添加水平内边距 -->
<div class="container mx-auto px-4">
  内容区域
</div>

<!-- 显示属性 -->
<div class="block">block</div>
<div class="inline">inline</div>
<div class="inline-block">inline-block</div>
<div class="flex">flex</div>
<div class="inline-flex">inline-flex</div>
<div class="grid">grid</div>
<div class="inline-grid">inline-grid</div>
<div class="hidden">hidden</div>

<!-- 隐藏但保留空间 -->
<div class="invisible">invisible</div>
```

### Flexbox 布局

```html
<!-- 弹性容器 -->
<div class="flex">
  <div class="flex-1">flex-1</div>
  <div class="flex-1">flex-1</div>
</div>

<!-- 方向 -->
<div class="flex-row">row</div>
<div class="flex-row-reverse">row-reverse</div>
<div class="flex-col">column</div>
<div class="flex-col-reverse">column-reverse</div>

<!-- 主轴对齐 -->
<div class="justify-start">justify-start</div>
<div class="justify-center">justify-center</div>
<div class="justify-end">justify-end</div>
<div class="justify-between">justify-between</div>
<div class="justify-around">justify-around</div>
<div class="justify-evenly">justify-evenly</div>

<!-- 交叉轴对齐 -->
<div class="items-start">items-start</div>
<div class="items-center">items-center</div>
<div class="items-end">items-end</div>
<div class="items-stretch">items-stretch</div>

<!-- 换行 -->
<div class="flex-nowrap">nowrap</div>
<div class="flex-wrap">wrap</div>
<div class="flex-wrap-reverse">wrap-reverse</div>
```

### Grid 布局

```html
<!-- 网格容器 -->
<div class="grid grid-cols-2">
  <div>col 1</div>
  <div>col 2</div>
</div>

<!-- 列数 -->
<div class="grid-cols-1">1列</div>
<div class="grid-cols-2">2列</div>
<div class="grid-cols-3">3列</div>
<div class="grid-cols-4">4列</div>
<div class="grid-cols-12">12列</div>

<!-- 跨越 -->
<div class="col-span-2">跨2列</div>
<div class="col-span-3">跨3列</div>

<!-- 行数 -->
<div class="grid-rows-2">2行</div>
<div class="grid-rows-3">3行</div>

<!-- 间距 -->
<div class="gap-4">gap-4</div>
<div class="gap-x-4">水平间距</div>
<div class="gap-y-4">垂直间距</div>
```

### 定位

```html
<!-- 定位方式 -->
<div class="static">static</div>
<div class="relative">relative</div>
<div class="absolute">absolute</div>
<div class="fixed">fixed</div>
<div class="sticky">sticky</div>

<!-- 位置 -->
<div class="top-0">top-0</div>
<div class="right-0">right-0</div>
<div class="bottom-0">bottom-0</<div>
<div class="left-0">left-0</div>

<!-- 组合 -->
<div class="absolute inset-0">全屏定位</div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">居中</div>
```

## 0x02 间距类工具

### Padding

```html
<!-- 全面内边距 -->
<div class="p-0">p-0</div>
<div class="p-1">p-1 = 0.25rem</div>
<div class="p-2">p-2 = 0.5rem</div>
<div class="p-4">p-4 = 1rem</div>
<div class="p-8">p-8 = 2rem</div>

<!-- 方向内边距 -->
<div class="pt-4">上</div>
<div class="pr-4">右</div>
<div class="pb-4">下</div>
<div class="pl-4">左</div>

<!-- 横向纵向 -->
<div class="px-4">px-4 = 左右</div>
<div class="py-4">py-4 = 上下</div>
```

### Margin

```html
<!-- 全面外边距 -->
<div class="m-0">m-0</div>
<div class="m-1">m-1 = 0.25rem</div>
<div class="m-auto">m-auto 自动</div>

<!-- 方向外边距 -->
<div class="mt-4">mt-4 上</div>
<div class="mr-4">mr-4 右</div>
<div class="mb-4">mb-4 下</div>
<div class="ml-4">ml-4 左</div>

<!-- 负值 -->
<div class="-mt-4">负值</div>

<!-- 横向纵向 -->
<div class="mx-4">mx-4 = 左右</div>
<div class="my-4">my-4 = 上下</div>
```

## 0x03 尺寸类工具

### 宽度

```html
<!-- 固定宽度 -->
<div class="w-0">w-0</div>
<div class="w-1">w-1</div>
<div class="w-4">w-4</div>
<div class="w-8">w-8</div>
<div class="w-16">w-16</div>
<div class="w-32">w-32</div>
<div class="w-64">w-64</div>

<!-- 百分比 -->
<div class="w-1/2">50%</div>
<div class="w-1/3">33.33%</div>
<div class="w-2/3">66.67%</div>
<div class="w-1/4">25%</div>
<div class="w-3/4">75%</div>
<div class="w-full">100%</div>
<div class="w-auto">auto</div>
```

### 高度

```html
<!-- 固定高度 -->
<div class="h-0">h-0</div>
<div class="h-4">h-4</div>
<div class="h-8">h-8</div>
<div class="h-16">h-16</div>
<div class="h-32">h-32</div>
<div class="h-64">h-64</div>

<!-- 特殊高度 -->
<div class="h-auto">auto</div>
<div class="h-full">100% 父元素</div>
<div class="h-screen">100vh 视口</div>
<div class="h-min">min-content</div>
<div class="h-max">max-content</div>
```

### 最大最小尺寸

```html
<!-- 最大宽度 -->
<div class="max-w-xs">max-w-xs</div>
<div class="max-w-sm">max-w-sm</div>
<div class="max-w-md">max-w-md</div>
<div class="max-w-lg">max-w-lg</div>
<div class="max-w-xl">max-w-xl</div>
<div class="max-w-2xl">max-w-2xl</div>
<div class="max-w-3xl">max-w-3xl</div>
<div class="max-w-4xl">max-w-4xl</div>
<div class="max-w-5xl">max-w-5xl</div>
<div class="max-w-6xl">max-w-6xl</div>
<div class="max-w-7xl">max-w-7xl</div>
<div class="max-w-full">max-w-full</div>
```

## 0x04 背景类工具

### 背景颜色

```html
<!-- 使用颜色类 -->
<div class="bg-red-50">bg-red-50</div>
<div class="bg-red-100">bg-red-100</div>
<div class="bg-red-200">bg-red-200</div>
<div class="bg-red-300">bg-red-300</div>
<div class="bg-red-400">bg-red-400</div>
<div class="bg-red-500">bg-red-500</div>
<div class="bg-red-600">bg-red-600</div>
<div class="bg-red-700">bg-red-700</div>
<div class="bg-red-800">bg-red-800</div>
<div class="bg-red-900">bg-red-900</div>

<!-- 透明背景 -->
<div class="bg-transparent">透明</div>

<!-- 当前颜色 -->
<div class="bg-current">继承颜色</div>
```

### 背景图像

```html
<!-- 背景图片 -->
<div class="bg-[url('/image.jpg')]">自定义图片</div>

<!-- 背景定位 -->
<div class="bg-bottom">bg-bottom</div>
<div class="bg-center">bg-center</div>
<div class="bg-left">bg-left</div>
<div class="bg-right">bg-right</div>
<div class="bg-top">bg-top</div>

<!-- 背景重复 -->
<div class="bg-repeat">bg-repeat</div>
<div class="bg-no-repeat">bg-no-repeat</div>
<div class="bg-repeat-x">bg-repeat-x</div>
<div class="bg-repeat-y">bg-repeat-y</div>

<!-- 背景尺寸 -->
<div class="bg-auto">bg-auto</div>
<div class="bg-cover">bg-cover</div>
<div class="bg-contain">bg-contain</div>
```

## 0x05 边框类工具

### 边框宽度

```html
<!-- 全面边框 -->
<div class="border">border 默认1px</div>
<div class="border-0">border-0</div>
<div class="border-2">border-2</div>
<div class="border-4">border-4</div>
<div class="border-8">border-8</div>

<!-- 方向边框 -->
<div class="border-t">上边框</div>
<div class="border-r">右边框</div>
<div class="border-b">下边框</div>
<div class="border-l">左边框</div>
```

### 边框颜色

```html
<!-- 使用颜色 -->
<div class="border border-gray-200">border-gray-200</div>
<div class="border border-blue-500">border-blue-500</div>
<div class="border border-red-500">border-red-500</div>
```

### 圆角

```html
<!-- 全面圆角 -->
<div class="rounded-none">rounded-none</div>
<div class="rounded-sm">rounded-sm</div>
<div class="rounded">rounded 默认4px</div>
<div class="rounded-md">rounded-md</div>
<div class="rounded-lg">rounded-lg</div>
<div class="rounded-xl">rounded-xl</div>
<div class="rounded-2xl">rounded-2xl</div>
<div class="rounded-full">rounded-full 完全圆形</div>

<!-- 方向圆角 -->
<div class="rounded-t">上圆角</div>
<div class="rounded-r">右圆角</div>
<div class="rounded-b">下圆角</div>
<div class="rounded-l">左圆角</div>

<!-- 特定角 -->
<div class="rounded-tl">左上</div>
<div class="rounded-tr">右上</div>
<div class="rounded-bl">左下</div>
<div class="rounded-br">右下</div>
```

## 0x06 文本类工具

### 字体大小

```html
<p class="text-xs">text-xs = 0.75rem</p>
<p class="text-sm">text-sm = 0.875rem</p>
<p class="text-base">text-base = 1rem</p>
<p class="text-lg">text-lg = 1.125rem</p>
<p class="text-xl">text-xl = 1.25rem</p>
<p class="text-2xl">text-2xl = 1.5rem</p>
<p class="text-3xl">text-3xl = 1.875rem</p>
<p class="text-4xl">text-4xl = 2.25rem</p>
<p class="text-5xl">text-5xl = 3rem</p>
<p class="text-6xl">text-6xl = 3.75rem</p>
<p class="text-7xl">text-7xl = 4rem</p>
<p class="text-8xl">text-8xl = 6rem</p>
<p class="text-9xl">text-9xl = 8rem</p>
```

### 字体粗细

```html
<p class="font-thin">font-thin = 100</p>
<p class="font-extralight">font-extralight = 200</p>
<p class="font-light">font-light = 300</p>
<p class="font-normal">font-normal = 400</p>
<p class="font-medium">font-medium = 500</p>
<p class="font-semibold">font-semibold = 600</p>
<p class="font-bold">font-bold = 700</p>
<p class="font-extrabold">font-extrabold = 800</p>
<p class="font-black">font-black = 900</p>
```

### 文本颜色

```html
<p class="text-white">text-white</p>
<p class="text-black">text-black</p>
<p class="text-gray-50">text-gray-50</p>
<p class="text-gray-500">text-gray-500</p>
<p class="text-gray-900">text-gray-900</p>
<p class="text-blue-500">text-blue-500</p>
```

### 文本对齐

```html
<p class="text-left">text-left</p>
<p class="text-center">text-center</p>
<p class="text-right">text-right</p>
<p class="text-justify">text-justify</p>
```

### 行高

```html
<p class="leading-none">leading-none = 1</p>
<p class="leading-tight">leading-tight = 1.25</p>
<p class="leading-snug">leading-snug = 1.375</p>
<p class="leading-normal">leading-normal = 1.5</p>
<p class="leading-relaxed">leading-relaxed = 1.625</p>
<p class="leading-loose">leading-loose = 2</p>
```

## 0x07 动画与过渡

### 过渡

```html
<!-- 过渡效果 -->
<div class="transition-none">无过渡</div>
<div class="transition-all">all</div>
<div class="transition">默认all</div>
<div class="transition-colors">颜色过渡</div>
<div class="transition-opacity">透明度过渡</div>
<div class="transition-transform">变换过渡</div>

<!-- 过渡时长 -->
<div class="duration-0">duration-0 = 0s</div>
<div class="duration-75">duration-75 = 75ms</div>
<div class="duration-100">duration-100 = 100ms</div>
<div class="duration-150">duration-150 = 150ms</div>
<div class="duration-200">duration-200 = 200ms</div>
<div class="duration-300">duration-300 = 300ms</div>
<div class="duration-500">duration-500 = 500ms</div>
<div class="duration-700">duration-700 = 700ms</div>
<div class="duration-1000">duration-1000 = 1s</div>
```

### 动画

```html
<!-- 常用动画 -->
<div class="animate-none">无动画</div>
<div class="animate-spin">旋转</div>
<div class="animate-pulse">脉冲</div>
<div class="animate-bounce">弹跳</div>

<!-- 自定义动画 -->
<div class="animate-spin-slow">慢速旋转</div>
<div class="animate-ping">ping 效果</div>
```

## 0x08 交互状态

### 悬停状态

```html
<button class="hover:bg-blue-600 hover:text-white">
  悬停效果
</button>

<!-- 其他悬停属性 -->
<div class="hover:opacity-75 hover:scale-105">
  悬停透明度缩放
</div>
```

### 焦点状态

```html
<input class="focus:outline-none focus:ring-2 focus:ring-blue-500" />

<button class="focus:outline-none focus:ring-2 focus:ring-offset-2">
  焦点样式
</button>
```

### 激活状态

```html
<button class="active:bg-blue-700 active:scale-95">
  点击效果
</button>
```

### 禁用状态

```html
<button class="disabled:opacity-50 disabled:cursor-not-allowed" disabled>
  禁用按钮
</button>
```

## Demo 示例

### 卡片组件

```html
<!-- 基础卡片 -->
<div class="max-w-sm rounded-lg shadow-lg overflow-hidden">
  <img class="w-full h-48 object-cover" src="image.jpg" alt="图片">
  <div class="px-6 py-4">
    <h3 class="text-xl font-bold text-gray-900 mb-2">标题</h3>
    <p class="text-gray-600 text-base">内容描述...</p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
      #标签1
    </span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
      #标签2
    </span>
  </div>
</div>
```

### 按钮组件

```html
<!-- 主要按钮 -->
<button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
  主要按钮
</button>

<!-- 次要按钮 -->
<button class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
  次要按钮
</button>

<!-- 轮廓按钮 -->
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  轮廓按钮
</button>

<!-- 禁用按钮 -->
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed" disabled>
  禁用按钮
</button>
```

### 表单组件

```html
<!-- 输入框 -->
<input 
  type="text" 
  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  placeholder="请输入内容"
>

<!-- 带标签的输入框 -->
<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2">
    用户名
  </label>
  <input 
    type="text" 
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="请输入用户名"
  >
</div>

<!-- 复选框 -->
<label class="inline-flex items-center">
  <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600">
  <span class="ml-2 text-gray-700">记住我</span>
</label>

<!-- 单选框 -->
<label class="inline-flex items-center">
  <input type="radio" name="gender" class="form-radio h-5 w-5 text-blue-600">
  <span class="ml-2 text-gray-700">男</span>
</label>
<label class="inline-flex items-center">
  <input type="radio" name="gender" class="form-radio h-5 w-5 text-blue-600">
  <span class="ml-2 text-gray-700">女</span>
</label>
```

## 参考

- [Tailwind CSS 工具类文档](https://tailwindcss.com/docs/utility-first)