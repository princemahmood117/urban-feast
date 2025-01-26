import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed shadow-2xl z-20 w-full bg-opacity-">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to={'/'} >
          <h1 className="text-white md:text-3xl text-xl"><span className="font-[outfit]">Urban</span> <span className="font-[roboto]">Feast</span></h1>
          </Link>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 cursor-pointer"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:-top-5 md:relative md:bg-transparent md:w-auto md:flex md:items-center  ${
            isOpen
              ? "translate-x-0 opacity-100 bg-gray-800 "
              : "opacity-0 translate-y-full md:opacity-100 md:translate-x-0"
          }`}
        >
          <div className="flex flex-col md:flex-row md:mx-6 justify-center items-center md:justify-center md:items-center">
            <Link
              className="my-2 text-gray-700 font-[roboto] transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Home
            </Link>

            <Link
              className="my-2 text-gray-700 font-[roboto] transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Menu
            </Link>

            <Link
              className="my-2 text-gray-700 font-[roboto] transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Contact
            </Link>

            <Link
            to={'/reviews'}
              className="my-2 text-gray-700 font-[roboto] transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Customer Reviews
            </Link>

            <Link
              className="mt-2 text-gray-700 font-[roboto] transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Login
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
