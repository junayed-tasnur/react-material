const Hero = () => {
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-16 lg:px-16  max-w-[1400px] mx-auto ">
        {/* left side */}
        <div className=" flex-1 flex flex-col items-center gap-12">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center mt-2 font-bold max-w-lg ">
            Simply explained with illustrations
          </h1>
          <p className="text-base text-center sm:text-lg lg:text-xl text-gray-500 max-w-md mt-2">
            There are a lot of different components that will help you create
            the perfect look for your project
          </p>
          <div className="flex gap-3 flex-wrap">
            <button className="bg-[#5f62e2] hover:bg-blue-700 text-white py-3 px-6 transition-all duration-300 rounded-lg">
              Get Started
            </button>

            <button className="bg-indigo-100 text-[#5F62E2] py-3 px-6 transition-all duration-300 rounded-lg hover:bg-indigo-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1">
          <img
            className="w-full md:max-w-lg h-auto"
            src="/Component 1.png"
            alt="Rocket illustration"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
