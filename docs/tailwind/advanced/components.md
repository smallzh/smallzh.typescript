# 常用组件示例

## 0x01 按钮组件

### 主要按钮

```html
<button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  主要按钮
</button>
```

### 次要按钮

```html
<button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
  次要按钮
</button>
```

### 轮廓按钮

```html
<button class="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
  轮廓按钮
</button>
```

### 图标按钮

```html
<button class="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-blue-500 transition-colors">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
</button>
```

### 按钮尺寸

```html
<!-- 小 -->
<button class="bg-blue-500 text-white text-sm py-1 px-3 rounded">小</button>

<!-- 中 -->
<button class="bg-blue-500 text-white py-2 px-4 rounded">中</button>

<!-- 大 -->
<button class="bg-blue-500 text-white text-lg py-3 px-6 rounded">大</button>
```

## 0x02 表单组件

### 输入框

```html
<div class="space-y-2">
  <label class="block text-sm font-medium text-gray-700">用户名</label>
  <input 
    type="text" 
    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    placeholder="请输入用户名"
  >
</div>
```

### 密码输入框

```html
<div class="relative">
  <input 
    type="password" 
    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
    placeholder="请输入密码"
  >
  <button class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
    👁
  </button>
</div>
```

### 下拉选择

```html
<select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
  <option>选项 1</option>
  <option>选项 2</option>
  <option>选项 3</option>
</select>
```

### 复选框

```html
<label class="flex items-center space-x-2 cursor-pointer">
  <input type="checkbox" class="w-5 h-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500">
  <span class="text-gray-700">我同意服务条款</span>
</label>
```

### 单选框

```html
<label class="flex items-center space-x-2 cursor-pointer">
  <input type="radio" name="gender" class="w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500">
  <span class="text-gray-700">男</span>
</label>
<label class="flex items-center space-x-2 cursor-pointer">
  <input type="radio" name="gender" class="w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500">
  <span class="text-gray-700">女</span>
</label>
```

## 0x03 卡片组件

### 基础卡片

```html
<div class="bg-white rounded-lg shadow-md p-6">
  <h3 class="text-xl font-bold text-gray-900 mb-2">卡片标题</h3>
  <p class="text-gray-600">卡片内容描述...</p>
</div>
```

### 图片卡片

```html
<div class="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
  <img class="w-full h-48 object-cover" src="https://picsum.photos/400/300" alt="图片">
  <div class="p-6">
    <h3 class="text-xl font-bold text-gray-900 mb-2">图片卡片</h3>
    <p class="text-gray-600">这是一段描述内容...</p>
  </div>
</div>
```

### 悬停卡片

```html
<div class="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
  <img class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" src="https://picsum.photos/400/301">
  <div class="p-6">
    <h3 class="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">悬停效果</h3>
    <p class="text-gray-600 mt-2">鼠标悬停查看效果...</p>
  </div>
</div>
```

### 信息卡片

```html
<div class="bg-blue-50 border-l-4 border-blue-500 p-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <span class="text-blue-500">ℹ</span>
    </div>
    <div class="ml-3">
      <p class="text-sm text-blue-700">这是一条信息提示</p>
    </div>
  </div>
</div>
```

## 0x04 导航组件

### 顶部导航

```html
<nav class="bg-white shadow-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <span class="text-xl font-bold text-blue-600">Logo</span>
      </div>
      <div class="flex items-center space-x-4">
        <a href="#" class="text-gray-700 hover:text-blue-600 px-3 py-2">首页</a>
        <a href="#" class="text-gray-700 hover:text-blue-600 px-3 py-2">关于</a>
        <a href="#" class="text-gray-700 hover:text-blue-600 px-3 py-2">联系</a>
      </div>
    </div>
  </div>
</nav>
```

### 面包屑导航

```html
<nav class="flex" aria-label="Breadcrumb">
  <ol class="flex items-center space-x-2">
    <li>
      <a href="#" class="text-gray-500 hover:text-gray-700">首页</a>
    </li>
    <li class="text-gray-400">/</li>
    <li>
      <a href="#" class="text-gray-500 hover:text-gray-700">产品</a>
    </li>
    <li class="text-gray-400">/</li>
    <li class="text-gray-900 font-medium">详情</li>
  </ol>
</nav>
```

### 标签页导航

