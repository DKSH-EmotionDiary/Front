import Document, { Html, Head, Main, NextScript } from 'next/document';

class Woongdo extends Document {
  render() {
    return (
      <Html lang='ko'>
        <Head></Head>
        <body className='container-x mx-auto'>
          <Main />
          <NextScript />
        </body>
      </Html >
    );
  }
}

export default Woongdo;
