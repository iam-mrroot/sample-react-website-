export default function newsletter() {
  return (
    <section className="grid lg:grid-cols-3 text-white max-w-[1500px] mx-auto p-8 lg:py-20 gap-5">
      <div className="md:col-span-2 flex flex-col gap-4 lg:justify-center">
        <h2 className="font-bold text-2xl lg:text-3xl">Want tips & tricks to optimize your flow?</h2>
        <p className="text-white font-semibold">Sign up to our newsletter and stay up to data</p>
      </div>
      <div className="flex flex-col gap-4">
        <input type="email" placeholder="Enter your email" className="bg-white text-black rounded-md h-10 flex p-3 md:w-2/3 lg:w-full "/>
        <button className="py-3 px-5 bg-[#00df9a] rounded-md text-black font-semibold w-fit">
          Notify me
        </button>
        <div>
            <p>We care about the protection of your data. Read our <a className='text-[#00df9a] underline' href="">Privacy policy</a></p>
        </div>

      </div>
    </section>
  );
}
