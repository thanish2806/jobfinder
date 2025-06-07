import React, { useState } from "react";
import "./course-main.css";
import courseHtmlBanner from "../../assets/courseimg/course-html.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const lessonsData = [
  {
    number: "01",
    title: "Introduction to Cloud Computing",
    lessons: [
      {
        title: "What is Cloud Computing?",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/cloud-icon1.svg",
        content: `Cloud computing delivers computing services—servers, storage, databases, networking, software—over the internet.

🧠 Key Benefits:
- On-demand resources
- Cost-efficiency (pay-as-you-go)
- Global scalability

🔗 Resources:
- https://azure.microsoft.com/en-us/overview/what-is-cloud-computing/
- https://www.ibm.com/cloud/learn/cloud-computing`,
      },
      {
        title: "Service Models: IaaS, PaaS, SaaS",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/cloud-icon2.svg",
        content: `Understand how cloud services are categorized:

📦 Models:
- **IaaS**: Virtual Machines, Networking (e.g., AWS EC2)
- **PaaS**: Dev platforms (e.g., Heroku, Google App Engine)
- **SaaS**: Software access via web (e.g., Gmail, Dropbox)

📊 Analogy:
- Pizza-as-a-Service diagram

🔗 Read:
- https://www.redhat.com/en/topics/cloud-computing/iaas-vs-paas-vs-saas`,
      },
      {
        title: "Cloud Deployment Models",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/cloud-icon3.svg",
        content: `Deployment strategies define access:

🌍 Types:
- **Public Cloud**: Shared resources (AWS, Azure)
- **Private Cloud**: On-premises or dedicated
- **Hybrid Cloud**: Mix of public + private

🔗 Reference:
- https://www.cloudflare.com/learning/cloud/what-is-a-cloud-deployment-model/`,
      },
    ],
  },
  {
    number: "02",
    title: "Core Cloud Platforms & Services",
    lessons: [
      {
        title: "Overview of AWS, Azure, GCP",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/cloud-icon4.svg",
        content: `Get familiar with the "Big 3" providers:

🚀 Leaders:
- **AWS**: Compute (EC2), S3, Lambda
- **Azure**: VMs, Blob Storage, Logic Apps
- **GCP**: App Engine, BigQuery, Cloud Functions

🔗 Try:
- https://aws.amazon.com/free/
- https://azure.microsoft.com/en-us/free/
- https://cloud.google.com/free`,
      },
      {
        title: "Compute & Storage Services",
        lesson: "Lesson 02",
        duration: "50 Minutes",
        icon: "/assets/cloud-icon5.svg",
        content: `Every cloud platform offers core compute and storage tools:

⚙️ Compute:
- Virtual Machines (IaaS)
- Containers & Serverless

📦 Storage:
- Object Storage (S3, Blob)
- File & Block Storage

🔗 Read More:
- https://aws.amazon.com/products/compute/
- https://learn.microsoft.com/en-us/azure/storage/common/storage-introduction`,
      },
      {
        title: "Databases in the Cloud",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/cloud-icon6.svg",
        content: `Cloud providers support relational and NoSQL databases:

📊 Types:
- **SQL**: Amazon RDS, Cloud SQL, Azure SQL
- **NoSQL**: DynamoDB, Cosmos DB, Firestore

🔗 Learn:
- https://aws.amazon.com/products/databases/
- https://cloud.google.com/databases`,
      },
    ],
  },
  {
    number: "03",
    title: "Cloud Security & Compliance",
    lessons: [
      {
        title: "Security Fundamentals in the Cloud",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/cloud-icon7.svg",
        content: `Security is shared in the cloud: provider + customer.

🔐 Core Concepts:
- Encryption at rest & transit
- Identity and Access Management (IAM)
- Network security: firewalls, private endpoints

🔗 Docs:
- https://aws.amazon.com/security/
- https://learn.microsoft.com/en-us/azure/security/fundamentals/overview`,
      },
      {
        title: "Identity & Access Management (IAM)",
        lesson: "Lesson 02",
        duration: "50 Minutes",
        icon: "/assets/cloud-icon8.svg",
        content: `IAM governs who can access what in your cloud environment.

🔑 Features:
- Roles, groups, policies
- Principle of least privilege
- MFA (multi-factor auth)

🔗 Explore:
- https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html
- https://cloud.google.com/iam/docs`,
      },
      {
        title: "Compliance & Certifications",
        lesson: "Lesson 03",
        duration: "40 Minutes",
        icon: "/assets/cloud-icon9.svg",
        content: `Cloud providers comply with global standards.

📜 Common Certifications:
- ISO 27001, SOC 2
- HIPAA, GDPR, PCI DSS

🔗 Provider Details:
- https://aws.amazon.com/compliance/
- https://cloud.google.com/security/compliance`,
      },
    ],
  },
  {
    number: "04",
    title: "Cloud-Native & DevOps Practices",
    lessons: [
      {
        title: "Understanding Cloud-Native Apps",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/cloud-icon10.svg",
        content: `Cloud-native applications are designed for scalability, flexibility, and resilience.

🛠️ Characteristics:
- Microservices architecture
- Containerized & orchestrated
- CI/CD pipelines

🔗 Insights:
- https://12factor.net/
- https://www.cncf.io/`,
      },
      {
        title: "Introduction to DevOps in the Cloud",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/cloud-icon11.svg",
        content: `DevOps integrates development and operations for faster delivery.

🚀 Key Tools:
- CI/CD (GitHub Actions, Jenkins)
- IaC: Infrastructure as Code (Terraform, CloudFormation)
- Monitoring: CloudWatch, Azure Monitor

🔗 Resources:
- https://www.redhat.com/en/topics/devops
- https://www.terraform.io/`,
      },
      {
        title: "Containers & Kubernetes",
        lesson: "Lesson 03",
        duration: "50 Minutes",
        icon: "/assets/cloud-icon12.svg",
        content: `Containers enable lightweight, portable app environments.

⚙️ Tools:
- Docker: Build & run containers
- Kubernetes: Container orchestration (GKE, EKS, AKS)

🔗 Learn:
- https://kubernetes.io/docs/concepts/
- https://www.docker.com/`,
      },
    ],
  },
  {
    number: "05",
    title: "Getting Hands-On & Certifications",
    lessons: [
      {
        title: "Using Free Tiers for Learning",
        lesson: "Lesson 01",
        duration: "40 Minutes",
        icon: "/assets/cloud-icon13.svg",
        content: `Most providers offer free-tier services.

🎓 Practice:
- Deploy a static site on S3 or Azure Blob
- Spin up a virtual machine
- Monitor costs with billing dashboards

🔗 Links:
- https://aws.amazon.com/free/
- https://cloud.google.com/free`,
      },
      {
        title: "Popular Certifications to Boost Careers",
        lesson: "Lesson 02",
        duration: "50 Minutes",
        icon: "/assets/cloud-icon14.svg",
        content: `Certifications validate your cloud skills:

🎓 Top Picks:
- AWS Certified Cloud Practitioner
- Azure Fundamentals (AZ-900)
- Google Cloud Digital Leader

🔗 Prep:
- https://cloudacademy.com/
- https://www.udemy.com/topic/cloud-computing-certification/`,
      },
      {
        title: "Mini Projects for Practice",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/cloud-icon15.svg",
        content: `Solidify skills with projects:

📁 Ideas:
- Deploy a weather app on EC2
- Host a portfolio on S3 + CloudFront
- Set up a CI/CD pipeline with GitHub + Vercel

🛠️ Showcase your work on GitHub or LinkedIn!`,
      },
    ],
  },
];
const Cloud = () => {
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
        <div className="heading">Cloud Computing Basics</div>
        <div className="paragraph">
          This course is designed to introduce you to the core concepts of cloud
          computing. You'll learn about service models (IaaS, PaaS, SaaS),
          deployment types, and how major providers like AWS, Azure, and Google
          Cloud are transforming the tech landscape. Perfect for beginners
          looking to understand the building blocks of cloud infrastructure.
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

export default Cloud;
