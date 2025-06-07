import React, { useState } from "react";
import "./course-main.css";
import courseHtmlBanner from "../../assets/courseimg/course-html.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const lessonsData = [
  {
    number: "01",
    title: "Introduction to Docker & Containerization",
    lessons: [
      {
        title: "What is Docker & Why Use It?",
        lesson: "Lesson 01",
        duration: "40 Minutes",
        icon: "/assets/docker-icon1.svg",
        content: `Understand Docker's role in modern DevOps workflows.

📌 Topics:
- Virtual Machines vs. Containers
- Benefits of Docker (Portability, Isolation)
- Use cases in CI/CD & microservices

🔗 Read:
- https://www.docker.com/resources/what-container/
- https://www.redhat.com/en/topics/containers`,
      },
      {
        title: "Installing Docker on Your Machine",
        lesson: "Lesson 02",
        duration: "30 Minutes",
        icon: "/assets/docker-icon2.svg",
        content: `Set up Docker on your local development environment.

🧰 Steps:
- Downloading Docker Desktop (Windows/macOS/Linux)
- CLI basics: docker version, docker info
- Running your first container

🔗 Tools:
- https://docs.docker.com/get-docker/
- https://play-with-docker.com/`,
      },
      {
        title: "Understanding Images & Containers",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/docker-icon3.svg",
        content: `Learn the core Docker architecture: images, containers, layers.

🔍 Concepts:
- Docker Images vs. Containers
- How layers work (UnionFS)
- Base images, custom images

🧠 Tip: Use 'docker run', 'docker ps', 'docker stop' to manage containers.
`,
      },
    ],
  },
  {
    number: "02",
    title: "Working with Docker Images",
    lessons: [
      {
        title: "Pulling & Running Images from Docker Hub",
        lesson: "Lesson 01",
        duration: "40 Minutes",
        icon: "/assets/docker-icon4.svg",
        content: `Docker Hub is a library of prebuilt images.

🔍 Tasks:
- Search and pull images (e.g., nginx, node, python)
- Understand tags (e.g., 'node:18-alpine')
- Run images with environment flags

🔗 Explore:
- https://hub.docker.com/`,
      },
      {
        title: "Creating Custom Dockerfiles",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/docker-icon5.svg",
        content: `Define your own Docker environment using a Dockerfile.

📄 Instructions:
- FROM, RUN, COPY, CMD, EXPOSE
- Best practices: small layers, caching, .dockerignore
- Build and tag images with  'docker build -t'

🔗 Guide:
- https://docs.docker.com/engine/reference/builder/`,
      },
      {
        title: "Managing Images & Layers",
        lesson: "Lesson 03",
        duration: "30 Minutes",
        icon: "/assets/docker-icon6.svg",
        content: `Keep your images clean and optimized.

🧹 Commands:
- docker images, docker rmi
- docker history, image pruning
- Versioning images for dev/staging/prod

🔧 Tools:
- Dive: https://github.com/wagoodman/dive`,
      },
    ],
  },
  {
    number: "03",
    title: "Docker Networking & Volumes",
    lessons: [
      {
        title: "Exposing Ports & Networking Containers",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/docker-icon7.svg",
        content: `Learn how Docker handles internal/external networking.

📡 Concepts:
- Exposing ports: '-p 8080:80
- Bridge vs. host network modes
- Linking containers via network names

🧠 Tip: Use 'docker network inspect' for debugging.
`,
      },
      {
        title: "Using Volumes for Data Persistence",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/docker-icon8.svg",
        content: `Persist your data even when containers are destroyed.

💾 Types of volumes:
- Named volumes vs. bind mounts
- Mount syntax: '-v' and '--mount'
- Managing volumes: 'docker volume ls', 'rm'

🔗 Learn:
- https://docs.docker.com/storage/`,
      },
      {
        title: "Debugging Containers",
        lesson: "Lesson 03",
        duration: "30 Minutes",
        icon: "/assets/docker-icon9.svg",
        content: `Access running containers to inspect logs and files.

🛠️ Tools:
- docker logs
- docker exec -it <container> bash
- docker inspect for metadata

🔍 Practice container health checks and live debugging.`,
      },
    ],
  },
  {
    number: "04",
    title: "Docker Compose & Multi-Container Apps",
    lessons: [
      {
        title: "What is Docker Compose?",
        lesson: "Lesson 01",
        duration: "30 Minutes",
        icon: "/assets/docker-icon10.svg",
        content: `Compose lets you define multi-container apps in a single file.

📁 Structure:
- docker-compose.yml format
- Defining services, networks, volumes
- Versioning schemas (v3 preferred)

🔗 Docs:
- https://docs.docker.com/compose/`,
      },
      {
        title: "Building and Running Services",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/docker-icon11.svg",
        content: `Run full apps using Compose.

⚙️ Examples:
- Node + MongoDB
- Django + PostgreSQL

🔧 Commands:
- docker-compose up/down
- Logs, rebuild, scale
- env_file support`,
      },
      {
        title: "Compose Best Practices",
        lesson: "Lesson 03",
        duration: "40 Minutes",
        icon: "/assets/docker-icon12.svg",
        content: `Write maintainable and production-ready Compose files.

✅ Tips:
- Use '.env' files for secrets/config
- Minimize container dependencies
- Separate dev/staging/prod compose files

🔗 Templates:
- https://github.com/docker/awesome-compose`,
      },
    ],
  },
  {
    number: "05",
    title: "Real-World Projects & Deployment",
    lessons: [
      {
        title: "Building a Simple Web App with Docker",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/docker-icon13.svg",
        content: `Hands-on: Containerize a simple web app from scratch.

🛠️ Stack:
- Express.js + MongoDB
- Dockerfile + Compose
- Connecting services and testing routes

🔗 Starter: https://github.com/docker/getting-started`,
      },
      {
        title: "Publishing to Docker Hub",
        lesson: "Lesson 02",
        duration: "30 Minutes",
        icon: "/assets/docker-icon14.svg",
        content: `Share your images publicly or privately.

🚀 Steps:
- docker login
- docker tag and docker push
- Private repos & access tokens

🔗 Hub:
- https://hub.docker.com/repositories`,
      },
      {
        title: "Deploying Docker Apps to the Cloud",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/docker-icon15.svg",
        content: `Take your containerized app live.

☁️ Platforms:
- Render, Railway, Fly.io
- DigitalOcean App Platform
- ECS, Azure Containers (intro)

🧠 Tip: Add CI/CD pipelines (GitHub Actions)
`,
      },
    ],
  },
];
const DockerForBeginners = () => {
  const [activeLesson, setActiveLesson] = useState({
    moduleIndex: null,
    lessonIndex: null,
  });

  const toggleLesson = (moduleIndex, lessonIndex) => {
    if (
      activeLesson.moduleIndex === moduleIndex &&
      activeLesson.lessonIndex === lessonIndex
    ) {
      setActiveLesson({ moduleIndex: null, lessonIndex: null });
    } else {
      setActiveLesson({ moduleIndex, lessonIndex });
    }
  };

  return (
    <div className="group-104">
      <Navbar />

      <div className="course-title-description">
        <div className="heading">Docker for Beginners</div>
        <div className="paragraph">
          This course introduces you to Docker, a powerful tool for
          containerizing applications. You'll explore Docker's architecture,
          learn how to create and manage containers, and understand how
          containerization can improve development and deployment workflows.
          Ideal for developers, DevOps beginners, or anyone looking to automate
          and scale applications.
        </div>
      </div>

      <div
        className="container"
        style={{ backgroundImage: `url(${courseHtmlBanner})` }}
      ></div>

      <div
        className={`container2 ${
          activeLesson.moduleIndex !== null ? "blurred-background" : ""
        }`}
      >
        <div className="sub-container">
          {lessonsData.map((module, moduleIndex) => (
            <div className="course-card" key={moduleIndex}>
              <div className="number">{module.number}</div>
              <div className="heading2">{module.title}</div>
              <div className="course-items-container">
                {module.lessons.map((lesson, lessonIndex) => {
                  const _isActive =
                    activeLesson.moduleIndex === moduleIndex &&
                    activeLesson.lessonIndex === lessonIndex;

                  return (
                    <div
                      key={lessonIndex}
                      className={
                        lessonIndex === 1 ? "feature-item2" : "feature-item"
                      }
                      onClick={() => toggleLesson(moduleIndex, lessonIndex)}
                      style={{ cursor: "pointer" }}
                    >
                      <div
                        className={
                          lessonIndex === 2
                            ? "text-container2"
                            : "text-container"
                        }
                      >
                        <div className="heading3">{lesson.title}</div>
                        <div className="text">{lesson.lesson}</div>
                      </div>

                      <div className="click-to-enroll">
                        <h1>Enroll</h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeLesson.moduleIndex !== null && (
        <>
          <div
            className="lesson-overlay"
            onClick={() =>
              setActiveLesson({ moduleIndex: null, lessonIndex: null })
            }
          ></div>
          <div className="lesson-popup">
            <button
              className="close-btn"
              onClick={() =>
                setActiveLesson({ moduleIndex: null, lessonIndex: null })
              }
            >
              ×
            </button>
            <div className="popup-title">
              {
                lessonsData[activeLesson.moduleIndex].lessons[
                  activeLesson.lessonIndex
                ].title
              }
            </div>
            <pre>
              {
                lessonsData[activeLesson.moduleIndex].lessons[
                  activeLesson.lessonIndex
                ].content
              }
            </pre>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default DockerForBeginners;
