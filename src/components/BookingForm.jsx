import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookingForm = ({ homestayName, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adults: "",
    children: "",
    roomType: "",
    specialRequests: "",
    paymentMethod: "creditCard", // Default payment method
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking form data:", formData);
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form
      className="bg-white shadow-2xl rounded p-4 mt-4 sm:mt-8"
      onSubmit={handleSubmit}
    >
      <h1 className="text-lg text-center text-neutral-600 font-semibold mb-4">
        Book {homestayName}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="checkIn"
          >
            Check-in Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="checkIn"
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="checkOut"
          >
            Check-out Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="checkOut"
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
            min={formData.checkIn}
            disabled={!formData.checkIn}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="adults"
          >
            Adults
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="adults"
            type="number"
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="children"
          >
            Children
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="children"
            type="number"
            name="children"
            value={formData.children}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="roomType"
          >
            Room Type
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="roomType"
            type="text"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="mt-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="specialRequests"
        >
          Special Requests
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="specialRequests"
          name="specialRequests"
          rows="3"
          value={formData.specialRequests}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center justify-center mt-4">
        <button
          className="bg-blue-500 hover:bg-sky-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          <Link to="/payment">
          Submit Booking
          </Link>
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
