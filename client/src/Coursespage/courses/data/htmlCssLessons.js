const lessonsData = [
  {
    number: "01",
    title: "Introduction to HTML",
    lessons: [
      {
        title: "What is HTML?",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/icon2.svg",
        content: `HTML (HyperText Markup Language) is the foundation of all web pages. It defines the structure and layout using elements like headings, paragraphs, links, and images.

🔗 Learn More:
- https://developer.mozilla.org/en-US/docs/Web/HTML
- https://www.w3schools.com/html/`,
      },
      {
        title: "Basic Tags (headings, links, images)",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/icon3.svg",
        content: `This lesson covers key HTML tags like:
- <h1> to <h6> for headings
- <a> for links
- <img> for images
- <p> for paragraphs

🔗 Explore:
- https://htmlreference.io/
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element`,
      },
      {
        title: "Lists, Tables, and Forms",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/icon4.svg",
        content: `Learn how to structure lists using <ul>, <ol>, and <li>. Create data tables using <table>, <tr>, <td>. Build user input forms with <form>, <input>, and <button>.

🔗 Docs:
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
- https://www.w3schools.com/html/html_tables.asp`,
      },
    ],
  },
  {
    number: "02",
    title: "Introduction to CSS",
    lessons: [
      {
        title: "CSS Syntax and Selectors",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/icon5.svg",
        content: `CSS (Cascading Style Sheets) describes how HTML elements are displayed. Learn selectors like class (.), ID (#), element (e.g. p, h1).

🔗 Docs:
- https://developer.mozilla.org/en-US/docs/Web/CSS
- https://www.w3schools.com/css/css_syntax.asp`,
      },
      {
        title: "CSS Types: Inline, Internal, External",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/icon6.svg",
        content: `Three ways to apply CSS:
- Inline: style="color: red;"
- Internal: <style> in <head>
- External: Link a .css file using <link>

🔗 Learn More:
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style
- https://www.w3schools.com/css/css_howto.asp`,
      },
      {
        title: "Colors, Fonts, and Text Styling",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/icon7.svg",
        content: `Use 'color', 'font-family', 'font-size', 'line-height', 'text-align', and more to style your text effectively.

🔗 Try it out:
- https://css-tricks.com/snippets/css/text-shadow/
- https://developer.mozilla.org/en-US/docs/Web/CSS/color`,
      },
    ],
  },
  {
    number: "03",
    title: "CSS Box Model & Layout",
    lessons: [
      {
        title: "Understanding the Box Model",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/icon8.svg",
        content: `Everything in CSS is a box. The box model includes:
- content
- padding
- border
- margin

Understanding spacing between elements is critical for layout.

🔗 Learn More:
- https://developer.mozilla.org/en-US/docs/Web/CSS/box_model
- https://css-tricks.com/the-css-box-model/`,
      },
      {
        title: "Display Property & Positioning",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/icon9.svg",
        content: `Control how elements behave with:
- display: block, inline, inline-block, flex, grid
- position: static, relative, absolute, fixed, sticky

🔗 Docs:
- https://developer.mozilla.org/en-US/docs/Web/CSS/display
- https://developer.mozilla.org/en-US/docs/Web/CSS/position`,
      },
      {
        title: "Flexbox Essentials",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/icon10.svg",
        content: `Flexbox helps align and distribute space:
- Use display: flex
- Justify and align items
- Direction and wrapping

🔗 Try It:
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- https://flexboxfroggy.com/`,
      },
    ],
  },
  {
    number: "04",
    title: "Responsive Design Techniques",
    lessons: [
      {
        title: "Media Queries",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/icon11.svg",
        content: `Media queries allow layout changes for different devices.

Examples:
\`\`\`css
@media (max-width: 768px) {
  body { font-size: 14px; }
}
\`\`\`

🔗 Explore:
- https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries
- https://css-tricks.com/a-complete-guide-to-css-media-queries/`,
      },
      {
        title: "Mobile-First Design",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/icon12.svg",
        content: `Start with mobile styles, then scale up using min-width queries.

Benefits:
- Faster for mobile users
- Progressive enhancement

🔗 Docs:
- https://web.dev/responsive-web-design-basics/
- https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design`,
      },
    ],
  },
  {
    number: "05",
    title: "Advanced HTML & Accessibility",
    lessons: [
      {
        title: "Semantic HTML Elements",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/icon13.svg",
        content: `Semantic tags describe content meaningfully for browsers and screen readers:
- <header>, <footer>, <article>, <section>, <main>, <nav>
- Improves SEO and accessibility

🔗 Learn More:
- https://developer.mozilla.org/en-US/docs/Glossary/Semantics
- https://htmlreference.io/`,
      },
      {
        title: "ARIA Roles & Screen Readers",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/icon14.svg",
        content: `ARIA (Accessible Rich Internet Applications) adds context for assistive tech.

Examples:
- role="button"
- aria-label="Close"

Use sparingly — prefer native HTML where possible.

🔗 Docs:
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
- https://www.w3.org/WAI/standards-guidelines/aria/`,
      },
      {
        title: "Forms: Labels, Inputs, and Validation",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/icon15.svg",
        content: `Make forms user-friendly and accessible:
- Use <label for=""> correctly
- Provide placeholders and error messages
- Use required, minlength, pattern attributes

🔗 Explore:
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
- https://www.w3schools.com/html/html_form_attributes.asp`,
      },
    ],
  },
];

export default lessonsData;
