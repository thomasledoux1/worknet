import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Sentry from '@sentry/nextjs';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
