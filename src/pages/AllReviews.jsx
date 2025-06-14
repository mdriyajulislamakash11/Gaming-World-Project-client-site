import React from "react";
import GameCard from "./GameCard";
import { useLoaderData } from "react-router-dom";

const AllReviews = () => {
  const games = useLoaderData();

  return (
    <div className="w-11/12 mx-auto my-16">
         <h2 className="text-3xl font-bold text-center my-10">All Card Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} data={game} />
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
