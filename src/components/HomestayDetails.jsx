import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { popularHomestays } from "../components/popularHomestays";
import { Transition } from "@headlessui/react";
import BookingForm from "./BookingForm";
import ErrorPage from "./ErrorPage";
import ReviewPage from "./ReviewPage";
import { FaTimes } from "react-icons/fa";

const HomestayDetails = () => {
  const { homestayId } = useParams();
  const homestay = popularHomestays.find((h) => h.homestayId === homestayId);

  const [showForm, setShowForm] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showImages, setShowImages] = useState(false);

  if (!homestay) {
    return <ErrorPage />;
  }

  const handleBookingSubmit = (formData) => {
    console.log("Booking submitted:", formData);
    setShowForm(false);
  };

  return (
    <div className="bg-gradient-to-b from-gray-500 to-black min-h-screen">
      <div className="container mx-auto px-4 sm:px-8 lg:px-28 py-8">
        <Link
          to="/homestay"
          className="mb-4 text-2xl text-gray-300 border-b-2 inline pb-1 font-semibold"
        >
          See the Popular Homestays
        </Link>
        <div className="bg-cyan-200 rounded-lg shadow-2xl mt-4 p-5">
          <h1 className="text-3xl md:text-2xl text-gray-700 font-bold">
            {homestay.place}
          </h1>
          <h2 className="text-xl font-bold text-neutral-600 mb-2 underline">
            Galleries of {homestay.place}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {homestay.images
              .slice(0, showImages ? undefined : 1)
              .map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden bg-white rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
                >
                  <img
                    className="w-full h-auto md:h-40 object-cover rounded-lg"
                    src={image}
                    alt={`Homestay ${index + 1}`}
                  />
                </div>
              ))}
          </div>
          {!showImages && (
            <button
              onClick={() => setShowImages(true)}
              className="text-blue-500 hover:underline mt-2"
            >
              Show More Images
            </button>
          )}
        </div>
        <div className="bg-cyan-200 rounded-lg shadow-2xl mt-4 p-6">
          <div className="bg-slate-300 rounded-lg p-3">
            <p className="text-gray-700 text-xl md:text-2xl font-bold mb-2 md:mb-4">
              {homestay.title}
            </p>
            <p className="text-gray-800 italic md:text-lg mb-2 md:mb-4">
              {homestay.description}
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <p className="text-gray-700 font-extralight md:text-lg mb-2 md:mb-0">
                Price: {homestay.price}
              </p>
            </div>
            <p className="text-gray-700 italic mt-2">{homestay.amenities}</p>
          </div>
        </div>
        <div className="">
          <div className="mt-4 border p-4 rounded-md bg-cyan-200">
            <h2 className="text-2xl text-black font-bold ">
              Book {homestay.title}
            </h2>
            <p className="py-2">You can book the homestay here.</p>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-sky-300"
            >
              Book Now
            </button>
            {showForm && (
              <button
                onClick={() => setShowForm(false)}
                className="text-red-600 hover:text-red-800 float-right"
              >
                <FaTimes />
              </button>
            )}
            <Transition
              show={showForm}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="mt-4">
                <BookingForm
                  homestayName={homestay.title}
                  onSubmit={handleBookingSubmit}
                />
              </div>
            </Transition>
          </div>
        </div>
        <div className="mt-4 border p-4 rounded-md bg-cyan-200">
          <p className="py-2">Add Review here.</p>
          <button
            onClick={() => setShowReview(!showReview)}
            className="bg-green-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-green-300"
          >
            Review
          </button>
          {showReview && (
            <button
              onClick={() => setShowReview(false)}
              className="text-red-600 hover:text-red-800 float-right"
            >
              <FaTimes />
            </button>
          )}
          <Transition
            show={showReview}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="mt-4">
              <ReviewPage />
            </div>
          </Transition>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl text-white font-bold mb-4">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularHomestays
              .filter((h) => h.homestayId !== homestay.homestayId)
              .slice(1, 5)
              .map((relatedHomestay) => (
                <div
                  key={relatedHomestay.homestayId}
                  className="bg-cyan-200 rounded-lg border text-center shadow-lg p-4"
                >
                  <img
                    className="w-full h-40 object-cover rounded-lg mb-4"
                    src={relatedHomestay.image}
                    alt={relatedHomestay.title}
                  />
                  <p className="text-gray-900 text-xl font-bold">
                    {relatedHomestay.place}
                  </p>
                  <p className="text-gray-900 font-semibold">
                    {relatedHomestay.title}
                  </p>
                  <p className="text-gray-900 font-semibold">
                    Rooms: {relatedHomestay.rooms}
                  </p>
                  <p className="text-gray-900 font-semibold mb-2">
                    Price: {relatedHomestay.price}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomestayDetails;
