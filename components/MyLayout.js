import Header from './Header';
import TestHeader from '../components/TestHeader';
import Head from 'next/head';
import Footer from '../components/Footer';

const layoutStyle = {
  margin: -9,
  background: 'black',
  height: '100vh',
  background:
    '#000 url(//images.weserv.nl/?url=i.imgur.com/6QJjYMe.jpg)  center no-repeat',
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
      {/* <Footer /> */}
    </div>
  </>
);

export default Layout;
