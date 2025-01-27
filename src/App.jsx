import BomArea from "./components/BomArea";
import Hero from "./components/Hero";
import Navbars from "./components/Navbars";
import Presentation from "./components/presentation";
import Slider from "./components/Slders";
import Times from "./components/Times";

const App = () => {
  return (
    <>
      <div className="">
        <Navbars />
        <Hero />
        <Presentation />
        <Slider />
        <Times />
        <BomArea />
      </div>
    </>
  );
};

export default App;
