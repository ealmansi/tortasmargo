import Document, { Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  static getInitialProps = Document.getInitialProps

  render() {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
          <link rel='stylesheet' href='/static/css/main.css' />
		      <noscript><link rel='stylesheet' href='/static/css/noscript.css' /></noscript>
        </Head>
        <body className='is-preload'>
          <Main />
          <NextScript />
          <script src='/static/js/jquery.min.js'></script>
          <script src='/static/js/browser.min.js'></script>
          <script src='/static/js/breakpoints.min.js'></script>
          <script src='/static/js/util.js'></script>
          <script src='/static/js/main.js'></script>
        </body>
      </html>
    )
  }
}
