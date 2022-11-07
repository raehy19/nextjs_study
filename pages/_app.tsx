import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../src/components/layout';
import { useEffect } from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const KAKAO_JS_KEY = 'c234f55408a865cece435523b1168c26';

  useEffect(() => {
    window.Kakao.init(KAKAO_JS_KEY);
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
