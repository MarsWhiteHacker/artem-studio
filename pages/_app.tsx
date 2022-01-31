import type { AppProps } from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";

import { Chat } from "components/containers/chat";
import { Carousel } from "components/carousel";
import store from "store";
import { LanguageProvider } from "components/containers/languageProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <LanguageProvider>
          <Carousel>
            <Chat />
            <Component {...pageProps} />
          </Carousel>
        </LanguageProvider>
      </Provider>
    </>
  );
}

export default MyApp;
