import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { ArrowForward } from "@mui/icons-material";
const Times = () => {
  return (
    <>
      <section className=" gap-24 md:py-16 px-6 lg:px-16 max-w-[1400px] mx-auto">
        {/* section one */}
        <div className="flex flex-col lg:flex-row    items-center justify-between  ">
          {/* left side */}
          <div className="flex-1 items-start">
            <img className="w-full h-auto max-w-lg" src="/Cake.png" alt="" />
          </div>

          {/* right side */}
          <div
            className="relative flex flex-1 flex-wrap flex-col gap-4
          "
          >
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-6xl max-w-lg mt-3 md:mt-0 ">
              Make more time for the work
            </h1>
            <p className="text-black text-lg py-5 md:py-0">
              {" "}
              <CheckCircleOutlineIcon className="text-green-600 me-2 " />
              <span className="absolute  ">
                {" "}
                Many ways to use illustrations in design{" "}
              </span>
            </p>
            <p className="text-black text-lg">
              {" "}
              <CheckCircleOutlineIcon className="text-green-600 me-2" />
              <span>Simply explained with illustrations</span>
            </p>
            <p className="text-black text-lg">
              {" "}
              <CheckCircleOutlineIcon className="text-green-600 me-2" />
              <span>Make more time for the work </span>
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <button className="bg-indigo-100 font-semibold py-3 px-6 rounded-lg transition duration-300 text-[#5F62E2] flex items-center justify-center gap-2 hover:bg-indigo-500 mx-auto sm:mx-0 hover:text-white">
                Learn More
                <ArrowForward sx={{ fontSize: 24 }} />
              </button>
            </div>
          </div>
        </div>

        {/* section two */}

        <div className="flex flex-col-reverse lg:flex-row    items-center justify-between md:mt-24 ">
          {/* left side */}

          {/* right side */}
          <div
            className="relative flex flex-1 flex-wrap flex-col gap-4
          "
          >
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-6xl max-w-lg mt-2 md:mt-0">
              Make more time for the work
            </h1>
            <p className="text-black text-lg py-5 md:py-0">
              {" "}
              <CheckCircleOutlineIcon className="text-green-600 me-2 " />
              <span className="absolute  ">
                {" "}
                Many ways to use illustrations in design{" "}
              </span>
            </p>
            <p className="text-black text-lg">
              {" "}
              <CheckCircleOutlineIcon className="text-green-600 me-2" />
              <span>Simply explained with illustrations</span>
            </p>
            <p className="text-black text-lg">
              {" "}
              <CheckCircleOutlineIcon className="text-green-600 me-2" />
              <span>Make more time for the work </span>
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <button className="bg-indigo-100 font-semibold py-3 px-6 rounded-lg transition duration-300 text-[#5F62E2] flex items-center justify-center gap-2 hover:bg-indigo-500 mx-auto sm:mx-0 hover:text-white">
                Learn More
                <ArrowForward sx={{ fontSize: 24 }} />
              </button>
            </div>
          </div>
          <div className="flex-1 items-start">
            <img className="w-full h-auto max-w-lg" src="/Cake2.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Times;
