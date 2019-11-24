import Layout from '../components/MyLayout';
const contentful = require('contentful');
import TestHeader from '../components/TestHeader';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: [],
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
    client.getEntries({ content_type: 'about' }).then(response => {
      this.setState({
        about: response.items,
      });
      console.log(response.items);
    });
  }
  render() {
    const about = this.state.about.map((about, i) => {
      return (
        <>
          <div className='image'>
            <img
              src={about.fields.founder.fields.file.url}
              alt='An image of the founder of Good Enough Live Karaoke, Mr. Tim McCready'
            />
          </div>
          <div key={i}>
            <p>{about.fields.aboutText.content[0].content[0].value}</p>
            <p>{about.fields.aboutText.content[1].content[0].value}</p>
            <p>{about.fields.aboutText.content[2].content[0].value}</p>
            <h3>{about.fields.aboutText.content[3].content[0].value}</h3>
            <p>{about.fields.aboutText.content[4].content[0].value}</p>
            <p>{about.fields.aboutText.content[5].content[0].value}</p>
            <p>{about.fields.aboutText.content[6].content[0].value}</p>
          </div>
          <style jsx>{`
            p,
            h3 {
              color: white;
              font-family: Oswald;
              font-size: 20px;
            }

            p {
              width: 80%;
              margin: 3% auto;
            }

            h3 {
              width: 80%;
              margin: 0 auto;
              text-align: center;
            }
            img {
              width: 100%;
              height: auto;
            }

            .image {
              width: 50%;
              margin: 5% auto;
              -moz-box-shadow: inset 0 0 10px #000000;
              -webkit-box-shadow: inset 0 0 10px #000000;
              box-shadow: inset 0 0 10px #000000;
              border: 15px solid #000;
              border-radius: 10px;
            }
          `}</style>
        </>
      );
    });

    return (
      <Layout>
        <div className='wrapper'>
          <h1 className='contactNeon'>ABOUT</h1>
          {about}
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

            .wrapper {
              margin-top: 20vh;
            }
          `}</style>
        </div>
      </Layout>
    );
  }
}
