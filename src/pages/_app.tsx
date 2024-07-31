import { AppProps } from 'next/app';

// Use AppProps type from 'next/app'
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
