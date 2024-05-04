/**
 * [...all] => /a/b/c  => {all: ['a', 'b', 'c']}
 * https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments
 */
import dynamic from 'next/dynamic';
import { lists } from '../../mock';

const App = dynamic(() => import('../../components/AppShell'), {
  ssr: false,
});

/**
 * https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 * generateStaticParams 用于使得Nextjs的动态路由，在build时生成静态页面，而不是在请求时生成
 * feed、lists、settings分别对应三个tabs的页面
 * { all: ['lists', list.id] } 对应的路径是 /lists/list.id
 * @returns 
 */
export async function generateStaticParams() {
  return [
    { all: ['feed'] },
    { all: ['lists'] },
    ...lists.map(list => ({ all: ['lists', list.id] })),
    { all: ['settings'] },
  ];
}

export default function Page() {
  return <App />;
}
