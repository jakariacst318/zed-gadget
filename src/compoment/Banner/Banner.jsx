import { Link } from "react-router-dom";
import bannerImages from "./banner.png";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#9538E2] bg-fixed h-[500px] -mt-18 rounded-b-3xl rounded-t-xl shopeButtonToGadget">
      <div className="max-w-5xl mx-auto space-y-7">
        <h2 className="text-white pt-24 sora font-bold lg:text-5xl text-3xl text-center">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h2>
        <p className="text-white text-center ">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center ">
          <a href="#gadget-section">
            <button className="btn btn-outline w-[170px] text-[#9538E2] rounded-full bg-white hover:border-2 hover:bg-[#9538E2] hover:text-white">
              Shop Now
            </button>
          </a>
        </div>
      </div>
      <div className="flex justify-center mx-auto mt-10">
        <img
          className="lg:max-w-2xl max-w-[400px] border-8 border-[#FFFFFF4D]  rounded-2xl"
          src={bannerImages}
          alt="banner images "
        />
      </div>
      <div className="text-center lg:-mt-40 -mt-28  lg:-mr-52 -mr-42">
        <Link to='/textContain' className="text-[#ff94c8]">(≧∇≦)</Link>
      </div>
    </div>
  );
};

export default Banner;
