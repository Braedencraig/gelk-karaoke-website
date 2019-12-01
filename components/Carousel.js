import React from 'react';
import ReactDOM from 'react-dom';
const contentful = require('contentful');

import Slider from 'react-slick';
import '../index.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: [],
    };
  }
  componentDidMount() {
    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: 'sqmp3jmwaedr',
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU',
    });
    // content type relates to the content type name in contentful
    // figured it outttt
    // 'post' instead of songList, post is linked to author so when post response you get author object as well
    client.getEntries({ content_type: 'about' }).then(response => {
      this.setState({
        about: response.items,
        photoOne: response.items[0].fields.photos[0].fields.file.url,
        photoTwo: response.items[0].fields.photos[1].fields.file.url,
        photoThree: response.items[0].fields.photos[2].fields.file.url,
        photoFour: response.items[0].fields.photos[3].fields.file.url,
      });
    });
  }
  render() {
    var settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div className='container'>
        <Slider {...settings}>
          <div>
            <img src={this.state.photoOne} />
          </div>
          <div>
            <img src={this.state.photoTwo} />
          </div>
          <div>
            <img src={this.state.photoFour} />
          </div>
          <div>
            <img src={this.state.photoTwo} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
