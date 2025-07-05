import { Link } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import { addToStoredCardList } from "../../utility/addToDB";

const Gadget = ({ gadget }) => {
  const { id, product_name, product_image, price } = gadget;

  const addToCardList = (id) => {
    addToStoredCardList(id);
  };

  return (
    <div id="gadget-section">
      <div className="card bg-gray-100 w-76 h-[440px] shadow-sm rounded-2xl mx-auto">
        <figure className="">
          <img
            className="w-[240px] h-[180px p-10 transform transition-transform duration-500 hover:scale-135"
            src={product_image}
            alt="product_image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_name}</h2>
          <p className="text-[#09080F99] flex items-center text-lg">
            Price: {price}{" "}
            <span className="text-xl">
              <TbCurrencyTaka />
            </span>
          </p>
          <div className="card-actions justify-between">
            <Link to={`/gadget/${id}`}>
              <button className="btn btn-outline rounded-full bg-white border-dotted border-2 border-[#7949a0] text-[#9538E2] hover:bg-[#9538E2] hover:text-white ">
                View Details
              </button>
            </Link>

            <button
            onClick={() => addToCardList(id)}
             className="btn text-white rounded-lg  hover:bg-[#7949a0] bg-[#9538E2] ">
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
