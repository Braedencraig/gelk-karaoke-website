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
          </div>
        </a>
        <style jsx>{`

          p {
            color: #f1f1f1;
            margin: 0 auto;
            font-family: 'Montserrat', sans-serif;
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
            background: rgb(229,52,65);
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
