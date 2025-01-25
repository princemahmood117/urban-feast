import Banner from "../Components/Banner/Banner";
import Faq from "../Components/Faq/Faq";
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

      <div className="max-w-7xl mx-auto px-6 md:px-3">
        <Faq></Faq>
      </div>
{/* this needs to be changed */}
      <div className="max-w-7xl mx-auto px-6 md:px-3">
        <MiddleImage></MiddleImage>
      </div>
    </div>
  );
};

export default Home;
