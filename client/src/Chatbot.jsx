import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import './Chatbot.css';

const socket = io('https://jobfinder-backend-m3fz.onrender.com', {
  transports: ['websocket'],
});

function Chat() {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const handleBotReply = (message) => {
      setChat((prev) => [...prev, { sender: 'bot', text: message }]);
      setIsTyping(false);
    };

    socket.on('botReply', handleBotReply);

    return () => {
      socket.off('botReply', handleBotReply);
    };
  }, []);

  useEffect(() => {
    const chatBody = document.querySelector('.chatbot-body');
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }, [chat]);

  const sendMessage = () => {
    if (input.trim() !== '') {
      setChat((prev) => [...prev, { sender: 'user', text: input }]);
      socket.emit('userMessage', input);
      setInput('');
      setIsTyping(true);

      // Simulate typing delay for the bot
      setTimeout(() => {
        setIsTyping(false);
      }, 1000); // Adjust the delay as needed
    }
  };

  return (
    <div className="chatbot-wrapper" role="dialog" aria-labelledby="chatbot-header" aria-describedby="chatbot-description">
      <div className="chatbot-card">
        <div className="chatbot-header" id="chatbot-header">Skillnest Assistant</div>
        <div className="chatbot-body" aria-live="polite">
          {chat.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.sender === 'bot' ? (
                msg.text.split(/(?=Step\s\d+:|Answer:)/).map((part, i) => {
                  if (/^Step\s\d+:/.test(part)) {
                    const match = part.match(/(Step\s\d+:)(.*)/s);
                    return (
                      <div key={i}>
                        <span className="step-label">{match[1]}</span>
                        {match[2]}
                      </div>
                    );
                  } else if (/^Answer:/.test(part)) {
                    return (
                      <div key={i} className="bot-answer">
                        {part}
                      </div>
                    );
                  }
                  return <div key={i}>{part}</div>;
                })
              ) : (
                <div>{msg.text}</div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="chat-message bot typing">
              <em>Thinking...</em>
            </div>
          )}
        </div>
        <div className="chatbot-footer">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            className="chatbot-input"
            placeholder="Ask a question..."
            aria-label="Type your message"
          />
          <button onClick={sendMessage} className="chatbot-send" aria-label="Send message">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
