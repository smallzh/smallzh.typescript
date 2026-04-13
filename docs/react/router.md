# React Router

React Router 是 React 生态系统中最流行的路由库，用于实现单页应用（SPA）中的客户端路由导航。它允许用户在不刷新页面的情况下，通过改变 URL 来切换不同的视图组件。

## 0x01 概述与核心概念

React Router 提供了声明式的路由配置方式，使开发者可以通过 JSX 组件或 JavaScript 对象来定义路由映射关系。其核心设计理念包括：声明式路由配置、嵌套路由支持、动态路由参数、路由守卫与拦截，以及服务端渲染（SSR）兼容。

从 React Router v7 开始，该库采用了多策略路由架构，既可以作为传统库使用，也可以作为框架级解决方案。v7 版本完全兼容 React 18 并支持 React 19 的新特性，引入了数据加载器（loader）和动作（action）等新概念。

### 核心组件

React Router 的核心组件包括 BrowserRouter 用于 Web 应用路由、Routes 用于包裹所有路由定义、Route 用于定义单个路由、Outlet 用于渲染嵌套路由的子组件，以及 Link 和 NavLink 用于创建导航链接。

### 核心 Hook

常用的 Hook 包括 useNavigate 用于编程式导航、useLocation 用于获取当前 location 对象、useParams 用于获取路由参数、useRouteLoaderData 用于获取路由数据，以及 useRoutes 用于动态配置路由。

## 0x02 环境搭建与安装

### 安装依赖

```bash
# 使用 npm
npm install react-router-dom

# 使用 yarn
yarn add react-router-dom

# 使用 pnpm
pnpm add react-router-dom
```

### TypeScript 类型支持

React Router v6+ 内置了完整的 TypeScript 类型定义，无需额外安装 @types 包。如果项目使用 TypeScript，确保 react 和 react-dom 也安装了对应类型：

```bash
npm install @types/react @types/react-dom --save-dev
```

## 0x03 基础路由配置

### 使用 BrowserRouter

BrowserRouter 是最常用的路由容器，使用 HTML5 History API 来管理浏览历史记录：

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 路由参数

动态路由参数使用冒号（:）前缀定义，参数值可以通过 useParams Hook 获取：

```tsx
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  
  return (
    <div>
      <h1>用户详情</h1>
      <p>用户ID: {id}</p>
    </div>
  );
}

export default User;
```

### 路由参数组合

可以同时使用多个路由参数：

```tsx
// 路由定义
<Route path="/products/:categoryId/:productId" element={<Product />} />

// 获取参数
function Product() {
  const { categoryId, productId } = useParams();
  // categoryId 和 productId 都可以访问
}
```

### 查询参数

查询参数通过 URLSearchParams 或 useSearchParams Hook 获取：

```tsx
import { useSearchParams } from 'react-router-dom';

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  const page = searchParams.get('page') || '1';
  
  return (
    <div>
      <p>搜索关键词: {query}</p>
      <p>当前页码: {page}</p>
    </div>
  );
}
```

## 0x04 导航组件

### Link 组件

Link 组件用于创建无刷新页面的导航链接，内部会调用 history.push：

```tsx
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/about">关于</Link>
        </li>
        <li>
          <Link to="/user/123">用户详情</Link>
        </li>
      </ul>
    </nav>
  );
}
```

### Link 的 replace 属性

使用 replace 属性可以替换当前历史记录，而不是添加新记录：

```tsx
import { Link } from 'react-router-dom';

function LoginSuccess() {
  return (
    <Link to="/dashboard" replace>
      进入 dashboard
    </Link>
  );
}
```

### NavLink 组件

NavLink 是 Link 的增强版本，在当前路由匹配时会自动添加 active 类名，方便实现高亮效果：

