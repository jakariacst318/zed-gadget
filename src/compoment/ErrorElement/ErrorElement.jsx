import { Link } from "react-router-dom";
import errorPageVideo from "./errorPage404.mp4";
import { TiWarningOutline } from "react-icons/ti";

const ErrorElement = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="max-w-xl  mt-6 rounded-4xl">
        <video autoPlay muted loop>
          <source src={errorPageVideo} />
        </video>
      </div>

      <Link to={"/"}>
        <button className="btn mt-3  w-40 btn-outline border-3 bg-yellow-400 hover:bg-[#23BE0A] hover:border-0 hover:text-white text-red-600 border-red-500 text-xl"><span className="text-2xl"><TiWarningOutline /></span>Home</button>
      </Link>
    </div>
  );
};

export default ErrorElement;
