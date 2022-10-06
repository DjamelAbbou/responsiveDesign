import Image from "next/image";
import Page from "@/ui/page";

export default function Home() {
  return (
    <Page
      {...{
        title: "First Page",
        description: "my first page",
      }}
    >
      <div className="flex flex-wrap sm:flex-nowrap gap-12">
        <div className="sm:w-1/3 p-10">
          <Image
            src="/marktellez.jpg"
            alt="professor image"
            layout="responsive"
            height={105}
            width={105}
          />
        </div>
        <div className="sm:w-2/3 font-black text-8xl relative top-24 leading-1">
          Learn javascript and React one on one from an expert
        </div>
      </div>
    </Page>
  );
}