```tsx
import { NavLink } from 'react-router-dom';

function Navigation() {
  const navLinkClass = ({ isActive }) => 
    isActive ? 'nav-link active' : 'nav-link';
  
  return (
    <nav>
      <NavLink to="/" className={navLinkClass}>
        首页
      </NavLink>
      <NavLink to="/about" className={navLinkClass}>
        关于
      </NavLink>
      <NavLink to="/user/1" className={navLinkClass}>
        用户
      </NavLink>
    </nav>
  );
}
```

### 自定义 NavLink 样式

```tsx
function CustomNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => 
        `custom-nav-link ${isActive ? 'active' : ''}`
      }
    >
      {children}
    </NavLink>
  );
}
```

## 0x05 编程式导航

### useNavigate Hook

useNavigate 返回一个导航函数，可以进行编程式路由跳转：

```tsx
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  
  const handleLogin = async (credentials) => {
    const success = await authenticate(credentials);
    if (success) {
      navigate('/dashboard');
    }
  };
  
  return (
    <form onSubmit={handleLogin}>
      {/* 表单内容 */}
    </form>
  );
}
```

### 导航带参数

```tsx
const navigate = useNavigate();

// 跳转到用户详情页
navigate('/user/123');

// 带查询参数
navigate('/search?q=keyword&page=1');

// 带状态参数
navigate('/dashboard', { state: { from: 'login' } });

// replace 模式
navigate('/dashboard', { replace: true });
```

### 导航返回上一页

```tsx
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  
  const goBack = () => navigate(-1);
  const goForward = () => navigate(1);
  
  return (
    <div>
      <button onClick={goBack}>返回</button>
      <button onClick={goForward}>前进</button>
    </div>
  );
}
```

### useLocation Hook

useLocation 返回当前路由的 location 对象，包含 pathname、search、hash 和 state 属性：

```tsx
import { useLocation } from 'react-router-dom';

function Analytics() {
  const location = useLocation();
  
  // 监听页面变化
  useEffect(() => {
    analytics.track('pageview', {
      path: location.pathname,
      search: location.search
    });
  }, [location]);
  
  return null;
}
```

### 接收导航状态

```tsx
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const from = location.state?.from;
  
  return (
    <div>
      {from && <p>来自: {from}</p>}
    </div>
  );
}
```

## 0x06 嵌套路由

### Outlet 组件

Outlet 组件用于渲染嵌套路由的子组件，相当于插槽：

```tsx
import { Outlet, Routes, Route } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <header>顶部导航</header>
      <main>
        <Outlet />
      </main>
      <footer>底部</footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="user/:id" element={<User />} />
      </Route>
    </Routes>
  );
}
```

### 嵌套路由的路径继承

子路由会自动继承父路由的路径前缀：

```tsx
// 父路由 /dashboard
// 子路由 settings -> /dashboard/settings
// 子路由 profile -> /dashboard/profile

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<DashboardHome />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
```

### Index 路由

index 属性用于指定父路由的默认子路由：

```tsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route index element={<DashboardHome />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

## 0x07 路由守卫与重定向

### Navigate 组件实现重定向

```tsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

// 使用
function App() {
  const isAuthenticated = useAuth();
  
  return (
    <Routes>
      <Route path="/dashboard" element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Dashboard />
        </ProtectedRoute>
      } />
    </Routes>
  );
}
```

### 自定义认证守卫

```tsx
function AuthGuard({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <Loading />;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return children;
}
```

### 条件渲染路由

```tsx
function App() {
  const user = useUser();
  
  return (
    <Routes>
      <Route path="/public" element={<PublicPage />} />
      
      {user?.role === 'admin' && (
        <Route path="/admin" element={<AdminPage />} />
      )}
      
      {user && (
        <Route path="/profile" element={<ProfilePage />} />
      )}
    </Routes>
  );
}
```

## 0x08 路由匹配规则

### 精确匹配

默认情况下，React Router 使用 exact 属性进行精确匹配（v5）或模糊匹配（v6）。在 v6 中，可以使用 route orders 或 * 通配符实现精确匹配：

```tsx
// v6 默认模糊匹配 /about 会匹配 / 和 /about
// 精确匹配需要使用 index 或特定路径

<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
```

### 通配符路由

使用 * 匹配任意路径：

```tsx
<Route path="*" element={<NotFound />} />
```

### 路由优先级

React Router v6 使用算法自动计算最优匹配路径，Routes 会按照定义顺序尝试匹配：

```tsx
// 顺序很重要
<Routes>
  <Route path="/about" element={<About />} />
  <Route path=":id" element={<DynamicPage />} />  {/* 通用路由放后面 */}
</Routes>
```

## 0x09 路由懒加载

### React.lazy 与 Suspense

使用 React.lazy 实现路由级别的代码分割：

```tsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}
```

### Loading 组件

```tsx
function Loading() {
  return (
    <div className="loading">
      <p>加载中...</p>
    </div>
  );
}
```

### 预加载

```tsx
import { useNavigate, useRevalidator } from 'react-router-dom';

