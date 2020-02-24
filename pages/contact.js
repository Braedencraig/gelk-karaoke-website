import Layout from '../components/MyLayout';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <svg
          height='100px'
          width='100px'
          fill='#f1f1f1'
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          x='0px'
          y='0px'
          viewBox='0 0 64 64'
        >
          <g>
            <path d='M26,21c-1.654,0-3,1.346-3,3h2c0-0.551,0.448-1,1-1s1,0.449,1,1h2C29,22.346,27.654,21,26,21z'></path>
            <path d='M38,21c-1.654,0-3,1.346-3,3h2c0-0.551,0.448-1,1-1s1,0.449,1,1h2C41,22.346,39.654,21,38,21z'></path>
            <path d='M51.405,42.223c-0.754-0.431-1.567-0.764-2.405-1.008V18c0-9.374-7.626-17-17-17S15,8.626,15,18v23.287   c-0.04,0.013-0.081,0.02-0.12,0.033C11.363,42.491,9,45.77,9,49.477v0.29c0,0.925,0.148,1.839,0.441,2.719L10,54.162V63h18h7h12   v-7.933c0.39,0.304,0.83,0.549,1.306,0.734L52.42,63h10.198l-5.626-11.252C56.951,47.818,54.823,44.175,51.405,42.223z    M56.22,54.675l-5.023,2.153l-0.772-1.351l5.103-2.187L56.22,54.675z M46.901,40.805L39,40.087V39h-0.104   c3.144-1.978,5.378-5.26,5.947-9.085c0.803-0.138,1.533-0.468,2.157-0.94v11.845C46.967,40.816,46.934,40.808,46.901,40.805z    M34.952,43.276c-0.108-0.895-0.415-1.728-0.874-2.458c1.017-0.164,1.998-0.434,2.922-0.821v0.859   C36.885,41.206,36.366,42.461,34.952,43.276z M29,56h-1v-6.09c0.326,0.055,0.659,0.09,1,0.09s0.674-0.035,1-0.09v6.181   C29.674,56.035,29.341,56,29,56z M29,48c-2.206,0-4-1.794-4-4c0-1.729,1.108-3.191,2.647-3.748   c0.008,0.003,0.016,0.007,0.024,0.009l0.007-0.019C28.094,40.095,28.534,40,29,40c2.206,0,4,1.794,4,4S31.206,48,29,48z M19,27.816   c-1.161-0.414-2-1.514-2-2.816s0.839-2.402,2-2.816V27.816z M19.146,29.914c0.58,3.886,2.9,7.302,6.269,9.287   c-0.373,0.28-0.716,0.597-1.015,0.955L17,40.895v-11.92C17.621,29.445,18.347,29.775,19.146,29.914z M32.286,38.986   C31.341,38.364,30.213,38,29,38c-0.434,0-0.856,0.049-1.263,0.136C23.683,36.431,21,32.439,21,28V18h1.343   c3.59,0,6.983-1.282,9.657-3.63c2.674,2.348,6.067,3.63,9.657,3.63H43v10C43,33.969,38.218,38.832,32.286,38.986z M45,22.184   c1.161,0.414,2,1.514,2,2.816s-0.839,2.402-2,2.816V22.184z M32,3c8.271,0,15,6.729,15,15v3.026c-0.584-0.442-1.257-0.773-2-0.924   V16h-3.343c-3.381,0-6.56-1.316-8.95-3.707L32,11.586l-0.707,0.707C28.902,14.684,25.724,16,22.343,16H19v4.101   c-0.743,0.152-1.416,0.482-2,0.924V18C17,9.729,23.729,3,32,3z M11,49.477c0-2.845,1.813-5.361,4.513-6.26   c0.463-0.154,0.943-0.257,1.43-0.306l6.312-0.631C23.091,42.825,23,43.402,23,44c0,2.215,1.21,4.149,3,5.188V56h-6v-7h-2v4h-2v2h2   v1h-6v-1h2v-2h-2.279l-0.382-1.146C11.114,51.179,11,50.477,11,49.767V49.477z M28,61H12v-3h6h1h10c1.86,0,3.429,1.277,3.873,3H28z    M47,50.987c0-0.491,0.116-0.983,0.336-1.422l0.559-1.117l-1.789-0.895l-0.559,1.118C45.189,49.386,45,50.188,45,50.987   c0,0.004,0.001,0.009,0.001,0.013H45v10H34.91c-0.302-1.789-1.395-3.309-2.91-4.188v-7.624c1.359-0.789,2.378-2.094,2.792-3.648   c2.298-0.803,3.404-2.466,3.872-3.476l8.056,0.732c1.291,0.117,2.568,0.52,3.693,1.162c2.679,1.531,4.397,4.329,4.572,7.388   l-6.019,2.58C47.781,53.438,47,52.284,47,50.987z M53.58,61l-1.385-2.424l4.92-2.109L59.382,61H53.58z'></path>
            <path d='M32,28c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S34.206,28,32,28z M32,34c-1.103,0-2-0.897-2-2s0.897-2,2-2   s2,0.897,2,2S33.103,34,32,34z'></path>
            <path d='M13,1H5v11.184C4.686,12.072,4.352,12,4,12c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3V3h6V1z M4,16   c-0.552,0-1-0.449-1-1s0.448-1,1-1s1,0.449,1,1S4.552,16,4,16z'></path>
            <path d='M53,1v8h-0.5c-1.379,0-2.5,1.122-2.5,2.5s1.121,2.5,2.5,2.5s2.5-1.122,2.5-2.5V7h6v2h-0.5c-1.379,0-2.5,1.122-2.5,2.5   s1.121,2.5,2.5,2.5s2.5-1.122,2.5-2.5V1H53z M53,11.5c0,0.276-0.225,0.5-0.5,0.5S52,11.776,52,11.5s0.225-0.5,0.5-0.5H53V11.5z    M61,11.5c0,0.276-0.225,0.5-0.5,0.5S60,11.776,60,11.5s0.225-0.5,0.5-0.5H61V11.5z M55,5V3h6v2H55z'></path>
          </g>
        </svg>
        <div className='title'>
          <h3>GET IN TOUCH</h3>
        </div>

        <div className='flex'>
          <div className='flexOne'>
            <p>
              Ideal for corporate events, team-building, holiday parties, client
              appreciation nights, weddings, birthdays or other personal
              milestones, live band karaoke with Good Enough Live Karaoke is an
              epic, interactive entertainment experience.
            </p>
            <p>
              {' '}
              We'll make sure your next party or event is completely awesome.
              Please let us know if you have any questions or would like a
              quote:{' '}
              <a
                href='mailto:sing@goodenoughlivekaraoke.com?Subject=Hello%20'
                target='_top'
              >
                sing@goodenoughlivekaraoke.com{' '}
              </a>
            </p>
          </div>
          <div className='flexTwo'>
            <section id='contact'>
              <form
                action='http://www.focuspocus.io/magic/jenn.cowan@gmail.com'
                method='post'
              >
                <fieldset>
                  <input type='text' name='name' autocomplete='off' required />
                  <label for='name'>
                    <span>Name</span>
                  </label>
                </fieldset>
                <fieldset>
                  <input type='text' name='email' autocomplete='off' required />
                  <label for='email'>
                    <span>E-mail</span>
                  </label>
                </fieldset>
                <fieldset>
                  <textarea
                    name='message'
                    id=''
                    cols='30'
                    rows='3'
                    required
                  ></textarea>
                  <label for='message'>
                    <span>Message</span>
                  </label>
                </fieldset>
                <button>
                  <span>Send</span>
                  <span>Sent</span>
                </button>
              </form>
            </section>
          </div>
        </div>
        <style jsx>{`


        svg {
          display: flex;
          width: 100%;
          margin-top: 15vh;
          margin-bottom: 30px;
        }
        }
          h3 {
            font-family: 'Concert One', sans-serif;
            white-space: nowrap;
            margin: 0 -5px 0 0;
            letter-spacing: 5px;
            line-height: 1;
            font-size: 7vw;
            font-weight: 100;
            text-align: center;
            color: #fee;
            text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #761f6b,
              0 0 0.5em #761f6b, 0 0 0.1em #761f6b, 0 10px 3px #000;
          }

          .title {
            width: 100%;
            background: none;
            margin: 0 auto;
            margin-bottom: 20px;
          }

          .flex {
            display: flex;
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            background: rgb(25, 3, 22);
          }

          p {
            color: #f1f1f1;
            font-family: 'Montserrat', sans-serif;
            line-height: 38px;
            font-size: 18px;
          }

          a {
            color: #f1f1f1;
            transition: 0.4s all;
          }

          a:hover {
            opacity: 0.65;
          }

          .flexOne,
          .flexTwo {
            width: 40%;
            margin-top: 50px;
          }

          .flexOne {
            margin-left: 10%;
          }

          .flexTwo {
            margin-right: 10%;
            margin-top: -1%;
          }

          h1 {
            white-space: nowrap;
            margin: 0 -5px 0 0;
            letter-spacing: 5px;
            line-height: 1;
            font-size: 7vw;
            font-family: 'Montserrat', sans-serif;
            font-weight: 100;
            text-align: center;
            color: #f1f1f1;
          }

          #contact {
            padding: 0 20px;
            border-radius: 2px;
            margin-bottom: 50px;
          }

          form {
            padding: 5%;
            display: grid;
            grid-template-column: 1fr;
            grid-gap: 1em;
            height: 100%;
            width: 100%;
            border-radius: 5px;
          }
          fieldset {
            height: 100%;
            width: 94.5%;
            position: relative;
            border: none;
            overflow: hidden;
          }
          input {
            outline: none;
            padding: 20px 5px 10px 5px;
            height: 100%;
            width: 100%;
            border: none;
            font: 400 1em/1.2 'Roboto', sans-serif;
            color: #f1f1f1;
            background: none;
          }
          /* textarea styling */
          textarea {
            outline: none;
            margin: 20px 5px 10px 5px;
            height: 76%;
            width: 100%;
            border: none;
            resize: none;
            font: 400 1em/1.2 'Montserrat', sans-serif;
            color: #f1f1f1;
            background: none;
          }
          /* label styling */
          label {
            position: absolute;
            font-family: 'Montserrat', sans-serif;
            color: #f1f1f1;
            height: 100%;
            width: 100%;
            bottom: 0;
            left: 0;
            pointer-events: none;
            font-size: 16px;
            border-bottom: 1px solid #f1f1f1;
          }
          label::after {
            position: absolute;
            content: '';
            height: 100%;
            width: 100%;
            bottom: 0;
            left: 0;
            transform: translateX(-100%);
            border-bottom: 3px solid #f1f1f1;
            transition: transform 0.3s ease;
          }
          label > span {
            position: absolute;
            bottom: 5px;
            left: 0;
            transition: all 0.3s ease;
          }
          input:focus + label {
            border: none;
          }
          input:focus + label span,
          input:valid + label span {
            transform: translateY(-200%);
            font-size: 0.8em;
            font-weight: 700;
            color: #f1f1f1;
          }
          input:focus + label::after {
            transform: translateX(0%);
            color: #f1f1f1;
          }
          textarea:focus + label {
            border: none;
            color: #f1f1f1;
          }
          textarea:focus + label span,
          textarea:valid + label span {
            transform: translateY(-520%);
            font-size: 0.8em;
            font-weight: 700;
            color: #f1f1f1;
            margin-bottom: 20px;
          }
          textarea:focus + label::after {
            transform: translateX(0%);
          }
          button,
          button:hover {
            transition: 0.5s;
          }
          button {
            margin-top: 25px;
            padding: 20px;
            letter-spacing: 2px;
            border-radius: 5px;
            font-family: 'Montserrat', sans-serif;
            text-transform: uppercase;
            color: rgb(25, 3, 22);
            opacity: 1;
            background: #f1f1f1;
          }
          button:hover {
            opacity: 0.65;
          }
          button span:nth-child(2) {
            display: none;
          }
          button:focus:nth-child(2) {
            display: inline;
          }
          button:focus:nth-child(1) {
            display: none;
          }

          @media screen and (max-width: 1150px) {
            .flexOne p {
              font-size: 16px;
            }
          }

          @media screen and (max-width: 1015px) {
            .flex {
              flex-direction: column;
            }

            p {
              text-align: center;
              margin-top: 50px;
            }

            .flexOne {
              width: 75%;
              margin: 0 auto;
            }

            .flexTwo {
              margin: 0 8%;
              width: 75%;
            }
          }

          @media only screen and (max-width: 900px) {
            h3 {
              font-size: 60px;
            }
          }

          @media only screen and (max-width: 900px) {
            .flexOne p {
              font-size: 17px;
            }
          }
          @media only screen and (max-width: 600px) {
            .flexOne p {
              font-size: 17px;
              margin-top: 20px;
            }

            .flexOne {
              width: 90%;
            }

            h3 {
              font-size: 35px;
              margin-top: 20px;
            }

            .title {
              width: 90%;
            }

            button {
              position: relative;
              left: 5px;
              margin-top: 50px;
            }
          }

          @media only screen and (max-width: 380px) {
            .flexOne p {
              font-size: 14px;
            }
            label {
              font-size: 14px;
            }
          }
        `}</style>
      </Layout>
    );
  }
}
