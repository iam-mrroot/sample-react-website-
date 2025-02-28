import { ReactTyped } from "react-typed";

export default function hero() {
  return (
    <hero className="text-white flex flex-col justify-center items-center h-screen gap-4 p-4">
      <p className="text-[#00df9a] font-bold uppercase sm:text-2xl text-[16px]">
        Growing with data analytics
      </p>
      <h2 className="font-bold lg:text-7xl sm:text-6xl text-5xl text-center">
        Grow with data.
      </h2>
      <div className="sm:text-3xl text-[16px] font-bold p-2 text-center flex">
        <p className="pr-2">Fast, flexible financing for</p>
        <ReactTyped
          strings={["BTB", "BTC", "SAAS"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
      <p className="font-semibold text-center">
        Monitor your data analytics to increase revenue for BTC, BTB & SAAS
        platforms
      </p>
      <button className="py-3 px-5 bg-[#00df9a] rounded-md text-black font-semibold">
        Get Started
      </button>
    </hero>
  );
}
