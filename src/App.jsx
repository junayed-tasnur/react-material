import Hero from "./components/Hero";
import Navbars from "./components/Navbars";
import Presentation from "./components/presentation";

const App = () => {
  return (
    <>
      <div>
        <Navbars />
        <Hero />
        <Presentation/>
      </div>
    </>
  );
};

export default App;
