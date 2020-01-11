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
      space: 'sqmp3jmwaedr',
      accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU',
    });
    client.getEntries({ content_type: 'about' }).then(response => {
      this.setState({
        about: response.items,
        photoOne: response.items[0].fields.photos[0].fields.file.url,
        photoTwo: response.items[0].fields.photos[1].fields.file.url,
        photoThree: response.items[0].fields.photos[2].fields.file.url,
        photoFour: response.items[0].fields.photos[3].fields.file.url,
        testimonialOne: {
          paragraphOne:
            response.items[0].fields.testimonialOne.content[0].content[0].value,
          paragraphTwo:
            response.items[0].fields.testimonialOne.content[1].content[0].value,
          name:
            response.items[0].fields.testimonialOne.content[2].content[0].value,
        },
        testimonialTwo: {
          paragraphOne:
            response.items[0].fields.testimonialTwo.content[0].content[0].value,
          paragraphTwo:
            response.items[0].fields.testimonialTwo.content[1].content[0].value,
          name:
            response.items[0].fields.testimonialTwo.content[2].content[0].value,
        },
        testimonialThree: {
          paragraphOne:
            response.items[0].fields.testimonialThree.content[0].content[0]
              .value,
          paragraphTwo:
            response.items[0].fields.testimonialThree.content[1].content[0]
              .value,
          name:
            response.items[0].fields.testimonialThree.content[2].content[0]
              .value,
        },
        testimonialFour: {
          paragraphOne:
            response.items[0].fields.testimonialFour.content[0].content[0]
              .value,
          paragraphTwo:
            response.items[0].fields.testimonialFour.content[1].content[0]
              .value,
          name:
            response.items[0].fields.testimonialFour.content[2].content[0]
              .value,
        },
      });
    });
  }
  render() {
    var settings = {
      dots: true,
      autoplay: false,
      autoplaySpeed: 5000,
    };
    return (
      <div className='container'>
        <Slider {...settings}>
          <div>
            <img src={this.state.photoOne} />
          </div>
          <div className='text'>
            <p>
              {this.state.testimonialOne
                ? this.state.testimonialOne.paragraphOne
                : ''}
            </p>
            <p>
              {this.state.testimonialOne
                ? this.state.testimonialOne.paragraphTwo
                : ''}
            </p>
            <p>
              <span>
                {this.state.testimonialOne
                  ? this.state.testimonialOne.name
                  : ''}
              </span>
            </p>
          </div>
          <div>
            <img src={this.state.photoTwo} />
          </div>
          <div className='text'>
            <p>
              {this.state.testimonialTwo
                ? this.state.testimonialTwo.paragraphOne
                : ''}
            </p>
            <p>
              {this.state.testimonialTwo
                ? this.state.testimonialTwo.paragraphTwo
                : ''}
            </p>
            <p>
              <span>
                {this.state.testimonialTwo
                  ? this.state.testimonialTwo.name
                  : ''}
              </span>
            </p>
          </div>
          <div>
            <img src={this.state.photoFour} />
          </div>
          <div className='text'>
            <p>
              {this.state.testimonialThree
                ? this.state.testimonialThree.paragraphOne
                : ''}
            </p>
            <p>
              {this.state.testimonialThree
                ? this.state.testimonialThree.paragraphTwo
                : ''}
            </p>
            <p>
              <span>
                {this.state.testimonialThree
                  ? this.state.testimonialThree.name
                  : ''}
              </span>
            </p>
          </div>
          <div>
            <img src={this.state.photoThree} />
          </div>
          <div className='text'>
            <p>
              {this.state.testimonialFour
                ? this.state.testimonialFour.paragraphOne
                : ''}
            </p>
            <p>
              {this.state.testimonialFour
                ? this.state.testimonialFour.paragraphTwo
                : ''}
            </p>
            <p>
              <span>
                {this.state.testimonialFour
                  ? this.state.testimonialFour.name
                  : ''}
              </span>
            </p>
          </div>
        </Slider>
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');

          p {
            font-family: 'Roboto', sans-serif;
            font-size: 30px;
            color: #f1f1f1;
            width: 80%;
            margin: 0 auto;
            margin-top: 50px;
            text-align: center;
          }

          .text {
            padding: 50px 0;
          }
        `}</style>
      </div>
    );
  }
}

export default Carousel;
