import React, { useState } from "react";
import "./course-main.css";
import courseHtmlBanner from "../../assets/courseimg/course-html.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const lessonsData =
  [
  {
    number: "01",
    title: "Introduction to Machine Learning",
    lessons: [
      {
        title: "What is Machine Learning?",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/ml-icon1.svg",
        content:
          "Get introduced to the fundamentals of Machine Learning (ML). Understand the differences between supervised, unsupervised, and reinforcement learning. Learn how ML is used in real-world applications like recommendation systems, fraud detection, and autonomous vehicles.",
      },
      {
        title: "Types of Machine Learning",
        lesson: "Lesson 02",
        duration: "50 Minutes",
        icon: "/assets/ml-icon2.svg",
        content:
          "Explore key ML paradigms including classification, regression, clustering, and dimensionality reduction. Analyze use-cases for each type and the kinds of problems they solve in practice.",
      },
      {
        title: "ML Workflow and Tools",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/ml-icon3.svg",
        content:
          "Understand the end-to-end machine learning workflow: from data collection and preprocessing to model training, evaluation, and deployment. Explore common ML tools like TensorFlow, scikit-learn, and Jupyter Notebooks.",
      },
    ],
  },
  {
    number: "02",
    title: "Getting Started with TensorFlow",
    lessons: [
      {
        title: "Installing and Setting Up TensorFlow",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/ml-icon4.svg",
        content:
          "Learn how to set up your development environment with TensorFlow. Install TensorFlow using pip, configure JupyterLab or Google Colab, and verify your installation with simple examples.",
      },
      {
        title: "Tensors and Operations",
        lesson: "Lesson 02",
        duration: "50 Minutes",
        icon: "/assets/ml-icon5.svg",
        content:
          "Understand what tensors are — the core data structures in TensorFlow. Learn about tensor shapes, ranks, data types, and how to perform basic operations like addition, multiplication, reshaping, and broadcasting.",
      },
      {
        title: "TensorFlow Architecture & Eager Execution",
        lesson: "Lesson 03",
        duration: "55 Minutes",
        icon: "/assets/ml-icon6.svg",
        content:
          "Explore the architecture of TensorFlow including computation graphs, sessions, and how eager execution simplifies development. Understand the difference between static and dynamic computation.",
      },
    ],
  },
  {
    number: "03",
    title: "Model Building and Training",
    lessons: [
      {
        title: "Creating Neural Networks with Keras",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/ml-icon7.svg",
        content:
          "Use TensorFlow's high-level Keras API to define and build neural networks. Understand the sequential and functional API models, add layers like Dense, Dropout, and Activation, and structure your network for classification problems.",
      },
      {
        title: "Compiling and Training Models",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/ml-icon8.svg",
        content:
          "Compile your model using appropriate loss functions, optimizers, and metrics. Learn how to train it on datasets, track accuracy, and manage overfitting using validation data.",
      },
      {
        title: "Evaluating and Saving Models",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/ml-icon9.svg",
        content:
          "Learn how to evaluate your trained models using test data. Understand metrics like accuracy, loss, precision, and recall. Save and load models for reuse using Keras `.save()` and `.load_model()` methods.",
      },
    ],
  },
  {
    number: "04",
    title: "Working with Data in TensorFlow",
    lessons: [
      {
        title: "Loading and Preprocessing Data",
        lesson: "Lesson 01",
        duration: "50 Minutes",
        icon: "/assets/ml-icon10.svg",
        content:
          "Use TensorFlow Datasets (TFDS) and NumPy to load data. Apply transformations such as normalization, resizing, and data augmentation. Use the `tf.data` API to efficiently pipeline large datasets.",
      },
      {
        title: "Image Classification with CNNs",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/ml-icon11.svg",
        content:
          "Build and train Convolutional Neural Networks (CNNs) for image classification tasks using datasets like MNIST or CIFAR-10. Understand key layers like Conv2D, MaxPooling2D, and Flatten.",
      },
      {
        title: "Natural Language Processing Basics",
        lesson: "Lesson 03",
        duration: "55 Minutes",
        icon: "/assets/ml-icon12.svg",
        content:
          "Explore tokenization, embeddings, and recurrent layers for text data. Use TensorFlow and Keras to build a sentiment analysis model using a dataset like IMDb reviews.",
      },
    ],
  },
  {
    number: "05",
    title: "Advanced Concepts & Deployment",
    lessons: [
      {
        title: "Transfer Learning with Pretrained Models",
        lesson: "Lesson 01",
        duration: "50 Minutes",
        icon: "/assets/ml-icon13.svg",
        content:
          "Learn how to use models like MobileNet, Inception, and BERT for your custom tasks. Understand the benefits of transfer learning and how to fine-tune layers for new datasets.",
      },
      {
        title: "Model Deployment with TensorFlow Serving",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/ml-icon14.svg",
        content:
          "Deploy your ML models using TensorFlow Serving. Set up RESTful APIs for inference, use Docker containers for packaging, and understand versioning of models in production.",
      },
      {
        title: "Ethics and Responsible AI",
        lesson: "Lesson 03",
        duration: "40 Minutes",
        icon: "/assets/ml-icon15.svg",
        content:
          "Understand ethical considerations in AI such as bias, fairness, transparency, and privacy. Explore best practices and real-world implications of deploying machine learning systems responsibly.",
      },
    ],
  },

];
const Mlten = () => {
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
        <div className="heading">Machine Learning with TensorFlow</div>
        <div className="paragraph">
           This course provides a hands-on introduction to Machine Learning
              using TensorFlow. You'll learn to create, train, and deploy
              machine learning models for real-world tasks. With step-by-step
              guidance and practical projects, you'll gain confidence in using
              TensorFlow for building intelligent applications.
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

export default Mlten;
