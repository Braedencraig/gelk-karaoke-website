import App from 'next/app';
import Head from 'next/head';
import img from '../assets/sing.png';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Good Enough Live Karaoke</title>
          <meta charSet='utf-8' />
          <link rel='shortcut icon' href={img} />
          <meta
            property='og:site_name'
            content='GOOD ENOUGH LIVE KARAOKE'
          ></meta>
          <meta property='og:title' content='Good Enough Live Karaoke'></meta>
          <meta
            property='og:description'
            content="Live Band Karaoke with Good Enough Live Karaoke Toronto's best live karaoke band. We play, you sing!"
          ></meta>
          <meta
            property='og:image'
            content='http://www.goodenoughlivekaraoke.com/uploads/6/8/0/2/6802119/img-6190-1.jpg'
          ></meta>
          <meta
            property='og:url'
            content='http://www.goodenoughlivekaraoke.com/'
          ></meta>
          <meta
            name='description'
            content="Live Band Karaoke with Good Enough Live Karaoke Toronto's best live karaoke band. We play, you sing!"
          ></meta>
          <meta
            name='keywords'
            content='Good Enough Live Karaoke, Toronto live band karaoke, live band karaoke, karaoke Toronto, cover bands Toronto, corporate events, corporate team building, wedding band,'
          ></meta>
          <meta
            http-equiv='Content-Type'
            content='text/html; charset=utf-8'
          ></meta>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          ></meta>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

export default MyApp;
