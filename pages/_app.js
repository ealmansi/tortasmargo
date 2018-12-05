import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>Tortas Margo&trade; | Tortas ricas y accesibles. A domicilio.</title>
          <link rel='shortcut icon' type='image/png' href='/static/favicon.png'/>
          <meta property='og:image' content='/static/images/og-image.png'></meta>
          <meta property='og:image:type' content='image/png'></meta>
          <meta property='og:image:width' content='500'></meta>
          <meta property='og:image:height' content='500'></meta>
        </Head>
        <Component { ...pageProps } />
      </Container>
    )
  }
}
