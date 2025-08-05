import { MdDeleteForever } from "react-icons/md";
import moment from "moment";

const AllDBText = ({ textCnt, onDelete }) => {
  const { _id, textBox, createdAt } = textCnt;
  const sendTime = createdAt ? moment(createdAt).format("LT") : "...";

  return (
    <div className="bg-[#b3a3c0] p-4 rounded-md">
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Receiver"
              src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
            />
          </div>
        </div>
        <div className="chat-header">
          You <time className="text-xs opacity-50">{sendTime}</time>
        </div>
        <div className="flex gap-3 items-center">
          <button
            onClick={() => onDelete(_id)}
            className="btn btn-sm text-lg btn-outline hover:bg-[#9538E2]"
          >
            <MdDeleteForever />
          </button>
          <div className="chat-bubble">{textBox}</div>
        </div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
  );
};

export default AllDBText;
