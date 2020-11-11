import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/gdb6ioy.css"/>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
