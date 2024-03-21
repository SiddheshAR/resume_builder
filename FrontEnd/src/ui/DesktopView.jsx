// import React from "react";  
// import Header from "./Header.jsx";
// import tempImg from '../assets/layout.png'
// import viewImg from "../assets/view.png"
// import PersonaIInfo from "../components/Form/PersonaIInfo.jsx";
// import MainTemplate from "./templates/MainTemplate.jsx";
// import Footer from "./Footer.jsx";
// import MultiStepForm from '../components/Form/MultiStepForm.jsx';

// // Templates Import
// import TemplateS1 from "./templates/TemplateS1.jsx";
// import TemplateS2 from "./templates/TemplateS2.jsx";
// import TemplateD1 from "./templates/TemplateD1.jsx";
// import TemplateD2 from "./templates/TemplateD2.jsx";
// import TemplateD3 from "./templates/TemplateD3.jsx";


// function DesktopView() {
//   return (
//     <div>
//     <div className="desktop-view flex w-[97%] pt-[20px]   mx-[30px] ">
//       <Header />
//       <div className="left w-[45%] ">
//         {/* navbar */}
//         <div className=" bg-white  flex items-center justify-between  w-[85%]">
//         <button className="flex items-center gap-2 border border-sky-500  rounded-2xl py-1 px-2 hover:bg-sky-500 hover:text-white transition duration-700 shadow-[#9333ea] shadow-md">
//           <img src={tempImg} alt="" className="w-4 hover:text-white" />
//           <span className="hover:text-white text-sky-500">Templates</span>
//         </button>
//         <div className="right-buttons flex gap-2 w-[130px] items-center">
//           {/* <button className="flex flex-col p-1 lg:p-2 lg:shadow-[#9333ea] lg:shadow-md items-center rounded-full shadow-xl hover:bg-sky-500 hover:text-white transition duration-700 ">
//             <img src={viewImg} alt="" className="w-4 " />
//             <span className="text-sky-500 text-[10px] hover:text-white lg:text-md ">
//               Preview
//             </span>
//           </button> */}
//           {/* <button
//             type="button"
//             className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center flex items-center gap-[5px]"
//           >
//             Next
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-5 h-5 "
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
//               />
//             </svg>
//           </button> */}
//         </div>
//       </div>
//         <MultiStepForm />
//       </div>

//       <div className="right  w-[60%] lg:w-[68%]   xl:w-[60%] ">
//           {/* <MainTemplate />   */}
//           <TemplateD2/>  
//       </div>
//     </div>
//     <Footer />
//     </div>
//   );
// }

// export default DesktopView;




// import React, { useState } from "react";
// import Header from "./Header.jsx";
// import Footer from "./Footer.jsx";
// import MultiStepForm from '../components/Form/MultiStepForm.jsx';
// import TemplateS1 from "./templates/TemplateS1.jsx";
// import TemplateS2 from "./templates/TemplateS2.jsx";
// import TemplateD1 from "./templates/TemplateD1.jsx";
// import TemplateD2 from "./templates/TemplateD2.jsx";
// import TemplateD3 from "./templates/TemplateD3.jsx";
// import MainTemplate from "./templates/MainTemplate.jsx";
// import tempImg from '../assets/layout.png';
// import template1 from '../assets/template1.png';
// import template2 from '../assets/template2.png';
// import template3 from '../assets/template3.png';
// import template4 from '../assets/template4.png';
// import template5 from '../assets/template5.png';
// import maintemplate from "../assets/maintemplate.png";

// function DesktopView() {
//   const [popupVisible, setPopupVisible] = useState(false);
//   const [selectedTemplate, setSelectedTemplate] = useState("TemplateD2");

//   const handleTemplateClick = (templateId) => {
//     setSelectedTemplate(templateId);
//     setPopupVisible(false);
//   };

//   const templates = [
//     { id: "TemplateD1", name: "Template 1", image: template1 },
//     { id: "TemplateD2", name: "Template 2", image: template2 },
//     { id: "TemplateD3", name: "Template 3", image: template3 },
//     { id: "TemplateS1", name: "Template 4", image: template5 },
//     { id: "TemplateS2", name: "Template 5", image: template4 },
//     { id: "MainTemplate", name: "Template 6", image: maintemplate },
//   ];

