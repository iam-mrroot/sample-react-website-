import photo from "../assets/laptop.jpg";

export default function analystics() {
  return (
    <div className="w-full bg-white">
      <section className="text-black grid lg:grid-cols-2 max-w-[1540px] mx-auto md:px-20 p-8 gap-4 md:py-40">
        <img src={photo} alt="analytics.jpg" className="w-[500px] m-auto" />
        <div className="flex flex-col justify-center gap-6">
          <p className="text-[#00df9a] font-semibold text-2xl">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="font-bold text-3xl lg:text-4xl">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-[18px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className="py-3 px-5 bg-[#00df9a] rounded-md text-black font-semibold w-fit">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
