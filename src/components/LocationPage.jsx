import React from "react";
import { Link, useParams } from "react-router-dom";
import { popularPlaces } from "../components/popularPlaces";
import ErrorPage from "./ErrorPage";

const LocationPage = () => {
  const { locationId } = useParams();
  const location = popularPlaces.find(
    (place) => place.locationId === locationId
  );

  if (!location) {
    return <ErrorPage />;
  }

  const { title, description, homestays } = location;
  const firstHomestay = homestays[0];

  return (
    <div className="bg-gradient-to-b from-gray-500 to-gray-800 min-h-screen p-4 sm:px-28">
      <div className="container mx-auto">
        <Link to="/location">
          <h1 className="mb-4 text-xl md:text-2xl text-gray-300 border-b-2 inline font-semibold">
            View All Locations
          </h1>
        </Link>
        <div className="bg-gray-800 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 p-6 shadow-lg">
          <div className="text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-gray-300 text-md md:text-lg">{description}</p>
          </div>
          <div className="w-full h-[300px] md:h-[400px]">
            <Link to={`/homestay/${firstHomestay.id}`}>
              <img
                src={firstHomestay.image}
                alt={firstHomestay.title}
                className="w-full h-full p-5 object-cover cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <h1 className="text-xl md:text-3xl sm:text-2xl text-white font-bold mt-4 mb-3">
          Homestays in {title}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {homestays.slice(0).map((homestay, index) => (
            <div key={index} className="bg-cyan-300 rounded-lg shadow-md p-4">
              <Link to={`/homestay/${homestay.homestayId}`}>
                <img
                  src={homestay.image}
                  alt={homestay.title}
                  className="w-full h-[150px] sm:h-[150px] rounded-t-md object-cover cursor-pointer"
                />
              </Link>
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">{homestay.title}</h4>
                <p className="text-lg text-slate-500 mt-2">
                  Price: {homestay.price}
                </p>
                <p className="text-lg text-slate-500">
                  Rooms: {homestay.rooms}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
