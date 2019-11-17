import Layout from '../components/MyLayout';
const contentful = require('contentful');
import TestHeader from '../components/TestHeader';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
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
    const ass = this.state.songs.map((song, i) => {
      return song.fields.a.content[0].content.map((song, i) => {
        return song.content.map((song, i) => {
          return song.content.map((song, i) => {
            console.log(song.value);
            return (
              <div key={i}>
                <p>{song.value}</p>
                <style jsx>{`
                  .alphabet {
                    margin-bottom: 50px;
                    margin-top: 200px;
                  }
                  p {
                    color: white;
                  }
                `}</style>
              </div>
            );
          });
        });
      });
    });
    return (
      <Layout>
        {ass}
        <p className='alphabet'>
          A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
        </p>
        <p>songs here and link them with id's contentful is working</p>
        <style jsx>{`
          .alphabet {
            margin-bottom: 50px;
            margin-top: 200px;
          }
          p {
            color: white;
          }
        `}</style>
      </Layout>
    );
  }
}
