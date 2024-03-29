import React, { useContext, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";

import Header from "../Header";
import { GlobalStyles } from "../../styles/GlobalStyles";
import lightTheme from "../../styles/lightTheme";
import darkTheme from "../../styles/darkTheme";
import { changeTheme } from "../../features/theme/themeSlice";

const Layout = ({ children, changeTheme, darkMode }) => {
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      changeTheme(true);
    }
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Head>
        <title>Jobs filtering</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Header />
      <main className="max-width">{children}</main>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({ darkMode: state.theme.darkMode });

const mapDispatchToProps = {
  changeTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Layout));
