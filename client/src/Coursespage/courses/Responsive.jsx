import React, { useState } from "react";
import "./course-main.css";
import courseHtmlBanner from "../../assets/courseimg/course-html.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const lessonsData = [
  {
    number: "01",
    title: "Fundamentals of Responsive Design",
    lessons: [
      {
        title: "What is Responsive Design?",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/resp-icon1.svg",
        content:
          "Responsive design creates websites that adapt to any device (mobile/tablet/desktop) using flexible grids, media queries, and fluid assets.\n\n**Example - Fluid Container**:\n```css\n.container {\n  width: 90%;\n  max-width: 1200px;\n  margin: 0 auto;\n}```\n\n🔗 Resources:\n- https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design\n- https://web.dev/responsive-web-design-basics/",
      },
      {
        title: "Fluid Grids & Flexible Layouts",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/resp-icon2.svg",
        content:
          "Create layouts that resize proportionally using relative units (%) and CSS Grid.\n\n**Example - Responsive Grid**:\n```css\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}```\n\n**Practice**: Convert a 3-column fixed layout to fluid grid.\n\n🔗 Resources:\n- https://css-tricks.com/snippets/css/complete-guide-grid/\n- https://flexboxfroggy.com/",
      },
      {
        title: "Media Query Essentials",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/resp-icon3.svg",
        content:
          "Apply styles based on device characteristics with breakpoints.\n\n**Mobile-First Example**:\n```css\n/* Base: Mobile styles */\n.component { padding: 1rem; }\n\n/* Tablet+ */\n@media (min-width: 768px) {\n  .component { padding: 2rem; }\n}\n\n/* Desktop */\n@media (min-width: 1024px) {\n  .component { max-width: 1200px; }\n}```\n\n🔗 Resources:\n- https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries",
      },
    ],
  },
  {
    number: "02",
    title: "Responsive Media & Navigation",
    lessons: [
      {
        title: "Responsive Images & Video",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/resp-icon4.svg",
        content:
          'Serve optimized media for different screen sizes.\n\n**HTML Example**:\n```html\n<picture>\n  <source media="(min-width: 800px)" \n          srcset="large.jpg 1x, large-2x.jpg 2x">\n  <img src="small.jpg" \n       srcset="small-2x.jpg 2x"\n       alt="Responsive image">\n</picture>```\n\n**Key Techniques**:\n1. `srcset` for density switching\n2. `sizes` for viewport-based selection\n\n🔗 Resources:\n- https://responsiveimages.org/',
      },
      {
        title: "Responsive Typography",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/resp-icon5.svg",
        content:
          "Create fluid text that scales with viewport width.\n\n**CSS Example**:\n```css\nh1 {\n  font-size: clamp(1.5rem, 4vw, 3rem);\n}\n\np {\n  max-width: 65ch; /* Optimal line length */\n  line-height: 1.6;\n}```\n\n**Accessibility Tip**:\nAlways maintain minimum 16px base font size.\n\n🔗 Resources:\n- https://css-tricks.com/simplified-fluid-typography/",
      },
      {
        title: "Responsive Navigation Patterns",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/resp-icon6.svg",
        content:
          'Implement mobile-friendly navigation.\n\n**Hamburger Menu Example**:\n```html\n<nav>\n  <button class="hamburger">☰</button>\n  <ul class="nav-links">\n    <li><a href="/">Home</a></li>\n    <li><a href="/about">About</a></li>\n  </ul>\n</nav>\n\n<style>\n/* Mobile styles */\n.nav-links { display: none; }\n.hamburger { display: block; }\n\n/* Desktop styles */\n@media (min-width: 768px) {\n  .nav-links { display: flex; }\n  .hamburger { display: none; }\n}\n</style>```\n\n🔗 Resources:\n- https://uxdesign.cc/responsive-navigation-patterns-136f6a8ae48b',
      },
    ],
  },
  {
    number: "03",
    title: "Advanced Layouts & Optimization",
    lessons: [
      {
        title: "Flexbox & Grid Mastery",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/resp-icon7.svg",
        content:
          "Combine Flexbox and Grid for complex responsive layouts.\n\n**Card Layout Example**:\n```css\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (max-width: 600px) {\n  .card {\n    flex-direction: row;\n  }\n}```\n\n**Pro Tip**: Use `auto-fill` vs `auto-fit` for grid behavior control.\n\n🔗 Resources:\n- https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
      },
      {
        title: "Performance Optimization",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/resp-icon8.svg",
        content:
          "Optimize responsive sites for speed.\n\n**Key Strategies**:\n1. Lazy loading: `<img loading=\"lazy\">`\n2. Conditional resource loading:\n```javascript\nif (window.innerWidth > 768) {\n  import('./desktop-module.js');\n}```\n3. CSS containment: `contain: layout paint;`\n\n🔗 Resources:\n- https://web.dev/fast/",
      },
      {
        title: "Testing & Debugging",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/resp-icon9.svg",
        content:
          "Test across devices and debug responsiveness.\n\n**Chrome DevTools Workflow**:\n1. Device toolbar simulation\n2. Network throttling (3G testing)\n3. CSS media query inspector\n\n**Critical Checks**:\n- Touch targets > 48px\n- Landscape/portrait behavior\n- Preferred reduced motion\n\n🔗 Resources:\n- https://developer.chrome.com/docs/devtools/",
      },
    ],
  },
  {
    number: "04",
    title: "Frameworks & Future Techniques",
    lessons: [
      {
        title: "CSS Frameworks (Bootstrap/Tailwind)",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/resp-icon10.svg",
        content:
          'Build responsive layouts faster with frameworks.\n\n**Bootstrap Grid Example**:\n```html\n<div class="container">\n  <div class="row">\n    <div class="col-sm-12 col-md-6 col-lg-4">\n      Content\n    </div>\n  </div>\n</div>```\n\n**Tailwind Alternative**:\n```html\n<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">\n  <!-- Items -->\n</div>```\n\n🔗 Resources:\n- https://getbootstrap.com/docs/5.0/layout/grid/\n- https://tailwindcss.com/docs/responsive-design',
      },
      {
        title: "Container Queries",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/resp-icon11.svg",
        content:
          "Style components based on container size (new CSS feature).\n\n**Example**:\n```css\n.card {\n  container-type: inline-size;\n}\n\n@container (min-width: 400px) {\n  .card {\n    display: flex;\n  }\n}```\n\n**Browser Support**: Use with @supports for graceful degradation.\n\n🔗 Resources:\n- https://ishadeed.com/article/container-queries/",
      },
      {
        title: "Accessibility & Dark Mode",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/resp-icon12.svg",
        content:
          "Build inclusive responsive experiences.\n\n**Dark Mode Implementation**:\n```css\n:root {\n  --text: #333;\n  --bg: white;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --text: #eee;\n    --bg: #121212;\n  }\n}\n\nbody {\n  color: var(--text);\n  background: var(--bg);\n}```\n\n**Accessibility Musts**:\n- `prefers-reduced-motion`\n- Minimum 4.5:1 contrast ratio\n- Semantic HTML\n\n🔗 Resources:\n- https://web.dev/prefers-color-scheme/",
      },
    ],
  },
  {
    number: "05",
    title: "Frameworks & Future Techniques",
    lessons: [
      {
        title: "Bootstrap/Tailwind CSS",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/resp-icon13.svg",
        content:
          'Responsive utilities in frameworks.\n\n**Bootstrap Grid**:\n```html\n<div class="row">\n  <div class="col-md-6 col-lg-4">Column</div>\n</div>```\n\n**Tailwind Example**:\n```html\n<div class="grid grid-cols-1 md:grid-cols-3">\n  <!-- Content -->\n</div>```\n\n🔗 Resources:\n- https://getbootstrap.com/docs/5.0/layout/grid/',
      },
      {
        title: "Container Queries",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/resp-icon14.svg",
        content:
          "Component-based responsiveness (new CSS).\n\n**Example**:\n```css\n.card {\n  container-type: inline-size;\n}\n\n@container (min-width: 400px) {\n  .card { flex-direction: row; }\n}```\n\n🔗 Resources:\n- https://ishadeed.com/article/container-queries/",
      },
      {
        title: "Accessibility & Dark Mode",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/resp-icon15.svg",
        content:
          "Inclusive responsive experiences.\n\n**Dark Mode**:\n```css\n@media (prefers-color-scheme: dark) {\n  :root { \n    --bg: #121212; \n    --text: #fff;\n  }\n}```\n\n**Key Requirements**:\n- `prefers-reduced-motion`\n- 4.5:1 contrast ratio\n- Semantic HTML\n\n🔗 Resources:\n- https://web.dev/prefers-color-scheme/",
      },
    ],
  },
];
const Responsive = () => {
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
        <div className="heading">Responsive Web Design</div>
        <div className="paragraph">
          This course offers a beginner-friendly introduction to Responsive Web
          Design. Learn how to create web pages that adapt seamlessly to
          different screen sizes using HTML, CSS, and modern layout techniques
          like Flexbox and Grid.
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

export default Responsive;
