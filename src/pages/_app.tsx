import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // escolha os pesos que for usar
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={opensans.className}>
      <Component {...pageProps} />{" "}
    </main>
  );
}
