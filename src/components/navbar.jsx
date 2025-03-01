import { MdMenu } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState, useEffect } from "react";

export default function navbar() {
  const [nav, setNav] = useState(false);

  const action = () => {
    setNav(!nav);
  };

  const navItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Company",
      url: "/Company.html",
    },
    {
      name: "Resource",
      url: "/Resource.html",
    },
    {
      name: "About",
      url: "/About.html",
    },
    {
      name: "Contact",
      url: "/Contact.html",
    },
  ];

  // adding the nav scroll up and down effect

  const [isVisible, setIsVisible] = useState(true);
  const [scrollvalue, setScrollValue] = useState(0);

  useEffect(() => {
    const scrollEffect = () => {
      console.log(window.scrollY);
      if (window.scrollY > scrollvalue) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setScrollValue(window.scrollY);
    };

    window.addEventListener("scroll", scrollEffect);

    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, [scrollvalue]);

  return (
    <header
      className={`bg-gray-900 rounded-lg m-2 fixed top-0 left-0 right-0 z-50 mx-8 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="text-white flex justify-between h-24 max-w-[1240px] px-4 m-auto items-center">
        <h1 className="w-full text-3xl font-bold text-[#00df9a] uppercase">
          React.
        </h1>

        <ul className="md:flex hidden uppercase font-semibold  ">
          {navItems.map((items, index) => (
            <a className="p-4" key={index} href={items.url}>
              {items.name}
            </a>
          ))}
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
            {navItems.map((items, index) => (
              <a
                className="p-4 border-b border-b-gray-600"
                key={index}
                href={items.url}
              >
                {items.name}
              </a>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
