import React from 'react';
import ReactDOM from 'react-dom';
const contentful = require('contentful');

import Slider from 'react-slick';
import '../index.css';

class ClientImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
    };
  }
  componentDidMount() {
    const client = contentful.createClient({
      space: 'sqmp3jmwaedr',
      accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU',
    });

    client.getEntries({ content_type: 'clients' }).then(response => {
      this.setState({
        clients: response.items,
      });
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='flexContainer'>
          {this.state.clients[0]
            ? this.state.clients[0].fields.clientImages.map((images, i) => (
                <div className='clientImages' key={i}>
                  <img src={images.fields.file.url} />
                </div>
              ))
            : ''}
        </div>

        <style jsx>{`
          .clientImages img {
            width: 200px;
            height: 150px;
            border: none;
            border-radius: 5px;
          }

          .clientImages {
            margin: 10px;
          }

          .flexContainer {
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: -100px;
            margin-top: 100px;
          }
        `}</style>
      </div>
    );
  }
}

export default ClientImages;
