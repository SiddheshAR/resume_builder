import React from "react";
import { selectUserData } from "../../reduxToolkit/FormDataSlice.jsx";
import { useSelector } from "react-redux";
//import { ProjectsTab } from "../../components/Form/MultiForms/ProjectsForm.jsx";
import { selectExperienceData } from "../../reduxToolkit/FormDataSlice.jsx";
import { selectEducationData } from "../../reduxToolkit/FormDataSlice.jsx";

function MainTemplate() {
  const userInputData = useSelector(selectUserData);
  const userExperienceData = useSelector(selectExperienceData);
  const userEducationData = useSelector(selectEducationData);
  console.log(userInputData);
  console.log(userExperienceData);
  console.log(userEducationData);
  const isLargeViewport = window.innerWidth >= 1024; 
  return (
    
    // <div
    //   className="template main-template bg-white   lg:mt-[20px] w-[210mm] h-[297mm] lg:w-[210mm] lg:h-[297mm]  md:w-[1300px]  lg:max-h-[297mm] lg:overflow-auto lg:mb-[150px]   shadow-lg mx-[20px] px-[30px] lg:mx-20 lg:px-[50px] lg:pb-[100px] shadow-[#9333ea] relative z-0 tracking-wider"
    //    style={isLargeViewport ? { transform: "scale(0.6)", marginTop:"100px", marginLeft:"200px"} : {}}
    // >
          <div
      className="template main-template bg-white    w-[210mm] h-[297mm] lg:w-[210mm] lg:h-[297mm]  md:w-[1300px]  lg:max-h-[297mm] lg:overflow-auto lg:mb-[150px]   shadow-lg mx-[20px] px-[30px] lg:mx-20 lg:px-[50px] lg:pb-[100px] shadow-[#9333ea] relative z-0 tracking-wider"
      style={isLargeViewport ? { transform: "scale(1)", marginTop:"100px", marginLeft:"200px"} : {}}
    >
      {/*Template Header */}
      <div className="header-wrapper pt-5  ">
        <header className="flex justify-between  ">
          {/* left */}
          <div className="left flex  w-[300px]  justify-between gap-[10px] ">
            {/* logo */}
            <div className="mt-3">
              <button className="logo  p-4 bg-[#de8535] rounded-full ">
                <span className="text-white text-lg lg:text-4xl  font-serif">
                  {" "}
                  {userInputData && userInputData.firstName
                    ? userInputData.firstName[0]
                    : "C"}
                </span>
                <span className="text-white text-lg lg:text-4xl font-serif">
                  {userInputData && userInputData["last-name"]
                    ? userInputData["last-name"][0]
                    : "C"}{" "}
                </span>
              </button>
            </div>
            {/* name & job */}
            <div className="name-job ">
              <div className="firstName text-[#de8535] font-serif text-xl lg:text-4xl">
                {userInputData && userInputData.firstName
                  ? userInputData.firstName
                  : "Chris"}
              </div>
              <div className="lastName text-[#de8535] font-serif text-xl lg:text-4xl">
                {userInputData && userInputData["last-name"]
                  ? userInputData["last-name"]
                  : "Candidate"}
              </div>
              <div className="job-title w-[250px] text-[15px] lg:text-md font-serif ">
                Human Resource Manager
              </div>
            </div>
            {/* right */}
            <div className="right  text-custom-orange absolute right-[60px]">
              <div className="adress text-[15px]">
                {userInputData && userInputData.address
                  ? userInputData.address
                  : "Sunnydale Lane"}
              </div>
              <div className="adress-city  flex  gap-[5px]">
                <div className="city text-[15px]">
                  {userInputData && userInputData.city
                    ? userInputData.city
                    : "Plano"}
                </div>
                <div className="city-code text-[15px]">
                  {userInputData && userInputData["city-code"]
                    ? userInputData["city-code"]
                    : "TX 75071"}
                </div>
              </div>
              <div className="adress-state-country  flex   gap-[5px]">
                <div className="state text-[15px]">
                  {userInputData && userInputData.state
                    ? userInputData.state
                    : "Texas"}
                </div>
                <div className="country text-[15px]">
                  {userInputData && userInputData.country
                    ? userInputData.country
                    : "USA"}
                </div>
              </div>
              <div className="email text-[15px]">
                {userInputData && userInputData["email-address"]
                  ? userInputData["email-address"]
                  : "email@youremail.com"}
              </div>
              {/* <div className="phone text-xs">{userInputData && userInputData.address ? userInputData.address : "(469) 385-2948"}</div> */}
            </div>
          </div>
        </header>
        <p className="description text-[13px] leading-[20px] lg:text-[15px] lg:leading-[24px] text-gray-500 pt-4 leading-3">
          Human resources generalist with 8 years of experience in HR, including
          hiring and terminating, disciplining employees and helping department
          managers improve employee performance. Worked with labor unions to
          negotiate compensation packages for workers. Organized new hire
          training initiatives as well as ongoing training to adhere to
          workplace safety standards. Worked with OSHA to ensure that all safety
          regulations are followed.
        </p>
      </div>
      {/* Template body */}
      <div className=" ">
        <h1 className=" text-serif  text-lg lg:text-2xl text-[#de8535] border-b-2 border-[#de8535] pt-2">
          Professional Experience
        </h1>
        <div className="exp-1 flex items-center w-[70%]  gap-3  font-serif pt-2 lg:w-[100%]">
          <h2>
            {userExperienceData && userExperienceData.positionTitle
              ? userExperienceData.positionTitle
              : "Manager"}
          </h2>
          <div className="duration  text-gray-500 ">
            {userExperienceData && userExperienceData.companyName
              ? userExperienceData.companyName
              : "XYZ Company"}
            ,{" "}
            {userExperienceData && userExperienceData.description
              ? userExperienceData.description
              : "Description "}
            |{" "}
            {userExperienceData && userExperienceData.startDate
              ? userExperienceData.startDate
              : "Start Date"}
            -
            {userExperienceData && userExperienceData.endDate
              ? userExperienceData.endDate
              : "End Date"}
          </div>
        </div>
        <ul className="text-[15px] text-gray-500 lg:leading-[25px] ">
          <li className="list-item">
            Implement effective company policies to ensure that all practices
            comply with labor and employment regulations{" "}
          </li>
          <li className="list-item">
            Increased employee retention rates by managing workplace
            satisfaction to an over 90% success rate by creating and maintaining
            a positive work environment{" "}
          </li>
          <li className="list-item">
            Develop targeted outreach practices to increase minority recruitment
            and ensure compliance with affirmative action policies{" "}
          </li>
          <li className="list-item">
            Monitor scheduled in and out times as well as employee breaks to
            ensure that proper employment laws are met{" "}
          </li>
        </ul>
        <div className="exp-2 flex items-center w-[70%] pt-[15px] gap-3 font-serif lg:w-[90%]">
          <h2>Human Resources Associate</h2>
          <div className="duration text-[15px] text-gray-500">
            XYZ Company, City, State | June 2020 - Present
          </div>
        </div>
        <ul className="text-[15px] text-gray-500 lg:leading-[25px]">
          <li className="list-item">
            Implement effective company policies to ensure that all practices
            comply with labor and employment regulations{" "}
          </li>
          <li className="list-item">
            Increased employee retention rates by managing workplace
            satisfaction to an over 90% success rate by creating and maintaining
            a positive work environment{" "}
          </li>
          <li className="list-item">
            Develop targeted outreach practices to increase minority recruitment
            and ensure compliance with affirmative action policies{" "}
          </li>
        </ul>
        <h1 className="education text-lg lg:text-2xl text-[#de8535] border-b-2 border-[#de8535] pt-2">
          Education
        </h1>
        <div className="edu-1 flex items-center w-[80%]  gap-3  font-serif pt-2 lg:w-[100%]">
          {/* <h2>Masters in Human Resources</h2> */}
          <h2>
            {userEducationData && userEducationData.degree
              ? userEducationData.degree
              : "Masters in Human Resources "}
          </h2>
          {/* <div className="duration text-[15px] text-gray-500">
            The University of Texas, Dallas | September 2007 - May 2011
          </div> */}
          <div className="duration text-[15px] text-gray-500">
            {userEducationData && userEducationData.schoolName
              ? userEducationData.schoolName
              : "The University of Texas, Dallas | September 2007 - May 2011"}
          </div>
        </div>
        <ul className="text-[15px] text-gray-500 leading-5">
          {/* <li className="list-item">Academic Awardee of AY 2007-2008</li> */}
          <li className="list-item">
            {userEducationData && userEducationData.description
              ? userEducationData.description
              : "Academic Awardee of AY 2007-2008"}
          </li>
        </ul>
        <div className="skills-div w-[100%]">
          <h1 className="skills text-lg lg:text-2xl text-[#de8535] border-b-2 border-[#de8535] pt-2 ">
            Key Skills
          </h1>
          {userInputData && userInputData.skills && userInputData.skills > 0 ? (
            userInputData.skills.map((skill, index) => (
              <ul
                className="text-[15px] text-gray-500 lg:leading-[25px] pt-2 flex items-center  w-[40%]   "
                key={index}
              >
                <div
                  className={`skillLevel w-[${skill[1]}] p-[2px] text-white text-center text-[10px] rounded-sm  bg-[#de8535] mr-[15px]`}
                >
                  {skill[1]}
                </div>
                <li className="updated-skill">{skill[0]}</li>
              </ul>
            ))
          ) : (
            <ul className="text-[15px] text-gray-500 lg:leading-[25px] pt-2">
              <li className="skill">Detail oriented</li>
              <li className="skill">Well-versed in Texas employment law</li>
              <li className="skill">
                Excellent written and oral communication skills
              </li>
              <li className="skill">
                Develops positive workplace relationships
              </li>
            </ul>
          )}
        </div>
      </div>
      {/* Adding additional sections based on userData */}

      {/* Projects */}
      {userInputData &&
      userInputData.projects &&
      userInputData.projects.length > 0 ? (
        <>
          <h1 className="projects text-lg  lg:text-2xl text-[#de8535] border-b-2 border-[#de8535] pt-2">
            Projects
          </h1>
          {userInputData.projects.map((project) => {
            return (
              <ul
                key={project.id}
                className="text-[15px] text-gray-500 lg:leading-5  pt-2 flex gap-[10px] "
              >
                <li className=" w-full ">
                  <div className="project-header flex flex-row gap-[15px] items-center">
                    <h2 className="text-lg heading">{project.Heading}</h2>
                    <a
                      href={project.Link}
                      className="text-md text-cyan-600 cursor-pointer"
                    >
                      {project.Link}
                    </a>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                </li>
              </ul>
            );
          })}
        </>
      ) : null}
      {/*Certificates*/}
      {userInputData &&
      userInputData.certificates &&
      userInputData.certificates.length > 0 ? (
        <>
          <h1 className="languages text-lg lg:text-2xl text-[#de8535] border-b-2 border-[#de8535] pt-2">
            Certificates
          </h1>
          {userInputData.certificates.map((certificate, index) => {
            return (
              <ul
                key={index}
                className="text-[15px] text-gray-500 lg:leading-5  pt-2 flex gap-[10px]"
              >
                <h2 className="font-serif font-bold">
                  {certificate.Certificate_Name}
                </h2>
                <div className=" flex gap-[10px]">
                  <h3>{certificate.Institute}</h3> |
                  <span>{certificate.startDate}</span>
                </div>
              </ul>
            );
          })}
        </>
      ) : null}
      {/* Languages */}
      {userInputData &&
      userInputData.language &&
      userInputData.language.length > 0 ? (
        <>
          <h1 className="languages text-sm lg:text-2xl text-[#de8535] border-b-2 border-[#de8535] pt-2">
            Languages
          </h1>
          {userInputData.language.map((lan, index) => {
            return (
              <ul
                key={index}
                className="text-[15px] text-gray-500 lg:leading-5  pt-2 flex gap-[10px]"
              >
                <li className="list-item text-black  w-[150px]">
                  {lan[0]} - {lan[1]}
                </li>
              </ul>
            );
          })}
        </>
      ) : null}

      {/* Custom Form */}
      {userInputData && userInputData.customData
        ? userInputData.customData.map((customData) => {
            return (
              <ul
                key={customData.id}
                className="text-[15px] text-gray-500 lg:leading-5  pt-2 flex gap-[10px] "
              >
                <li className=" w-full ">
                  <h1 className="custom-data  text-lg lg:text-2xl text-[#de8535] border-b-2 border-[#de8535] pt-2">
                    {customData.Custom_Heading}
                  </h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: customData.description }}
                  />
                </li>
              </ul>
            );
          })
        : null}
    </div>
  );
}

export default MainTemplate;
