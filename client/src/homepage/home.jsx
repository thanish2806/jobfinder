import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import Courses from "./Courses";
import Chat from "../Chatbot";
import Resume from "./Resumesection";
import { MessageCircle } from "lucide-react";
import "./Home.css";
import Footer from "../components/Footer";
import Jobsection from "./Jobsection";
import Loader from "../components/Loader"; // <-- Import Loader

const Home = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="home-container">
      <HeroSection />
      <Courses />
      <Resume />
      <Jobsection />
      <div className="chat-icon" onClick={toggleChat}>
        <div className="chat-note">
          <p>Help ?</p>
        </div>
        <MessageCircle size={28} />
      </div>
      {showChat && (
        <div className="chat-container visible">
          <Chat />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
