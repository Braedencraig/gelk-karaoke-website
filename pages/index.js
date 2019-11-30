import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Button from '@material-ui/core/Button';
import TestHeader from '../components/TestHeader';
import NeonLogo from '../components/NeonLogo';
import * as Scroll from 'react-scroll';
import Carousel from '../components/Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

const Index = props => (
  <Layout>
    <NeonLogo />

    <div className='chevron'>
      <Link className='test6' to='text' spy={true} smooth={true} duration={500}>
        <svg
          height='50px'
          width='50px'
          fill='#FFFFFF'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          x='0px'
          y='0px'
        >
          <path
            fill-rule='evenodd'
            d='M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M15.2928932,9.29289322 L16.7071068,10.7071068 L12,15.4142136 L7.29289322,10.7071068 L8.70710678,9.29289322 L12,12.5857864 L15.2928932,9.29289322 Z'
          ></path>
        </svg>
      </Link>
    </div>
    <style jsx>{`
      svg:hover {
        fill: grey;
        cursor: pointer;
      }

      svg {
        transition: all 0.4s;
      }
      h1,
      a {
        font-family: 'Arial';
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
      }

      a:hover {
        opacity: 0.6;
      }

      .chevron {
        margin-bottom: 200px;
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: 85vh;
      }

      .wrapper {
        margin: 0 auto;
        max-width: 960px;
        padding: 0 2%;
      }
    `}</style>
    <>
      <Carousel />

      <div className='introText' id='text'>
        <h2>We play, YOU SING!&trade;</h2>
        <p>
          Good Enough Live Karaoke is Toronto's most popular live band karaoke
          experience letting anyone with the desire and guts to join them on
          stage, take the mic and sing! A live band featuring guitars, bass,
          keyboards and drums, Good Enough’s repertoire of over 400 songs spans
          genres and eras. Hit us up at{' '}
          <a
            href='mailto:sing@goodenoughlivekaraoke.com?Subject=Hello%20'
            target='_top'
          >
            sing@goodenoughlivekaraoke.com{' '}
          </a>
          to book your event. And follow us on Instagram to see weekly public
          shows across Ontario. Since 2013, the band has played thousands of
          hours on stage at private and public events with its unique,
          interactive rock'n'roll experience. It’s a bit terrifying, hugely
          exhilarating and completely awesome!
        </p>
      </div>
    </>
    <style jsx>{`
      .introText {
        font-family: Oswald, cursive;
        font-size: 30px;
        color: white;
        width: 80%;
        margin: 0 auto;
      }

      a {
        color: white;
        font-family: Oswald, cursive;
        text-decoration: underline;
        cursor: pointer;
      }

      .introText h2 {
        text-align: center;
        font-size: 40px;
        margin-top: -100px;
      }
    `}</style>
  </Layout>
);

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show),
//   };
// };

export default Index;
