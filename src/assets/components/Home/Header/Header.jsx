import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section>
      <div className="navbar bg-[#22d3ee]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
             <h1 className="text-2xl font-bold">Edu College</h1>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-2xl text-white ">
                  <li><Link to="/collegs">Colleges</Link></li>
                  <li><Link to="/admission">Admission</Link></li>
                  <li><Link to="/mycolleges">My College</Link></li>
          </ul>
        </div>
        <div className="avatar">
          <div className="w-16 rounded-full mr-10">
            <img />
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Header;
