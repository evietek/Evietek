import { usePathname } from 'next/navigation';
import Head from 'next/head';
import { routeTitles } from '@/app/layout';

export default function PageMetadata() {
  const pathname = usePathname();
  const title = routeTitles[pathname] || 'Evietek';

  return (
    <Head>
      <title>{title} | Evietek</title>
    </Head>
  );
} 