function PrefetchExample() {
  const navigate = useNavigate();
  const revalidator = useRevalidator();
  
  const prefetchData = () => {
    // 预加载数据
    navigate('/dashboard', { preventScrollReset: true });
  };
  
  return <button onClick={prefetchData}>预加载</button>;
}
```

### React Router v7 lazy 函数

v7 引入了专用的 lazy 属性：

```tsx
import { createRoutesFromElements, Route } from 'react-router-dom';

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route 
      path="dashboard" 
      lazy={() => import('./pages/Dashboard')} 
    />
  </Route>
);
```

## 0x10 路由数据加载

### loader 函���

React Router v7 引入了 loader 函数用于服务端数据预加载：

```tsx
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/users/:userId',
    loader: async ({ params }) => {
      const response = await fetch(`/api/users/${params.userId}`);
      return response.json();
    },
    Component: UserPage,
  },
]);
```

### useLoaderData Hook

```tsx
import { useLoaderData } from 'react-router-dom';

function UserPage() {
  const user = useLoaderData();
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

### 错误边界

```tsx
import { useRouteError } from 'react-router-dom';

function ErrorBoundary() {
  const error = useRouteError();
  
  return (
    <div>
      <h1>出错了</h1>
      <p>{error.message}</p>
    </div>
  );
}
```

## 0x11 路由动画

### 使用 Framer Motion

```tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Outlet } from 'react-router-dom';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Outlet />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}
```

### CSS 过渡动画

```css
/* 路由容器 */
.page-enter {
  opacity: 0;
  transform: translateX(20px);
}

.page-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 300ms, transform 300ms;
}

.page-exit {
  opacity: 1;
}

.page-exit-active {
  opacity: 0;
  transition: opacity 300ms;
}
```

## 0x12 路由状态管理

### 全局路由状态

```tsx
import { create } from 'zustand';

const useRouteStore = create((set) => ({
  previousPath: null,
  currentPath: null,
  setRoute: (path) => set((state) => ({
    previousPath: state.currentPath,
    currentPath: path,
  })),
}));

// 使用
function RouteTracker() {
  const location = useLocation();
  const setRoute = useRouteStore((state) => state.setRoute);
  
  useEffect(() => {
    setRoute(location.pathname);
  }, [location]);
  
  return null;
}
```

### 路由与表单

```tsx
import { Form, useActionData, useNavigation } from 'react-router-dom';

function LoginForm() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  return (
    <Form method="post">
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <button disabled={isSubmitting}>
        {isSubmitting ? '登录中...' : '登录'}
      </button>
      {actionData?.error && <p>{actionData.error}</p>}
    </Form>
  );
}
```

## 0x13 路由复用与布局

### 布局路由

创建可复用的布局组件：

```tsx
function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <aside>
        <nav>
          <Link to="/admin/users">用户管理</Link>
          <Link to="/admin/settings">系统设置</Link>
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="users" element={<UserManagement />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
```

### 多层布局嵌套

```tsx
function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}
```

## 0x14 HashRouter 与 MemoryRouter

### HashRouter

适用于不支持 History API 的环境（如静态文件托管）：

```tsx
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
```

URL 格式变为：#/about

### MemoryRouter

适用于非浏览器环境（如 React Native、移动端 WebView）：

```tsx
import { MemoryRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <MemoryRouter initialEntries={['/home', '/about']}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MemoryRouter>
  );
}
```

### 测试场景

```tsx
import { MemoryRouter } from 'react-router-dom';

function renderWithRouter(initialEntries, ui) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      {ui}
    </MemoryRouter>
  );
}

// 测试
test('navigates to about page', () => {
  renderWithRouter(['/'], <App />);
  fireEvent.click(screen.getByText('About'));
  expect(screen.getByText('About Page')).toBeInTheDocument();
});
```

## 0x15 路由与无障碍

### 焦点管理

```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>{/* ... */}</Routes>
    </>
  );
}
```

### preventScrollReset

```tsx
<Link to="/page" preventScrollReset>
  跳转
</Link>
```

### ARIA 支持

NavLink 自动添加 aria-current 属性：

```tsx
// 当匹配当前路由时
<NavLink to="/current" aria-current="page">
  Current Page
</NavLink>
```

## 0x16 完整示例

### 项目结构

```
src/
├── components/
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   └── PrivateRoute.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   └── User.tsx
├── App.tsx
└── main.tsx
```

### 主应用配置

```tsx
// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          
          {/* 保护路由 */}
          <Route 
            path="dashboard" 
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } 
          />
          <Route path="user/:id" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 布局组件

```tsx
// components/Layout.tsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
```

### 导航栏

```tsx
// components/Navbar.tsx
import { NavLink } from 'react-router-dom';

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';
  
  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={linkClass}>
            首页
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={linkClass}>
            关于
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={linkClass}>
            控制台
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
```

### 路由守卫

```tsx
// components/PrivateRoute.tsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  
  if (!isAuthenticated) {
    return (
      <Navigate 
        to="/login" 
        state={{ from: location }} 
        replace 
      />
    );
  }
  
  return children;
}

