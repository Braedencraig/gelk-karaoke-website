import Header from './Header';
import TestHeader from '../components/TestHeader';
import Head from 'next/head';
import Footer from '../components/Footer';

const layoutStyle = {
  margin: -9,
  background: 'black',
  backgroundColor: '#282a2b',
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
