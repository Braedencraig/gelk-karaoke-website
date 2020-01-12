import React from 'react';
import ReactDOM from 'react-dom';
const contentful = require('contentful');
import Slider from 'react-slick';
import '../index.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const ColorCircularProgress = withStyles({
  root: {
    color: '#f1f1f1',
  },
})(CircularProgress);

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
        <div
          className={
            this.state.clients.length === 0
              ? 'flexContainerLoading'
              : 'flexContainer'
          }
        >
          {this.state.clients.length === 0 ? (
            <ColorCircularProgress size={100} thickness={5} />
          ) : this.state.clients[0] ? (
            this.state.clients[0].fields.clientImages.map((images, i) => (
              <div className='clientImages' key={i}>
                <img src={images.fields.file.url} />
              </div>
            ))
          ) : (
            ''
          )}
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
            min-height: 55vh;
          }

          .flexContainerLoading {
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: -100px;
            margin-top: 100px;
            background: none;
            padding: 50px 0;
            min-height: 55vh;
          }
        `}</style>
      </div>
    );
  }
}

export default ClientImages;
