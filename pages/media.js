import Layout from '../components/MyLayout';
const contentful = require('contentful');
import ClientImages from '../components/ClientImages';
import TestHeader from '../components/TestHeader';

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
                  font-size: 20px;
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
                  position: relative;
                  z-index: 10;
                  transition: all 0.4s;
                }

                .pictures .top:hover {
                  opacity: 0.65;
                  z-index: 3;
                }

                .pictures .bottom {
                  position: absolute;
                  z-index: 5;
                  top: 50%;
                  right: 50%;
                  transform: translate(50%, -50%);
                }

                img {
                  width: 100%;
                  height: auto;
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
          <div className='flexIt'>{pictures}</div>
          <h2 className='clientTitleTest'>VIDEOS</h2>
          {/* {testimonials} */}
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
