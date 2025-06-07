import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CoursesHome.css";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";  // import Loader

const courses = [
  {
    title: "HTML & CSS Basics",
    description: "Learn the fundamentals of web development.",
    duration: "2 Weeks",
    image: "html.jpg",
    link: "/html-css",
  },
  {
    title: "JavaScript Essentials",
    description: "Master JS for interactive web pages.",
    duration: "3 Weeks",
    image: "js.png",
    link: "/javascriptessentials",
  },
  {
    title: "React for Beginners",
    description: "Start building modern front-end apps.",
    duration: "4 Weeks",
    image: "react.png",
    link: "/react-beginers",
  },
  {
    title: "Node.js & Express",
    description: "Backend development with JavaScript.",
    duration: "3 Weeks",
    image: "node.png",
    link: "/node - express",
  },
  {
    title: "Python for Beginners",
    description: "A friendly introduction to Python programming.",
    duration: "3 Weeks",
    image: "py.gif",
    link: "/Python",
  },
  {
    title: "UI/UX Design Fundamentals",
    description: "Learn to design beautiful and user-friendly interfaces.",
    duration: "2 Weeks",
    image: "uiux.jpeg",
    link: "/uiux",
  },
  {
    title: "MongoDB Crash Course",
    description: "Master NoSQL database with practical examples.",
    duration: "2 Weeks",
    image: "mo.avif",
    link: "/mongodb",
  },
  {
    title: "Full Stack Web Development",
    description: "Become a full stack developer with the MERN stack.",
    duration: "6 Weeks",
    image: "full.png",
    link: "/Full Stack Web Development",
  },
  {
    title: "Cybersecurity Basics",
    description:
      "Protect systems and data with essential cybersecurity skills.",
    duration: "2 Weeks",
    image: "cy.png",
    link: "/cybersecurity",
  },
  {
    title: "AI & Machine Learning Intro",
    description: "Dive into the basics of AI and ML with Python.",
    duration: "5 Weeks",
    image: "ai.png",
    link: "/aiml",
  },
  {
    title: "DevOps Essentials",
    description: "Understand CI/CD, Docker, Jenkins, and more.",
    duration: "3 Weeks",
    image: "devops.png",
    link: "/devops",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Sharpen your coding logic and problem-solving skills.",
    duration: "4 Weeks",
    image: "dsa1.webp",
    link: "/dsa",
  },
  {
    title: "Cloud Computing Basics",
    description: "Understand cloud services like AWS, Azure, and GCP.",
    duration: "3 Weeks",
    image: "cloud.webp",
    link: "/cloud",
  },
  {
    title: "Blockchain & Web3 Intro",
    description: " decentralized applications and smart contracts.",
    duration: "3 Weeks",
    image: "bl.webp",
    link: "/blockchain",
  },
  {
    title: "Prompt Engineering for AI",
    description: "Learn to write effective prompts for AI tools like ChatGPT.",
    duration: "1 Week",
    image: "aip.avif",
    link: "/prompt-engineering",
  },
  {
    title: "Flutter App Development",
    description: "Build cross-platform apps with Flutter and Dart.",
    duration: "4 Weeks",
    image: "flu.jpg",
    link: "/flutter",
  },
  {
    title: "Responsive Web Design",
    description: "Design mobile-friendly websites using modern CSS.",
    duration: "2 Weeks",
    image: "res.jpg",
    link: "/responsive-web-design",
  },
  {
    title: "Advanced JavaScript (ES6+)",
    description: "Master modern JavaScript syntax and concepts.",
    duration: "3 Weeks",
    image: "es.png",
    link: "/advancedJS",
  },
  {
    title: "SQL & Relational Databases",
    description: "Understand databases and write complex SQL queries.",
    duration: "3 Weeks",
    image: "sql.jpg",
    link: "/sql",
  },
  {
    title: "Git & GitHub for Developers",
    description: "Version control, collaboration, and GitHub workflows.",
    duration: "1 Week",
    image: "git.png",
    link: "/git-github",
  },
  {
    title: "API Development with Postman",
    description: "Build and test APIs with Postman.",
    duration: "2 Weeks",
    image: "post.jpg",
    link: "/api",
  },
  {
    title: "Machine Learning with TensorFlow",
    description: "Build ML models using TensorFlow and Keras.",
    duration: "4 Weeks",
    image: "tf.jpg",
    link: "/Machine-Learning&TensorFlow",
  },
  {
    title: "Docker for Beginners",
    description: "Containerize your applications and simplify deployment.",
    duration: "2 Weeks",
    image: "doc.jpg",
    link: "/dockerforbeginners",
  },
  {
    title: "Career Prep & Resume Building",
    description: "Dream job with strong resumes and interview skills.",
    duration: "1 Week",
    image: "resu.jpg",
    link: "/careerprep",
  },
];

function CoursesHome() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);  // loading state
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // show loader for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const enroll = (course) => {
    setMessage(`✅ You have successfully enrolled in "${course.title}"`);

    if (course.link) {
      navigate(course.link);
    }

    setTimeout(() => setMessage(""), 3000);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <Loader />
      </>
    );
  }

  return (
    <div>
      <Navbar />

      {message && <div className="message">{message}</div>}
      <h1 className="joblist-title">
        Build.
        <span className="title-latest"> Learn. </span> Succeed.
      </h1>
      <div className="scroll-container">
        <div className="marquee" ref={scrollRef}>
          <div className="marquee-content no-animation">
            {courses.map((course, index) => (
              <div key={index} className="card">
                <img src={course.image} className="image" alt={course.title} />
                <h3 className="title">{course.title}</h3>
                <p className="description">{course.description}</p>
                <span className="duration">Duration: {course.duration}</span>
                <button
                  onClick={() => enroll(course)}
                  className="corsehomebutton"
                >
                  Enroll
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesHome;
