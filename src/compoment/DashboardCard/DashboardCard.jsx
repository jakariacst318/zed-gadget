import { TbCurrencyTaka } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";

const DashboardCard = ({ gadget, onDelete }) => {
  const { id, product_name, price, product_image, description } = gadget;

  return (
    <div className="">
      <div className="md:flex border-2 border-[#ebe0f5] rounded-2xl m-5  p-10 max-w-6xl mx-auto ">
        <div>
          <img
            className="md:w-42 md:h-38 w-60 h-48 mx-auto"
            src={product_image}
            alt=""
          />
        </div>
        <div className="md:ms-16 space-y-3">
          <h2 className="text-xl font-semibold mt-2">{product_name} </h2>
          <p className="text-[#09080F99]">{description}</p>
          <p className="flex items-center text-[#09080FCC] font-semibold text-lg ">
            Price: &nbsp; {price}{" "}
            <span className="text-xl ">
              {" "}
              <TbCurrencyTaka />
            </span>
          </p>
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

DashboardCard.propTypes = {
  gadget: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default DashboardCard;
