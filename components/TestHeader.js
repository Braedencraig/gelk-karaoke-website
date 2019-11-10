import Link from 'next/link';

const TestHeader = () => (
  <>
    <nav className='navBar'>
      <nav className='wrapper'>
        <svg
          className='logo'
          height='100px'
          width='100px'
          fill='#000000'
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          x='0px'
          y='0px'
          viewBox='0 0 100 100'
          enable-background='new 0 0 100 100'
        >
          <path d='M94.503,38.963h-5.071v-2.896c0-2.417-1.961-4.377-4.378-4.377h-3.088v-2.455c0-0.792-0.643-1.437-1.436-1.437l0,0  c-0.793,0-1.438,0.645-1.438,1.437v2.455h-8.039V17.625c0-2.177,1.689-4.032,3.864-4.115c2.287-0.086,4.175,1.749,4.175,4.018v3.353  c0,0.793,0.645,1.437,1.438,1.437l0,0c0.793,0,1.436-0.644,1.436-1.437v-3.224c0-3.763-2.963-6.929-6.725-7.018  c-3.875-0.093-7.058,3.033-7.058,6.889v11.156c-1.134-0.816-2.521-1.299-4.021-1.299c-2.22,0-4.194,1.055-5.455,2.688  c-1.261-1.634-3.235-2.688-5.455-2.688c-1.499,0-2.887,0.481-4.02,1.299V17.656c0-3.763-2.964-6.929-6.726-7.019  c-3.875-0.093-7.057,3.033-7.057,6.889v14.164h-7.128c-0.673-1.358-2.07-2.297-3.688-2.297c-1.22,0-2.313,0.536-3.067,1.382  c-2.239-1.869-5.073-2.913-8.034-2.913c-6.913,0-12.537,5.624-12.537,12.537c0,6.913,5.624,12.538,12.537,12.538  c2.949,0,5.791-1.049,8.031-2.917c0.754,0.848,1.85,1.385,3.069,1.385c1.616,0,3.013-0.938,3.688-2.297h7.414  c1.75,11.103,11.384,19.62,22.971,19.62c4.324,0,8.515-1.194,12.144-3.42c0.786-0.481,0.916-1.574,0.266-2.228l0,0  c-0.465-0.464-1.188-0.554-1.747-0.21c-3.065,1.873-6.663,2.956-10.507,2.984c-11.297,0.082-20.538-9.326-20.538-20.623v-9.716  h19.233c2.176,0,4.031,1.688,4.113,3.864c0.087,2.287-1.749,4.175-4.018,4.175H44.019c-0.67,0-1.281,0.438-1.44,1.087  c-0.198,0.808,0.315,1.592,1.103,1.755c0.024,0.005,2.436,0.517,4.779,1.943c2.916,1.775,4.4,4.116,4.41,6.957  c0.003,0.769,0.607,1.433,1.374,1.464c0.821,0.034,1.497-0.621,1.497-1.436c0-1.771-0.421-3.416-1.239-4.899  c1.702-0.313,3.188-1.253,4.206-2.572c1.262,1.633,3.236,2.688,5.455,2.688c1.581,0,3.039-0.536,4.203-1.437H78.77  c-0.563,3.167-1.847,6.06-3.664,8.516c-0.414,0.562-0.354,1.339,0.14,1.83c0.007,0.007,0.015,0.015,0.021,0.021  c0.613,0.612,1.623,0.526,2.141-0.169c2.221-2.995,3.691-6.487,4.275-10.197h3.371c2.418,0,4.377-1.959,4.377-4.377v-2.896h5.072  c0.898,0,1.627,0.729,1.627,1.627V66.3c0,2.483-2.014,4.498-4.498,4.498H67.456c-4.022,0-7.41,3.169-7.506,7.19  c-0.099,4.146,3.243,7.547,7.366,7.547h1.064c0.627,2.207,2.659,3.828,5.063,3.828h7.272c0.793,0,1.437-0.644,1.437-1.437v-2.394  h2.142c0.786,0,1.472-0.604,1.495-1.391c0.023-0.813-0.627-1.479-1.436-1.479h-2.201V80.27c0-0.793-0.644-1.437-1.437-1.437h-7.272  c-2.403,0-4.438,1.622-5.063,3.827h-0.964c-2.518,0-4.643-2.059-4.602-4.574c0.043-2.443,2.043-4.421,4.498-4.421h24.313  c4.031,0,7.315-3.255,7.366-7.272h0.006V43.462C99.001,40.977,96.987,38.963,94.503,38.963z M20.524,47.074  c-1.82,1.902-4.349,2.99-6.986,2.99c-5.33,0-9.666-4.336-9.666-9.666s4.336-9.666,9.666-9.666c2.646,0,5.166,1.083,6.986,2.985  V47.074z M25.884,47.289c0,0.688-0.558,1.244-1.244,1.244s-1.244-0.559-1.244-1.244V33.508c0-0.686,0.559-1.244,1.244-1.244  c0.687,0,1.244,0.56,1.244,1.244V47.289z M35.454,46.236h-6.699V34.561h6.699V46.236z M46.364,32.646h-8.039V17.525  c0-2.217,1.803-4.021,4.02-4.021c2.217,0,4.021,1.804,4.021,4.021L46.364,32.646L46.364,32.646z M49.583,32.646  c0.626-1.407,2.036-2.394,3.672-2.394c1.638,0,3.046,0.985,3.672,2.394H49.583z M53.255,47.672c-0.376,0-0.745-0.054-1.104-0.155  c-0.422-0.38-0.875-0.745-1.368-1.089h5.373C55.423,47.192,54.396,47.672,53.255,47.672z M68.186,43.652  c0,2.217-1.805,4.02-4.021,4.02c-1.465,0-2.745-0.79-3.447-1.963c2.269-1.13,3.83-3.471,3.83-6.172c0-2.862-1.756-5.322-4.246-6.362  c0.479-1.683,2.028-2.921,3.863-2.921c2.216,0,4.021,1.804,4.021,4.021V43.652z M86.561,44.73c0,0.831-0.676,1.506-1.507,1.506  H70.551c0.324-0.799,0.506-1.67,0.506-2.584V34.56h13.997c0.831,0,1.507,0.676,1.507,1.506V44.73z M73.448,81.705h5.838v4.785  h-5.838c-1.319,0-2.394-1.073-2.394-2.393C71.057,82.777,72.129,81.705,73.448,81.705z'></path>
        </svg>
        {/* <div className='logo'></div> */}
        <input type='checkbox' id='menu-toggle' />
        <label htmlFor='menu-toggle' className='label-toggle'></label>
        <ul>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <a href='#'>Serum</a>
          </li>
        </ul>
      </nav>
    </nav>
    <header className='wrapper'>
      {/* <h1>Big ol' Lorem</h1> */}
      <div className='logoNeon'>
        <b>
          Good <span>Enough </span>Li<span>ve</span> Karaoke
        </b>
      </div>
    </header>
    <style jsx>{`
   
    @import url(//fonts.googleapis.com/css?family=Vibur);
    @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
     .logoNeon {
            text-align: center;
            width: 65%;
            height: 250px;
            margin: auto;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            user-select: none;
          }
          .logoNeon b {
            font: 400 19vh 'Vibur';
            color: #fee;
            text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444,
              0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
          }
          .logoNeon b span {
            animation: blink linear infinite 2s;
          }
          .logoNeon b span:nth-of-type(2) {
            animation: blink linear infinite 3s;
          }
          @keyframes blink {
            78% {
              color: inherit;
              text-shadow: inherit;
            }
            79% {
              color: #333;
            }
            80% {
              text-shadow: none;
            }
            81% {
              color: inherit;
              text-shadow: inherit;
            }
            82% {
              color: #333;
              text-shadow: none;
            }
            83% {
              color: inherit;
              text-shadow: inherit;
            }
            92% {
              color: #333;
              text-shadow: none;
            }
            92.5% {
              color: inherit;
              text-shadow: inherit;
            }
          }
      h1 {
        font-size: 3em;
        padding: 3em 0 1em 0;
      }

      .navBar {
        background-color: #53354a;
        position: fixed;
        right: 0;
        left: 0;
      }

      .logo {
        background-color: #e84545;
        border-radius: 50px;
        display: inline-block;
        height: 45px;
        margin: 1em 0;
        width: 45px;
      }

      .wrapper {
        margin: 0 auto;
        max-width: 960px;
        padding: 0 2%;
      }

      nav ul {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        width: 50%;
      }

      nav ul a {
        color: #e84545;
        text-decoration: none;
        transition: all 0.5s ease;
      }

      nav ul a:hover {
        color: #903749;
      }
          
      li {
        display: inline-block;
      }

      #menu-toggle {
        display: none;
      }

      .label-toggle {
        display: none;
      }

      .wrapper {
        align-items: center;
        display: flex;
        justify-content: space-between;
      }

        @media screen and (max-width: 768px) {
         
          nav ul a {
            color: #53354a; 
          }

          ul {
            background-color: #e84545;
            display: block;
            height: 0;
            list-style-type: none;
            opacity: 0;
            text-align: center;
            transition: all 1s ease;
            width: 100%;
            visibility: hidden;
          }

          li {
            border-bottom: 2px solid #53354a;
            color: #53354a;
            display: block;
            font-size: 1.5em;
            padding: 2em 0;
          }

          #menu-toggle:checked ~ ul {
            opacity: 1;
            height: 100vh;
            visibility: visible;
          }

          .label-toggle {
            background: linear-gradient(
              to bottom,
              #e84545 0%,
              #e84545 20%,
              transparent 20%,
              transparent 40%,
              #e84545 40%,
              #e84545 60%,
              transparent 60%,
              transparent 80%,
              #e84545 80%,
              #e84545 100%
            ); 
           
            cursor: pointer;
            display: block;
            float: right;
            height: 35px;
            margin-top: 1em;
            width: 35px;
          }

          .wrapper {
            display: block;
          }
        }
      }
    `}</style>
  </>
);

export default TestHeader;
