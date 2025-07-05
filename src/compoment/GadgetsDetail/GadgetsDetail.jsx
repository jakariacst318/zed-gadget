import { useLoaderData, useParams } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import { IoIosStar } from "react-icons/io";
import { MdShoppingCartCheckout } from "react-icons/md";
import { MdBookmarkAdd } from "react-icons/md";
import { addToStoredCardList, addToStoredWishList, } from "../../utility/addToDB";

const GadgetsDetail = () => {
  // *************************************************
  const { id } = useParams();
  const data = useLoaderData();

  const handleAddToCard = (id) => {
    console.log("add to card ::");
    addToStoredCardList(id);
  };

  const handleWishList = (id) => {
    console.log("add to Wish list ::");
    addToStoredWishList(id);
  };

  //   console.log("Loaded Data:", id);
  //   console.log("Loaded Data:", data);

  const gadget = data.find((gadget) => gadget.id === id);
  //   console.log(gadget);

  const {
    product_image,
    product_name,
    price,
    description,
    specification,
    rating,
  } = gadget;

  return (
    <div className="mb-28">
      <div className="bg-[#9538E2] h-80">
        <h2 className="text-center text-white text-3xl font-bold lg:text-4xl pt-10">
          Product Details
        </h2>
        <p className="text-center text-white pt-5">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      {/* card details */}

      <div className=" bg-base-200 max-w-4xl mx-auto  -mt-36  rounded-2xl">
        <div className="flex flex-col md:flex-row p-5 justify-center gap-x-12">
          <div>
            <img
              src={product_image}
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold md:mt-5 mt-12">{product_name}</h1>
            <p className="text-[#09080F99] flex items-center text-xl font-semibold">
              Price: {price}{" "}
              <span className="text-xl">
                <TbCurrencyTaka />
              </span>
            </p>
            <div className="badge badge-dash rounded-full p-2 border-[#7949a0] text-[#309C08]">
              In Stock
            </div>
            <p>{description}</p>
            <div>
              <h3 className="text-xl font-semibold text-[#09080F] ">
                Specification:
              </h3>

              {specification.map((info, index) => (
                <div key={index} className="ms-1 text-[#09080F99] pt-2">
                  {index + 1}. {info}
                </div>
              ))}
            </div>

            <p className="mb-2">Rating </p>
            <div className="flex ">
              <p className="flex text-[#F9C004] text-xl">
                <IoIosStar /> <IoIosStar /> <IoIosStar />
                <IoIosStar />
              </p>
              <p className="ms-4 text-[#09080FCC] font-medium">{rating} </p>
            </div>
            <div className="mx-auto flex justify-between">
              <button
                onClick={() => handleAddToCard(gadget.id)}
                className="btn text-white w-[170px] rounded-lg  hover:bg-[#7949a0] bg-[#9538E2] "
              >
                Add To Card{" "}
                <span className="text-xl">
                  <MdShoppingCartCheckout />
                </span>
              </button>
              <button
                onClick={() => handleWishList(gadget.id)}
                className="btn btn-outline w-[170px] rounded-full bg-white border-dotted border-2 border-[#7949a0] hover:bg-[#9538E2] text-[#9538E2] hover:text-white "
              >
                Wishlist{" "}
                <span className="text-xl">
                  <MdBookmarkAdd />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetsDetail;
