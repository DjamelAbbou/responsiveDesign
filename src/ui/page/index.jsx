import Head from "next/head";
import Header from "./header";

export default function Page({ children, title, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="text-white container mx-auto sm:pt-3 flex flex-col gap-8">
        <Header />
        {children}
      </div>
    </div>
  );
}
