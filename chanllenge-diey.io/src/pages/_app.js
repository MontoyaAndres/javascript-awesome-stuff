import React from "react";
import App from "next/app";
import Head from "next/head";
import "../style.css";

import Layout from "../components/layout";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Diey chanllenge</title>
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
