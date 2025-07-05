import { MdDeleteForever, MdShoppingCartCheckout } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { addToStoredCardList } from "../../utility/addToDB";
import PropTypes from "prop-types";

const DashboardWishlist = ({ gadget, onDelete }) => {
  const { id, product_name, price, product_image, description } = gadget;

  const handleAddToCard = (id) => {
    addToStoredCardList(id);
  };

  return (
    <div className="">
      <div className="flex  p-10 max-w-6xl mx-auto border-2 border-[#ebe0f5] rounded-2xl m-5">
        <div>
          <img className="w-42 h-38" src={product_image} alt="" />
        </div>
        <div className="ms-16 space-y-3">
          <h2 className="text-xl font-semibold">{product_name} </h2>
          <p className="text-[#09080F99]">{description}</p>
          <p className="flex items-center text-[#09080FCC] font-semibold text-lg ">
            Price: &nbsp; {price}{" "}
            <span className="text-xl ">
              {" "}
              <TbCurrencyTaka />
            </span>
          </p>
          <button
            onClick={() => handleAddToCard(id)}
            className="btn text-white w-[170px] rounded-lg  hover:bg-[#7949a0] bg-[#9538E2] "
          >
            Add To Card{" "}
            <span className="text-xl">
              <MdShoppingCartCheckout />
            </span>
          </button>
        </div>
        <div className=" mx-auto">
          <button
            onClick={() => onDelete(id)}
            className="btn text-3xl bg-[#9538E2] text-white hover:bg-red-600 "
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
};


DashboardWishlist.propTypes = {
  gadget: PropTypes.array.isRequired,
  onDelete: PropTypes.array.isRequired,
};

export default DashboardWishlist;
