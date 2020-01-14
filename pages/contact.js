import Layout from '../components/MyLayout';
const contentful = require('contentful');
import TestHeader from '../components/TestHeader';
import img from '../assets/contactHead.svg';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <div className='title'>
          <img src={img} alt='Get in touch with us!' />
        </div>
        <div className='flex'>
          <div className='flexOne'>
            <p>
              Ideal for corporate events, team-building, holiday parties, client
              appreciation nights, weddings, birthdays or other personal
              milestones, live band karaoke with Good Enough Live Karaoke is an
              epic, interactive entertainment experience. We'll make sure your
              next party or event is completely awesome. Please let us know if
              you have any questions or would like a quote:{' '}
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
          @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');

          .title {
            width: 80%;
            margin: 0 auto;
            margin-top: 18vh;
          }

          .flex {
            display: flex;
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
          }

          p {
            color: #f1f1f1;
            font-family: 'Roboto', sans-serif;
            font-size: 28px;
            line-height: 40px;
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
            font-family: 'Roboto', sans-serif;
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
            font: 400 1em/1.2 'Roboto', sans-serif;
            color: #f1f1f1;
            background: none;
          }
          /* label styling */
          label {
            position: absolute;
            font-family: 'Roboto', sans-serif;
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
            font-family: 'Roboto', sans-serif;
            text-transform: uppercase;
            color: rgba(44, 113, 246, 0.98);
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
              font-size: 23px;
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
            h1 {
              font-size: 12vw;
            }
          }

          @media only screen and (max-width: 900px) {
            .flexOne p {
              font-size: 20px;
            }
          }
          @media only screen and (max-width: 600px) {
            .flexOne p {
              font-size: 16px;
            }

            .title {
              width: 90%;
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
