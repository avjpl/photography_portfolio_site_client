import Image from 'next/image';

import css from '../../static/styles/about.module.css';

const About = () => {
  return (
    <div className={css.about}>
      <button
        type="button"
        onClick={() => {
          throw new Error("Frontend Sentry Error!");
        }}
      >
        Throw error
      </button>

      <div className={css.about__image}>
        <Image src='/img/about/1.png' layout={'fill'} />
      </div>

      <div className={css.about_bio}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus
          lobortis ligula. Morbi luctus leo vitae odio pretium, in semper urna
          consectetur. Nulla facilisi. Donec auctor sapien quis feugiat varius.
          Proin id est consectetur purus sodales volutpat ut at tortor. Etiam
          vel elit scelerisque, facilisis velit in, rutrum quam. Fusce sit amet
          pellentesque lorem. Fusce ullamcorper, nunc ac dapibus porta, nisi
          risus facilisis turpis, bibendum ultricies nisl turpis eu sem. Aliquam
          quis accumsan libero. Donec maximus eu elit vel semper. Curabitur
          porttitor purus augue, in iaculis lorem tristique sed. Nulla et sem
          sed sem dictum eleifend. Donec laoreet id dolor eget rhoncus.
        </p>

        <p>
          In est elit, commodo at elit in, pretium placerat ipsum. Maecenas id
          porttitor ligula. Etiam auctor, est ut gravida auctor, risus erat
          vehicula urna, sit amet lacinia justo dui posuere eros. Vestibulum
          fermentum diam dolor, et viverra tortor rutrum id. Sed rhoncus egestas
          auctor. Morbi scelerisque nulla dolor, nec ultricies metus dictum
          quis. Vivamus porttitor condimentum turpis, vitae dapibus sem dictum
          nec.
        </p>

        <p>
          Fusce blandit, arcu eget consectetur fringilla, odio ipsum posuere
          dolor, sit amet vestibulum turpis velit vitae lectus. Proin non
          finibus risus. Nulla porttitor, turpis quis iaculis semper, arcu erat
          vehicula nisi, eget posuere quam massa tempor neque. Curabitur sit
          amet sem consequat, tempor nulla ac, gravida nisl. Donec et metus ut
          nulla tempor lobortis in eget mi. Integer in congue est. Ut euismod
          dictum neque id pellentesque. Vestibulum vitae sem eu nulla porttitor
          ullamcorper in vel eros. Proin in pellentesque sapien. Proin quis odio
          convallis, molestie ex id, elementum est. Praesent sollicitudin, arcu
          nec fermentum rutrum, dolor neque hendrerit arcu, ut fermentum libero
          nibh eget arcu.
        </p>

        <p>
          Praesent semper mollis nibh, nec tincidunt lacus euismod quis. Sed
          imperdiet vulputate dolor. Ut sed leo sit amet arcu convallis bibendum
          sed ut metus. Proin vel vestibulum nulla, a pulvinar urna. Sed eu
          tortor nec tortor interdum consectetur viverra sit amet tortor.
          Curabitur vel dolor at risus malesuada iaculis. Maecenas in ultrices
          massa. Sed quis varius tortor. Donec a urna blandit, ultrices felis
          id, efficitur enim. Vestibulum facilisis, est et egestas vestibulum,
          ante dolor euismod neque, eget viverra nisi augue ut risus. Phasellus
          aliquam iaculis urna, eget luctus metus facilisis quis. Curabitur
          lorem nisl, auctor eu eleifend in, aliquam aliquam tellus. Proin
          ullamcorper dui vel arcu semper dapibus. Nam sed ante vel est semper
          venenatis. Quisque diam orci, sagittis tristique imperdiet vitae,
          lobortis eu tortor. Morbi egestas justo quis porttitor vulputate.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          volutpat magna in risus vestibulum fermentum. Nulla malesuada
          venenatis elit, quis molestie libero scelerisque at. Aenean non porta
          leo, at venenatis urna. Aenean auctor dolor et facilisis condimentum.
          Donec et nisl bibendum, vestibulum nisl at, faucibus diam. In
          ultricies convallis vehicula. Donec efficitur sapien ut tortor
          vehicula, eu placerat erat dignissim. Morbi porttitor volutpat dolor,
          sit amet pulvinar ante pulvinar non. Praesent vulputate, arcu id
          sagittis tincidunt, lacus nisl scelerisque justo, in mattis massa nibh
          fringilla dui.
        </p>

        <p>
          Integer porta urna vel mi fringilla, eu iaculis nisi pulvinar. Sed ut
          iaculis neque. Vivamus nibh dolor, ultricies euismod turpis at,
          elementum aliquam arcu. Donec posuere neque nec ultrices pellentesque.
          Nulla a nunc eget metus sodales cursus vitae non mauris. Nullam ut
          rutrum libero, laoreet lacinia lectus. Donec laoreet iaculis lectus a
          sodales.
        </p>

        <p>
          Praesent tincidunt finibus venenatis. Ut sit amet nisi neque. Integer
          tortor mi, venenatis a libero ac, maximus interdum lorem. Vivamus eget
          tortor sed mauris rutrum mattis. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Nulla eu porttitor velit. Cras facilisis ac
          est at sodales. Etiam eu arcu magna. Aliquam eu lectus accumsan,
          bibendum velit eget, ultricies purus. Donec eu pharetra nisi.
        </p>
      </div>
    </div>
  );
};

export default About;
