import Head from "next/head";
import { AppProps } from "next/app";
import PageProvider from "../src/utils/PageProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache, css } from "@emotion/react";
import createEmotionCache from "../src/utils/createEmotionCache";
import { ThemeProvider } from "next-themes";
import { GlobalStyles } from "@mui/material";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <ThemeProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <PageProvider>
          <CssBaseline />
          <GlobalStyles
            styles={css`
              :root {
                body {
                  background-color: #fff;
                  color: #031521;
                }
              }
              [data-theme="dark"] {
                body {
                  background-color: #031521;
                  color: #fff;
                }
              }
            `}
          />
          <Component {...pageProps} />
        </PageProvider>
      </CacheProvider>
    </ThemeProvider>
  );
}
