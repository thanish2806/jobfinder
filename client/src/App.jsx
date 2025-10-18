import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ErrorPage from "./components/ErrorPage";

// All your route imports
import Login from "./Login";
import Signup from "./Signup";
import Home from "./homepage/home";
import Dashboard from "./Dashboard/Dasnboard";
import CoursesHome from "./Coursespage/CoursesHome";
import Htmlcss from "./Coursespage/courses/Htmlcss";
import Javascriptessentials from "./Coursespage/courses/Javascriptessentials";
import Reactbeginer from "./Coursespage/courses/Reactbeginer";
import Nodex from "./Coursespage/courses/Nodex";
import Pythonc from "./Coursespage/courses/Pythonc";
import Uiux from "./Coursespage/courses/Uiux";
import Mongo from "./Coursespage/courses/Mongo";
import Fullstack from "./Coursespage/courses/Fullstack";
import Cybersecurity from "./Coursespage/courses/Cybersecurity";
import Aiml from "./Coursespage/courses/AiMl";
import DevOps from "./Coursespage/courses/DevOps";
import Dsa from "./Coursespage/courses/Dsa";
import Cloud from "./Coursespage/courses/Cloud";
import Blockchain from "./Coursespage/courses/Blockchain";
import Prompt from "./Coursespage/courses/Prompt";
import Flutter from "./Coursespage/courses/Flutter";
import Responsive from "./Coursespage/courses/Responsive";
import AdvancedJS from "./Coursespage/courses/AdvancedJS";
import SqlCourse from "./Coursespage/courses/Sql";
import GitGitHub from "./Coursespage/courses/GitGitHub";
import Api from "./Coursespage/courses/Api";
import Mlten from "./Coursespage/courses/Mlten";
import DockerForBeginners from "./Coursespage/courses/DockerForBeginners";
import CareerPrep from "./Coursespage/courses/CareerPrep";
import Mcq from "./Mcq/Mcq";
import Workspace from "./Mcq/Workspace";
import ProblemList from "./Mcq/ProblemList";
import Quizque from "./Mcq/Quizque";
import LandingPage from "./ResumeApp/pages/LandingPage";
import Profile from "./ResumeApp/ResumeProfile";
import Education from "./ResumeApp/Education";
import Projects from "./ResumeApp/Projects";
import Experience from "./ResumeApp/Experience";
import ExtraDetails from "./ResumeApp/ExtraDetails";
import Templates from "./ResumeApp/pages/Templates";
import Template1 from "./ResumeApp/ResumeTemplates/Template1";
import Template2 from "./ResumeApp/ResumeTemplates/Template2";
import ResumeLayout from "./ResumeApp/ResumeLayout";
import JobList from "./Joblist.jsx";

const App = () => {


  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard & Jobs */}
        <Route path="/home" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/profile" element={<Dashboard />} />

        {/* Courses */}
        <Route path="/courses" element={<CoursesHome />} />
        <Route path="/html-css" element={<Htmlcss />} />
        <Route
          path="/javascriptessentials"
          element={<Javascriptessentials />}
        />
        <Route path="/react-beginers" element={<Reactbeginer />} />
        <Route path="/node-express" element={<Nodex />} />
        <Route path="/python" element={<Pythonc />} />
        <Route path="/uiux" element={<Uiux />} />
        <Route path="/mongodb" element={<Mongo />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/aiml" element={<Aiml />} />
        <Route path="/devops" element={<DevOps />} />
        <Route path="/dsa" element={<Dsa />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/prompt-engineering" element={<Prompt />} />
        <Route path="/flutter" element={<Flutter />} />
        <Route path="/responsive-web-design" element={<Responsive />} />
        <Route path="/advanced-js" element={<AdvancedJS />} />
        <Route path="/sql" element={<SqlCourse />} />
        <Route path="/git-github" element={<GitGitHub />} />
        <Route path="/api" element={<Api />} />
        <Route path="/machine-learning-tensorflow" element={<Mlten />} />
        <Route path="/docker-for-beginners" element={<DockerForBeginners />} />
        <Route path="/careerprep" element={<CareerPrep />} />

        {/* MCQs */}
        <Route path="/mcq/:course/:id" element={<Quizque />} />
        <Route path="/mcq/problems" element={<ProblemList />} />
        <Route path="/mcq/problems/:id" element={<Workspace />} />
        <Route path="/mcq" element={<Mcq />} />

        {/* Resume */}
        <Route path="/resume" element={<LandingPage />} />
        <Route element={<ResumeLayout />}>
          <Route path="/resume-profile" element={<Profile />} />
          <Route path="/resume-education" element={<Education />} />
          <Route path="/resume-projects" element={<Projects />} />
          <Route path="/resume-experience" element={<Experience />} />
          <Route path="/resume-extraDetails" element={<ExtraDetails />} />
        </Route>
        <Route path="/resume-templates" element={<Templates />} />
        <Route path="/resume/1" element={<Template1 />} />
        <Route path="/resume/2" element={<Template2 />} />

        {/* Catch-All for 404 */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
