import Hero from "./Hero";
import PickUpDropOff from "../../components/PickUpDropOff";
import PopularCars from "./PopularCars";
import RecommendationCars from "./RecommendationCars";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div className="home">
      <Hero />
      <PickUpDropOff />
      <PopularCars />
      <RecommendationCars />
      <AboutUs />
      <Testimonials />
    </div>
  );
}

export default Home;
