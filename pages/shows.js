import Layout from '../components/MyLayout';
const contentful = require('contentful');
import TestHeader from '../components/TestHeader';
import Link from 'next/link';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const ColorCircularProgress = withStyles({
  root: {
    color: '#f1f1f1',
  },
})(CircularProgress);

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
          if (show.content) {
            const link = show.content[0].content[1].data.uri;

            return (
              <>
                <p>
                  <a target='_blank' href={link}>
                    {show.content[1].content[0].value}
                  </a>
                </p>
                <style jsx>{`
                  a {
                    text-decoration: none;
                    color: #f1f1f1;
                    transition: all 0.4s;
                  }
                  p {
                    text-align: left;
                  }

                  a:hover {
                    opacity: 0.65;
                  }
                `}</style>
              </>
            );
          }
        });
      }
    });

    return (
      <Layout>
        <div className='listWrapper'>
          <h1 className='contactNeon'>UPCOMING SHOWS</h1>
          <h4>click a show for more info / tickets</h4>
          <div className='shows'>
            {this.state.shows.length === 0 ? (
              <ColorCircularProgress size={100} thickness={5} />
            ) : (
              shows
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

          h4 {
            font-family: 'Roboto', sans-serif;
            font-weight: 100;
            text-align: center;
            font-size: 20px;
            color: #f1f1f1;
          }

          .contactNeon {
            margin-bottom: 70px;
          }

          .listWrapper {
            margin-top: 25vh;
          }

          .shows {
            font-family: 'Roboto', sans-serif;
            margin: 0 auto;
            text-align: center;
            font-size: 26px;
            color: #f1f1f1;
            min-height: 55vh;
            width: 65%;
          }

          p {
            color: #f1f1f1;
            font-size: 20px;
            display: flex;
            justify-content: center;
          }

          a:hover {
            text-decoration: underline;
          }
        `}</style>
      </Layout>
    );
  }
}
