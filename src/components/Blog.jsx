
import { ArrowForward } from "@mui/icons-material";
const Blog = () => {
  const cardData = [
    {
      id: 1,
      imgSrc: "/blueContainer.png",
      title: "Make myspace your best designed space",
      desc: "A lot of different components that will help you create the perfect look for your project",
      btnLavel: "Design",
    },
    {
      id: 2,
      imgSrc: "/Secondimg.png",
      title: "My company culture has changed today",
      desc: "A lot of different components that will help you create the perfect look for your project",
      btnLavel: "3D illustrations",
    },
    {
      id: 3,
      imgSrc: "/ThirdImg.png",
      title: "Professionals in craft! All products were super great",
      desc: "A lot of different components that will help you create the perfect look for your project",
      btnLavel: "Development",
    },
  ];
  return (
    <>
      <section className="max-w-[1400px] mx-auto py-12 px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 ">
          <div className="">
            <h1 className="text-3xl lg:text-6xl font-bold text-gray-800 ">
              Get more from our blog
            </h1>
            <p className="max-w-lg text-[22px] mt-2 text-gray-500">
              There are a lot of different components that will help you create
              the perfect look for your project
            </p>
          </div>
          {/* button */}
          <div className="">
            <button className="bg-indigo-100 font-semibold py-3 px-6 rounded-lg transition duration-300 text-[#5F62E2] flex items-center justify-center gap-2 hover:bg-indigo-500 mx-auto sm:mx-0 hover:text-white">
              Learn More
              <ArrowForward sx={{ fontSize: 24 }} />
            </button>
          </div>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 !p-5">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img className="w-full object-cover" src={card.imgSrc} alt="" />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {" "}
                  {card.title}{" "}
                </h3>
                <p className="text-gray-600 mb-4"> {card.desc} </p>
                <button className="text-sm rounded-xl py-2 px-3 text-green-500 bg-teal-50 font-semibold hover:bg-teal-200 transition-all duration-300 ">
                  {card.btnLavel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
