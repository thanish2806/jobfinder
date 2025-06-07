import React, { useState } from "react";
import "./course-main.css";
import courseHtmlBanner from "../../assets/courseimg/course-html.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const lessonsData = [
  {
    number: "01",
    title: "Introduction to DevOps Culture",
    lessons: [
      {
        title: "What is DevOps?",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/devops-icon1.svg",
        content: `Learn the philosophy behind DevOps and its evolution.

🔍 Key Concepts:
- Agile vs DevOps
- Dev + Ops collaboration
- Faster delivery & feedback loops

🎥 Watch:
- https://www.youtube.com/watch?v=0yWAtQ6wYNM`,
      },
      {
        title: "DevOps Lifecycle & Stages",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/devops-icon2.svg",
        content: `Understand the continuous lifecycle: plan, develop, test, deliver, operate.

🔁 Stages:
- CI/CD pipeline overview
- Monitoring and feedback
- Automation everywhere

📘 Resource:
- https://azure.microsoft.com/en-us/overview/devops/what-is-devops/`,
      },
      {
        title: "Benefits & Challenges of DevOps",
        lesson: "Lesson 03",
        duration: "40 Minutes",
        icon: "/assets/devops-icon3.svg",
        content: `Why companies adopt DevOps—and common pitfalls.

✅ Benefits:
- Faster releases
- Lower failure rates
- Improved collaboration

⚠️ Challenges:
- Cultural shift
- Tooling complexity`,
      },
    ],
  },
  {
    number: "02",
    title: "Version Control with Git & GitHub",
    lessons: [
      {
        title: "Git Fundamentals",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/devops-icon4.svg",
        content: `Learn how version control keeps your codebase organized and collaborative.

📘 Commands:
- git init, clone, add, commit, push
- git log, branch, merge, stash

🔗 Resource:
- https://git-scm.com/doc`,
      },
      {
        title: "Collaborating on GitHub",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/devops-icon5.svg",
        content: `Use GitHub to manage teams, projects, and contributions.

🚀 Topics:
- Forks vs branches
- Pull requests & reviews
- GitHub Actions basics

🔗 Practice:
- https://lab.github.com/`,
      },
      {
        title: "Git Workflows & Best Practices",
        lesson: "Lesson 03",
        duration: "40 Minutes",
        icon: "/assets/devops-icon6.svg",
        content: `Standardize collaboration using proven workflows.

⚙️ Common Patterns:
- Git Flow
- Trunk-based development
- Semantic commits

🔗 Learn:
- https://nvie.com/posts/a-successful-git-branching-model/`,
      },
    ],
  },
  {
    number: "03",
    title: "Continuous Integration & Delivery",
    lessons: [
      {
        title: "Intro to CI/CD",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/devops-icon7.svg",
        content: `Automate testing and deployment with CI/CD pipelines.

🔧 Benefits:
- Code integration frequency
- Bug detection early
- Deployment consistency

🔗 Guide:
- https://www.redhat.com/en/topics/devops/what-is-ci-cd`,
      },
      {
        title: "Building Pipelines with Jenkins",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/devops-icon8.svg",
        content: `Use Jenkins for building and automating workflows.

🛠️ Topics:
- Jenkinsfile
- Plugins & integrations
- Scheduled builds

🔗 Jenkins:
- https://www.jenkins.io/doc/`,
      },
      {
        title: "CI/CD Tools Overview",
        lesson: "Lesson 03",
        duration: "40 Minutes",
        icon: "/assets/devops-icon9.svg",
        content: `Compare popular tools for CI/CD.

⚙️ Tools:
- GitHub Actions
- GitLab CI/CD
- CircleCI vs TravisCI

🔗 Reference:
- https://circleci.com/
- https://docs.github.com/en/actions`,
      },
    ],
  },
  {
    number: "04",
    title: "Infrastructure as Code (IaC)",
    lessons: [
      {
        title: "Why IaC Matters",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/devops-icon10.svg",
        content: `Replace manual provisioning with code-defined infrastructure.

💡 Benefits:
- Reproducibility
- Versioned infra
- Speed & automation`,
      },
      {
        title: "Using Terraform",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/devops-icon11.svg",
        content: `Provision cloud resources using Terraform scripts.

🛠️ Concepts:
- Providers, modules
- Plan, apply, destroy
- State management

🔗 Docs:
- https://developer.hashicorp.com/terraform/docs`,
      },
      {
        title: "IaC Best Practices",
        lesson: "Lesson 03",
        duration: "40 Minutes",
        icon: "/assets/devops-icon12.svg",
        content: `Standardize, secure, and scale your infra code.

📘 Tips:
- Remote state
- Modular architecture
- Secrets handling

🔐 Tools:
- Vault, SOPS`,
      },
    ],
  },
  {
    number: "05",
    title: "Monitoring, Logging & Incident Management",
    lessons: [
      {
        title: "Observability Basics",
        lesson: "Lesson 01",
        duration: "50 Minutes",
        icon: "/assets/devops-icon13.svg",
        content: `Track system health and performance with metrics and logs.

🔍 Pillars:
- Metrics
- Logs
- Traces

📘 Tools:
- Prometheus, Grafana, Loki`,
      },
      {
        title: "Setting Up Alerts & Dashboards",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/devops-icon14.svg",
        content: `Get notified before your users do.

🧠 Topics:
- Thresholds vs anomaly detection
- Alert fatigue reduction
- Dashboarding with Grafana

🔗 Guide:
- https://grafana.com/`,
      },
      {
        title: "Incident Response & SRE Practices",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/devops-icon15.svg",
        content: `Handle system failures effectively.

🛠️ Tactics:
- Runbooks & playbooks
- Postmortems
- Blameless culture

🔗 Read:
- https://sre.google/workbook/`,
      },
    ],
  },
];
const DevOps = () => {
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
        <div className="heading">DevOps Essentials</div>
        <div className="paragraph">
          This beginner-friendly course provides a solid foundation in DevOps —
          a cultural and technical movement that emphasizes collaboration,
          automation, and continuous delivery. Learn the principles and tools
          that empower modern software development and operations teams to
          deliver faster and more reliably.
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

export default DevOps;
