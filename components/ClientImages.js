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
            width: 150px;
            height: 70px;
            border: none;
            border-radius: 5px;
            padding: 10px;
          }

          .clientImages {
            margin: 10px;
          }

          .flexContainer {
            border: 5px solid #f1f1f1;
            border-radius: 25px;
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: -100px;
            margin-top: 100px;
            background: white;
            padding: 50px 0;
          }
        `}</style>
      </div>
    );
  }
}

export default ClientImages;
