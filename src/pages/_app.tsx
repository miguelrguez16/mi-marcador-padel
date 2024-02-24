import "@/styles/End.css";
import "@/styles/Footer.css";
import "@/styles/Points.css";
import "@/styles/Scoreboard.css";
import "@/styles/Time.css";
import "@/styles/Global.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
