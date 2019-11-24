import Header from './Header';
import TestHeader from '../components/TestHeader';
import Head from 'next/head';
import Footer from '../components/Footer';

const layoutStyle = {
  margin: -9,
  background: 'black',
  height: '150vh',
  background:
    '#000 url(https://i.etsystatic.com/9125312/r/il/fc23d1/563516299/il_570xN.563516299_hy4m.jpg)  center no-repeat',
  backgroundSize: 'cover',
  margin: 0,
};

const Layout = props => (
  <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
    </Head>
    <style jsx global>{`
      body {
        background: #000;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `}</style>
    <div style={layoutStyle}>
      <TestHeader />
      {props.children}
      <Footer />
    </div>
  </>
);

export default Layout;
