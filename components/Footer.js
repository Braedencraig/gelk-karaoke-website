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
  color: 'white',
  background: 'black',
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
      <div style={footerStyle}>
        <a onClick={this.scrollToTop}>
          <p>Scroll back to top</p>
        </a>
        <style jsx>{`
          p {
            color: white;
            margin: 0 auto;
            width: 200px;
          }
        `}</style>
      </div>
    );
  }
}

export default Footer;
