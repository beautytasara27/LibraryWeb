import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("sd",location.pathname)
  return (
    <header className="w-full flex justify-center bg-black bg-opacity-40  h-20 items-center  backdrop-blur-sm ">
      <div className="w-full max-w-6xl py-2">
        <div className="mx-0 flex space-x-2 md:space-x-0 md:justify-between items-center">
          <div className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
          <div className="md:w-1/3">
            <div className="full">
              <div className="center-desk">
                <h1 className="font-poppins-bold text-3xl">KD Library</h1>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-2/3">
            <nav className="">
              <ul className="flex justify-end space-x-10 uppercase font-poppins-regular text-base">
                <li
                  className={
                    location.pathname.toLowerCase() === "/"
                      ? `text-malibu underline underline-offset-4`
                      : ``
                  }
                >
                  <Link to="/">
                    <span className="">Home</span>
                  </Link>
                </li>
                <li
                  className={
                    location.pathname.toLowerCase() === "/about"
                      ? `text-malibu underline underline-offset-4`
                      : ``
                  }
                >
                  <Link to="/about">
                    <span>About Us</span>
                  </Link>
                </li>
                <li
                  className={
                    location.pathname.toLowerCase() === "/books"
                      ? `text-malibu underline underline-offset-4`
                      : ``
                  }
                >
                  <Link to="/books">
                    <span>Our Books</span>
                  </Link>
                </li>
                <li
                  className={
                    location.pathname.toLowerCase() === "/library"
                      ? `text-malibu underline underline-offset-4`
                      : ``
                  }
                >
                  <Link to="/library">
                    <span>Library</span>
                  </Link>
                </li>
                <li
                  className={
                    location.pathname.toLowerCase() === "/contact"
                      ? `text-malibu underline underline-offset-4`
                      : ``
                  }
                >
                  <Link to="/contact">
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {menuOpen && (
          <div className="px-2 w-full absolute top-20 z-30 bg-black bg-opacity-60 backdrop-blur-sm h-screen" onClick={()=>setMenuOpen(false)}>
            <div className="flex justify-end my-2" onClick={()=>setMenuOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <nav className="bg-white text-black" >
              <ul className="uppercase font-poppins-regular text-base space-y-6 px-2 pt-2 pb-14">
                <li
                  className={
                    location.pathname.toLowerCase() === "/"
                      ? `text-malibu`
                      : ``, `border-b border-gray-200 pb-2 pt-4`
                  }
                >
                  <Link to="/" className="block">
                    <span>Home</span>
                  </Link>
                </li>
                <li
                  className={
                    location.pathname.toLowerCase() === "/about"
                      ? `text-malibu`
                      : ``, `border-b border-gray-300 pb-2`
                  }
                >
                  <Link to="/about" className="block">
                    <span>About Us</span>
                  </Link>
                </li>
                <li
                  className={
                    location.pathname.toLowerCase() === "/books"
                      ? `text-malibu`
                      : ``, `border-b border-gray-200 pb-2`
                  }
                >
                  <Link to="/books" className="block">
                    <span>Our Books</span>
                  </Link>
                </li>
                <li
                  className={
                    location.pathname.toLowerCase() === "/library"
                      ? `text-malibu`
                      : ``, `border-b border-gray-200 pb-2`
                  }
                >
                  <Link to="/library" className="block">
                    <span>Library</span>
                  </Link>
                </li>
                <li
                  className={
                    location.pathname.toLowerCase() === "/contact"
                      ? `text-malibu`
                      : ``, `border-b border-gray-200 pb-2`
                  }
                >
                  <Link to="/contact" className="block">
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
