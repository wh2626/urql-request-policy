import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // console.log(Component);
  return <Component {...pageProps} />;
  // return <div>hoge</div>;
}
