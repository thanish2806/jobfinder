import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
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
      setLoading(false); // simulate data loading
    }, 1000); // you can adjust the timeout

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-container-2">
        <HeroSection />
        <Courses />
        <Resume />
        <Jobsection />
        <button className="chat-icon" onClick={toggleChat}>
          <MessageCircle size={28} />
        </button>
        <div className={`chat-container ${showChat ? "visible" : ""}`}>
          <Chat />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
