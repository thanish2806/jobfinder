import React, { useState } from "react";
import "./course-main.css";
import courseHtmlBanner from "../../assets/courseimg/course-html.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const lessonsData = [
  {
    number: "01",
    title: "Introduction to Prompt Engineering",
    lessons: [
      {
        title: "What is Prompt Engineering?",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/prompt-icon1.svg",
        content: `Prompt engineering is the art of designing input queries to optimize the performance of language models like GPT.

🧠 Why it matters:
- Improves the quality, relevance, and safety of AI responses
- Helps control model behavior

Applications:
- Chatbots
- Code generation
- Content creation
- Semantic search

\`\`\`txt
Example:
Prompt: "Write a tweet explaining quantum physics to a 5-year-old."
\`\`\`

🔗 Resources:
- https://platform.openai.com/docs/guides/prompt-engineering
- https://huggingface.co/blog/prompt-engineering
        `,
      },
      {
        title: "How Large Language Models Understand Prompts",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/prompt-icon2.svg",
        content: `Understanding how LLMs process text helps us write better prompts.

🔍 Key Concepts:
- Tokenization (models see tokens, not words)
- Context window (limited memory, e.g., 8k tokens)
- Attention mechanisms focus on prompt details

🧪 Prompt Sensitivity:
- Small changes = big output differences
- Use precise and unambiguous phrasing

\`\`\`txt
Bad: "Tell me something."
Better: "List 3 facts about Mars."
\`\`\`

🔗 Learn:
- https://openai.com/research
- https://jalammar.github.io/illustrated-transformer/
        `,
      },
      {
        title: "Prompt Types & Categories",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/prompt-icon3.svg",
        content: `Prompts vary depending on task type. Mastering types helps control LLM output.

📚 Categories:
- Informational (Q&A, explanations)
- Instructional (step-by-step tasks)
- Creative (stories, poetry, dialogue)
- Multi-turn (chat-style interactions)

\`\`\`txt
Instructional:
"Explain how a neural network works using simple analogies."
\`\`\`

Tip: Match the prompt to your desired tone, format, and objective.

🔗 Resources:
- https://arxiv.org/abs/2107.13586
        `,
      },
    ],
  },
  {
    number: "02",
    title: "Prompt Design Techniques",
    lessons: [
      {
        title: "Few-shot & Zero-shot Prompting",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/design-icon1.svg",
        content: `🛠️ Few-shot prompting provides examples within the prompt to guide the model.

\`\`\`txt
Translate English to French:
- Dog -> Chien
- Cat -> Chat
- House -> ?
\`\`\`

🧪 Zero-shot:
No examples; just an instruction:
"Translate 'house' to French."

Use Cases:
- Few-shot: Improved control for creative or complex tasks
- Zero-shot: Faster, works for clear instructions

🔗 Learn More:
- https://arxiv.org/abs/2005.14165
        `,
      },
      {
        title: "Chain-of-Thought Prompting",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/design-icon2.svg",
        content: `Chain-of-thought (CoT) prompting encourages step-by-step reasoning.

🧠 Useful for:
- Math problems
- Logic puzzles
- Multi-step reasoning

\`\`\`txt
Q: If there are 3 apples and you eat 1, how many are left?
A: Let's think step by step.
There were 3 apples. I ate 1. So 3 - 1 = 2 apples left.
\`\`\`

📈 Research shows CoT improves accuracy in LLMs on reasoning tasks.

🔗 Learn More:
- https://arxiv.org/abs/2201.11903
        `,
      },
      {
        title: "Role-based & Contextual Prompts",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/design-icon3.svg",
        content: `Giving the model a "role" shapes its tone and knowledge level.

🧑‍🏫 Role-based:
"You are a helpful tutor. Explain calculus to a high school student."

📘 Contextual Prompting:
Set the stage using background info or constraints.

\`\`\`txt
You are a legal advisor. Summarize the following contract in simple language:
[text]
\`\`\`

Tip: Be explicit about style, tone, format, and expertise.

🔗 Learn:
- https://platform.openai.com/docs/guides/gpt-best-practices
        `,
      },
    ],
  },
  {
    number: "03",
    title: "Advanced Prompt Strategies",
    lessons: [
      {
        title: "Prompting for Specific Output Formats",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/advanced-icon1.svg",
        content: `Force consistent output using structured instructions.

📋 Formats:
- JSON
- Tables
- Bullet lists
- Markdown

\`\`\`txt
Respond with a JSON object containing 'title', 'summary', and 'keywords' for the following article.
\`\`\`

Useful for:
- Integrating with APIs
- Automation and data extraction

🔗 Learn:
- https://platform.openai.com/docs/guides/completion/structured-output
        `,
      },
      {
        title: "Using Prompt Templates & Variables",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/advanced-icon2.svg",
        content: `Templates make prompts reusable and dynamic.

Example:
\`\`\`js
const prompt = \`Summarize this blog post: \${blogContent}\`;
\`\`\`

Benefits:
- Scalable
- Easy A/B testing
- Dynamic use with frontend/backend

Tools:
- LangChain prompt templates
- OpenAI function calling

🔗 Learn:
- https://js.langchain.com/docs/modules/prompts/prompt_templates
        `,
      },
      {
        title: "Handling Prompt Failures & Debugging",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/advanced-icon3.svg",
        content: `Prompt not working? Here’s how to debug:

🔍 Checklist:
- Too vague? Add clarity.
- Model hallucinating? Reduce creativity.
- Wrong format? Use output constraints.

🧪 Try:
- Simplify instructions
- Add examples (few-shot)
- Split tasks into smaller chunks

🧰 Tools:
- Playground for experimentation
- Logs and error feedback

🔗 Guide:
- https://help.openai.com/en/articles/6825453
        `,
      },
    ],
  },
  {
    number: "04",
    title: "Prompting Across Domains",
    lessons: [
      {
        title: "Prompts for Coding & Debugging",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/domain-icon1.svg",
        content: `Prompt LLMs to generate, explain, or debug code.

Examples:
\`\`\`txt
Write a Python function to sort an array using merge sort.
Explain what this JavaScript code does: [code]
\`\`\`

Tips:
- Ask for inline comments
- Clarify language or framework

🔗 Tools:
- GitHub Copilot
- OpenAI Codex
        `,
      },
      {
        title: "Prompts for Writing & Creativity",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/domain-icon2.svg",
        content: `Use prompts to co-create:
- Stories
- Poetry
- Articles

\`\`\`txt
Write a 100-word sci-fi story about AI taking over a coffee shop.
\`\`\`

Adjust:
- Tone (funny, formal, poetic)
- Format (dialogue, script, blog)

🔗 Tips:
- Be specific about genre, style, and audience
        `,
      },
      {
        title: "Prompts for Education & Tutoring",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/domain-icon3.svg",
        content: `LLMs can tutor or quiz learners interactively.

Examples:
\`\`\`txt
Explain the Pythagorean theorem with a real-world example.
Create 5 MCQs on Newton's Laws with answers.
\`\`\`

Use for:
- Revision assistance
- Practice problems
- Adaptive feedback

🔗 Guide:
- https://openai.com/blog/chatgpt-edu
        `,
      },
    ],
  },
  {
    number: "05",
    title: "Ethics, Safety & Best Practices",
    lessons: [
      {
        title: "Ethical Considerations in Prompting",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/ethics-icon1.svg",
        content: `Prompts can shape behavior — for better or worse.

⚖️ Issues:
- Bias
- Misinformation
- Harmful content

Prompts should:
- Be neutral
- Avoid stereotypes
- Encourage safety and inclusivity

\`\`\`txt
Unethical: "Give a controversial opinion..."
Better: "Summarize opposing views on [topic]."
\`\`\`

🔗 Read:
- https://openai.com/safety
        `,
      },
      {
        title: "Safety & Moderation with Prompts",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/ethics-icon2.svg",
        content: `Use safeguards and filters to prevent misuse.

Tools:
- OpenAI Moderation API
- Prompt constraints (no violence, no hate, etc.)

Tips:
- Test edge cases
- Add disclaimers in outputs

\`\`\`js
"Please respond safely. Avoid harmful or explicit content."
\`\`\`

🔗 Docs:
- https://platform.openai.com/docs/guides/safety-best-practices
        `,
      },
      {
        title: "Future of Prompt Engineering",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/ethics-icon3.svg",
        content: `Prompting is evolving into a key AI skill.

🔮 Trends:
- Prompt marketplaces
- Automated prompt optimizers
- Fine-tuning + prompting hybrids

New Roles:
- Prompt Engineer
- AI Interaction Designer

📚 Keep Learning:
- Experiment with tools like PromptLayer, LangChain
- Join communities (e.g., r/PromptEngineering)

🔗 Insights:
- https://promptingguide.ai
        `,
      },
    ],
  },
];


const Prompt = () => {
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
        <div className="heading">Prompt Engineering for AI</div>
        <div className="paragraph">
          This course introduces the principles and techniques behind prompt
          engineering for AI models like ChatGPT. You'll learn how to craft
          precise and impactful prompts to get the best possible outcomes from
          language models. Ideal for developers, writers, and enthusiasts who
          want to optimize their interaction with AI systems.
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

export default Prompt;
