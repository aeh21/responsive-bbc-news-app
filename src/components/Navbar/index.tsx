import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import cx from "classnames";

const NAV_LINKS = [
  {
    path: "/",
    label: "Home",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useLocation();

  return (
    <nav className="w-full bg-white">
      <div className="justify-between md:justify-left mx-auto container md:items-center md:flex space-x-4">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link to="/" className="text-gray-600 hover:text-blue-600">
            <img
              src="/img/BBC_Logo_2021.svg"
              alt="BBC Logo 2021"
              width={112}
              height={32}
            />
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white fill-nero"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white stroke-nero stroke-2 fill-none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={cx(
            "flex-1 justify-self-center pb-3 mt-3 md:block md:pb-0 md:mt-0",
            {
              block: isOpen,
              hidden: !isOpen,
            }
          )}
        >
          <ul className="items-center justify-left space-y-8 md:flex md:space-x-6 md:space-y-0">
            {NAV_LINKS.map((link) => {
              return (
                <li key={link.path} className="hover:text-bbc-red">
                  <Link
                    to={link.path}
                    className={pathname === link.path ? "text-bbc-red" : ""}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