```html
<div class="border-b border-gray-200">
  <nav class="flex space-x-8">
    <a href="#" class="border-b-2 border-blue-500 py-4 px-1 text-blue-600 font-medium">
      标签 1
    </a>
    <a href="#" class="border-b-2 border-transparent py-4 px-1 text-gray-500 hover:text-gray-700 hover:border-gray-300">
      标签 2
    </a>
    <a href="#" class="border-b-2 border-transparent py-4 px-1 text-gray-500 hover:text-gray-700 hover:border-gray-300">
      标签 3
    </a>
  </nav>
</div>
```

## 0x05 列表组件

### 简单列表

```html
<ul class="divide-y divide-gray-200">
  <li class="py-4 flex items-center justify-between">
    <span class="text-gray-900">项目 1</span>
    <span class="text-gray-500">详情</span>
  </li>
  <li class="py-4 flex items-center justify-between">
    <span class="text-gray-900">项目 2</span>
    <span class="text-gray-500">详情</span>
  </li>
  <li class="py-4 flex items-center justify-between">
    <span class="text-gray-900">项目 3</span>
    <span class="text-gray-500">详情</span>
  </li>
</ul>
```

### 头像列表

```html
<ul class="divide-y divide-gray-200">
  <li class="py-4 flex items-center space-x-4">
    <img class="w-10 h-10 rounded-full" src="https://picsum.photos/100" alt="头像">
    <div class="flex-1">
      <p class="text-sm font-medium text-gray-900">用户名称</p>
      <p class="text-sm text-gray-500">用户描述</p>
    </div>
    <button class="text-blue-600 hover:text-blue-800 text-sm">关注</button>
  </li>
</ul>
```

## 0x06 模态框

### 基础模态框

```html
<div class="fixed inset-0 z-50 flex items-center justify-center">
  <!-- 遮罩层 -->
  <div class="absolute inset-0 bg-black bg-opacity-50"></div>
  
  <!-- 模态框内容 -->
  <div class="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">确认操作</h3>
    <p class="text-gray-600 mb-6">确定要执行此操作吗？</p>
    <div class="flex justify-end space-x-3">
      <button class="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
        取消
      </button>
      <button class="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
        确认
      </button>
    </div>
  </div>
</div>
```

## 0x07 加载状态

### 旋转加载器

```html
<div class="flex justify-center items-center">
  <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
</div>
```

### 骨架屏

```html
<div class="animate-pulse space-y-4">
  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
  <div class="h-4 bg-gray-200 rounded"></div>
  <div class="h-4 bg-gray-200 rounded w-5/6"></div>
</div>
```

## 0x08 提示组件

### 成功提示

```html
<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">成功!</strong>
  <span class="block sm:inline">操作已完成。</span>
</div>
```

### 警告提示

```html
<div class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">警告!</strong>
  <span class="block sm:inline">请注意此信息。</span>
</div>
```

### 错误提示

```html
<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">错误!</strong>
  <span class="block sm:inline">操作失败。</span>
</div>
```

## 0x09 标签组件

### 基础标签

```html
<span class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">
  标签
</span>
```

### 多种颜色

```html
<span class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">蓝色</span>
<span class="inline-block bg-green-100 text-green-800 text-sm font-semibold px-2.5 py-0.5 rounded">绿色</span>
<span class="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-2.5 py-0.5 rounded">黄色</span>
<span class="inline-block bg-red-100 text-red-800 text-sm font-semibold px-2.5 py-0.5 rounded">红色</span>
<span class="inline-block bg-gray-100 text-gray-800 text-sm font-semibold px-2.5 py-0.5 rounded">灰色</span>
```

### 可关闭标签

```html
<span class="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">
  <span>可关闭标签</span>
  <button class="ml-1.5 text-blue-600 hover:text-blue-900 focus:outline-none">
    ×
  </button>
</span>
```

## 0x10 分页组件

```html
<nav class="flex items-center justify-between border-t border-gray-200 py-3">
  <div class="flex-1 flex justify-between sm:hidden">
    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
      上一页
    </a>
    <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
      下一页
    </a>
  </div>
  <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
    <div>
      <p class="text-sm text-gray-700">
        第 <span class="font-medium">1</span> 页，共 <span class="font-medium">10</span> 页
      </p>
    </div>
    <div>
      <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          ‹
        </a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
          1
        </a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          2
        </a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          3
        </a>
        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          ›
        </a>
      </nav>
    </div>
  </div>
</nav>
```

## 参考

- [Tailwind CSS 组件示例](https://tailwindcss.com/docs/examples)
- [Tailwind UI 组件库](https://tailwindui.com)