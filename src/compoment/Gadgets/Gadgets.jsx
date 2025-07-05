import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadget] = useState([]);

  useEffect(() => {
    fetch("/zedGadget.json")
      .then((res) => res.json())
      .then((data) => setGadget(data));
    console.log(gadgets);
  });

  return (
    <div className="">     

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {gadgets.map((gadget) => (
          <Gadget gadget={gadget} key={gadget._product_id}></Gadget>
        ))}
      </div>
    </div>
  );
};

export default Gadgets;
