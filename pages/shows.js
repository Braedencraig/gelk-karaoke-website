import Layout from '../components/MyLayout';
const contentful = require('contentful');
import TestHeader from '../components/TestHeader';
import Link from 'next/link';

export default class Shows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
    };
  }

  componentDidMount() {
    const client = contentful.createClient({
      space: 'sqmp3jmwaedr',
      accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU',
    });
    client.getEntries({ content_type: 'upcomingShows' }).then(response => {
      this.setState({
        shows: response.items,
      });
    });
  }
  render() {
    const shows = this.state.shows.map((shows, i) => {
      if (shows.fields.showOne) {
        const actualShows = Object.values(shows.fields);
        return actualShows.map((show, i) => {
          const link = show.content[0].content[1].data.uri;
          return (
            <h3>
              <a href={link}>{show.content[1].content[0].value}</a>
            </h3>
          );
        });
      }
    });

    return (
      <Layout>
        <div className='listWrapper'>
          <h1 className='contactNeon'>UPCOMING SHOWS</h1>
          <div className='shows'>{shows}</div>
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
            color: #fee;
            text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444,
              0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
          }
          .listWrapper {
            margin-top: 25vh;
          }

          .shows {
            font-family: 'Roboto', sans-serif;
            width: 600px;
            margin: 0 auto;
            text-align: center;
            font-size: 26px;
            color: #f1f1f1;
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
