import { useRouter } from 'next/router';

import Gallery from '../../components/image/gallery';

const Portfolio = () => {
  const router = useRouter();
  const { gallery } = router.query;

  return (
    <Gallery gallery={gallery} /> 
  );
};

export default Portfolio;
