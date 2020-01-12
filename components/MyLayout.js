import Header from './Header';
import TestHeader from '../components/TestHeader';
import Head from 'next/head';
import Footer from '../components/Footer';

const layoutStyle = {
  background: 'rgba(44,113,246,.98)!important',
  backgroundColor: 'rgba(44,113,246,.98)!important',
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
        @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');
        background: rgba(44, 113, 246, 0.98) !important;
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
