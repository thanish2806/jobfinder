import React, { useEffect, useState } from "react";
import ResumeTemplate1 from "../ResumeTemplates/Template1";
import ResumeTemplate2 from "../ResumeTemplates/Template2";
import { useParams } from "react-router-dom";

export default function Resume() {
  const { template } = useParams();
  const [selectedTemplate, setSelectedTemplate] = useState(1);

  useEffect(() => {
    if (template) {
      // Extract the template number from the URL
      const templateNumber = parseInt(template.split("=")[1], 10);
      if (!isNaN(templateNumber)) {
        setSelectedTemplate(templateNumber);
      } else {
        console.error("Invalid template number");
      }
    }
  }, [template]);

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 1:
        return <ResumeTemplate1 />;
      case 2:
        return <ResumeTemplate2 />;
      default:
        return <div>Template not found.</div>; // Fallback for invalid template
    }
  };

  return <>{renderTemplate()}</>;
}
