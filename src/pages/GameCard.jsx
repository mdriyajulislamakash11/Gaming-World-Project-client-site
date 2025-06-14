import React from 'react';

const GameCard = ({ data }) => {
  const { image, title, description, rating, publishDate, genre } = data || {};

  return (
    <div className="w-full mx-auto bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.01] flex flex-col">
      
      {/* Game Cover Image */}
      <div className="w-full h-60">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-3xl"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-6 space-y-4 flex-grow">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-800">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {description.length > 200 ? description.slice(0, 200) + "..." : description}
        </p>

        {/* Genre and Date */}
        <div className="flex items-center justify-between text-sm text-gray-700 flex-wrap">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
            🎮 Genre: {genre}
          </span>
          <span className="text-gray-500">🗓️ {publishDate}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="text-yellow-400 text-lg">
            {"⭐".repeat(Math.floor(rating))}
          </div>
          <span className="text-gray-600 text-sm">({rating}/5)</span>
        </div>

        {/* Explore More Button */}
        <div className="pt-2 mt-auto text-center">
          <button className="w-full px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
