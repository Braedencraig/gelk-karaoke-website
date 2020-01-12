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
                          font-family: 'Roboto', sans-serif;
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
            font-family: 'Roboto', sans-serif;
            font-weight: 100;
            text-align: center;
            color: #f1f1f1;
          }
          .listWrapper {
            margin-top: 25vh;
          }

          .letter {
            color: #f1f1f1;
          }

          .list {
            font-family: 'Roboto', sans-serif;
            width: 600px;
            margin: 0 auto;
            text-align: center;
            font-size: 26px;
            min-height: 55vh;
          }

          .alphabet {
            margin: 50px 0;
            position: sticky;
            top: 60px;
            background: rgba(44, 113, 246, 0.98);
          }
          p {
            color: #f1f1f1;
            font-size: 20px;
            display: flex;
            justify-content: center;
          }

          a {
            text-decoration: none;
            text-transform: uppercase;
            margin: 10px;
            font-family: 'Roboto', sans-serif;
            color: #f1f1f1;
          }

          a:hover {
            text-decoration: underline;
          }
        `}</style>
      </Layout>
    );
  }
}
