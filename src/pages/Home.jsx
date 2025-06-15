
import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";
import GameCard from "./GameCard";

const Home = () => {

  const loadedData = useLoaderData()
  console.log(loadedData)


  return (
    <div>
      {/* banner section */}
      <div>
        <Banner />
      </div>

      {/* Discover Trending Game Today */}
      <div className="my-16 w-11/12 mx-auto">
        <h1 className="text-center font-bold text-4xl ">
          Discover Trending Game Today
        </h1>

        {/* dynamic card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-16">
            {
              loadedData.slice(0, 8)?.map((data) => <GameCard key={data._id} data={data} />)
            }
        </div>
        


      </div>
    </div>
  );
};

export default Home;
