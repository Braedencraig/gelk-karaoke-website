import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Button from '@material-ui/core/Button';
import TestHeader from '../components/TestHeader';
import NeonLogo from '../components/NeonLogo';
import * as Scroll from 'react-scroll';
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
      <Link
        className='test6'
        to='scroll'
        spy={true}
        smooth={true}
        duration={500}
      >
        {/* <a href={`#${letter}`}>{letter}</a> */}
        {/* <a href='#scroll'> */}
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
        {/* </a> */}
      </Link>
    </div>
    <style jsx>{`
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
        color: blue;
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
    <div className='introText' id='scroll'>
      <h2>We play, YOU sing!</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nostrum ea
        nulla molestiae veniam explicabo quam necessitatibus consequuntur
        dolorum deleniti eveniet eum, sint possimus cupiditate esse, vero
        consequatur ab veritatis?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore a
        sapiente facere quod quibusdam itaque impedit! Expedita consequatur cum
        enim cupiditate ratione est fuga sapiente veniam, corporis eius eos
        totam.
      </p>
    </div>
    <style jsx>{`
      .introText {
        font-size: 20px;
        color: white;
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
