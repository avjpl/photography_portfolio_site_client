import Image from 'next/image';

import { random } from '../utils/numbers';

import css from '../../static/styles/home.module.css';

/*
    Images need t0 be 1920x965 - 16/9 ratio
*/

const Home = () => {
  return (
    <div>
      <Image
        className={css.img}
        src={`/img/16x9/${random(1, 7)}.jpg`}
        layout={'fill'}
      />
    </div>
  );
};

export default Home;
