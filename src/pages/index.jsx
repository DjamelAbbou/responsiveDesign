export default function HomePage() {
  return (
    <div className="">
      <div className="mb-10 bg-red-600 px-2 py-4 text-5xl font-bold text-white">
        All the rules:
      </div>
      <div className="">
        <div className="mb-10 bg-blue-700 text-center text-4xl font-medium text-white">
          #1 NO HEIGHTS, use padding instead
        </div>
        <div className="mx-auto mb-20 h-20 max-w-lg bg-red-700 text-lg font-normal text-white">
          in this example we used height, which hides the text if the height
          isn't enough, because that's just how css works, remember, the web is
          responsive by default,
          <span className="text-lime-500">so if it because unresponsive</span>,
          its your fault, u did some weird css thing
        </div>
        <div className="mx-auto mt-20 max-w-lg bg-green-500 p-8 text-lg font-normal text-white">
          as said before, dont use heights, use padding instead ok?
          <span className="block font-bold text-blue-700">
            Learnt during coding:
          </span>{" "}
          the tailwindcss property space-y-z, overrides the margin-y property
          <hr /> the h[w]-fit, is useful
          <hr />
          if u have both a height set and a padding set, the padding might not
          show the problem with using heights only after u see it with small
          screens
        </div>
        <div className="mb-10 mt-10 bg-blue-700 text-center text-4xl font-medium text-white">
          #2 how ems and rems works (what a surprise)
        </div>
        <div className="mx-auto max-w-lg bg-green-500 p-4 text-white ">
          okay listen, when u use em on{" "}
          <span className="text-[1rem] text-red-500">font-size property</span>{" "}
          of an element, it's going to be{" "}
          <span className="text-red-500">
            relative to the font-size of it's parent element
          </span>
          <div className="text-xl font-bold">meaning:</div>
          <div>
            if the font size of the parent is 20px and u set a font size of the
            child to a 2em, it's font size will be 40px, got it?
          </div>
          <div>
            <span className="text-lg font-bold">Now</span> if u have a child
            inside that child with a font size of 2em, it's font size will be
            80px, why ?
          </div>
          <hr />
          <div>
            How em works to properties other than font-size, such as padding and
            margin ect
            <br />
            let's say we have a margin: 1em;
            <br /> that results to a margin of 1 x (fontsize of that element)
            <br />
            <span className="text-xl font-bold text-red-500">
              this is why it's more consistent to use rem, but it would look
              weird if the fontsize is too big as opposed if u had used em, the
              margin and padding would change proportonanl to the fontsize of
              that element, got it or ? if not rewatch the kevin powell video
              (because had u used em to set the margin and padding of that
              element, it would change as the text's size would change)
            </span>{" "}
            <br /> and rem simply takes the font-size of the
            <span className=" text-xl font-bold text-red-500">ROOT</span>
            element
          </div>
          <div>
            <span className="block text-3xl font-bold text-red-500">
              example:
            </span>
            <div className="inline-block cursor-pointer rounded-md bg-emerald-700 px-4 py-2 text-4xl">
              Buy now (with rem)
            </div>
            <div className="mt-4 block w-fit cursor-pointer rounded-md bg-emerald-700 px-[1em] py-[.5em] text-4xl">
              Buy now (with em)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
