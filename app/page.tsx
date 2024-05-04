/**
 * 使用了[nextjs的动态加载组件](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#nextdynamic)
 * dynamic 相当于 [React.lazy()](https://react.dev/reference/react/lazy) 和 [Suspense](
 */

import dynamic from 'next/dynamic';

/**
 * dynamic默认ssr是true，由于需要客户端渲染，所以设为false
 */
const App = dynamic(() => import('../components/AppShell'), {
  ssr: false,
});

export default function Page() {
  return <App />;
}