export default PrivateRoute;
```

### 用户页面示例

```tsx
// pages/User.tsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function User() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('获取用户失败:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchUser();
  }, [id]);
  
  if (loading) {
    return <div>加载中...</div>;
  }
  
  if (!user) {
    return (
      <div>
        <p>用户不存在</p>
        <Link to="/">返回首页</Link>
      </div>
    );
  }
  
  return (
    <div className="user-page">
      <h1>{user.name}</h1>
      <p>邮箱: {user.email}</p>
      <button onClick={() => navigate(-1)}>
        返回
      </button>
    </div>
  );
}

export default User;
```

## 0x17 常见问题与解决方案

### 刷新页面 404 错误

使用服务器配置处理 SPA 路由：

```nginx
# Nginx 配置
location / {
  try_files $uri $uri/ /index.html;
}
```

```apache
# Apache .htaccess
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### 路由不区分大小写

React Router v6 默认区分大小写，可以使用正则表达式实现不区分大小写：

```tsx
<Route 
  path="/:id" 
  element={<Page />}
  loader={({ params }) => {
    // 手动处理大小写
    return db.get(params.id.toLowerCase());
  }}
/>
```

### 路由参数类型转换

```tsx
function UserProfile() {
  const { id } = useParams();
  const userId = Number(id); // 字符串转数字
  
  if (isNaN(userId)) {
    return <div>无效的用户ID</div>;
  }
  
  return <div>用户ID: {userId}</div>;
}
```

### 避免路由重复渲染

使用 useMemo 优化路由配置：

```tsx
import { useMemo } from 'react';

function App() {
  const routeConfig = useMemo(() => [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/user/:id', element: <User /> },
  ], []);
  
  return (
    <Routes>
      {routeConfig.map(route => (
        <Route 
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
}
```

## 参考

- [React Router 官方文档](https://reactrouter.com)
- [React Router GitHub](https://github.com/remix-run/react-router)
- [React Router v7 Changelog](https://github.com/remix-run/react-router/blob/main/packages/react-router-dom/CHANGELOG.md)