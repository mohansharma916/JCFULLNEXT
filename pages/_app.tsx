import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/src/components/layout";
import JCRouter from "./JCRouter";
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
          <JCRouter>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </JCRouter>
        </ApolloProvider>
      </Provider>
    </>
  );
}
