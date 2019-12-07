import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @font-face {
            font-family: 'Gordita-Regular';
            src: url('/Gordita-Font/Gordita-Regular.otf')
              format('opentype');
            font-weight: 400;
          }

          @font-face {
            font-family: 'Gordita-Bold';
            src: url('/Gordita-Font/Gordita-Bold.otf') format('opentype');
            font-weight: 400;
          }

          * {
            font-family: 'Gordita-Regular', sans-serif;
          }
        `
          }}
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
