import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import Router from "./Router";
import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "@/src/apollo";
import { Provider } from "react-redux";
import { store } from "@/src/state/store";

const client = getApolloClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Router>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Router>
        </ApolloProvider>
      </Provider>
    </>
  );
}
