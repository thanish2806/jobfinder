import React, { useState } from "react";
import "./course-main.css";
import courseHtmlBanner from "../../assets/courseimg/course-html.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const lessonsData = [
  {
    number: "01",
    title: "UI/UX Fundamentals",
    lessons: [
      {
        title: "What is UI vs UX?",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/uiux-icon1.svg",
        content:
          "**UI** (User Interface): Visual elements users interact with\n**UX** (User Experience): Overall feel of the interaction\n\n**Key Differences**:\n- UI: Buttons, icons, typography\n- UX: User flow, emotions, problem-solving\n\n**Example**:\n> Spotify's UI = Play button design\n> Spotify's UX = Personalized playlist creation flow\n\n🔗 Resources:\n- https://www.nngroup.com/articles/definition-user-experience/",
      },
      {
        title: "Design Principles",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/uiux-icon2.svg",
        content:
          "Core principles for effective design:\n\n1. **Hierarchy**: Size/color contrast for importance\n```figma\nHeader: 24px Bold #333\nBody: 16px Regular #666```\n2. **Consistency**: Reuse patterns (e.g., button styles)\n3. **Accessibility**: Color contrast ≥ 4.5:1 (WCAG)\n\n**Practice**: Redesign a form with clear visual hierarchy\n\n🔗 Resources:\n- https://lawsofux.com/",
      },
      {
        title: "User-Centered Design",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/uiux-icon3.svg",
        content:
          "Design process focused on user needs:\n\n**4 Stages**:\n1. Research (interviews/surveys)\n2. Design (wireframes/prototypes)\n3. Testing (usability studies)\n4. Implementation\n\n**Case Study**:\n> Airbnb's empathy-first approach to redesign\n\n🔗 Resources:\n- https://www.interaction-design.org/literature/topics/user-centered-design",
      },
    ],
  },
  {
    number: "02",
    title: "Research & Analysis",
    lessons: [
      {
        title: "User Personas",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/uiux-icon4.svg",
        content:
          "Create fictional user profiles based on research:\n\n**Template**:\n```\nName: Sarah, 28\nOccupation: Marketing Manager\nGoals: Quick task completion\nFrustrations: Complex interfaces\nTech Level: Intermediate```\n\n**Do's**:\n- Base on real user data\n- Include behavioral patterns\n\n🔗 Resources:\n- https://xtensio.com/user-persona-template/",
      },
      {
        title: "User Journey Mapping",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/uiux-icon5.svg",
        content:
          "Visualize user interactions with your product:\n\n**Key Elements**:\n1. Touchpoints (app/website/email)\n2. Emotions (frustration/delight)\n3. Pain points\n\n**Example Flow**:\n```mermaid\n[Search Product] → [Add to Cart] → [Checkout] → [Confirmation]```\n\n🔗 Resources:\n- https://www.nngroup.com/articles/customer-journey-mapping/",
      },
      {
        title: "Competitive Analysis",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/uiux-icon6.svg",
        content:
          "Evaluate competitor strengths/weaknesses:\n\n**SWOT Framework**:\n| Strength | Weakness |\n|----------|----------|\n| Intuitive nav | Poor mobile experience |\n\n**Comparison Areas**:\n- Onboarding flow\n- Visual design\n- Feature set\n\n🔗 Resources:\n- https://uxdesign.cc/competitive-analysis-in-ux-9a2dcf253a03",
      },
    ],
  },
  {
    number: "03",
    title: "Wireframing & Prototyping",
    lessons: [
      {
        title: "Low-Fidelity Wireframes",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/uiux-icon7.svg",
        content:
          'Blueprint of layout/structure:\n\n**Tools**:\n- Pen/paper\n- Balsamiq\n- Figma Wireframe Kit\n\n**Best Practices**:\n- Use grayscale only\n- Avoid detailed visuals\n- Focus on element placement\n\n**Example**: Sketch login screen with:\n- Email/password fields\n- Submit button\n- "Forgot password?" link\n\n🔗 Resources:\n- https://balsamiq.com/learn/articles/what-are-wireframes/',
      },
      {
        title: "High-Fidelity Mockups",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/uiux-icon8.svg",
        content:
          "Pixel-perfect visual designs:\n\n**Figma Example**:\n```\n1. Set up 12-column grid\n2. Define color palette\n3. Apply consistent spacing (8px baseline)\n4. Add real content (no lorem ipsum)```\n\n**Export Assets**:\n- PNG for presentations\n- SVG for developers\n\n🔗 Resources:\n- https://help.figma.com/hc/en-us/articles/360040450133-Create-high-fidelity-designs",
      },
      {
        title: "Interactive Prototyping",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/uiux-icon9.svg",
        content:
          "Create clickable simulations:\n\n**Figma Prototyping**:\n1. Link buttons to screens\n2. Add transitions (slide/fade)\n3. Set hover/focus states\n\n**User Testing Tip**:\n> Test with InVision or Figma Mirror on real devices\n\n🔗 Resources:\n- https://www.figma.com/prototyping/",
      },
    ],
  },
  {
    number: "04",
    title: "Visual Design & Interaction",
    lessons: [
      {
        title: "Design Systems",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/uiux-icon10.svg",
        content:
          "Reusable component library:\n\n**Core Elements**:\n- Color palette (primary/secondary)\n- Typography scale (H1-H6)\n- Button styles (primary/secondary)\n- Icon set\n\n**Example**: Material Design System\n\n**Implementation**:\n```figma\nCreate Components: Button, Input, Card\nUse Variants: Primary/Secondary/Disabled```\n\n🔗 Resources:\n- https://material.io/design",
      },
      {
        title: "Microinteractions",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/uiux-icon11.svg",
        content:
          "Small animations that enhance UX:\n\n**Examples**:\n- Like button heart animation\n- Form validation checkmark\n- Loading spinner\n\n**Figma Animation**:\n1. Use Smart Animate\n2. Set easing (ease-in-out)\n3. Duration: 200-500ms\n\n🔗 Resources:\n- https://uxdesign.cc/microinteractions-the-secret-to-great-ux-a2a4f243d3b9",
      },
      {
        title: "Responsive UI Patterns",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/uiux-icon12.svg",
        content:
          "Adapt designs across devices:\n\n**Patterns**:\n- Mobile: Hamburger menu\n- Tablet: Split-view layout\n- Desktop: Multi-column grids\n\n**Breakpoint Strategy**:\n```\nMobile: < 768px\nTablet: 768px - 1024px\nDesktop: > 1024px```\n\n🔗 Resources:\n- https://www.lukew.com/ff/entry.asp?1759",
      },
    ],
  },
  {
    number: "05",
    title: "Testing & Handoff",
    lessons: [
      {
        title: "Usability Testing",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/uiux-icon13.svg",
        content:
          "Validate designs with real users:\n\n**Methods**:\n1. Moderated (in-person/Zoom)\n2. Unmoderated (UserTesting.com)\n3. A/B Testing\n\n**Test Script**:\n```\nTask 1: Find product X\nTask 2: Complete checkout\n[Observe without helping]```\n\n🔗 Resources:\n- https://www.nngroup.com/articles/usability-testing-101/",
      },
      {
        title: "Design Handoff",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/uiux-icon14.svg",
        content:
          "Prepare designs for development:\n\n**Figma Handoff**:\n1. Organize layers\n2. Add auto-layout to components\n3. Export CSS/React code\n4. Use Dev Mode annotations\n\n**Checklist**:\n- Specify hover states\n- Include error states\n- Provide assets (icons/images)\n\n🔗 Resources:\n- https://help.figma.com/hc/en-us/articles/360040314193",
      },
      {
        title: "UX Metrics & Iteration",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/uiux-icon15.svg",
        content:
          "Measure success and improve:\n\n**Key Metrics**:\n- Task Success Rate (%)\n- Time-on-Task (seconds)\n- System Usability Scale (SUS)\n\n**Iteration Process**:\n```\nLaunch → Collect Data → Identify Issues → Redesign → Retest```\n\n**Case Study**:\n> How Instagram improved stories with iteration\n\n🔗 Resources:\n- https://measuringu.com/ux-metrics/",
      },
    ],
  },
];
const Uiux = () => {
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
        <div className="heading">UI/UX Design Fundamentals</div>
        <div className="paragraph">
          Dive into the world of User Interface (UI) and User Experience (UX)
          design with this comprehensive course tailored for beginners and
          aspiring designers. Whether you're looking to switch careers, enhance
          your design skills, or bring your product ideas to life, this course
          will equip you with the knowledge and hands-on practice needed to
          design beautiful, user-friendly digital products.
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
    </div>
  );
};

export default Uiux;
