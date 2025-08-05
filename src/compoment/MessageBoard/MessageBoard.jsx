import { useEffect, useState } from "react";
import TextInput from "../TextInput/TextInput";
import AllDBText from "../AllDBText/AllDBText";


const MessageBoard = () => {
  const [messages, setMessages] = useState([]);

  // GET all messages from server
  const fetchMessages = () => {
    fetch("http://localhost:5000/textContain")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  };

  useEffect(() => {
    fetchMessages(); 
  }, []);

  
  const handleNewMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/textContain/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
      
        setMessages(messages.filter((msg) => msg._id !== id));
      });
  };

  return (
    <div className="p-4 space-y-4">
      {messages.map((msg) => (
        <AllDBText key={msg._id} textCnt={msg} onDelete={handleDelete} />
      ))}
      <TextInput onSend={handleNewMessage} />
    </div>
  );
};

export default MessageBoard;
