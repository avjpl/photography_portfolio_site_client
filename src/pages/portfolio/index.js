import Link from 'next/link';
import Image from 'next/image';

import css from './portfolio.module.css';

const genre = [
  {
    image: '/img/portfolio/studio/3.jpg',
    link: '/portfolio/people',
    genre: 'People',
  },
  {
    image: '/img/portfolio/places/1.jpg',
    link: '/portfolio/places',
    genre: 'Places',
  },

  {
    image: '/img/portfolio/wildlife/2.jpg',
    link: '/portfolio/wildlife',
    genre: 'Wildlife',
  },
  {
    image: '/img/portfolio/macro/1.jpg',
    link: '/portfolio/macro',
    genre: 'Macro',
  },
];

const Gallery = () => {
  return (
    <ul className={css.portfolio}>
      {
        genre.map((g ) => {
          return (
            <li key={g.genre} className={css.portfolio__category}>
              <Link href={g.link}>
                <a className={css.portfolio__label}>{g.genre}</a>
              </Link>

              <Image
                className={css.portfolio__image}
                src={g.image}
                layout={'fill'}
                quality={100}
                alt=''
              />
            </li>
          );
        })
      }
    </ul>
  );
};

export default Gallery;
