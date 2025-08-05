import { useState } from "react";

const TextInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    const messageData = {
      textBox: text,
    };

    fetch("http://localhost:5000/textContain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(messageData),
    })
      .then((res) => res.json())
      .then((result) => {
        
        onSend({
          ...messageData,
          _id: result.insertedId,
          createdAt: new Date(),
        });
        setText(""); 
      });
  };

  return (
    <div className="flex gap-2">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textarea textarea-bordered  border-blue-400 w-full "
        placeholder="Type your message..."
      />
      <button onClick={handleSend} className="btn btn-primary">
        Send
      </button>
    </div>
  );
};

export default TextInput;
