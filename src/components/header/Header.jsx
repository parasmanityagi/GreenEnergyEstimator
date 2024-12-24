import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/gee-logo.png';
import { dataContext } from '../../context/GeeContext';

const Header = () => {
  const { handleGetStartedClick } = useContext(dataContext);

  let [mobileMenu, setMobileMenu] = useState(true);

  return (
    <header className="bg-white shadow-md">
      <div className="container">
        {/* desktop menu */}
        <div className="py-2 flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link to="/">
              <img title="GreenEnergyEstimator" className="w-20" src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className='hidden sm:block'>
            <ul className="flex space-x-6">
              <li>
                <Link to="/features" className="text-lg font-medium text-gray-700 hover:text-green-600 transition">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-lg font-medium text-gray-700 hover:text-green-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-lg font-medium text-gray-700 hover:text-green-600 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div>
            <button
              onClick={handleGetStartedClick}
              className="hidden sm:block bg-green-600 text-white text-lg font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Get Started
            </button>

            <div>
              <i className='sm:hidden bi bi-list text-3xl cursor-pointer'
                onClick={() => setMobileMenu(!mobileMenu)}
              />
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`sm:hidden fixed top-0 right-0 bg-white w-[220px] transition h-100 min-h-screen pl-2 overflow-hidden ${mobileMenu ? 'translate-x-[220px]' : 'translate-x-0'}`}
        >
          <div className='mt-8 mb-6'>
            <i className='bi bi-x text-3xl cursor-pointer flex flex-row-reverse pr-3'
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          </div>

          {/* Navigation Links */}
          <nav className=''>
            <ul className="flex flex-col gap-5">
              <li>
                <Link to="/features" className="text-lg font-medium text-gray-700 hover:text-green-600 transition">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-lg font-medium text-gray-700 hover:text-green-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-lg font-medium text-gray-700 hover:text-green-600 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className='mt-6'>
            <button
              onClick={handleGetStartedClick}
              className="bg-green-600 text-white text-lg font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
