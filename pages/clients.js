import Layout from '../components/MyLayout';
const contentful = require('contentful');
import ClientImages from '../components/ClientImages';
import TestHeader from '../components/TestHeader';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import clients from '../assets/clientsHead.svg';
import testimonial from '../assets/testimonialsHead.svg';

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
                  margin: 40px auto;
                  max-width: 1400px;
                  line-height: 38px;
                }

                @media screen and (max-width: 900px) {
                  p {
                    font-size: 20px;
                  }
                }

                @media screen and (max-width: 600px) {
                  p {
                    font-size: 16px;
                  }

                  .title {
                    width: 90%;
                  }
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
          <div className='title client'>
            <img src={clients} alt='Clients' />
          </div>
          {this.state.testimonials.length === 0 ? (
            <div className='loadPrev'>
              <ColorCircularProgress size={100} thickness={5} />
            </div>
          ) : (
            <div className='loadPrev'>
              <ClientImages />
            </div>
          )}
          <div className='title testimonial'>
            <img src={testimonial} alt='Testimonials' />
          </div>{' '}
          <div className='testimonialBottom'>{testimonials}</div>
          <style jsx>{`


            @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');

            .testimonialBottom {
              margin-bottom: 50px;
            }

            .title {
              width 80%;
              margin: 0 auto;
            }

            .client, .testimonial {
              margin-bottom: 50px;
            }

            .loadPrev {
              min-height: 55vh;
              margin-bottom: 100px;
            }

            .wrapper {
              margin-top: 18vh;
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
