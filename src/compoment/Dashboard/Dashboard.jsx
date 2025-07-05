import {
  MdKeyboardDoubleArrowUp,
  MdShoppingCartCheckout,
} from "react-icons/md";
import { MdBookmarkAdd } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { TbAdjustments } from "react-icons/tb";
import { LuGauge } from "react-icons/lu";
import { RiSlowDownLine } from "react-icons/ri";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { getStoreAddToCard, getStoreWishList } from "../../utility/addToDB";
import DashboardCard from "../DashboardCard/DashboardCard";
import DashboardWishlist from "../DashboardWishlist/DashboardWishlist";
import { removeFromStoredCardList } from "../../utility/addToDB";
import { removeFromStoredWishList } from "../../utility/addToDB";
import Swal from "sweetalert2";

import paymentImages from "./payment zed gadged.png";

const Dashboard = () => {
  const gadgets = useLoaderData();

  const [cardList, setCardList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const navigate = useNavigate();

  const totalCardCost = cardList.reduce(
    (sum, item) => sum + (item.price || 0),
    0
  );

//   console.log("tomar gadget", gadgets);

  //  Delete ID From Card

  const handleDeleteFromCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to remove this item from your cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9538E2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromStoredCardList(id);
        const updatedList = cardList.filter((item) => item.id !== id);
        setCardList(updatedList);
        Swal.fire(
          "Deleted!",
          "Item has been removed from your cart.",
          "success"
        );
      }
    });
  };

  // Delete ID From Wishlist 
 
  const handleDeleteFromWishlist = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to remove this item from your wishlist.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9538E2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromStoredWishList(id);
        const updatedList = wishList.filter((item) => item.id !== id);
        setWishList(updatedList);
        Swal.fire(
          "Deleted!",
          "Item has been removed from wishlist.",
          "success"
        );
      }
    });
  };

  //

  //   parse / payment button

  const paymentButton = () => {
  Swal.fire({
    title: "✅ Payment Successful!",
    html: `<b>Total Paid: ${totalCardCost.toFixed(2)} ৳</b>`,
    imageUrl: paymentImages,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Payment Success Image",
    confirmButtonColor: "#9538E2",
    confirmButtonText: "Close",
  }).then((result) => {
    if (result.isConfirmed) {
      //  LocalStorage theke remove
      localStorage.removeItem("add-to-card");

      //  Notify Navbar
      window.dispatchEvent(new Event("storageUpdate")); 

      //  State reset
      setCardList([]);

      //  Redirect to Home
      navigate("/");
    }
  });
};

  //   data effect

  useEffect(() => {
    const storeAddCardList = getStoreAddToCard();
    // console.log(storeAddCardList, gadgets);
    const addCardList = gadgets.filter((gadget) =>
      storeAddCardList.includes(gadget.id)
    );
    setCardList(addCardList);
  }, []);

  useEffect(() => {
    const storeToWishlist = getStoreWishList();
    // console.log(storeAddCardList, gadgets);
    const addToWishlist = gadgets.filter((gadget) =>
      storeToWishlist.includes(gadget.id)
    );
    setWishList(addToWishlist);
  }, []);

  //   sort By price
  const handleSortBy = (sortType) => {
    setSortBy(sortType);
    if (sortType === "low to high") {
      const sorted = [...cardList].sort((a, b) => a.price - b.price);
      setCardList(sorted);
    } else if (sortType === "high to low") {
      const sorted = [...cardList].sort((a, b) => b.price - a.price);
      setCardList(sorted);
    }
  };

  return (
    <div>
      <div className="mb-20 ">
        <div className="">
          <div className="bg-[#9538E2] h-52">
            <h2 className="text-center text-white text-3xl font-bold lg:text-4xl lg:pt-8 md:pt-5 pt-2">
              Dashboard
            </h2>
            <p className="text-center text-white lg:py-5  p-2">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>

          <div className="flex justify-center gap-x-6 ">
            <Tabs>
              <TabList className="flex items-center justify-center -mt-18">
                <Tab className=" btn w-[170px] btn-outline rounded-full bg-[#9538E2] border-2 border-white hover:bg-white text-white hover:text-[#9538E2] ">
                  Card
                  <span className="text-xl">
                    <MdShoppingCartCheckout />
                  </span>
                </Tab>
                <Tab className="btn w-[170px] btn-outline rounded-full bg-[#9538E2] border-2 border-white hover:bg-white text-white hover:text-[#9538E2] ms-10 ">
                  Wishlist{" "}
                  <span className="text-xl ">
                    <MdBookmarkAdd />
                  </span>
                </Tab>
              </TabList>

              <TabPanel className="">
                <div className="lg:flex md:flex  items-center justify-between mt-14 mb-20 p-2">
                  <div>
                    <h2 className="text-xl font-semibold ">Card</h2>
                  </div>
                  <div className="lg:flex md:flex items-center justify-end gap-x-5">
                    <div>
                      <h2 className="text-xl font-semibold py-4">
                        Total cost:{" "}
                        <span className="text-[#9538E2]">
                          {totalCardCost.toFixed(2)}
                        </span>
                      </h2>
                    </div>
                    <div className="dropdown dropdown-start">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn m-1  w-[170px] btn-outline rounded-full bg-white border-2 border-[#9538E2] hover:bg-[#9538E2]  text-[#9538E2] hover:text-white  "
                      >
                        {sortBy ? ` ${sortBy}` : "Sort By Price"}
                        <span className="font-semibold text-xl">
                          <TbAdjustments />
                        </span>
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-[#643c85] rounded-box z-1 w-52 p-2 shadow-sm text-white"
                      >
                        <li onClick={() => handleSortBy("low to high")}>
                          <a>
                            Low to High{" "}
                            <span className="text-xl">
                              <RiSlowDownLine />
                            </span>
                          </a>
                        </li>
                        <li onClick={() => handleSortBy("high to low")}>
                          <a>
                            High to Low{" "}
                            <span className="text-xl ">
                              <LuGauge />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <button
                      onClick={paymentButton}
                      className="btn text-white font-medium w-[170px] rounded-lg  hover:bg-[#9538E2] bg-[#7949a0] "
                    >
                      Payment
                    </button>
                  </div>
                </div>
                <div>

                  {cardList.map((gadget) => (
                    <DashboardCard
                      key={gadget.id}
                      gadget={gadget}
                      onDelete={handleDeleteFromCart}
                    ></DashboardCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="flex items-center justify-items-center justify-between mt-14 mb-20">
                  <div>
                    <h2 className="text-xl font-semibold p-2">Wishlist</h2>
                  </div>
                </div>
                <div>
                  {wishList.map((gadget) => (
                    <DashboardWishlist
                      key={gadget.id}
                      gadget={gadget}
                      onDelete={handleDeleteFromWishlist}
                    ></DashboardWishlist>
                  ))}
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
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

export default Dashboard;
