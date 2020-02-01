import React from 'react';
import { isAbsolute } from 'path';
import * as Scroll from 'react-scroll';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

const footerStyle = {
  background: 'none',
};

class Footer extends React.Component {
  constructor() {
    super();
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <footer style={footerStyle}>
        <a onClick={this.scrollToTop}>
          <div className='flexContainer'>
            <div className='flexOne'>
              <p>Copyright 2020 | All Rights Reserved</p>
            </div>
            {/* <div className='flexTwo'>
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
                  fill='#000000'
                  viewBox='0 0 50 50'
                  width='25px'
                  height='25px'
                >
                  {' '}
                  <path d='M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z' />
                </svg>
              </a>
            </div> */}
          </div>
        </a>
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');

          p {
            color: #f1f1f1;
            margin: 0 auto;
            font-family: Roboto, sans-serif;
            font-size: 16px;
          }

          svg {
            fill: #f1f1f1;
            transition: 0.4s all;
          }

          svg:hover {
            opacity: 0.6;
          }

          .flexContainer {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            padding: 1%;
          }

          .flexOne {
            margin: 0 auto;
            padding: 2% 0
            display: flex;
            justify-content: center;
            margin-top: 3%;
          }

          .flexTwo {
            margin-bottom: 8px;
          }

          .flexTwo a {
            margin: 0px 10px;
          }

          @media screen and (max-width: 550px) {
            .flexContainer {
              flex-direction: column-reverse;
            }

            .flexOne,
            .flexTwo {
              margin: 0 auto;
            }

            .flexTwo {
              margin-bottom: 15px;
            }
          }
        `}</style>
      </footer>
    );
  }
}

export default Footer;
