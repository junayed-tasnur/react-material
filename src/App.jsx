import Hero from "./components/Hero";
import Navbars from "./components/Navbars";
import Presentation from "./components/presentation";
import Slider from "./components/Slders";

const App = () => {
  return (
    <>
      <div>
        <Navbars />
        <Hero />
        <Presentation />
        <Slider />
      </div>
    </>
  );
};

export default App;
