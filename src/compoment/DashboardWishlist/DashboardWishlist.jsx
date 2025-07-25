import { MdDeleteForever, MdShoppingCartCheckout } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import {
  addToStoredCardList,
  getStoreAddToCard,
  removeFromStoredWishList,
} from "../../utility/addToDB";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const DashboardWishlist = ({ gadget, onDelete }) => {
  const { id, product_name, price, product_image, description } = gadget;

  const handleAddToCard = (id) => {
    Swal.fire({
      title: "Move to Cart?",
      text: "Do you want to move this item from wishlist to cart?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#9538E2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, move it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const cartList = getStoreAddToCard(); //  [NEW LINE] check if already in cart

        if (cartList.includes(id)) {
          // [NEW BLOCK] If already in cart, show error
          Swal.fire(
            "❌ Already exists",
            "This item is already in your cart.",
            "error"
          );
          return; // stop here
        }

        addToStoredCardList(id);
        removeFromStoredWishList(id);
        window.dispatchEvent(new Event("storageUpdate"));
        onDelete(id); // UI theke Wishlist  Remove

        Swal.fire("Moved!", "Item has been moved to cart.", "success");
      } else {
        Swal.fire("Cancelled", "Item is still in your wishlist.", "info");
      }
    });
  };
  return (
    <div>
      <div className="md:flex p-10 max-w-6xl mx-auto border-2 border-[#ebe0f5] rounded-2xl m-5">
        <div>
          <img
            className="md:w-42 md:h-38 w-60 h-48 mx-auto"
            src={product_image}
            alt=""
          />
        </div>
        <div className="md:ms-16 space-y-3">
          <h2 className="text-xl font-semibold mt-2">{product_name}</h2>
          <p className="text-[#09080F99]">{description}</p>
          <p className="flex items-center text-[#09080FCC] font-semibold text-lg">
            Price: &nbsp; {price}
            <span className="text-xl">
              <TbCurrencyTaka />
            </span>
          </p>
          <button
            onClick={() => handleAddToCard(id)}
            className="btn text-white w-[170px] rounded-lg hover:bg-[#7949a0] bg-[#9538E2]"
          >
            Add To Cart{" "}
            <span className="text-xl">
              <MdShoppingCartCheckout />
            </span>
          </button>
        </div>
        <div className="mx-auto">
          <button
            onClick={() => onDelete(id)}
            className="btn text-3xl bg-[#9538E2] mt-2 text-white hover:bg-red-600"
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
};

DashboardWishlist.propTypes = {
  gadget: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DashboardWishlist;
