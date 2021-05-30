import { useRouter } from 'next/router';
import Link from 'next/link';

const ModelPage = () => {
  const router = useRouter();
  const { models } = router.query;

  return <div>Страница моделей - {models}</div>;
};

export default ModelPage;
