import React from 'react'
import { selectUserData } from '../../reduxToolkit/FormDataSlice.jsx'
import { useSelector } from 'react-redux'
import { selectExperienceData } from '../../reduxToolkit/FormDataSlice.jsx'
function Template3() {
  const skillarray = ['Frontend', 'Bakcend', 'Python', 'C++']
  const EduDetails = [
    'Completed 10th and 12th from ICSE School',
    'Completed B.Tech in CSE from ABC University',
    'Completed M.Tech in CSE from ABC University',
  ]
  const userInputData = useSelector(selectUserData)
  const userExperienceData = useSelector(selectExperienceData)
  return (
    <div
      className="a4-sheet  bg-white w-[793px] h-[11210x] lg:max-h-[1110px] lg:overflow-y-auto mt-5 flex flex-col items-center  border border-gray-200 "
      // style={{ transform: "scale(0.7)", marginTop: "-150px" }}
    >
      {/* <div className="w-[210mm] h-[297mm] lg:max-h-[1100px] lg:overflow-hidden  "> */}
      {/* coloured box area  */}
      <div className="pfp-details  flex flex-row items-center justify-between bg-[rgb(99,133,255)] h-[220px] w-[750px] m-[15px] rounded-[120px_5px_50px_120px]">
        <div className="pfp  bg-[white] w-[180px] h-[180px] border m-[15px] rounded-[50%] border-solid border-[gray]" />

        <div className="details-space  flex flex-col items-center justify-center w-[220px]">
          {/* name  */}
          <div className="name flex flex-row items-center justify-center">
            <p className="text-3xl font-[bold] text-[white] m-0.5">
              {userInputData && userInputData.firstName
                ? userInputData.firstName
                : 'Saksham'}
            </p>
            <p className="text-3xl font-[bold] text-[white] m-0.5">
              {userInputData && userInputData['last-name']
                ? userInputData['last-name']
                : 'Gupta'}
            </p>
          </div>
          <div className="w-[300px] h-px bg-white m-2.5 border-[none]" />

          {/* Occupation  */}
          <div className="occupation">
            <p className="text-xl font-[bold] text-[white] m-0.5">
              {userExperienceData
                ? userExperienceData[userExperienceData.length - 1].Job_Title
                : 'MERN Stack Developer'}
            </p>
          </div>
        </div>

        {/* mail and phone number  */}

        <div className="email-phno-space  flex flex-col items-end w-40 text-[white] text-sm m-2.5">
          <div className="email font-medium">
            <p className="m-1">
              {userInputData && userInputData['email-address']
                ? userInputData['email-address']
                : 'oDfJt@example.com'}
            </p>
          </div>
          {/* <div className="phno font-medium">
            <p className="m-1">1234567890</p>
          </div> */}

          {/* Address line  */}
          <div className=" font-semibold">
            <p>
              {' '}
              {userInputData && userInputData.address
                ? userInputData.address
                : '121-a9'}{' '}
              ,{' '}
              {userInputData && userInputData.city
                ? userInputData.city
                : 'ABC Highrise,'}
            </p>
            <p>
              City Code:{' '}
              {userInputData && userInputData['city-code']
                ? userInputData['city-code']
                : '829911'}
            </p>
          </div>
          <div className="city-and-state font-semibold">
            <p>
              {userInputData && userInputData.city
                ? userInputData.city
                : 'Jaipur'}
              ,{' '}
              {userInputData && userInputData.state
                ? userInputData.state
                : 'Rajasthan'}
              ,
              {userInputData && userInputData.country
                ? userInputData.country
                : 'India'}
            </p>
          </div>
        </div>
      </div>
      {/* colorless area  */}
      <div className="data-space">

        {/* About me  */}
        <div className="about-me mb-[-50px] h-[380px] bg-[rgba(255,255,255,0.448)] w-[720px]">
          
          <div className="professional-experience flex flex-row">
            <div className='w-[90%] flex mt-3 ml-[40px] flex-col'>
            <h2 className="text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]">
              About me
            </h2>
            <p className="text-[17px] text-[rgb(84,84,84)] m-[15px]">
              Worked with labor unions to negotiate compensation packages for
              workers. Organized new hire training initiatives as well.
              Worked with labor unions to negotiate compensation packages for
              workers. Organized new hire training initiatives as well.
            </p>
            </div>
            {/* this is EDU DESC  */}
            <div className="skill-set w-[450px] flex flex-col ml-5 mt-1 h-[230px] max-h-[230px] overflow-y-auto text-base p-5 rounded-[20px]">
            <h2 className="text-[25px] mb-5 font-[bold] text-[rgb(99,133,255)]">
              Key Skills
            </h2>
            {userInputData &&
            userInputData.skills &&
            userInputData.skills.length > 0 ? (
              userInputData.skills.map((skill, index) => (
                <ul
                  className="pt-5 text-lg text-[rgb(252,255,250)] text-gray-500 leading-[25px]  flex items-center  w-[90%]   "
                  key={index}
                >
                  <div
                    className={`skillLevel w-[${skill[1]}] p-[2px]  rounded-sm  bg-[rgb(99,133,255)] mr-[15px] text-white text-center text-[10px]`}
                  >
                    {skill[1]}
                  </div>
                  <li className="updated-skill ">{skill[0]}</li>
                </ul>
              ))
            ) : (
              <div className="skillarray">
                {skillarray.map((item) => {
                  return (
                    <div className="flex m-2 flex-row items-center">
                      <div className="w-[100px] h-3 bg-[rgb(99,133,255)] mx-2.5 my-0" />{' '}
                      <p>{item}</p>
                    </div>
                  )
                })}
              </div>
            )}
          </div>  
            
          </div>
        </div>
        <hr  className="w-[700px] mt-[-20px] ml-[50px] h-[5px] bg-[rgb(99,133,255)] shadow-[0_0_5px_2px_rgba(82,160,255,0.8)] rounded-[90%] border-[none]"/>

        <div>
            <div className="about">
              <h2 className="text-[25px] ml-[50px] font-[bold] text-[rgb(99,133,255)] m-[15px]">
                Experience
              </h2>
              <div className='flex flex-row ml-2 items-center justify-around'>
              <p>Job Title</p>
              <p>Company name</p>
              <div>
              <span>Start Date</span>
              <span> - </span>
              <span>End Date</span>
              </div>
              </div>
              <div className="text-[17px] text-[rgb(84,84,84)] ml-[50px] mr-[50px] mt-2">
                {userInputData && userInputData.description ? (
                  userInputData.description
                ) : (
                  <p>
                    Human resources generalist with 8 years of experience in HR,
                    including hiring and terminating, disciplining employees and
                    helping department. Human resources generalist with 8 years of experience in HR,
                    including hiring and terminating, disciplining employees and
                    helping department.
                  </p>
                )}
              </div>
            </div>
          </div>

          
        {/* Professional skills  */}
        <div className='mt-[70px]'>
          <hr  className="w-[700px] mt-[-20px] ml-[50px] h-[5px] bg-[rgb(99,133,255)] shadow-[0_0_5px_2px_rgba(82,160,255,0.8)] rounded-[90%] border-[none]"/>
          
        <div className="skilldev flex flex-row items-center justify-start w-[700px] h-[280px] bg-[rgba(255,255,255,0.448)]">

          {/* this is edu to go up  */}
          <div className='w-[90%] mt-[-20px] ml-[50px]'>
              <h2 className="text-[25px] font-[bold] text-[rgb(99,133,255)]">Education</h2>
              <div className='flex mt-5 flex-row items-center justify-end'>
                  <p className="ml-5">School Name</p>
                  <p className="ml-5">School Location</p>
                  <p className="ml-5">Field of Study</p>
                  <div className='ml-5'>
                    <span className='ml-1'>Start Date</span>
                    <span className='ml-1'> - </span>
                    <span className='ml-1'>End Date</span>
                  </div>
                  <p className="ml-5">Degree</p>
              </div>
              <p className='mt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Necessitatibus voluptates error officia architecto, cum magnam molestiae doloremque officiis rerum laudantium commodi, 
                iusto delectus! Inventore, hic. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, quaerat!</p>
            </div>

          {/* education details  */}
        </div>
        </div>

        <hr className="w-[700px]   mt-[-20px] ml-[50px]  h-[5px] bg-[rgb(99,133,255)] shadow-[0_0_5px_2px_rgba(82,160,255,0.8)] rounded-[90%] border-[none]" />
      </div>
      {/* Adding additional sections based on userData */}
      {/* Languages */}
      {userInputData &&
      userInputData.language &&
      userInputData.language.length > 0 ? (
        <>
          <h2 className="text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]">
            Languages
          </h2>
          {userInputData.language.map((lan, index) => {
            return (
              <ul key={index} className="flex">
                <div className=" w-3 h-2.5 bg-[rgb(99,133,255)] m-2.5 rounded-[50px]" />
                <li className=" text-black  w-[150px]">
                  {lan[0]} - {lan[1]}
                </li>
              </ul>
            )
          })}
        </>
      ) : null}
      {userInputData && userInputData.language && (
        <hr className="w-[700px] h-[5px]  mt-[-20px] ml-[50px]  bg-[rgb(99,133,255)] shadow-[0_0_5px_2px_rgba(82,160,255,0.8)] rounded-[90%] border-[none]" />
      )}

      {/* Projects */}
      {userInputData &&
      userInputData.projects &&
      userInputData.projects.length > 0 ? (
        <>
          <h2 className="text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]">
            Projects
          </h2>
          {userInputData.projects.map((project) => {
            return (
              <ul key={project.id} className="">
                <li className=" w-full ">
                  <div className="project-header flex flex-row gap-[15px] items-center">
                    <h2 className="text-2xl heading-S1">{project.Heading}</h2>
                    <a
                      href={project.Link}
                      className="text-md text-cyan-600 cursor-pointer"
                    >
                      {project.Link}
                    </a>
                  </div>
                  <div
                    className="max-w-[700px] text-wrap pt-[10px] text-[17px] text-[rgb(84,84,84)] "
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                </li>
              </ul>
            )
          })}
        </>
      ) : null}
      {userInputData && userInputData.projects && (
        <hr className="w-[700px] h-[5px]    mt-[-20px] ml-[50px]  bg-[rgb(99,133,255)] shadow-[0_0_5px_2px_rgba(82,160,255,0.8)] rounded-[90%] border-[none] mt-[25px]" />
      )}

      {/* Certificates */}
      {userInputData &&
      userInputData.certificates &&
      userInputData.certificates.length > 0 ? (
        <>
          <h2 className="text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]">
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
                  <h3>{certificate.Institute}</h3> |
                  <span>{certificate.startDate}</span>
                </div>
              </ul>
            )
          })}
        </>
      ) : null}
      {userInputData && userInputData.projects && (
        <hr className="w-[700px]   mt-[-20px] ml-[50px] h-[5px] bg-[rgb(99,133,255)] shadow-[0_0_5px_2px_rgba(82,160,255,0.8)] rounded-[90%] border-[none] mt-[25px]" />
      )}
      {/* Custom Form */}
      {userInputData && userInputData.customData
        ? userInputData.customData.map((customData) => {
            return (
              <>
                <ul key={customData.id} className="w-[80%] ">
                  <li className=" w-full ">
                    <h2 className="text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]">
                      {customData.Custom_Heading}
                    </h2>

                    <div
                      className="max-w-[700px] text-wrap  text-[17px] m-[15px] text-[rgb(84,84,84)]"
                      dangerouslySetInnerHTML={{
                        __html: customData.description,
                      }}
                    />
                  </li>
                </ul>
                <hr className="w-[700px]  mt-[-20px] ml-[50px] h-[5px] bg-[rgb(99,133,255)] shadow-[0_0_5px_2px_rgba(82,160,255,0.8)] rounded-[90%] border-[none] mt-[25px]" />
              </>
            )
          })
        : null}
    </div>
  )
}

export default Template3
