import Layout from '../components/MyLayout';
const contentful = require('contentful');
import ClientImages from '../components/ClientImages';
import TestHeader from '../components/TestHeader';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import video from '../assets/videosHead.svg';
import photos from '../assets/photosHead.svg';
import Gallery from '../components/Gallery';
import Videos from '../components/Videos';

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
                @media screen and (max-width: 800px) {
                  p {
                    font-size: 20px;
                  }
                  .title {
                    width: 90%;
                  }
                }
                @media screen and (max-width: 650px) {
                  .pictures {
                    width: 300px;
                  }
                  .bottom {
                    margin-top: -15px;
                  }
                }

                @media screen and (max-width: 600px) {
                  p {
                    font-size: 16px;
                  }
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
                }

                .pictures {
                  width: 30%;
                  margin: 25px auto;
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
                  margin-top: -20px;
                  max-width: 300px;
                  text-align: center;
                }
                @media screen and (max-width: 1015px) {
                  .pictures {
                    width: 40%;
                    margin: 0 auto;
                  }
                }

                @media screen and (max-width: 800px) {
                  p {
                    font-size: 20px;
                  }
                  .title {
                    width: 90%;
                  }
                }

                @media screen and (max-width: 650px) {
                  .pictures {
                    width: 300px;
                  }
                  .bottom {
                    margin-top: -15px;
                  }
                  .flexIt {
                    width: 57%;
                  }
                }

                @media screen and (max-width: 600px) {
                  p {
                    font-size: 16px;
                  }
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
          <div className='title'>
            <h3>PHOTOS</h3>
          </div>
          <Gallery />
          <div className='title videos'>
            <h3>VIDEOS</h3>
          </div>
          <Videos />
          <style jsx>{`
            h3 {
              font-family: 'Concert One', sans-serif;
              white-space: nowrap;
              position: relative;
              margin: 0 -5px 0 0;
              letter-spacing: 5px;
              line-height: 1;
              font-size: 10vw;
              font-weight: 100;
              text-align: center;
              color: #fee;
              text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #761f6b,
                0 0 0.5em #761f6b, 0 0 0.1em #761f6b, 0 10px 3px #000;
            }
            .flexIt {
              border: 10px solid #f1f1f1;
              border-radius: 25px;
              display: flex;
              width: 70%;
              flex-wrap: wrap;
              justify-content: center;
              margin: 0 auto;
              padding: 50px;
              min-height: 55vh;
              max-width: 1400px;
              margin-bottom: 50px;
            }

            .title {
              width: 80%;
              margin: 0 auto;
              margin-bottom: 40px;
              position: relative;
              z-index: 20;
            }

            .videos {
              margin-top: 50px;
            }

            .video {
              margin-top: 100px;
            }

            .wrapper {
              margin-top: 18vh;
            }

            .clientTitle {
              margin-bottom: 50px;
            }
            .clientTitleTest {
              margin-top: 150px;
              margin-bottom: 80px;
            }

            @media screen and (max-width: 800px) {
              .title {
                width: 90%;
              }
              .flexIt {
                width: 57%;
              }
            }
          `}</style>
        </div>
      </Layout>
    );
  }
}
