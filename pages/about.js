import Layout from '../components/MyLayout';
const contentful = require('contentful');
import ClientImages from '../components/ClientImages';
import TestHeader from '../components/TestHeader';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: [],
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
        testimonials: response.items,
      });
    });
  }

  render() {
    const testimonials = this.state.testimonials.map((testimonials, i) => {
      if (this.state.testimonials[0]) {
        return testimonials.fields.largeTestimonials.content[0].content.map(
          (testimonials, i) => {
            // console.log(testimonials.content[0].content);
            return (
              <>
                <div>
                  <p>{testimonials.content[0].content[0].value}</p>
                  <p>{testimonials.content[0].content[1].value}</p>
                </div>
                <style jsx>{`
                  p {
                    font-family: Oswald, cursive;
                    font-size: 24px;
                    color: white;
                    width: 80%;
                    margin: 25px auto;
                  }
                `}</style>
              </>
            );
          },
        );
      }
    });

    return (
      <Layout>
        <div className='wrapper'>
          <h1 className='contactNeon'>TESTIMONIALS</h1>
          {testimonials}
          <h2 className='clientTitle'>CLIENTS</h2>
          <ClientImages />
          <style jsx>{`
            @import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');
            h1,
            h2 {
              white-space: nowrap;
              margin: 0 -5px 0 0;
              letter-spacing: 5px;
              line-height: 1;
              font-size: 7vw;
              font-family: Quicksand;
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
          `}</style>
        </div>
      </Layout>
    );
  }
}
