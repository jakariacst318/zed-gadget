import { MdDeleteForever } from "react-icons/md";

const AllDBText = ({ textCnt }) => {
  const handleDeleteText = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/textContain/${_id}`,{
        method: 'DELETE'
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const { _id, textBox } = textCnt;
  return (
    <div className="bg-[#b3a3c0] p-4">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
            />
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
            />
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="flex gap-20">
          <button
            onClick={() => handleDeleteText(_id)}
            className="btn border-0 text-lg btn-outline hover:bg-[#9538E2]"
          >
            <MdDeleteForever />
          </button>
          <div className="chat-bubble">{textBox}</div>
        </div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    </div>
  );
};

export default AllDBText;
