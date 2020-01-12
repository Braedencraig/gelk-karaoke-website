import Layout from '../components/MyLayout';
const contentful = require('contentful');
import ClientImages from '../components/ClientImages';
import TestHeader from '../components/TestHeader';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const ColorCircularProgress = withStyles({
  root: {
    color: '#f1f1f1',
  },
})(CircularProgress);

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      media: [],
    };
  }

  componentDidMount() {
    const client = contentful.createClient({
      space: 'sqmp3jmwaedr',
      accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU',
    });

    client.getEntries({ content_type: 'picsAndVideos' }).then(response => {
      this.setState({
        media: response.items,
      });
    });
  }

  render() {
    const videos = this.state.media.map((videos, i) => {
      if (videos.fields.videos) {
        return videos.fields.videos.map((videos, i) => {
          return (
            <>
              <div className='pictures'>
                <div className='top'>
                  <video width='400' height='320' controls>
                    <source src={videos.fields.file.url} type='video/mp4' />
                    ]Your browser does not support the video tag.
                  </video>
                </div>
                <div className='bottom'>
                  <p>{videos.fields.title}</p>
                </div>
              </div>

              <style jsx>{`
                p {
                  font-family: 'Roboto', sans-serif;
                  font-size: 24px;
                  font-weight: 700;
                  color: #f1f1f1;
                  text-align: center;
                }

                .pictures {
                  width: 40%;
                  margin: 25px auto;
                  position: relative;
                }

                video {
                  width: 100%;
                  height: auto;
                }

                .bottom {
                  margin-top: -15px;
                }
              `}</style>
            </>
          );
        });
      }
    });

    const pictures = this.state.media.map((pictures, i) => {
      if (pictures.fields.pictures) {
        return pictures.fields.pictures.map((pictures, i) => {
          return (
            <>
              <div className='pictures'>
                <div className='top'>
                  <img
                    src={pictures.fields.file.url}
                    alt={pictures.fields.title}
                  />
                </div>
                <div className='bottom'>
                  <p>{pictures.fields.title}</p>
                </div>
              </div>

              <style jsx>{`
                p {
                  font-family: 'Roboto', sans-serif;
                  font-size: 24px;
                  font-weight: 700;
                  color: #f1f1f1;
                  text-align: center;
                }

                .pictures {
                  width: 30%;
                  margin: 25px auto;
                  position: relative;
                }

                .pictures .top {
                  max-width: 300px;
                  max-height: 400px;
                }

                img {
                  width: 100%;
                  height: auto;
                }

                .bottom {
                  margin-top: -15px;
                }
              `}</style>
            </>
          );
        });
      }
    });

    return (
      <Layout>
        <div className='wrapper'>
          <h2 className='clientTitle'>PICTURES</h2>
          <div className='flexIt'>
            {this.state.media.length === 0 ? (
              <ColorCircularProgress size={100} thickness={5} />
            ) : (
              pictures
            )}
          </div>
          <h2 className='clientTitleTest'>VIDEOS</h2>
          <div className='flexIt'>
            {' '}
            {this.state.media.length === 0 ? (
              <ColorCircularProgress size={100} thickness={5} />
            ) : (
              videos
            )}
          </div>
          <style jsx>{`
            @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');
            .flexIt {
              border: 5px solid #f1f1f1;
              border-radius: 25px;
              display: flex;
              width: 80%;
              flex-wrap: wrap;
              justify-content: center;
              margin: 0 auto;
              padding: 50px;
              min-height: 55vh;
              max-width: 1400px;
            }
            h1,
            h2 {
              white-space: nowrap;
              margin: 0 -5px 0 0;
              letter-spacing: 5px;
              line-height: 1;
              font-size: 7vw;
              font-family: 'Roboto', sans-serif;
              font-weight: 100;
              text-align: center;
              color: #fee;
              text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em blue, 0 0 0.5em blue,
                0 0 0.1em blue, 0 10px 3px #000;
            }

            h1 {
              margin-bottom: 50px;
            }

            .wrapper {
              margin-top: 20vh;
            }

            .clientTitle {
              margin-bottom: 50px;
            }
            .clientTitleTest {
              margin-top: 150px;
              margin-bottom: 80px;
            }
          `}</style>
        </div>
      </Layout>
    );
  }
}
