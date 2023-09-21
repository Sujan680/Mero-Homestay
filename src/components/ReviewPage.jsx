import React, { useState } from "react";

function ReviewPage() {
  const [reviews, setReviews] = useState([]);
  const [userReview, setUserReview] = useState({
    user: "",
    rating: "",
    comment: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserReview({ ...userReview, [name]: value });
  };

  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    setUserReview({ ...userReview, image });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new review object
    const newReview = {
      id: Date.now(), // Unique ID, you can use any unique identifier here
      user: userReview.user,
      rating: userReview.rating,
      comment: userReview.comment,
      image: userReview.image,
    };

    // Update the reviews array
    setReviews([...reviews, newReview]);

    // Clear the form
    setUserReview({
      user: "",
      rating: "",
      comment: "",
      image: null,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen  rounded-md">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Display Existing Reviews */}
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-lg font-semibold">{review.user}</h2>
              <p className="text-gray-500">Rating: {review.rating}</p>
              <p className="mt-2">{review.comment}</p>
              {review.image && (
                <img
                  src={URL.createObjectURL(review.image)}
                  alt={`Review by ${review.user}`}
                  className="mt-4 rounded-lg"
                />
              )}
            </div>
          ))}
        </div>

        {/* Add a Review Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-6 p-4 bg-white shadow-md rounded-lg"
        >
          <div className="mb-4">
            <label htmlFor="user" className="block text-gray-700 font-semibold">
              Your Name
            </label>
            <input
              type="text"
              id="user"
              name="user"
              value={userReview.user}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-gray-700 font-semibold"
            >
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={userReview.rating}
              onChange={handleChange}
              min="1"
              max="5"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="comment"
              className="block text-gray-700 font-semibold"
            >
              Review
            </label>
            <textarea
              id="comment"
              name="comment"
              value={userReview.comment}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-semibold"
            >
              Image{" "}
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReviewPage;
