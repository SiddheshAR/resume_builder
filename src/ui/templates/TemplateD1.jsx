import { useState } from "react";
import { selectUserData } from "../../reduxToolkit/FormDataSlice.jsx";
import { useSelector } from "react-redux";

function TemplateD1() {
  const [count, setCount] = useState(0);
  const userInputData = useSelector(selectUserData);
  return (
    <div
      className="w-[210mm] h-[297mm] lg:max-h-[297mm] lg:overflow-auto flex flex-row  border-[2px] border-[rgb(0 0 0)] "
      style={{ transform: "scale(1.1)" }}
    >
      <div className="bg-[rgb(39,55,85)] w-[150%] text-[rgb(252,255,250)] max-h-[297mm] overflow-auto  grow">
        <div className="leftimgbox">
          <div className="img">
            <div className="w-[200px] h-[200px] bg-[black] ml-10 mt-10 p-2.5 rounded-[50%]"></div>
          </div>
          <div className="mt-[-0px] text-[40px] font-bold ml-10 flex">
            <p className="text-[rgb(252,255,250)] firstname">{userInputData && userInputData.firstName
                  ? userInputData.firstName
                  : "Devraj"}</p>
            <p className="text-[rgb(252,255,250)] lastname ml-2">{userInputData && userInputData["last-name"]
                  ? userInputData["last-name"]
                  : "Patil"}</p>
          </div>
          <div className="text-xl font-medium mt-[-0px] ml-[70px]">
            <p className="emailaddress">{userInputData && userInputData["email-address"]
                  ? userInputData["email-address"]
                  : "gmail@gmail.com"}</p>
            <p className="Address">{userInputData && userInputData.address
                  ? userInputData.address
                  : "Belgian tower"},{userInputData && userInputData.city
                    ? userInputData.city
                    : "Paris"}</p>
                    <p className="citycode">{userInputData && userInputData["city-code"]
                    ? userInputData["city-code"] :"12345"}</p>
                    <p className="state">{userInputData && userInputData.state
                    ? userInputData.state
                    : "state"}</p>
                    <p className="country">{userInputData && userInputData.country
                    ? userInputData.country
                    : "Country"}</p>
          </div>
        </div>

        <div className="w-4/5 bg-white text-[rgb(255,0,0)] ml-10 mt-5">
          <hr />
        </div>

        <div className="text-[rgb(167,27,36)] ml-10 mt-5 ">
          <h3 className="text-3xl font-semibold text-[rgb(252,255,250)] mt-[60px]">
            EDUCATION
          </h3>
          <h5 className=" font-medium text-[rgb(224,231,239)] mt-5">
            School name + Loction
          </h5>  {/*school name and location to be added here */}
          <h6 className=" font-medium text-[rgb(224,231,239)] mt-5">
            2023 -2023 {/*start date and end date to be added here */}
          </h6>
          <h6 className=" font-medium text-[rgb(224,231,239)] mt-5">
            Degree and field of study {/*degree and field of study to be added here */}
          </h6>
          <p className=" font-medium text-[rgb(224,231,239)] mt-5">
            Description {/*description to be added here */}
          </p>

          <div className=" font-medium  mt-[35px] ">
            <h2 className="text-3xl font-semibold text-[rgb(252,255,250)]">
              Skills
            </h2>
            {userInputData && userInputData.skills && userInputData.skills.length>0? (
              userInputData.skills.map((skill, index) => (
                <ul
                  className="pt-5 text-lg  text-[rgb(252,255,250)] text-gray-500 leading-[25px]  flex items-center  w-[90%]   "
                  key={index}
                >
                  <div
                    className={`skillLevel w-[${skill[1]}] p-[2px]  rounded-sm  bg-white mr-[15px] text-black text-center text-[10px]`}
                  >
                    {skill[1]}
                  </div>
                  <li className="updated-skill  text-[rgb(252,255,250)]">
                    {skill[0]}
                  </li>
                </ul>
              ))
            ) : (
              <ul className="pt-5 text-lg  text-[rgb(252,255,250)] ">  {/*add name oof the skills to be added here */}
                <li className="mt-2">First</li>
                <li className="mt-2">Fdfsrdst</li>
                <li className="mt-2">sdgsdgt</li>
                <li className="mt-2">Fisdg</li>
              </ul>
            )}
          </div>
          {/* Adding additional sections based on userData */}
          {/* Languages */}
          {userInputData && userInputData.language && userInputData.language.length>0 ? (
            <>
              <h3 className="text-3xl font-semibold text-[rgb(252,255,250)] mt-[60px]">
                LANGUAGES
              </h3>
              {userInputData.language.map((lan,index) => {
                return (
                  <ul key={index} className="">
                    <li className="list-item-D1 text-l font-medium text-[rgb(224,231,239)] mt-5">
                      {lan[0]} - {lan[1]}
                    </li>
                  </ul>
                );
              })}
            </>
          ) : null}
        </div>
      </div>

      <div className="bg-[#FFFFFF]">
        <div className="text-xl font-medium text-black ml-10 mt-20 ">
          <h2 className="text-3xl font-bold text-[rgb(2,4,2)]">Profile</h2>
          {userInputData && userInputData.description ? (
          userInputData.description
        ) : (
          <p className="mt-5 text-base font-medium text-[rgb(89,88,90)] ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            veritatis mollitia voluptates reiciendis deleniti error quasi
            dolorum dignissimos rem? Adipisci error facere aspernatur delectus
            consequatur dolorem ducimus eligendi hic omnis.
          </p>
        )}
        </div>

        <div className="text-xl font-medium text-black ml-10 mt-5">
          <h2 className="text-3xl font-semibold text-[rgb(2,4,2)]">
            Experience
          </h2>
          <h4 className="text-2xl font-semibold text-[rgb(2,4,2)]">
            Job title and Company Name
          </h4>  {/*job title and company name to be added here */}

          <h6 className="text-1xl font-semibold text-[rgb(2,4,2)]">
            Date Range {/*date range start and end date to be added here */}
          </h6>
          <ul className="mt-5 text-lg font-medium "> {/*description to be added inside this*/}
            <li className="mt-5 text-base text-[rgb(89,88,90)]">First</li>
            <li className="mt-2 text-base text-[rgb(89,88,90)]">Fdfsrdst</li>
            <li className="mt-2 text-base text-[rgb(89,88,90)]">sdgsdgt</li>
            <li className="mt-2 text-base text-[rgb(89,88,90)]">Fisdg</li>
            <li className="mt-2 text-base text-[rgb(89,88,90)]">Fsdgsdt</li>
            <li className="mt-2 text-base text-[rgb(89,88,90)]">Firesnt</li>
            <li className="mt-2 text-base text-[rgb(89,88,90)]">Fefhehge</li>
          </ul>
        </div>
        {/* Adding additional sections based on userData */}
        {/* Projects */}
        {userInputData && userInputData.projects && userInputData.projects.length>0 ? (
          <>
            <div className="text-xl font-medium text-black ml-10 mt-5">
              <h2 className="text-3xl font-semibold text-[rgb(2,4,2)]">
                Projects
              </h2>
              {userInputData.projects.map((project) => {
                return (
                  <ul key={project.id} className="pt-5 text-lg font-medium">
                    <div className="project-header mt-2 text-base text-[rgb(89,88,90)]">
                      <h2 className="text-2xl heading-D1">{project.Heading}</h2>
                      <a
                        href={project.Link}
                        className="text-md text-cyan-600 cursor-pointer"
                      >
                        {project.Link}
                      </a>
                    </div>
                    <div
                      className="max-w-[400px] text-wrap pt-[10px]"
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                  </ul>
                );
              })}
            </div>
          </>
        ) : null}

        {/* Certificates */}
        {userInputData && userInputData.certificates && userInputData.certificates.length>0? (
          <>
            <div className="text-xl font-medium text-black ml-10 mt-5">
              <h2 className="text-3xl font-semibold text-[rgb(2,4,2)]">
                Certificates
              </h2>
              {userInputData.certificates.map((certificate, index) => {
                return (
                  <ul
                    key={index}
                    className="text-[15px] text-gray-500 leading-5  pt-2 flex gap-[10px]"
                  >
                    <h2 className="font-serif font-bold">
                      {certificate.Certificate_Name}
                    </h2>
                    <div className=" flex gap-[10px]">
                      <h3>{certificate.Institute}</h3>
                      <span>|</span>
                      <span>{certificate.startDate}</span>
                    </div>
                  </ul>
                );
              })}
            </div>
          </>
        ) : null}

        {/* Custom Form */}
        {userInputData && userInputData.customData
          ? userInputData.customData.map((customData) => {
              return (
                <ul
                  key={customData.id}
                  className="pt-5 text-lg font-medium ml-10"
                >
                  <div className="project-header mt-2 text-base text-[rgb(89,88,90)]">
                    <h2 className=" text-3xl font-semibold text-[rgb(2,4,2)]">
                      {" "}
                      {customData.Custom_Heading}
                    </h2>
                    <div
                      className="max-w-[400px] text-wrap pt-[10px]"
                      dangerouslySetInnerHTML={{
                        __html: customData.description,
                      }}
                    />
                  </div>
                </ul>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default TemplateD1;
