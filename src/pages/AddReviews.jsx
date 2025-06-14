import React from "react";

const AddReviews = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const image = form.image.value;
    const title = form.title.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const publishDate = form.publishDate.value;
    const genre = form.genre.value;

    const newInfo = { image, title, description, rating, publishDate, genre };
    console.log(newInfo);

    fetch(`http://localhost:5000/games`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newInfo)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    });


  };

  return (
    <div>
      <h2 className="font-bold text-3xl text-center my-8">Add New Review</h2>

      <form
        onSubmit={handleSubmit}
        className="w-11/12 mx-auto p-6 bg-gray-100 shadow-md rounded-lg mt-10"
      >
        {/* Game Cover Image URL */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Game Cover Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="https://example.com/image.jpg"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        {/* Game Title */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Game Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter game title"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        {/* Review Description */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Review Description</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Write your review..."
            className="w-full px-4 py-2 border rounded-md"
            required
          ></textarea>
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Rating</label>
          <select name="rating" className="w-full px-4 py-2 border rounded-md">
            <option value="1">⭐ 1</option>
            <option value="2">⭐⭐ 2</option>
            <option value="3">⭐⭐⭐ 3</option>
            <option value="4">⭐⭐⭐⭐ 4</option>
            <option value="5">⭐⭐⭐⭐⭐ 5</option>
          </select>
        </div>

        {/* Publish Date */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Publishing Date</label>
          <input
            type="date"
            name="publishDate"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        {/* Genre */}
        <div className="mb-6">
          <label className="block font-medium mb-1">Genre</label>
          <select name="genre" className="w-full px-4 py-2 border rounded-md">
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="RPG">RPG</option>
            <option value="Shooter">Shooter</option>
            <option value="Horror">Horror</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReviews;
