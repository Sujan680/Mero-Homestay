import React, { useState } from "react";
import { Link } from "react-router-dom";
import { popularHomestays } from "../components/popularHomestays";
import { popularPlaces } from "../components/popularPlaces";
import HomeCarousel from "../components/Carousel";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPlaces = popularPlaces.filter((place) =>
    place.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredHomestays = popularHomestays.filter((homestay) =>
    homestay.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-gray-500 to-black min-h-screen">
      <HomeCarousel />
      <div className="container mx-auto py-8 px-4 sm:px-8 lg:px-28">
        <div className="bg-gradient-to-b from-cyan-600 to-black py-6 md:py-12 rounded-2xl mb-4">
          <div className="container mx-auto text-center text-white">
            <h2 className="md:text-2xl lg:text-3xl font-bold mb-4">
              Find Your Perfect Homestay Now!
            </h2>
            <p className="md:text-sm sm:text-xs">
              Explore the best homestays for your next adventure.
            </p>
            <div className="mt-6 flex justify-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 px-4 py-2 text-black rounded-l-md focus:outline-none"
                value={searchTerm}
                onChange={handleSearch}
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition duration-300">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="pb-4 text-gray-400">
          <h1 className="text-xl md:text-2xl font-bold border-b-4 border-gray-400 inline pb-1">
            Popular Places to Visit
          </h1>
          <p className="py-3 text-lg md:text-xl">See Popular Locations</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPlaces.map((place, index) => (
            <Link to={`/location/${place.locationId}`} key={index}>
              <div className="bg-cyan-200 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
                <img
                  src={place.image}
                  alt=""
                  className="w-full h-[180px] mb-4 rounded-md object-cover"
                />
                <h3 className="text-xl text-center font-semibold text-gray-800 mb-2">
                  {place.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="pb-4 text-gray-400 mt-10">
          <h1 className="text-xl md:text-2xl font-bold border-b-4 border-gray-400 inline pb-1">
            Popular Homestays
          </h1>
          <p className="py-3 text-lg md:text-xl">Experience Local Hospitality</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredHomestays.map((homestay, index) => (
            <Link to={`/homestay/${homestay.homestayId}`} key={index}>
              <div className="bg-cyan-300 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
                <img
                  src={homestay.image}
                  alt=""
                  className="w-full h-[180px] md:h-[200px] mb-4 rounded-md object-cover"
                />
                <h3 className="text-xl text-gray-600 font-semibold mb-2">
                  {homestay.place}
                </h3>
                <h3 className="text-xl font-semibold mb-2">{homestay.title}</h3>
                <p className="text-gray-600">{homestay.price}</p>
                <p className="text-gray-600">{homestay.rooms} Rooms</p>
                <p className="text-gray-600">{homestay.amenities}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
