import React from "react";
import { Link } from "react-router-dom";
import { popularPlaces } from "../components/popularPlaces";

const Card = ({ locationId, image, title }) => {
  return (
    <div className="relative overflow-hidden ease-in duration-200 hover:bg-opacity-40 hover:scale-105">
      <Link to={`/location/${locationId}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover rounded-lg "
          style={{ objectPosition: "center center" }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-40 rounded-lg">
          <h2 className="text-white text-2xl font-extrabold text-center">
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

const Location = () => {
  return (
    <div className="bg-gradient-to-b from-gray-500 to-black">
      <div className="container mx-auto px-4 sm:px-8 lg:px-28 py-6">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-2 inline text-gray-300">
            Popular Locations
          </h1>
          <p className="text-xl text-gray-300 mt-2">
            See all the popular locations
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {popularPlaces.map((place, index) => (
            <Card
              key={index}
              locationId={place.locationId}
              image={place.image}
              title={place.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location;
