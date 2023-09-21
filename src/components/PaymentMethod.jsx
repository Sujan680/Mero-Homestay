import React, { useState } from 'react';

const PaymentForm = ({ onSubmit }) => {
  const [paymentData, setPaymentData] = useState({
    cardholderName: '',
    cardholderEmail: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(paymentData);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white w-full sm:w-96 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-center mb-6">Payment Information</h2>

        <div className="mb-4">
          <label htmlFor="cardholderName" className="block text-gray-700 font-bold mb-2">
            Cardholder's Name
          </label>
          <input
            type="text"
            id="cardholderName"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400"
            placeholder="John Doe"
            name="cardholderName"
            value={paymentData.cardholderName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cardholderEmail" className="block text-gray-700 font-bold mb-2">
            Cardholder's Email
          </label>
          <input
            type="email"
            id="cardholderEmail"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400"
            placeholder="john@example.com"
            name="cardholderEmail"
            value={paymentData.cardholderEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-700 font-bold mb-2">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400"
            placeholder="1234 5678 9012 3456"
            name="cardNumber"
            value={paymentData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="expirationDate" className="block text-gray-700 font-bold mb-2">
              Expiration Date
            </label>
            <input
              type="text"
              id="expirationDate"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400"
              placeholder="MM/YY"
              name="expirationDate"
              value={paymentData.expirationDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cvv" className="block text-gray-700 font-bold mb-2">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400"
              placeholder="123"
              name="cvv"
              value={paymentData.cvv}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full"
          type="submit"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
