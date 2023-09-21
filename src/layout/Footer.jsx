import React from "react";
import { NavLink } from "react-router-dom";
import footerlogo from '../assets/logo1.png';
import { FaHome, FaHotel, FaMapMarkerAlt, FaEnvelope, FaPhone, FaLock } from 'react-icons/fa';
import { SiFacebook, SiTwitter, SiInstagram, SiTiktok } from 'react-icons/si'; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-700 to-black">
      <div className="flex flex-col justify-around py-16 space-y-10 md:flex-row md:space-y-0 px-20">
        <div className="grow md:max-w-[300px] flex flex-col justify-start items-center text-justify">
          <img className="max-w-[60%]" src={footerlogo} alt="logo" />
          <p className="mt-5 text-sm text-neutral-300">
            MeroHomestay provides all the information you need to find the
            perfect homestay for your next trip. You can search for homestays by
            location, amenities, and price, and read reviews from previous
            guests to help you make your decision.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center md:min-w-[200px] text-neutral-200">
          <h6 className="font-semibold">Quick Links</h6>
          <div className="flex items-center mt-2">
            <FaHome className="footer-icon" />
            <NavLink to="/">
              <p className="ml-1 text-sm">Home</p>
            </NavLink>
          </div>
          <div className="flex items-center mt-2">
            <FaMapMarkerAlt className="footer-icon" />
            <NavLink to="/location">
              <p className="ml-1 text-sm">Location</p>
            </NavLink>
          </div>
          <div className="flex items-center mt-2">
            <FaHotel className="footer-icon" />
            <NavLink to="/homestay">
              <p className="ml-1 text-sm">Homestay</p>
            </NavLink>
          </div>
          <div className="flex items-center mt-2">
            <FaLock className="footer-icon" />
            <NavLink to="/privacy">
              <p className="ml-1 text-sm">Privacy Policy</p>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:min-w-[200px] text-neutral-200">
          <h6 className="font-semibold">Contact</h6>
          <div className="flex items-center mt-2">
            <FaMapMarkerAlt className="footer-icon" />
            <p className="ml-1 text-sm">Parshyang-05, Pokhara</p>
          </div>
          <div className="flex items-center mt-2">
            <FaEnvelope className="footer-icon" />
            <p className="ml-1 text-sm">hello@clinchtech.net</p>
          </div>
          <div className="flex items-center mt-2">
            <FaPhone className="footer-icon" />
            <p className="ml-1 text-sm">+977-9802834141</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:min-w-[200px] text-neutral-200">
          <h6 className="font-semibold">Follow Us</h6>
          <div className="flex items-center mt-2">
            <SiFacebook className="footer-icon" />
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="ml-1 text-sm">Facebook</a>
          </div>
          <div className="flex items-center mt-2">
            <SiTwitter className="footer-icon" />
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="ml-1 text-sm">Twitter</a>
          </div>
          <div className="flex items-center mt-2">
            <SiInstagram className="footer-icon" />
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="ml-1 text-sm">Instagram</a>
          </div>
          <div className="flex items-center mt-2">
            <SiTiktok className="footer-icon" />
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="ml-1 text-sm">TikTok</a>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 border-t border-x-neutral-700 text-center bg-gray-900">
        <p className="normal-text text-neutral-300">
          Copyright &copy; 2023. All rights reserved by
          <NavLink to="https://www.clinchtech.net" className="pl-2 underline">
            Clinchtech
          </NavLink>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
