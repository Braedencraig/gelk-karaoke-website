import Link from 'next/link';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import Home from '../assets/home.svg';
import Shows from '../assets/shows.svg';
import Clients from '../assets/clients.svg';
import Media from '../assets/media.svg';
import Contact from '../assets/contact.svg';
import SongList from '../assets/songlist.svg';

const TestHeader = _ => {
  const [scrolled, setScrolled] = useState();
  const classes = classNames('navBar', {
    scrolled: scrolled,
  });
  useEffect(_ => {
    const handleScroll = _ => {
      if (window.pageYOffset > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return _ => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <nav className={`${classes} wrapper stroke`}>
        <Link href='/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='60'
            height='60'
            viewBox='0 0 60 60'
            className='singMan'
          >
            <g
            // transform='translate(50 50) scale(-0.69 0.69) rotate(0) translate(-50 -50)'
            // style='fill:#FFFFFF'
            >
              <svg
                fill='#f1f1f1'
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                x='0px'
                y='0px'
                viewBox='0 0 100 100'
                enable-background='new 0 0 100 100'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M33.2001953,90.6738281c0.1665039-0.1660156,0.25-0.3671875,0.25-0.5996094  c0-0.2675781-0.0834961-0.4824219-0.25-0.6503906c-0.1669922-0.1660156-0.3666992-0.25-0.6000977-0.25  c-0.2001953,0-0.3833008,0.0839844-0.550293,0.25c-0.1665039,0.1679688-0.25,0.3828125-0.25,0.6503906  c0,0.2324219,0.0834961,0.4335938,0.25,0.5996094c0.1669922,0.1679688,0.3500977,0.25,0.550293,0.25  C32.8334961,90.9238281,33.0332031,90.8417969,33.2001953,90.6738281z M33.3500977,84.7246094  c-0.2333984-0.1679688-0.4501953-0.25-0.6499023-0.25c-0.1669922,0-0.3666992,0.0820313-0.6000977,0.25  c-0.1665039,0.2324219-0.25,0.4492188-0.25,0.6503906c0,0.1992188,0.0834961,0.3828125,0.25,0.5488281  c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25c0.2666016,0,0.4833984-0.0820313,0.6499023-0.25  c0.1665039-0.1660156,0.25-0.3496094,0.25-0.5488281C33.6000977,85.1738281,33.5166016,84.9570313,33.3500977,84.7246094z   M33.7001953,80.6738281c0-0.2324219-0.0834961-0.4335938-0.25-0.5996094c-0.1669922-0.1660156-0.3666992-0.25-0.6000977-0.25  c-0.2666016,0-0.4833984,0.0839844-0.6499023,0.25c-0.1669922,0.1660156-0.25,0.3671875-0.25,0.5996094  c0,0.2011719,0.0830078,0.3828125,0.25,0.5507813c0.1665039,0.1660156,0.3833008,0.25,0.6499023,0.25  c0.2333984,0,0.4331055-0.0839844,0.6000977-0.25C33.6166992,81.0566406,33.7001953,80.875,33.7001953,80.6738281z   M33.7998047,75.875c0-0.2011719-0.0830078-0.3847656-0.25-0.5507813c-0.1665039-0.1660156-0.3662109-0.25-0.5996094-0.25  c-0.2666016,0-0.4667969,0.0839844-0.6000977,0.25c-0.1665039,0.1328125-0.25,0.3164063-0.25,0.5507813  c0,0.265625,0.0834961,0.4824219,0.25,0.6484375c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25  c0.1665039,0,0.3662109-0.0820313,0.5996094-0.25C33.7167969,76.2910156,33.7998047,76.0742188,33.7998047,75.875z   M33.7001953,70.625c-0.1337891-0.1679688-0.3334961-0.25-0.6000977-0.25c-0.2333984,0-0.4165039,0.0820313-0.550293,0.25  c-0.1665039,0.1328125-0.25,0.3164063-0.25,0.5488281c0,0.2675781,0.0834961,0.484375,0.25,0.6503906  c0.1669922,0.1660156,0.3500977,0.25,0.550293,0.25c0.2333984,0,0.4331055-0.0839844,0.6000977-0.25  c0.1665039-0.1660156,0.25-0.3828125,0.25-0.6503906C33.9501953,70.9414063,33.8666992,70.7578125,33.7001953,70.625z   M59.2998047,48.0234375c-0.0664063,0.234375-0.0498047,0.4511719,0.050293,0.6503906L59.5,48.9746094  c0.2001953,0.2988281,0.4833984,0.4492188,0.8500977,0.4492188L60.7001953,49.375  c0.199707-0.1015625,0.3496094-0.2675781,0.449707-0.5c0.0668945-0.234375,0.050293-0.4511719-0.0498047-0.6503906  l-0.1499023-0.3007813c-0.2666016-0.5-0.6503906-0.6328125-1.1503906-0.4003906  C59.5332031,47.625,59.3666992,47.7910156,59.2998047,48.0234375z M55.2001953,38.4746094  c-0.5,0.2988281-0.6337891,0.6835938-0.4003906,1.1503906l3.3500977,6.5996094c0.1665039,0.3320313,0.4335938,0.5,0.800293,0.5  L59.2998047,46.625c0.5336914-0.2675781,0.6835938-0.6503906,0.4501953-1.1503906L56.3500977,38.875  C56.0834961,38.375,55.7001953,38.2402344,55.2001953,38.4746094z M69.7001953,22.2246094  c0.1665039-0.234375,0.25-0.4511719,0.25-0.6503906c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094  c-0.2333984-0.1679688-0.4501953-0.25-0.6503906-0.25c-0.1665039,0-0.3662109,0.0820313-0.5996094,0.25  c-0.1669922,0.2324219-0.25,0.4335938-0.25,0.5996094c0,0.1992188,0.0830078,0.4160156,0.25,0.6503906  c0.2333984,0.1660156,0.4331055,0.25,0.5996094,0.25C69.25,22.4746094,69.4667969,22.390625,69.7001953,22.2246094z   M20.6499023,28.7734375l1.550293,1.75c0.5332031,0.4335938,1.2832031,0.8007813,2.25,1.1015625l-8.5,10.0488281  l-2.1000977-1.4492188L20.6499023,28.7734375z M22.75,24.0234375c0.6333008-0.7324219,1.5-1.1660156,2.6000977-1.2988281  c1.0664063-0.0996094,1.9663086,0.1503906,2.699707,0.75c0.800293,0.6328125,1.25,1.4667969,1.3500977,2.5  s-0.1665039,1.9335938-0.7998047,2.6992188c-0.6665039,0.8339844-1.5,1.3007813-2.5,1.4003906L25.2998047,30.125  c-0.7998047-0.1015625-1.4663086-0.4179688-2-0.9511719c-0.3330078-0.265625-0.6162109-0.6171875-0.8496094-1.0488281  l-0.050293-0.0507813c-0.1665039-0.3671875-0.2832031-0.8164063-0.3500977-1.3496094  C21.9501953,25.6582031,22.1835938,24.7578125,22.75,24.0234375z M44.1499023,11.375  c-0.4331055-0.3339844-0.8334961-0.2832031-1.199707,0.1484375c-0.3334961,0.4335938-0.2836914,0.8339844,0.1499023,1.2011719  l0.3500977,0.3496094c0.4663086,0.4003906,0.8496094,0.9160156,1.1499023,1.5507813  c0.1665039,0.3320313,0.4331055,0.5,0.7998047,0.5l0.3999023-0.1015625c0.2001953-0.0996094,0.3500977-0.265625,0.4501953-0.5  c0.0664063-0.2324219,0.0498047-0.4492188-0.0498047-0.6484375c-0.4667969-0.8007813-0.9667969-1.4667969-1.5-2  C44.5332031,11.6738281,44.3500977,11.5078125,44.1499023,11.375z M34.2001953,9.2246094  c1.4663086-0.9003906,3.1333008-1.3496094,5-1.3496094c2.6333008,0,4.8833008,0.9160156,6.75,2.75  C47.8164063,12.5566406,48.75,14.8066406,48.75,17.375c0,0.765625-0.0834961,1.5488281-0.25,2.3496094  c-0.4335938,1.6992188-1.2832031,3.1992188-2.5498047,4.5c-1.8666992,1.8320313-4.1166992,2.75-6.75,2.75  c-2.6669922,0-4.9169922-0.9335938-6.75-2.8007813c-1.8666992-1.8320313-2.800293-4.0996094-2.800293-6.7988281  c0-2.6015625,0.9335938-4.8515625,2.800293-6.75C33.0166016,10.0234375,33.6000977,9.5566406,34.2001953,9.2246094z   M41.0498047,9.875l-0.699707-0.1015625c-0.2333984,0-0.4335938,0.0839844-0.6000977,0.25  C39.5834961,10.1914063,39.5,10.390625,39.5,10.625c0,0.2324219,0.0834961,0.4492188,0.25,0.6484375  c0.1665039,0.1679688,0.3666992,0.25,0.6000977,0.25h0.25l0.25,0.0507813c0.3999023,0,0.6665039-0.2167969,0.7998047-0.6503906  c0.0668945-0.2324219,0.0336914-0.4492188-0.1000977-0.6503906C41.4501953,10.0742188,41.2832031,9.9414063,41.0498047,9.875z   M83.3500977,11.2246094L86,18.375L55.1499023,33.2734375C55.25,33.4414063,55.3500977,33.640625,55.4501953,33.875  l30.699707,58.1484375h-7.6000977l-19.449707-32l-22.050293,12.4511719  c-0.2666016,0.1660156-0.3999023,0.3828125-0.3999023,0.6503906l-1.25,19l-5.75-0.1015625l0.800293-23.1992188l18.449707-11.25  c0.3999023-0.2324219,0.5166016-0.5839844,0.3500977-1.0507813l-6.1000977-16.0488281c-0.199707-0.4003906-0.3666992-0.734375-0.5-1  L32.75,49.375L21.0498047,38.1738281l3.3500977-4.1992188L31.25,40.875c0.2001953,0.1992188,0.4165039,0.2832031,0.6499023,0.25  c0.2333984,0,0.4501953-0.1015625,0.6499023-0.3007813l9.1000977-11L83.3500977,11.2246094z M74.2001953,19.5742188  c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094c-0.2333984-0.1679688-0.4501953-0.25-0.6503906-0.25  c-0.1665039,0-0.3662109,0.0820313-0.5996094,0.25c-0.1669922,0.2324219-0.25,0.4335938-0.25,0.5996094  c0,0.1992188,0.0830078,0.4160156,0.25,0.6503906c0.2333984,0.1660156,0.4331055,0.25,0.5996094,0.25  c0.2001953,0,0.4169922-0.0839844,0.6503906-0.25C74.1166992,19.9902344,74.2001953,19.7734375,74.2001953,19.5742188z   M77.6000977,18.4746094c0.1665039,0,0.3666992-0.0839844,0.6000977-0.25c0.1665039-0.234375,0.25-0.4511719,0.25-0.6503906  c0-0.1660156-0.0834961-0.3671875-0.25-0.5996094c-0.2333984-0.2011719-0.4335938-0.3007813-0.6000977-0.3007813  c-0.2333984,0-0.4335938,0.0996094-0.6000977,0.3007813c-0.1665039,0.1660156-0.25,0.3671875-0.25,0.5996094  c0,0.2675781,0.0834961,0.4824219,0.25,0.6503906C77.1665039,18.390625,77.3666992,18.4746094,77.6000977,18.4746094z   M82.3500977,16.1738281c0.1665039-0.1660156,0.25-0.3828125,0.25-0.6503906c0-0.2324219-0.0834961-0.4316406-0.25-0.5996094  c-0.1665039-0.1660156-0.3666992-0.25-0.6000977-0.25c-0.2001953,0-0.3833008,0.0839844-0.5498047,0.25  c-0.1669922,0.1679688-0.25,0.3671875-0.25,0.5996094c0,0.2675781,0.0830078,0.484375,0.25,0.6503906  c0.1665039,0.1679688,0.3496094,0.25,0.5498047,0.25C81.9833984,16.4238281,82.1835938,16.3417969,82.3500977,16.1738281z'
                ></path>
              </svg>
            </g>
          </svg>
        </Link>

        <input type='checkbox' id='menu-toggle' />
        <label htmlFor='menu-toggle' className='label-toggle'></label>
        <ul>
          <Link href='/'>
            <li>
              <a>Home</a>
            </li>
          </Link>
          <Link href='/shows'>
            <li>
              <a>Shows</a>
            </li>
          </Link>
          <Link href='/list'>
            <li>
              <a>Song List</a>
            </li>
          </Link>
          <Link href='/clients'>
            <li>
              <a>Clients</a>
            </li>
          </Link>
          <Link href='/media'>
            <li>
              <a>Media</a>
            </li>
          </Link>
          <Link href='/contact'>
            <li>
              <a>Contact</a>
            </li>
          </Link>
          <div className='flexTwo'>
            <a href='https://twitter.com/goodenoughkband'>
              <svg
                enable-background='new 0 0 56.693 56.693'
                height='56.693px'
                id='Layer_1'
                version='1.1'
                viewBox='0 0 56.693 56.693'
                width='25px'
                height='25px'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z' />
              </svg>
            </a>
            <a href='https://www.facebook.com/groups/GoodEnoughLIVEKARAOKE/'>
              <svg
                enable-background='new 0 0 56.693 56.693'
                height='56.693px'
                id='Layer_1'
                version='1.1'
                viewBox='0 0 56.693 56.693'
                width='25px'
                height='25px'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z' />
              </svg>
            </a>
            <a href='https://www.instagram.com/goodenoughlivekaraoke/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='#F1f1f1'
                viewBox='0 0 50 50'
                width='25px'
                height='25px'
              >
                {' '}
                <path d='M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z' />
              </svg>
            </a>
          </div>
        </ul>
      </nav>
      <header className='wrapper'></header>
      <style jsx>{`

      svg {
        fill: #f1f1f1;
        transition: all 0.2s;
      }

      svg:hover {
        fill: #761f6b;
        cursor: pointer;
      }
      

      nav ul a:hover {
       color: #fee;
       text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #761f6b, 0 0 0.5em #761f6b,
          0 0 0.1em #761f6b, 0 10px 3px #000;
      }

    .navBar {
          transition: background-color 0.2s;
          background: none;
        }
        .navBar.scrolled {
          background: rgba(229,52,65, 0.98)!important;
          z-index: 300;
          height: 75px;
        }

      .singMan {
        transform: rotateY(180deg);
      }
    
      h1 {
        font-size: 3em;
        padding: 3em 0 1em 0;
      }

      .navBar {
        position: fixed;
        right: 0;
        left: 0;
        top: 0;
        padding: 5px 0;
        z-index: 300;
      }

      .logo {
        background-color: #f1f1f1;
        border-radius: 50px;
        display: inline-block;
        height: 45px;
        margin: 1em 0;
        width: 45px;
      }

      .wrapper {
        margin: 0 auto;
        max-width: 1400px;
        padding: 0 5%;
      }

      nav ul {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        width: 65%;
      }

      nav ul a {
        font-size: 20px;
        font-family: 'Concert One', cursive;
        color: #f1f1f1;
        text-transform: uppercase;
        text-decoration: none;
        transition: all 0.5s ease;
        cursor: pointer;
      }
          
      li {
        display: inline-block;
      }

      #menu-toggle {
        display: none;
      }

      .label-toggle {
        display: none;
      }

      .wrapper {
        align-items: center;
        display: flex;
        justify-content: space-between;
      }

        @media screen and (max-width: 1015px) {

          nav .wrapper {
            background:  rgb(229,52,65,0.98)!important;
          }

          nav ul {
            width: 100%;
            padding: 0 2%;
            flex-direction: column;
          }
         
          nav ul a {
            color: #f1f1f1; 
            font-size: 60px;
          }

          svg {
            width: 50px;
            height: 50px;
            margin:0 20px;
            top: 10px;
            position: relative;
          }

          ul {
            background:  rgba(229,52,65, 0.98)!important;
            display: block;
            height: 0;
            list-style-type: none;
            opacity: 0;
            text-align: center;
            width: 100%;
            visibility: hidden;
          }

          li {
            color: #f1f1f1;
            display: block;
            font-size: 1.5em;
            margin: 5px 0;
          }

          #menu-toggle:checked ~ ul {
            opacity: 1;
            height: 65vh;
            visibility: visible;
            padding-bottom 100%;
            margin: 0 auto;
            margin-top: -20px;
          }

          .label-toggle {
            background: linear-gradient(
              to bottom,
              #f1f1f1 0%,
              #f1f1f1 20%,
              transparent 20%,
              transparent 40%,
              #f1f1f1 40%,
              #f1f1f1 60%,
              transparent 60%,
              transparent 80%,
              #f1f1f1 80%,
              #f1f1f1 100%
            ); 
           
            cursor: pointer;
            display: block;
            float: right;
            height: 35px;
            margin-top: 1em;
            width: 35px;
          }

          .wrapper {
            display: block;
          }
        }
      }

      @media screen and (max-width: 1000px) {
        ul {
          transition: all 1s ease;
        }
      }
    `}</style>
    </>
  );
};

export default TestHeader;
