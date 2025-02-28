import { MdMenu } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

export default function navbar() {
  const [nav, setNav] = useState(false);

  const action = () => {
    setNav(!nav);
  };

  return (
    <header>
      <nav className="text-white flex justify-between h-24 max-w-[1240px] px-4 m-auto items-center">
        <h1 className="w-full text-3xl font-bold text-[#00df9a] uppercase">
          React.
        </h1>
        <ul className="md:flex hidden uppercase font-semibold">
          <a className="p-4" href="#">
            Home
          </a>
          <a className="p-4" href="#">
            Company
          </a>
          <a className="p-4" href="#">
            Resource
          </a>
          <a className="p-4" href="#">
            About
          </a>
          <a className="p-4" href="#">
            Contact
          </a>
        </ul>

        {/* setting for mobile screens */}

        <div onClick={action} className="md:hidden">
          {nav ? <IoIosCloseCircleOutline size={30} /> : <MdMenu size={30} />}
        </div>

        <div
          className={
            nav
              ? "fixed left-0 top-0 h-full w-[60%] bg-gray-900 p-4 md:hidden ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] p-3 uppercase">
            React.
          </h1>
          <ul className="uppercase font-semibold flex flex-col">
            <a className="p-4 border-b border-b-gray-600" href="#">
              Home
            </a>
            <a className="p-4 border-b border-b-gray-600" href="#">
              Company
            </a>
            <a className="p-4 border-b border-b-gray-600" href="#">
              Resource
            </a>
            <a className="p-4 border-b border-b-gray-600" href="#">
              About
            </a>
            <a className="p-4" href="#">
              Contact
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
}
