import React from "react";
import { Link } from "react-router-dom";

const Navabar3 = () => {
  return (
    <div>
      <div
        className="navbar border border-osloGrey p-5 w-full"
        style={{ backgroundColor: "darkred" }}
      >
        <div className="flex justify-between w-1/2">
          <Link to="/">
            <h4 className="font-aclonica text-2xl text-white">Kalla kendra</h4>
          </Link>

          <Link to="/discover">
            <h4 className="font-aclonica text-2xl text-white">Discovery</h4>
          </Link>
          <Link to="/livestreams">
            <h4 className="font-aclonica text-2xl text-white">Livestream</h4>
          </Link>
          <Link to="/Jobs">
            <div className="flex text-white w-24 justify-between">
              {" "}
              <h4 className="font-aclonica text-2xl text-white flex">Jobs</h4>
              <div className="dropdown dropdown-hover">
                {/* <label tabIndex={0} className="btn m-1"> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 m-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
                {/* </label> */}
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black "
                >
                  <li >
                    <Link to="/">Job 1</Link>
                  </li>
                  <li>
                    <Link to="/">Job 2</Link>
                  </li>
                  <li>
                    <Link to="/">Job 3</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navabar3;
