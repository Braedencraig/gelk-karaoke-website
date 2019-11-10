import Link from 'next/link';

const TestHeader = () => (
  <>
    <nav className='navBar'>
      <nav className='wrapper'>
        <div className='logo'></div>
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
      <h1>Big ol' Lorem</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sint
        corporis dolores omnis consectetur quaerat nesciunt beatae maiores,
        itaque labore ex vero pariatur nulla non fugiat, facilis eaque sunt
        doloremque!
      </p>
    </header>
    <style jsx>{`
      h1 {
        font-size: 3em;
        padding: 3em 0 1em 0;
      }

      .navBar {
        background-color: #53354a;
        position: fixed;
        min-width: 90%;
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
