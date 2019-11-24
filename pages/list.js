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
      // This is the space ID. A space is like a project folder in Contentful terms
      space: 'sqmp3jmwaedr',
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU',
    });
    // content type relates to the content type name in contentful
    // figured it outttt
    // 'post' instead of songList, post is linked to author so when post response you get author object as well
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
                          color: white;
                          font-family: Oswald;
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
                  >
                    <a href={`#${letter}`}>{letter}</a>
                  </Link>
                </h3>
              );
            })}
          </p>
          <div className='list'>{list}</div>
        </div>
        <style jsx>{`
          h1 {
            white-space: nowrap;
            margin: 0 -5px 0 0;
            letter-spacing: 5px;
            line-height: 1;
            font-size: 7vw;
            font-family: vibur;
            font-weight: 100;
            text-align: center;
            color: #fee;
            text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444,
              0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
          }
          .listWrapper {
            margin-top: 25vh;
          }

          .letter {
            color: white;
          }

          .list {
            font-family: vibur;
            width: 600px;
            margin: 0 auto;
            text-align: center;
            font-size: 26px;
          }

          .alphabet {
            margin: 50px 0;
            position: sticky;
            top: 100px;
          }
          p {
            color: white;
            font-size: 20px;
            display: flex;
            justify-content: center;
          }

          a {
            text-decoration: none;
            text-transform: uppercase;
            margin: 10px;
            color: #fee;
            text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444,
              0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
          }

          a:hover {
            text-decoration: underline;
          }
        `}</style>
      </Layout>
    );
  }
}
