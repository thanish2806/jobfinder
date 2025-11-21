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
  const [loading, setLoading] = useState(true);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="home-container">
     
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
        <div className={`chat-container ${showChat ? "visible" : ""}`}>
          <Chat />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