//   return (
//     <div>
//       <div className="desktop-view flex w-[97%] pt-[20px] mx-[30px]">
//         <Header />
//         <div className="left w-[45%]">
//           <div className="bg-white flex items-center justify-between w-[85%]">
//             <button
//               onClick={() => setPopupVisible(true)}
//               className="flex items-center gap-2 border border-sky-500 rounded-2xl py-1 px-2 hover:bg-sky-500 hover:text-white transition duration-700 shadow-[#9333ea] shadow-md"
//             >
//               <img src={tempImg} alt="" className="w-4 hover:text-white" />
//               <span className="hover:text-white text-sky-500">Templates</span>
//             </button>
//           </div>
//           <MultiStepForm />
//         </div>
//         <div className="right w-[60%] lg:w-[68%] xl:w-[60%]">
//           {selectedTemplate === "TemplateD1" && <TemplateD1 />}
//           {selectedTemplate === "TemplateD2" && <TemplateD2 />}
//           {selectedTemplate === "TemplateD3" && <TemplateD3 />}
//           {selectedTemplate === "TemplateS1" && <TemplateS1 />}
//           {selectedTemplate === "TemplateS2" && <TemplateS2 />}
//           {selectedTemplate === "MainTemplate" && <MainTemplate />}
//         </div>
//       </div>
//       <Footer />

//       {/* Template button popup is coming from here */}
//       {popupVisible && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg grid grid-cols-3 gap-4 h-[600px] w-[600px]">
//             {templates.map((template) => (
//               <img
//                 key={template.id}
//                 src={template.image}
//                 alt={template.name}
//                 onClick={() => handleTemplateClick(template.id)}
//                 className="cursor-pointer border-4 border-indigo-500" 
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DesktopView;


                                                                                                                                                                                                                                                                                                                                                                                         



// import React, { useState } from "react";
// import Header from "./Header.jsx";
// import Footer from "./Footer.jsx";
// import MultiStepForm from '../components/Form/MultiStepForm.jsx';
// import TemplateS1 from "./templates/TemplateS1.jsx";
// import TemplateS2 from "./templates/TemplateS2.jsx";
// import TemplateD1 from "./templates/TemplateD1.jsx";
// import TemplateD2 from "./templates/TemplateD2.jsx";
// import TemplateD3 from "./templates/TemplateD3.jsx";
// import MainTemplate from "./templates/MainTemplate.jsx";
// import tempImg from '../assets/layout.png';
// import template1 from '../assets/template1.png';
// import template2 from '../assets/template2.png';
// import template3 from '../assets/template3.png';
// import template4 from '../assets/template4.png';
// import template5 from '../assets/template5.png';
// import maintemplate from "../assets/maintemplate.png";

// function DesktopView() {
//   const [popupVisible, setPopupVisible] = useState(false);
//   const [selectedTemplate, setSelectedTemplate] = useState("TemplateD2");

//   const handleTemplateClick = (templateId) => {
//     setSelectedTemplate(templateId);
//     setPopupVisible(false);
//   };

//   const closePopup = () => {
//     setPopupVisible(false);
//   };

//   const templates = [
//     { id: "TemplateD1", name: "Template 1", image: template1 },
//     { id: "TemplateD2", name: "Template 2", image: template2 },
//     { id: "TemplateD3", name: "Template 3", image: template3 },
//     { id: "TemplateS1", name: "Template 4", image: template5 },
//     { id: "TemplateS2", name: "Template 5", image: template4 },
//     { id: "MainTemplate", name: "Template 6", image: maintemplate },
//   ];

//   return (
//     <div>
//       <div className="desktop-view flex w-[97%] pt-[20px] mx-[30px]">
//         <Header />
//         <div className="left w-[45%]">
//           <div className="bg-white flex items-center justify-between w-[85%]">
//             <button
//               onClick={() => setPopupVisible(true)}
//               className="flex items-center gap-2 border border-sky-500 rounded-2xl py-1 px-2 hover:bg-sky-500 hover:text-white transition duration-700 shadow-[#9333ea] shadow-md"
//             >
//               <img src={tempImg} alt="" className="w-4 hover:text-white" />
//               <span className="hover:text-white text-sky-500">Templates</span>
//             </button>
//           </div>
//           <MultiStepForm />
//         </div>
//         <div className="right w-[60%] lg:w-[68%] xl:w-[60%]">
//           {selectedTemplate === "TemplateD1" && <TemplateD1 />}
//           {selectedTemplate === "TemplateD2" && <TemplateD2 />}
//           {selectedTemplate === "TemplateD3" && <TemplateD3 />}
//           {selectedTemplate === "TemplateS1" && <TemplateS1 />}
//           {selectedTemplate === "TemplateS2" && <TemplateS2 />}
//           {selectedTemplate === "MainTemplate" && <MainTemplate />}
//         </div>
//       </div>

//       <Footer />

//       {/* Template button popup is coming from here */}
//       {popupVisible && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg grid grid-cols-3 gap-4 h-[600px] w-[600px] relative">
//             <button onClick={closePopup} className="absolute top-4 right-2 text-gray-500 hover:text-gray-700 focus:outline-none">
//               <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
//                 <path d="M6 18L18 6M6 6l12 12"></path>
//               </svg>
//             </button>
//             {templates.map((template) => (
//               <img
//                 key={template.id}
//                 src={template.image}
//                 alt={template.name}
//                 onClick={() => handleTemplateClick(template.id)}
//                 className="cursor-pointer border-4 border-indigo-500" 
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DesktopView;



