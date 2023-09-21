import React, { useState } from "react";
import { popularHomestays } from "../components/popularHomestays";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const HomestayCard = ({ image, homestayId, place, title, rooms, price, amenities }) => (
  <div className="group max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
    <Link to={`/homestay/${homestayId}`}>
      <img className="w-full h-32 sm:h-40 object-cover" src={image} alt={title} />
      <div className="px-2 py-2">
        <div className="text-xl text-gray-600 mb-1">{place}</div>
        <h3 className="text-lg text-neutral-700 font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-base mb-1">{price}</p>
        <p className="text-gray-700 text-base">{rooms} Rooms</p>
        <p className="text-gray-600 italic mt-2">{amenities}</p>
      </div>
    </Link>
  </div>
);

const Homestay = () => {
  const [sortBy, setSortBy] = useState("price-low-to-high");
  const [filterBy, setFilterBy] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  const handleLocationFilterChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const handleRatingFilterChange = (event) => {
    setRatingFilter(parseInt(event.target.value, 10));
  };

  const customSortByPrice = (a, b) => {
    if (sortBy === "price-low-to-high") {
      return parseInt(a.price.replace("Rs ", ""), 10) - parseInt(b.price.replace("Rs ", ""), 10);
    } else if (sortBy === "price-high-to-low") {
      return parseInt(b.price.replace("Rs ", ""), 10) - parseInt(a.price.replace("Rs ", ""), 10);
    } else {
      return 0;
    }
  };

  const sortedAndFilteredHomestays = () => {
    let filteredHomestays = popularHomestays;

    if (filterBy !== "all") {
      filteredHomestays = filteredHomestays.filter((homestay) => homestay.rooms === filterBy);
    }

    if (locationFilter !== "all") {
      filteredHomestays = filteredHomestays.filter((homestay) => homestay.place === locationFilter);
    }

    if (ratingFilter > 0) {
      filteredHomestays = filteredHomestays.filter((homestay) => homestay.rating >= ratingFilter);
    }

    return filteredHomestays.sort(customSortByPrice);
  };

  return (
    <div className="bg-gradient-to-b from-gray-500 to-black min-h-screen">
      <div className="container mx-auto px-4 sm:px-4 lg:px-28 py-8">
        <div className="mb-6">
          <h1 className="text-3xl text-gray-300 border-b-2 inline font-bold mb-2">Popular Homestays</h1>
          <p className="text-gray-300 text-xl mt-2">See the popular homestays</p>
        </div>

        <div className="flex flex-wrap justify-start mb-4 space-x-2 space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="sm:w-auto md:w-1/2 lg:w-auto">
            <label className="text-white italic">Sort by:</label>
            <select className="border italic rounded-md ml-2 px-3" value={sortBy} onChange={handleSortChange}>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-high-to-low">Price: High to Low</option>
            </select>
          </div>
          <div className="sm:w-auto md:w-1/2 lg:w-auto">
            <label className="text-white italic">Room Type:</label>
            <select className="border italic rounded-md ml-2 px-3" value={filterBy} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="group">Group</option>
            </select>
          </div>
          <div className="sm:w-auto md:w-1/2 lg:w-auto">
            <label className="text-white italic">Location:</label>
            <select className="border italic rounded-md ml-2 px-3" value={locationFilter} onChange={handleLocationFilterChange}>
              <option value="all">All</option>
              <option value="Kaski">Kaski</option>
              <option value="Ghandruk">Ghandruk</option>
              <option value="Dhampus">Dhmapus</option>
              <option value="Ghorepani">Ghorepani</option>
              <option value="Sikles">Sikles</option>
              <option value="Sirubari">Sirubari</option>
              <option value="Lwang">Lwang</option>
              <option value="Bandipur">Bandipur</option>
            </select>
          </div>
          <div className="sm:w-full md:w-1/2 lg:w-auto">
            <label className="text-white italic">Rating:</label>
            <select className="border italic rounded-md ml-2" value={ratingFilter} onChange={handleRatingFilterChange}>
              <option value={0}>All</option>
              <option value={1}>1 <AiFillStar className="text-yellow-400" /></option>
              <option value={2}>2 <AiFillStar className="text-yellow-400" /></option>
              <option value={3}>3 <AiFillStar className="text-yellow-400" /></option>
              <option value={4}>4 <AiFillStar className="text-yellow-400" /></option>
              <option value={5}>5 <AiFillStar className="text-yellow-400" /></option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center mt-8">
          {sortedAndFilteredHomestays().map((homestay, index) => (
            <HomestayCard key={index} {...homestay} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homestay;
