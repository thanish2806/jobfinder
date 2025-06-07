import React, { useState } from "react";
import "./course-main.css";
import courseHtmlBanner from "../../assets/courseimg/course-html.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const lessonsData = [
  {
    number: "01",
    title: "Introduction to Cybersecurity",
    lessons: [
      {
        title: "What is Cybersecurity?",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/cyber-icon1.svg",
        content: `Understand the fundamentals of cybersecurity, why it's important, and who needs it.

🔐 Key Concepts:
- Definition and scope of cybersecurity
- Digital assets & what needs protection
- Cybercrime trends and real-world examples

🔗 Explore:
- https://www.cisa.gov/
- https://cybersecurityventures.com/`,
      },
      {
        title: "Common Cyber Threats & Attacks",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/cyber-icon2.svg",
        content: `Discover the most frequent forms of cyber threats affecting individuals and organizations.

🚨 Types of Attacks:
- Phishing, malware, ransomware
- DDoS, man-in-the-middle (MITM)
- Social engineering

🔗 Examples:
- https://attack.mitre.org/
- https://haveibeenpwned.com/`,
      },
      {
        title: "The CIA Triad: Confidentiality, Integrity, Availability",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/cyber-icon3.svg",
        content: `The CIA Triad is a foundational model in cybersecurity.

📘 Concepts:
- Confidentiality: Preventing unauthorized access
- Integrity: Ensuring data is not altered
- Availability: Ensuring uptime and accessibility

🔗 Read More:
- https://www.techtarget.com/definition/CIA-triad`,
      },
    ],
  },
  {
    number: "02",
    title: "Cybersecurity Tools & Techniques",
    lessons: [
      {
        title: "Antivirus, Firewalls & Encryption",
        lesson: "Lesson 01",
        duration: "50 Minutes",
        icon: "/assets/cyber-icon4.svg",
        content: `Learn how tools like antivirus software, firewalls, and encryption protect digital systems.

🛡️ Overview:
- How firewalls block unauthorized traffic
- What antivirus software does
- Types of encryption: symmetric vs asymmetric

🔗 Tools:
- https://www.av-test.org/
- https://letsencrypt.org/`,
      },
      {
        title: "Authentication & Access Control",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/cyber-icon5.svg",
        content: `Control who accesses what with secure authentication mechanisms.

🔑 Key Practices:
- Password policies, MFA, biometrics
- Role-based access control (RBAC)
- Principle of least privilege (PoLP)

🔗 Insights:
- https://auth0.com/blog/what-is-authentication/
- https://owasp.org/www-project-top-ten/`,
      },
      {
        title: "Security Updates & Patching",
        lesson: "Lesson 03",
        duration: "40 Minutes",
        icon: "/assets/cyber-icon6.svg",
        content: `Keeping software up to date is critical for cybersecurity.

🔄 Topics:
- Why patches are important
- Patch management tools
- Zero-day vulnerabilities

🔗 Best Practices:
- https://nvd.nist.gov/
- https://www.sans.org/`,
      },
    ],
  },
  {
    number: "03",
    title: "Network Security Fundamentals",
    lessons: [
      {
        title: "Understanding Network Architecture",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/cyber-icon7.svg",
        content: `How networks are built and secured from end to end.

🌐 Key Components:
- Routers, switches, subnets
- DMZ, VPNs, proxies
- Public vs private IPs

🔗 Learn:
- https://www.cloudflare.com/learning/network-layer/`,
      },
      {
        title: "Securing Wireless Networks",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/cyber-icon8.svg",
        content: `Wireless networks are especially vulnerable to attacks. Learn how to secure them.

📶 Essentials:
- WPA2/WPA3, SSID hiding
- MAC filtering
- Preventing rogue access points

🔗 Tools:
- https://www.kali.org/tools/aircrack-ng/
- https://www.wireshark.org/`,
      },
      {
        title: "Intrusion Detection & Prevention Systems (IDS/IPS)",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/cyber-icon9.svg",
        content: `Monitoring networks for suspicious activity is a key line of defense.

🔍 Overview:
- IDS vs IPS
- Signature-based vs anomaly-based detection
- Open-source IDS tools

🔗 Try:
- https://suricata.io/
- https://snort.org/`,
      },
    ],
  },
  {
    number: "04",
    title: "Cyber Hygiene & Personal Security",
    lessons: [
      {
        title: "Creating Strong Passwords & MFA",
        lesson: "Lesson 01",
        duration: "40 Minutes",
        icon: "/assets/cyber-icon10.svg",
        content: `Poor passwords are the top reason for data breaches.

🔐 Techniques:
- Password managers
- Passphrases vs complex passwords
- Multi-factor authentication (MFA)

🔗 Tools:
- https://1password.com/
- https://authy.com/`,
      },
      {
        title: "Safe Browsing & Email Practices",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/cyber-icon11.svg",
        content: `Stay safe online by being cautious with what you click and download.

🚨 Tips:
- Avoid suspicious links & attachments
- Use HTTPS and secure browsers
- Identify phishing emails

🔗 Simulations:
- https://www.phishme.com/
- https://safeweb.norton.com/`,
      },
      {
        title: "Backing Up Data & Device Security",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/cyber-icon12.svg",
        content: `Be prepared for worst-case scenarios by backing up data securely.

💾 Backup Methods:
- Cloud vs local backup
- Frequency and encryption
- Secure physical devices (laptops, phones)

🔗 Solutions:
- https://www.backblaze.com/
- https://www.veracrypt.fr/`,
      },
    ],
  },
  {
    number: "05",
    title: "Careers & Ethics in Cybersecurity",
    lessons: [
      {
        title: "Cybersecurity Career Paths",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/cyber-icon13.svg",
        content: `Explore roles in cybersecurity and what it takes to enter the field.

💼 Roles:
- SOC analyst, penetration tester
- Risk analyst, security engineer
- GRC specialist

🔗 Platforms:
- https://www.cyberseek.org/
- https://www.sans.org/cyber-security-careers/`,
      },
      {
        title: "Certifications & Learning Resources",
        lesson: "Lesson 02",
        duration: "50 Minutes",
        icon: "/assets/cyber-icon14.svg",
        content: `Advance your skills with certifications and hands-on platforms.

📜 Certifications:
- CompTIA Security+, CEH, CISSP
- TryHackMe, Hack The Box

🔗 Resources:
- https://www.tryhackme.com/
- https://www.cybrary.it/`,
      },
      {
        title: "Ethics, Laws, and Responsible Hacking",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/cyber-icon15.svg",
        content: `Cybersecurity professionals must follow legal and ethical standards.

⚖️ Topics:
- White hat vs black hat hackers
- Cyber laws and data privacy
- Responsible disclosure

🔗 Learn More:
- https://www.eff.org/
- https://www.owasp.org/`,
      },
    ],
  },
];
const Cybersecurity = () => {
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
        <div className="heading">Cybersecurity Basics</div>
        <div className="paragraph">
          Step into the critical world of Cybersecurity with this
          beginner-friendly course designed to build your foundational knowledge
          of digital safety and security. Whether you're a tech enthusiast,
          student, or professional aiming to protect digital assets, this course
          introduces you to the core concepts of cybersecurity, real-world
          threats, and how to defend against them.
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

export default Cybersecurity;
