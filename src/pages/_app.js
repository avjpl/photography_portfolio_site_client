import { ApolloProvider } from '@apollo/client';
import { useRouter } from 'next/router';

import { useApollo } from '../apollo/client';
import Layout from '../components/layouts/layout';
import ErrorBoundary from '../components/error/errorBoundary';

import '../../static/css/index.css';

function App({ Component, pageProps }) {
  const router = useRouter();
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <Layout>
      <ErrorBoundary router={router}>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ErrorBoundary>
    </Layout>
  );
}

export default App;
