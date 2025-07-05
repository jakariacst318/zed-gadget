import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Gadgets from "../Gadgets/Gadgets";

const CategoriesSidebar = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="lg:mt-72 mt-36 text-center text-3xl font-bold lg:text-4xl mb-14 ">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className=" lg:flex gap-10 mx-auto">
        <div className="mb-7">
          <ul className="menu bg-[#643c85] text-white rounded-box w-56">
            <li>
              <h2 className="menu-title text-center bg-[#9538E2] rounded-full text-white">
                All Product
              </h2>
              <ul>
                <li>
                  <a>Laptops</a>
                </li>
                <li>
                  <a>Phones</a>
                </li>
                <li>
                  <a>Accessories</a>
                </li>
                <li>
                  <a>Smart Watches</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Gadgets></Gadgets>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="btn bg-[#b299cc] text-black hover:text-white hover:bg-[#7949a0] fixed bottom-5 right-5 z-50 shadow-lg rounded-full px-4 py-2"
      >
        Top{" "}
        <span className="text-2xl">
          <MdKeyboardDoubleArrowUp />
        </span>
      </button>
    </div>
  );
};

export default CategoriesSidebar;
