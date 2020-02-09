import Layout from '../components/MyLayout';
const contentful = require('contentful');
import TestHeader from '../components/TestHeader';
import * as Scroll from 'react-scroll';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import img from '../assets/songListHead.svg';

const ColorCircularProgress = withStyles({
  root: {
    color: '#f1f1f1',
  },
})(CircularProgress);

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      alphabet: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
      ],
    };
  }

  componentDidMount() {
    const client = contentful.createClient({
      space: 'sqmp3jmwaedr',
      accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU',
    });
    client.getEntries({ content_type: 'songList' }).then(response => {
      this.setState({
        songs: response.items,
      });
    });
  }
  render() {
    const list = this.state.songs.map((song, i) => {
      return this.state.alphabet.map((letter, i) => {
        if (song.fields[letter]) {
          return song.fields[letter].content[0].content.map((song, i) => {
            if (song.content) {
              return song.content.map((song, i) => {
                return song.content.map((song, i) => {
                  return (
                    <div>
                      <div key={i} className={letter} id={letter}>
                        <p>{song.value}</p>
                      </div>
                      <style jsx>{`
                        .alphabet {
                          margin-bottom: 50px;
                          margin-top: 200px;
                        }
                        p {
                          color: #f1f1f1;
                          font-family: 'Montserrat', sans-serif;
                        }
                      `}</style>
                    </div>
                  );
                });
              });
            }
          });
        }
      });
    });
    return (
      <Layout>
        <div className='listWrapper'>
          <h1 className='contactNeon'>SONG LIST</h1>
          <p className='alphabet'>
            {this.state.alphabet.map((letter, i) => {
              return (
                <h3>
                  <Link
                    className='test6'
                    to={letter}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-150}
                  >
                    <a href={`#${letter}`}>{letter}</a>
                  </Link>
                </h3>
              );
            })}
          </p>
          <div className='list'>
            {this.state.songs.length === 0 ? (
              <ColorCircularProgress size={100} thickness={5} />
            ) : (
              list
            )}
          </div>
        </div>
        <style jsx>{`
          h1 {
            white-space: nowrap;
            margin: 0 -5px 0 0;
            letter-spacing: 5px;
            line-height: 1;
            font-size: 7vw;
            font-family: 'Concert One', sans-serif;
            font-weight: 100;
            text-align: center;
            color: #fee;
            text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #761f6b,
              0 0 0.5em #761f6b, 0 0 0.1em #761f6b, 0 10px 3px #000;
            margin-bottom: 50px;
            position: relative;
            z-index: 20;
          }
          .listWrapper {
            margin-top: 18vh;
          }
          .title {
            width: 80%;
            margin: 0 auto;
          }

          .letter {
            color: #f1f1f1;
          }

          .list {
            font-family: 'Montserrat', sans-serif;
            width: 600px;
            margin: 0 auto;
            text-align: center;
            font-size: 28px;
            min-height: 55vh;
            margin-bottom: 50px;
          }

          .alphabet {
            margin: 50px 0;
            position: sticky;
            top: 50px;
            background: rgb(25, 3, 22);
          }
          p {
            color: #f1f1f1;
            font-size: 28px;
            display: flex;
            justify-content: center;
          }

          a {
            text-decoration: none;
            text-transform: uppercase;
            margin: 10px;
            font-family: 'Montserrat', sans-serif;
            color: #f1f1f1;
            font-size: 28px;
          }

          a:hover {
            text-decoration: underline;
          }

          @media screen and (max-width: 1015px) {
            .alphabet {
              top: 90px;
              flex-wrap: wrap;
              display: flex;
              font-size: 20px;
              width: 75%;
              margin: 50px auto;
              padding: 20px 0;
            }
            p,
            .list {
              font-size: 20px;
            }
            h3 {
              margin-top: 10px;
              margin-bottom: 10px;
            }
          }

          @media screen and (max-width: 1015px) {
            .title {
              width: 100%;
            }
          }

          @media screen and (max-width: 700px) {
            p,
            .list {
              font-size: 16px;
              width: 70%;
            }

            p .alphabet,
            a {
              font-size: 16px;
            }
          }
        `}</style>
      </Layout>
    );
  }
}
