import Layout from '../components/MyLayout';
const contentful = require('contentful');
import TestHeader from '../components/TestHeader';
import Link from 'next/link';

export default class Shows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      links: [],
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
    client.getEntries({ content_type: 'shows' }).then(response => {
      this.setState({
        shows: response.items,
        links: response.items,
      });
    });
  }
  render() {
    const shows = this.state.links.map((links, i) => {
      return links.fields.link.content.map((links, i) => {
        return links.content.map((links, i) => {
          return this.state.shows.map((shows, i) => {
            return shows.fields.shows.content.map((shows, i) => {
              return (
                <>
                  <Link href={{ pathname: `${links.value}` }}>
                    <a>{shows.content[0].value}</a>
                  </Link>
                </>
              );
            });
          });
        });
      });
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

          .shows {
            font-family: vibur;
            width: 600px;
            margin: 0 auto;
            text-align: center;
            font-size: 26px;
            color: white;
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
