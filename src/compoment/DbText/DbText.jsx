import { LuSend } from "react-icons/lu";
import Navbar from "../Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import AllDBText from "../AllDBText/AllDBText";
const DbText = () => {
  const textContain = useLoaderData();


  const handleAddToText = (event) => {
    event.preventDefault();
    event.target.reset();

    const form = event.target;
    const textBox = form.textBox.value;
    const newBox = { textBox };
    // console.log(newBox);



    fetch("http://localhost:5000/textContain", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBox),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <Navbar></Navbar>

      {
        textContain.map(textCnt => <AllDBText key={textCnt._id} textCnt={textCnt}></AllDBText>)
      }
      
      <div className="bg-[#b3a3c0] h-lvh p-4">

        {/* text area */}
        <div className="flex justify-center items-center gap-4 mt-38">
          <form onSubmit={handleAddToText}>
            <textarea
              placeholder="Primary"
              name="textBox"
              className="textarea textarea-primary"
            ></textarea>
            <button className="btn btn-outline btn-primary">
              <input type="submit" value="Send" />
              <span className="text-xl">
                <LuSend />
              </span>
            </button>
          </form>
        </div>
      </div>


      
    </div>
  );
};

export default DbText;
