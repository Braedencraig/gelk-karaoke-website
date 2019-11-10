import Layout from '../components/MyLayout';
const contentful = require('contentful');

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: 'sqmp3jmwaedr',
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU',
    });
    client.getEntries({ content_type: 'post' }).then(response => {
      this.setState({
        articles: response.items,
      });
    });
  }
  render() {
    const ass = this.state.articles.map((article, i) => {
      console.log(article);
      return (
        <div key={i}>
          <img src={article.fields.featuredImage.fields.file.url} alt='' />
          {article.fields.title}
        </div>
      );
    });
    return (
      <Layout>
        {ass}
        <p>This is the about page</p>
      </Layout>
    );
  }
}
