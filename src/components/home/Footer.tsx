import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
   <>
    <div className="bg-teal-950 px-4 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
      <div className="text-center md:text-left mb-4 md:mb-0 w-1/3 max-w-xl">
          <h1 className="text-white text-lg md:text-xl font-semibold break-word">
            Get Connected with us on social networks! Advertisement Approval
            Number: 12310
          </h1>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com" aria-label="Instagram">
            <FaInstagram className="text-white text-2xl hover:text-gray-300" />
          </a>
          <a href="https://www.facebook.com" aria-label="Facebook">
            <FaFacebookSquare className="text-white text-2xl hover:text-gray-300" />
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn">
            <FaLinkedin className="text-white text-2xl hover:text-gray-300" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FaXTwitter className="text-white text-2xl hover:text-gray-300" />
          </a>
        </div>
      </div>
      <div className="border-t border-gray-300 my-4"></div>

    </div>

    <div className="bg-teal-950 px-4 py-8">
      <div className="max-w-6xl mx-auto text-center text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">About Us</h2>
            <p className="text-sm leading-relaxed">
              We are a leading company in the industry, committed to providing top-notch services and products. Our mission is to deliver value and excellence in everything we do.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p className="text-sm leading-relaxed">1234 Street Name, City, Country</p>
            <p className="text-sm mt-1">Email: <a href="mailto:info@example.com" className="hover:underline">info@example.com</a></p>
            <p className="text-sm mt-1">Phone: <a href="tel:(123)456-7890" className="hover:underline">(123) 456-7890</a></p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </div>
   </>
  );
}

export default Footer;
