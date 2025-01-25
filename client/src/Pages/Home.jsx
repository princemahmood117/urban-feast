import Banner from "../Components/Banner/Banner";
import MiddleImage from "../Components/MiddleImage/MiddleImage";
import PopularMenu from "../Components/PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <div className="px-2">
        <Banner></Banner>
      </div>
      <MiddleImage></MiddleImage>

      <div className="max-w-7xl mx-auto px-6 md:px-3">
      <PopularMenu></PopularMenu>
      </div>
    </div>
  );
};

export default Home;
