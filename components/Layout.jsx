import Header from "./Header";
import Menu from "./Menu";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div>
        <div className="main_layout">
          <Menu />
          <div className="content">{children}</div>
        </div>
      </div>
    </>
  );
}
