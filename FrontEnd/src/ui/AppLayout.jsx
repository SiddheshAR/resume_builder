import React, { useState } from "react";
import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import FormSection from "../components/Form/MultiStepForm.jsx";

// Templates Import
import TemplateS1 from "./templates/TemplateS1.jsx";
import TemplateS2 from "./templates/TemplateS2.jsx";
import TemplateD1 from "./templates/TemplateD1.jsx";
import TemplateD2 from "./templates/TemplateD2.jsx";
import TemplateD3 from "./templates/TemplateD3.jsx";
import MainTemplate from "./templates/MainTemplate.jsx";
import template1 from "../assets/template1.png";
import template2 from "../assets/template2.png";
import template3 from "../assets/template3.png";
import template4 from "../assets/template4.png";
import template5 from "../assets/template5.png";
import maintemplate from "../assets/maintemplate.png";

function AppLayout() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("TemplateD2");
  const [previewToggle, setPreviewToggle] = useState(false);

  const handleTemplateClick = (templateId) => {
    setSelectedTemplate(templateId);
    setPopupVisible(false);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setPreviewToggle(false);
  };

  const templates = [
    {
      id: "TemplateD1",
      name: "Template 1",
      image: template1,
      component: TemplateD1,
    },
    {
      id: "TemplateD2",
      name: "Template 2",
      image: template2,
      component: TemplateD2,
    },
    {
      id: "TemplateD3",
      name: "Template 3",
      image: template3,
      component: TemplateD3,
    },
    {
      id: "TemplateS1",
      name: "Template 4",
      image: template5,
      component: TemplateS1,
    },
    {
      id: "TemplateS2",
      name: "Template 5",
      image: template4,
      component: TemplateS2,
    },
    {
      id: "MainTemplate",
      name: "Template 6",
      image: maintemplate,
      component: MainTemplate,
    },
  ];

  return previewToggle ? (
    <div className="preview-container fixed top-0 left-0 h-full ">
      {templates.map((template) => {
        if (selectedTemplate === template.id) {
          return (
            <div
              className="bg-black bg-opacity-50 absolute top-0 bottom-0 h-full overflow-hidden "
              key={template.id}
            > 
                <template.component />
                <button
                  onClick={closePopup}
                  className="absolute top-0 z-50 text-black hover:text-gray-700 focus:outline-none "
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
          );
        }
      })}
    </div>
  ) : (
    <div className="layout flex flex-col items-center lg:flex-col-reverse gap-20 pb-[80px] md:pb-[100px]">
      <Header />
      <FormSection />
      <Navbar setPopupVisible={setPopupVisible} setPreviewToggle={setPreviewToggle} />
      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 gap-4 max-h-[250px] overflow-y-auto md:grid-cols-3 w-[70%] relative mt-[60px]">
            <button
              onClick={closePopup}
              className="absolute top-4 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            {templates.map((template) => (
              <img
                key={template.id}
                src={template.image}
                alt={template.name}
                onClick={() => handleTemplateClick(template.id)}
                className="cursor-pointer border-4 border-indigo-500 "
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
  
}
export default AppLayout;
