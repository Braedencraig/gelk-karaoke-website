import Layout from '../components/MyLayout';
const contentful = require('contentful');
import TestHeader from '../components/TestHeader';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <h1 className='contactNeon'>Get in touch!</h1>
        <div className='flex'>
          <div className='flexOne'>
            <p>
              Let GOOD ENOUGH LIVE KARAOKE make your next team-building or
              corporate event, wedding or birthday party a creative and
              invigorating experience with live band karaoke. Please let us know
              if you have any questions or would like a quote.{' '}
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
              <form action=''>
                <fieldset>
                  <input type='text' name='' autocomplete='off' required />
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

          .flex {
            display: flex;
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
          }

          p {
            color: #f1f1f1;
            font-family: 'Roboto', sans-serif;
            font-size: 26px;
            line-height: 50px;
          }

          a {
            color: #f1f1f1;
            transition: 0.4s all;
          }

          a:hover {
            opacity: 0.65;
          }

          .contactNeon {
            margin-top: 25vh;
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
            color: #fee;
            text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #f00, 0 0 0.5em #f00,
              0 0 0.1em #f00, 0 10px 3px #000;
          }
          /* section styling */

          #contact {
            padding: 0 20px;
            border-radius: 2px;
            margin-bottom: 50px;
          }
          @media only screen and (max-width: 900px) {
            h1 {
              font-size: 12vw;
            }
            #contact {
              width: 70%;
            }
          }
          /* form styling */
          form {
            padding: 5%;
            display: grid;
            grid-template-column: 1fr;
            grid-gap: 1em;
            height: 100%;
            width: 100%;
            border-radius: 5px;
          }
          /* fieldset styling */
          fieldset {
            height: 100%;
            width: 94.5%;
            position: relative;
            border: none;
            overflow: hidden;
          }
          /* input styling */
          input {
            outline: none;
            padding: 20px 5px 10px 5px;
            height: 100%;
            width: 100%;
            border: none;
            font: 400 1em/1.2 'Raleway', sans-serif;
            color: rgb(89, 95, 110);
            background: none;
          }
          /* textarea styling */
          textarea {
            outline: none;
            padding: 20px 5px 10px 5px;
            height: 100%;
            width: 100%;
            border: none;
            resize: none;
            font: 400 1em/1.2 'Raleway', sans-serif;
            color: rgb(89, 95, 110);
            background: none;
          }
          /* label styling */
          label {
            position: absolute;
            font-family: 'Roboto', sans-serif;
            color: #fee;
            height: 100%;
            width: 100%;
            bottom: 0;
            left: 0;
            pointer-events: none;
            font-size: 16px;
            border-bottom: 1px solid #fee;
          }
          label::after {
            position: absolute;
            content: '';
            height: 100%;
            width: 100%;
            bottom: 0;
            left: 0;
            transform: translateX(-100%);
            border-bottom: 3px solid #fee;
            transition: transform 0.3s ease;
          }
          label > span {
            position: absolute;
            bottom: 5px;
            left: 0;
            transition: all 0.3s ease;
          }
          /* form animation */
          input:focus + label {
            border: none;
          }
          input:focus + label span,
          input:valid + label span {
            transform: translateY(-200%);
            font-size: 0.8em;
            font-weight: 700;
            color: #fee;
            text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444,
              0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
          }
          input:focus + label::after {
            transform: translateX(0%);
            color: #fee;
            text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444,
              0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
          }
          textarea:focus + label {
            border: none;
            color: #fee;
            text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444,
              0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
          }
          textarea:focus + label span,
          textarea:valid + label span {
            transform: translateY(-520%);
            font-size: 0.8em;
            font-weight: 700;
            color: #fee;
            text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444,
              0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
          }
          textarea:focus + label::after {
            transform: translateX(0%);
          }
          /* button styling */
          button,
          button:hover {
            transition: 0.5s;
          }
          button {
            margin-top: 50px;
            padding: 20px;
            letter-spacing: 2px;
            border-radius: 5px;
            font-family: 'Roboto', sans-serif;
            text-transform: uppercase;
            color: red;
            opacity: 0.5;
            background: #fee;
          }
          button:hover {
            opacity: 1;
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
        `}</style>
      </Layout>
    );
  }
}
