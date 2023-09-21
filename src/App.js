import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Homestay from "./pages/Homestay";
import LocationPage from "./components/LocationPage";
import BaseLayout from "./layout/BaseLayout";
import Navbar from "./layout/Navbar";
import Location from "./pages/Location";
import HomestayDetails from "./components/HomestayDetails";
import Login from "./pages/Login";
import SignUp from "./pages/Register";
import ErrorPage from "./components/ErrorPage";
import PaymentForm from "./components/PaymentMethod";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/homestay" element={<Homestay />} />
          <Route path="/homestay/:homestayId" element={<HomestayDetails />} />
          <Route path="/location" element={<Location />} />
          <Route path="/location/:locationId" element={<LocationPage />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/payment" element={<PaymentForm/>} />
          <Route path="*" element={<ErrorPage/>} />
        
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