import React, { useState,useRef } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import MultiStepForm from '../components/Form/MultiStepForm.jsx';
import TemplateS1 from "./templates/TemplateS1.jsx";
import TemplateS2 from "./templates/TemplateS2.jsx";
import TemplateD1 from "./templates/TemplateD1Sidh.jsx";
import TemplateD2 from "./templates/TemplateD2.jsx";
import TemplateD3 from "./templates/TemplateD3.jsx";
import MainTemplate from "./templates/MainTemplate.jsx";
import template1 from '../assets/template1.png';
import template2 from '../assets/template2.png';
import template3 from '../assets/template3.png';
import template4 from '../assets/template4.png';
import template5 from '../assets/template5.png';
import maintemplate from "../assets/maintemplate.png";
import Navbar from "./Navbar.jsx";


function DesktopView() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("TemplateD2");

  // Pdf Download Part

  const pdfRef = useRef();

  const downloadPDF = async () => {
    const input = pdfRef.current;
    const canvas = await html2canvas(input,{ scale: 3 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4', true);
    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 0; // Adjust this value based on your header height
    // const imgWidth = pdfWidth; // Set imgWidth to match the PDF width
    // const imgHeight = (canvas.height * pdfWidth) / canvas.width; // Calculate proportional height
    // const ratio = pdfWidth / imgWidth; // Adjusted ratio
    // const imgX = 0; // Align to the left
    // const imgY = 0; // Align to the top
    
    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    pdf.save('resume.pdf');
  };

  // Download part end


  const handleTemplateClick = (templateId) => {
    setSelectedTemplate(templateId);
    setPopupVisible(false);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handlePreview = () => {
    setPreviewVisible(true);
  };

  const templates = [
    { id: "TemplateD1", name: "Template 1", image: template1 , component:TemplateD1},
    { id: "TemplateD2", name: "Template 2", image: template2 , component:TemplateD2},
    { id: "TemplateD3", name: "Template 3", image: template3 , component:TemplateD3},
    { id: "TemplateS1", name: "Template 4", image: template5 , component:TemplateS1},
    { id: "TemplateS2", name: "Template 5", image: template4 , component:TemplateS2},
    { id: "MainTemplate", name: "Template 6", image: maintemplate , component:MainTemplate},
  ];

  return (
    <div>
      <div className="desktop-view flex flex-col md:flex-row w-[97%] pt-[20px] mx-[30px]">
        <Header />
        
        {/* <div className="left w-[45%]"> */}
        <div className="left w-[45%]">
        <Navbar selectedTemplate={selectedTemplate} setPopupVisible={setPopupVisible} templates={templates} popupVisible={popupVisible} handleTemplateClick={handleTemplateClick} closePopup={closePopup}/> 
        <button onClick={downloadPDF} >Download</button>
      
          
          <MultiStepForm />
        </div>
        {/* <div   className="right w-[60%]  xl:w-[60%] z-0 "> */}
        <div   className="right w-auto  xl:w-auto z-0 ">

          <div ref={pdfRef}>
          {selectedTemplate === "TemplateD1" && <TemplateD1 />}
          {selectedTemplate === "TemplateD2" && <TemplateD2 />}
          {selectedTemplate === "TemplateD3" && <TemplateD3 />}
          {selectedTemplate === "TemplateS1" && <TemplateS1 />}
          {selectedTemplate === "TemplateS2" && <TemplateS2 />}
          {selectedTemplate === "MainTemplate" && <MainTemplate />}
          </div>
        </div>
        

      </div>
      

      <Footer />
     
      {/* Template button popup is coming from here */}
      {popupVisible && (
        <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" bg-white p-8 rounded-lg shadow-lg grid grid-cols-3 gap-4 h-[600px] w-[600px] relative">
            <button onClick={closePopup} className="absolute top-4 right-2 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            {templates.map((template) => (
              <img
                key={template.id}
                src={template.image}
                alt={template.name}
                onClick={() => handleTemplateClick(template.id)}
                className="cursor-pointer border-4 border-indigo-500" 
              />
            ))}
          </div>
        </div>
            )}

      </div>
      ); 
} 

export default DesktopView; 

{/*
            <button
              onClick={() => setPopupVisible(true)}
              className="flex items-center gap-2 border border-sky-500 rounded-2xl py-1 px-2 hover:bg-sky-500 hover:text-white transition duration-700 shadow-[#9333ea] shadow-md"
            >
              <img src={tempImg} alt="" className="w-4 hover:text-white" />
              <span className="hover:text-white text-sky-500">Templates</span>
  </button>*/}