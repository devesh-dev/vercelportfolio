"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";

const page = () => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-5xl md:text-7xl mt-10  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Get in Touch
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          {` I'd love to hear from you!`}
        </p>
      </div>

      <div className="m-10">
        <input
          type="text"
          placeholder="hi@gmail.com"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-3 relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
        <textarea
          id="message"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 p-3 bg-neutral-950 placeholder:text-neutral-700"
          placeholder="Enter your message..."
        ></textarea>
      </div>

      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Submit
      </button>

      <BackgroundBeams />
    </div>
  );
};

export default page;
