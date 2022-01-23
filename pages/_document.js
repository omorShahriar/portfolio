import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="scroll-smooth ">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-stone-900 font-poppins scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-themeGrey-light scrollbar-track-transparent">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
