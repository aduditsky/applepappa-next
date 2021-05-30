import { useRouter } from 'next/router';
import Link from 'next/link';

const ServicePage = () => {
  const router = useRouter();
  const { models, services } = router.query;

  return (
    <div>
      Страница услуг - {models} - {services}
    </div>
  );
};

export default ServicePage;
