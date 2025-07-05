import { toast } from "react-toastify";

/* ----------- CARD SECTION ----------- */

// Get cart list from localStorage
const getStoreAddToCard = () => {
  const storeAddToCardString = localStorage.getItem("add-to-card");
  if (storeAddToCardString) {
    return JSON.parse(storeAddToCardString);
  }
  return [];
};

const addToStoredCardList = (id) => {
  const storeList = getStoreAddToCard();
  if (!storeList.includes(id)) {
    storeList.push(id);
    localStorage.setItem("add-to-card", JSON.stringify(storeList));
    toast.success("✅ Added to cart");
    window.dispatchEvent(new Event("storageUpdate"));
  } else {
    toast.error("❌ Already exists in the cart");
  }
};
// ---------------------------------

// Remove item from cart
const removeFromStoredCardList = (id) => {
  const storeList = getStoreAddToCard();
  const updatedList = storeList.filter((itemId) => itemId !== id);
  localStorage.setItem("add-to-card", JSON.stringify(updatedList));
  window.dispatchEvent(new Event("storageUpdate")); // Notify for live updates
};
//

/* ----------- WISHLIST SECTION ----------- */

// Get wishlist from localStorage
const getStoreWishList = () => {
  const storeWishListString = localStorage.getItem("add-to-wish-list");
  if (storeWishListString) {
    return JSON.parse(storeWishListString);
  }
  return [];
};

// Add item to wishlist
const addToStoredWishList = (id) => {
  const storeList = getStoreWishList();
  if (!storeList.includes(id)) {
    storeList.push(id);
    localStorage.setItem("add-to-wish-list", JSON.stringify(storeList));
    toast.success("💖 Added to wishlist");
    window.dispatchEvent(new Event("storageUpdate"));
  } else {
    toast.error("❌ Already exists in the wishlist");
  }
};

// Remove item from wishlist ---------------------------

const removeFromStoredWishList = (id) => {
  const storeList = getStoreWishList();
  const updatedList = storeList.filter((itemId) => itemId !== id);
  localStorage.setItem("add-to-wish-list", JSON.stringify(updatedList));
  window.dispatchEvent(new Event("storageUpdate"));
};

/* ----------- EXPORT ALL ----------- */

export {
  getStoreAddToCard,
  addToStoredCardList,
  removeFromStoredCardList,
  getStoreWishList,
  addToStoredWishList,
  removeFromStoredWishList,
};
