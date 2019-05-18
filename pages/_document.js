import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>{/* insert link/s ex. cdn or stylesheets */}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
