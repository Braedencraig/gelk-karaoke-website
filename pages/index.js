import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Button from '@material-ui/core/Button';
import TestHeader from '../components/TestHeader';
import NeonLogo from '../components/NeonLogo';
import * as Scroll from 'react-scroll';
import Carousel from '../components/Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SpotifyPlayer from 'react-spotify-player';
import ClientComp from '../components/clientComp';
import MediaComp from '../components/mediaComp';
import Gallery from '../components/Gallery';
import ContactComp from '../components/ContactComp';
import { useSpring, animated } from 'react-spring';

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

const size = {
  width: '90%',
  height: 700,
  maxHeight: '700px',
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

const Index = props => (
  <Layout>
    <div>
      <div id='text' className='scrollBox'></div>
      {/* <animated.div
        style={useSpring({
          config: { duration: 950 },
          opacity: 1,
          transform: 'scale(1)',
          from: { opacity: 0, transform: 'scale(1.5)' },
        })}
      > */}
      <div className='gelkLogo'>
        <img
          className='gelkImageLogo'
          src='/testNeon.gif'
          alt='good enough live karaoke neon logo'
        />
      </div>
      <div className='songButton'>
        <a href='/list'>View Song List</a>
      </div>
      {/* </animated.div> */}
      {/* <div className='gelkLogo'>
        <img
          className='gelkImageLogo'
          src='/testNeon.gif'
          alt='good enough live karaoke neon logo'
        />
      </div> */}
      {/* <div className='songButton'>
        <a href='/list'>View Song List</a>
      </div> */}
    </div>
    {/* <div className='chevron'>
      <Link
        className='scrollChevron'
        to='text'
        spy={true}
        smooth={true}
        duration={500}
      >
        <svg
          height='40px'
          width='40px'
          fill='#F1F1F1'
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
    </div> */}
    <style jsx>{`

    .songButton {
      display: flex;
      justify-content: center;
      margin-bottom: 2.5%;
    }

    .songButton a {
      background: none;
      padding: 10px 20px;
      border-radius: 50px;
      border: 3px solid #f1f1f1;
      text-align:center;
      transition: all 0.4s;
      color: #f1f1f1;
      text-decoration: none;
      font-size: 20px;
      cursor: pointer
    }

    .songButton a:hover {
      opacity: 1;
       text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #761f6b, 0 0 0.5em #761f6b,
          0 0 0.1em #761f6b, 0 10px 3px #000;
    }

    .gelkImageLogo {
      display: block;
      width: 100%;
      height: auto;
    }

    .gelkLogo {
      margin: 0 auto;
      width: 70%;
      max-width: 800px;
      max-height: 600px;
      margin-top: 3.5%;
      margin-bottom: 0.5%;
      display: flex;
      justify-content: center;
    }
      svg:hover {
        fill: rgba(241,241,241, 0.6);
        cursor: pointer;
      }

      svg {
        transition: all 0.4s;
      }
      h1,
      a {
        font-family: 'Montserrat', sans-serif;
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
        width: 94%;
        justify-content: flex-end;
        position: fixed;
        top: 92vh;
        z-index: 100;
        transform: scale(1, -1)
      }

      .wrapper {
        margin: 0 auto;
        max-width: 960px;
        padding: 0 2%;
      }

      .scrollBox{
        position: relative;
        color: white;
        width: 20px;
        height: 20px;
        bottom: 200px;
      }
      }

            @media screen and (max-width: 1075px) {
              .gelkLogo {
                margin-top: 50px;
              }
            }

            @media screen and (max-width: 700px) {
              .songButton a, .listButton a{
                font-size: 14px;
              }
              .gelkLogo {
                margin-top: 70px;
              }
            }

             @media screen and (max-width: 600px) {
        .gelkLogo {
          max-width: 400px;
          max-height: 300px;
          width: 100%;
          margin-top: 90px;
        }

        .songButton {
          margin-top: 35px;
          margin-bottom: 80px;
        }

        .songButton a {
          font-size: 22px;
          border: 5px solid #f1f1f1;
        }


      }

    `}</style>
    <>
      {/* <Carousel /> */}
      <div className='spotifyAbout'>
        <div className='flexOneSide'>
          <div className='introText'>
            <h3>ABOUT GELK</h3>
            <p>
              Good Enough Live Karaoke is Toronto's most popular live band
              karaoke experience, letting anyone with the desire and guts to
              join us on stage, take the mic and sing!{' '}
            </p>

            <p>
              Ideal for corporate events, birthday parties and weddings, Good
              Enough is a live band featuring guitars, bass, keyboards and
              drums, and a repertoire of over 400 songs spanning genres and
              eras. Get in touch at{' '}
              <a
                href='mailto:sing@goodenoughlivekaraoke.com?Subject=Hello%20'
                target='_top'
              >
                sing@goodenoughlivekaraoke.com
              </a>{' '}
              to book your event, and follow us on Instagram to see weekly
              public shows across Ontario.
            </p>
            <p>
              Since 2013, we have played thousands of hours on stage at private
              and public events with our unique, interactive rock'n'roll
              experience. It’s a bit terrifying, hugely exhilarating and
              completely awesome!
            </p>
          </div>
          <div className='listButton'>
            <a href='/shows'>Upcoming Shows</a>
          </div>
        </div>
        <div className='flexTwoSide'>
          <div className='spotify'>
            <SpotifyPlayer
              uri='spotify:playlist:4QmX44dyzZa6kObYm5jXzS'
              size={size}
              view={view}
              theme={theme}
            />
          </div>
        </div>
      </div>
      <div className='contactSvg'>
        <svg
          height='100px'
          width='100px'
          fill='#f1f1f1'
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          x='0px'
          y='0px'
          viewBox='0 0 64 64'
        >
          <g>
            <path d='M26,21c-1.654,0-3,1.346-3,3h2c0-0.551,0.448-1,1-1s1,0.449,1,1h2C29,22.346,27.654,21,26,21z'></path>
            <path d='M38,21c-1.654,0-3,1.346-3,3h2c0-0.551,0.448-1,1-1s1,0.449,1,1h2C41,22.346,39.654,21,38,21z'></path>
            <path d='M51.405,42.223c-0.754-0.431-1.567-0.764-2.405-1.008V18c0-9.374-7.626-17-17-17S15,8.626,15,18v23.287   c-0.04,0.013-0.081,0.02-0.12,0.033C11.363,42.491,9,45.77,9,49.477v0.29c0,0.925,0.148,1.839,0.441,2.719L10,54.162V63h18h7h12   v-7.933c0.39,0.304,0.83,0.549,1.306,0.734L52.42,63h10.198l-5.626-11.252C56.951,47.818,54.823,44.175,51.405,42.223z    M56.22,54.675l-5.023,2.153l-0.772-1.351l5.103-2.187L56.22,54.675z M46.901,40.805L39,40.087V39h-0.104   c3.144-1.978,5.378-5.26,5.947-9.085c0.803-0.138,1.533-0.468,2.157-0.94v11.845C46.967,40.816,46.934,40.808,46.901,40.805z    M34.952,43.276c-0.108-0.895-0.415-1.728-0.874-2.458c1.017-0.164,1.998-0.434,2.922-0.821v0.859   C36.885,41.206,36.366,42.461,34.952,43.276z M29,56h-1v-6.09c0.326,0.055,0.659,0.09,1,0.09s0.674-0.035,1-0.09v6.181   C29.674,56.035,29.341,56,29,56z M29,48c-2.206,0-4-1.794-4-4c0-1.729,1.108-3.191,2.647-3.748   c0.008,0.003,0.016,0.007,0.024,0.009l0.007-0.019C28.094,40.095,28.534,40,29,40c2.206,0,4,1.794,4,4S31.206,48,29,48z M19,27.816   c-1.161-0.414-2-1.514-2-2.816s0.839-2.402,2-2.816V27.816z M19.146,29.914c0.58,3.886,2.9,7.302,6.269,9.287   c-0.373,0.28-0.716,0.597-1.015,0.955L17,40.895v-11.92C17.621,29.445,18.347,29.775,19.146,29.914z M32.286,38.986   C31.341,38.364,30.213,38,29,38c-0.434,0-0.856,0.049-1.263,0.136C23.683,36.431,21,32.439,21,28V18h1.343   c3.59,0,6.983-1.282,9.657-3.63c2.674,2.348,6.067,3.63,9.657,3.63H43v10C43,33.969,38.218,38.832,32.286,38.986z M45,22.184   c1.161,0.414,2,1.514,2,2.816s-0.839,2.402-2,2.816V22.184z M32,3c8.271,0,15,6.729,15,15v3.026c-0.584-0.442-1.257-0.773-2-0.924   V16h-3.343c-3.381,0-6.56-1.316-8.95-3.707L32,11.586l-0.707,0.707C28.902,14.684,25.724,16,22.343,16H19v4.101   c-0.743,0.152-1.416,0.482-2,0.924V18C17,9.729,23.729,3,32,3z M11,49.477c0-2.845,1.813-5.361,4.513-6.26   c0.463-0.154,0.943-0.257,1.43-0.306l6.312-0.631C23.091,42.825,23,43.402,23,44c0,2.215,1.21,4.149,3,5.188V56h-6v-7h-2v4h-2v2h2   v1h-6v-1h2v-2h-2.279l-0.382-1.146C11.114,51.179,11,50.477,11,49.767V49.477z M28,61H12v-3h6h1h10c1.86,0,3.429,1.277,3.873,3H28z    M47,50.987c0-0.491,0.116-0.983,0.336-1.422l0.559-1.117l-1.789-0.895l-0.559,1.118C45.189,49.386,45,50.188,45,50.987   c0,0.004,0.001,0.009,0.001,0.013H45v10H34.91c-0.302-1.789-1.395-3.309-2.91-4.188v-7.624c1.359-0.789,2.378-2.094,2.792-3.648   c2.298-0.803,3.404-2.466,3.872-3.476l8.056,0.732c1.291,0.117,2.568,0.52,3.693,1.162c2.679,1.531,4.397,4.329,4.572,7.388   l-6.019,2.58C47.781,53.438,47,52.284,47,50.987z M53.58,61l-1.385-2.424l4.92-2.109L59.382,61H53.58z'></path>
            <path d='M32,28c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S34.206,28,32,28z M32,34c-1.103,0-2-0.897-2-2s0.897-2,2-2   s2,0.897,2,2S33.103,34,32,34z'></path>
            <path d='M13,1H5v11.184C4.686,12.072,4.352,12,4,12c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3V3h6V1z M4,16   c-0.552,0-1-0.449-1-1s0.448-1,1-1s1,0.449,1,1S4.552,16,4,16z'></path>
            <path d='M53,1v8h-0.5c-1.379,0-2.5,1.122-2.5,2.5s1.121,2.5,2.5,2.5s2.5-1.122,2.5-2.5V7h6v2h-0.5c-1.379,0-2.5,1.122-2.5,2.5   s1.121,2.5,2.5,2.5s2.5-1.122,2.5-2.5V1H53z M53,11.5c0,0.276-0.225,0.5-0.5,0.5S52,11.776,52,11.5s0.225-0.5,0.5-0.5H53V11.5z    M61,11.5c0,0.276-0.225,0.5-0.5,0.5S60,11.776,60,11.5s0.225-0.5,0.5-0.5H61V11.5z M55,5V3h6v2H55z'></path>
          </g>
        </svg>
      </div>
      <ContactComp />
    </>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Concert+One|Montserrat&display=swap');

        svg {
            display: flex;
            justify-content: center;
            width: 100%;
            margin-top: 70px;
          }


      .contactButton {
      width: 100%;
      text-align: center;
      margin-bottom: 0;
      margin-top: 50px;
    }

    .contactButton a {
      background: none;
      padding: 10px 20px;
      border-radius: 50px;
      border: 3px solid #f1f1f1;
      text-align:center;
      transition: all 0.4s;
      color: #f1f1f1;
      text-decoration: none;
      font-size: 20px;
      font-family: 'Montserrat', sans-serif;
      cursor: pointer
    }

    .contactButton a:hover {
      opacity: 1;
       text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #761f6b, 0 0 0.5em #761f6b,
          0 0 0.1em #761f6b, 0 10px 3px #000;
    }

       .listButton {
      width: 100%;
      text-align: center;
      margin-bottom: 4%;
    }

    .listButton a {
      background: none;
      font-family: 'Montserrat', sans-serif;
      padding: 10px 20px;
      border-radius: 50px;
      border: 3px solid #e53441;
      text-align:center;
      transition: all 0.4s;
      color: #e53441;
      text-decoration: none;
      font-size: 20px;
      cursor: pointer
    }

    .listButton a:hover {
      opacity: 1;
      text-shadow: 0 40px 100px, 0 0 2px, 0 0 1em #e53441, 0 0 0.5em #e53441,
          0 0 0.1em #e53441, 0 10px 3px #f1f1f1;
    }

      h3 {
        text-align:center;
        font-family: 'Concert One', sans-serif;
        color: #e53441;
        font-size: 40px;
        letter-spacing: 5px;
      }

      .spotify {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        margin: 2% 0;
        padding: 20px 0;
      }

      .spotifyAbout {
        display: flex;
        width: 100%;
      }

      .flexOneSide {
        width: 60%;
        padding: 2%;
        background: #f1f1f1;
      }

      .flexTwoSide {
        background: #e53441;
        width: 40%;
        padding: 2%;
      }

      .introText {
        max-width: 1400px;
        font-family: 'Montserrat', sans-serif;
        font-size: 28px;
        color: rgb(25,3,22);
        font-weight: bold;
        padding: 0 25px;
      }

      .introText a {
        color: rgb(25,3,22) !important;
      }

      .introText a:hover {
        color: #e53441 !important;
      }


      a {
        color: rgb(25,3,22)
        text-decoration: underline;
        cursor: pointer;
        transition: all 0.4s;
      }

      a:hover {
        opacity: 0.65;
      }

      .introText p {
        line-height: 38px;
        margin-bottom: 50px;
        font-size: 18px;
        text-align: left;
      }

      h2 {
        text-align: center;
        font-size: 70px;
        margin-top: -100px;
        font-family: 'Concert One', cursive;
        color: #f1f1f1;
      }

      @media screen and (max-width: 1190px) { 
       .introText p {
         font-size: 16px;
       }
      }

      @media screen and (max-width: 1087px) {
        .spotifyAbout {
          flex-direction: column;
        }

        .introText {
          padding: 0;
        }

        .songButton, .listButton {
          margin: 30px 0;
        }

        .songButton {
          margin-bottom: 50px;
        }

        .flexOneSide, .flexTwoSide {
          width: 100%;
          padding: 0;
          margin: 0;
        }

        .introText p {
          padding: 0 5%;
        }

        .listButton {
          margin-bottom: 50px;
        }


        
        
      }

      @media screen and (max-width: 1075px) {
        .introText h2 {
          font-size: 30px;
          font-family: 'Concert One', cursive;
        }

        .introText {
          font-size: 20px;
        }

        .introText p {
          line-height: 36px;
        }

       
      }

      @media screen and (max-width: 700px) {
        h3 {
          font-size: 30px;
        }
             .listButton a{
                font-size: 14px;
              }
              .introText {
                font-size: 16px;
              }
            }

      @media screen and (max-width: 600px) {
        

        .chevron {
          margin-top: 50px;
        }
        .introText h2 {
          font-size: 30px;
          margin-top: -70px;
          margin-bottom: 30px;
        }

        .introText h3 {
          font-size: 40px;
          letter-spacing: 1px;
          text-align: center;
          padding-left: 5%;
        }

        .introText {
          font-size: 16px;
        }

        .introText p {
          line-height: 28px;
          font-size: 15px;
          text-align: center;
          margin-bottom: 30px;
          word-wrap: break-word;
        }

        .introText p:last-child {
          margin-bottom: 50px;
        }
        .listButton a {
          font-size: 22px;
          border: 5px solid #e53441;
        }
      }
    `}</style>
  </Layout>
);

export default Index;
