import Head from "next/head";
import Header from "./header";

export default function Page({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="text-white container mx-auto pt-3">
        <Header />
      </div>
    </>
  );
}
