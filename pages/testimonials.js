import Layout from '../components/MyLayout';
const contentful = require('contentful');
import ClientImages from '../components/ClientImages';
import TestHeader from '../components/TestHeader';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const ColorCircularProgress = withStyles({
  root: {
    color: '#f1f1f1',
  },
})(CircularProgress);

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: [],
    };
  }

  componentDidMount() {
    const client = contentful.createClient({
      space: 'sqmp3jmwaedr',
      accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU',
    });
    client.getEntries({ content_type: 'testimonials' }).then(response => {
      this.setState({
        testimonials: response.items,
      });
    });
  }

  render() {
    const testimonials = this.state.testimonials.map((testimonials, i) => {
      if (this.state.testimonials[0].fields) {
        const testimonial = Object.values(testimonials.fields);
        return testimonial.map((testimonials, i) => {
          return (
            <>
              <div>
                <p>{testimonials}</p>
              </div>
              <style jsx>{`
                p {
                  font-family: 'Roboto', sans-serif;
                  font-size: 24px;
                  color: #f1f1f1;
                  width: 80%;
                  margin: 25px auto;
                  max-width: 1400px;
                  line-height: 36px;
                }
              `}</style>
            </>
          );
        });
      }
    });

    return (
      <Layout>
        <div className='wrapper'>
          <h2 className='clientTitle'>CLIENTS</h2>
          {this.state.testimonials.length === 0 ? (
            <ColorCircularProgress size={100} thickness={5} />
          ) : (
            <ClientImages />
          )}
          <h2 className='clientTitleTest'>TESTIMONIALS</h2>
          {testimonials}
          <style jsx>{`
            @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');
            h1,
            h2 {
              white-space: nowrap;
              margin: 0 -5px 0 0;
              letter-spacing: 5px;
              line-height: 1;
              font-size: 7vw;
              font-family: 'Roboto', sans-serif;
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
              min-height: 55vh;
            }

            .clientTitle {
              margin-bottom: 50px;
            }
            .clientTitleTest {
              margin-top: 150px;
              margin-bottom: 80px;
            }
          `}</style>
        </div>
      </Layout>
    );
  }
}
