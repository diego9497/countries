import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../src/store";
import Layout from "../src/components/Layout";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}
