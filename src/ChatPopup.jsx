import React, { useState } from 'react';
import './ChatPopup.css';

function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const toggleChat = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleSendMessage = () => {
    if (newMessage) {
      setMessages([...messages, { text: newMessage, user: 'user' }]);
      setNewMessage('');
    }
  };

  return (
    <>
    <button className='open-chat-button' onClick={() => setIsOpen(true)}>Abrir Chat</button>

    <div className={`chat-popup ${isOpen ? 'open' : ''}`}>
      <div className="chat-popup-header" onClick={toggleChat}>
        Chat
      </div>
      <div className="chat-popup-body">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.user}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Enviar</button>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default ChatPopup;
