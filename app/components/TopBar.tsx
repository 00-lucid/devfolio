import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TopBar() {
  const [show, setShow] = useState(true);
  const controlTopBar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlTopBar);
    return () => {
      window.removeEventListener("scroll", controlTopBar);
    };
  }, []);

  return (
    <nav
      className={`fixed ease-in	duration-200 w-screen left-0 flex items-center justify-between flex-wrap bg-main-black p-6 ${
        show && "bg-main-black/0"
      }`}
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link
          to={``}
          className={`font-bold text-2xl tracking-tight ${
            show && "text-black"
          }`}
        >
          Devfolio
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to={`showcase`}
            className={`block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white ${
              show && "hover:text-black"
            } mr-4`}
          >
            showcase
          </Link>
          <Link
            to={`recruitment`}
            className={`block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white ${
              show && "hover:text-black"
            } mr-4`}
          >
            recruitment
          </Link>
        </div>
        <div>
          <Link
            to={`login`}
            className={`inline-block ${
              show && "bg-white"
            } text-sm px-4 py-2 leading-none border rounded ${
              show ? "text-black" : "text-white"
            } ${show ? "border-black" : "border-white"} ${
              show && "border-black"
            }hover:border-transparent ${
              show ? "hover:text-white" : "hover:text-black"
            } ${show && "hover:bg-main-black"} hover:bg-white mt-4 lg:mt-0`}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
