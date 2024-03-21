import { selectUserData } from "../../reduxToolkit/FormDataSlice.jsx";
import { useSelector } from "react-redux";
function TemplateS2() {
  const userInputData = useSelector(selectUserData);
  const workData = ["Has worked in CISCO for 5 years", "work2", "work3"];
  const professionalSkill = [
    "10th and 12th from XYZ School",
    "4 years of B.Tech from ABC University",
    "2 years of M.tech from PQR University",
  ];
  const techSkill = ["Frontend", "Backend", "Testing", "Devops"];

  return (
    <>
      <div
        className="a4-sheet w-[794px] h-[1122px] max-h-[1122px] overflow-y-auto bg-white flex mt-10"
        style={{ transform: "scale(0.7)", marginTop: "-150px" }}
      >
        <div className="left-box">
          <div className="profile-space  w-[200px] h-[200px] bg-white mt-10 mx-10  rounded-[300px] border-[5px] border-solid border-[gold]" />
          <div className="top-curve w-[400px] h-[822px] max-h-[822px] overflow-y-auto bg-[gold] mx-2.5 my-[50px] rounded-[50px_50px_0px_0px]">
            <div className="data">
              <div className="about-right pt-px text-center px-5">
                <h1 className="text-center text-[40px] pt-2.5 text-3xl my-10">
                  About Me
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero quisquam modi suscipit hic deleniti totam sint tempore
                  vel velit! Perspiciatis, molestias maiores totam, minima
                  excepturi accusantium nesciunt deserunt suscipit illo officia
                  eaque blanditiis. Deserunt eveniet veritatis, sunt, quos, quis
                  provident possimus illo eligendi veniam est molestias? Dicta,
                  quo quod. Repudiandae.
                </p>
              </div>
              <hr className="my-4 w-4/5 bg-[aliceblue]  m-auto rounded-[70px] border-2 border-solid border-[aliceblue]" />

              <div className="Technical-skills  h-[150px] flex flex-wrap max-h-[150px] overflow-y-auto">
                {userInputData && userInputData.skills && userInputData.skills.length>0? (
                  userInputData.skills.map((skill, index) => (
                    <ul
                      className="pt-[15px]   flex items-center  ml-[35px]  w-[60%]  "
                      key={index}
                    >
                      <div
                        className={`skillLevel w-[${skill[1]}] p-[3px]  rounded-lg  bg-white mr-[15px] text-[#ffd700] text-center text-[10px]`}
                      >
                        {skill[1]}
                      </div>
                      <li className="updated-skill  ">{skill[0]}</li>
                    </ul>
                  ))
                ) : (
                  <div className="Technical-skills grid grid-cols-[repeat(2,1fr)] m-5 p-5 gap-[10px]">
                    {techSkill.map((item) => {
                      return (
                        <div className="TechSkill">
                          <p>{item}</p>
                          <div className="progressbox w-[150px] h-5 bg-white mb-2.5 rounded-[10px]" />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <hr className="my-4 w-4/5 bg-[aliceblue]  m-auto rounded-[70px] border-2 border-solid border-[aliceblue]" />
            {/*<div className="oldexperience text-center text-[15px] font-[Medium] m-0 p-5">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione culpa fugit assumenda autem, quaerat, hic quis accusantium laboriosam libero ea doloribus temporibus non pariatur aut dolorum provident eaque laborum necessitatibus natus nostrum quam! Obcaecati provident, voluptatibus sed voluptate ex distinctio ipsum amet quis laborum sapiente consequuntur cum totam reiciendis veniam dignissimos nam fugiat minus soluta eius? Porro sed dignissimos commodi?</p>
            </div>*/}
            {/* Adding additional sections based on userData */}
            {/* Languages */}
            {userInputData && userInputData.language && userInputData.language.length>0? (
              <>
                <h1 className="text-center text-[40px] pt-2.5 text-3xl my-10">
                  Languages
                </h1>
                {userInputData.language.map((lan,index) => {
                  return (
                    <ul key={index} className="flex justify-center mb-[15px]">
                      <div className=" w-3 h-2.5 bg-[rgb(255,255,255)] m-2.5 rounded-[50px]" />
                      <li className="text-black  w-[150px]">
                        {lan[0]} - {lan[1]}
                      </li>
                    </ul>
                  );
                })}
              </>
            ) : null}
          </div>
        </div>
        <div className="right-box bg-white w-[400px] border-[50px_0px_20px_0px] border-solid border-t-[35px] border-b-[20px] border-[gold]">
          <h1 className="name-right pt-[45px] text-center text-[40px] ">
            Saksham Gupta
          </h1>
          <h4 className="jobmain-right text-center pt-2.5">
            MERN Stack Developer
          </h4>
          <hr className="my-4 w-4/5 bg-[aliceblue]  m-auto rounded-[70px] border-2 border-solid border-[aliceblue]" />
          <br /> <br />
          <div className="contact-box">
            {/*<div className='valdetail text-end text-[15px] font-[Medium] mx-10 my-5'>
                    <p>+91 1234567890</p>
            </div>*/}
            <div className="valdetail text-end text-[15px] font-[Medium] mx-10 my-5">
              <p>
                {userInputData && userInputData["email-address"]
                  ? userInputData["email-address"]
                  : "qRr0h@example.com"}
              </p>
            </div>
            {/*<div className="valdetail text-end text-[15px] font-[Medium] mx-10 my-5">
                    <p>https://github.com</p>
          </div>*/}

            <div className="valdetail text-end text-[15px] font-[Medium] mx-10 my-5">
              <p>
                {userInputData && userInputData.address
                  ? userInputData.address
                  : "S-2 330 Palm Heights"}
                ,
                {userInputData && userInputData.city
                  ? userInputData.city
                  : "Hyderabad"}{" "}
              </p>
            </div>
            <hr className="my-4 w-4/5 bg-[aliceblue]  m-auto rounded-[70px] border-2 border-solid border-[aliceblue]" />
          </div>
          <div className="workexp">
            <h2 className="work-right text-center px-5 text-2xl">
              Work Experience
            </h2>
            <div>
              {workData.map((item) => {
                return (
                  <>
                    <div className="flex boxboxbox"></div>
                    <p className="m-5">{item}</p>
                  </>
                );
              })}
            </div>
          </div>
          <hr className="my-4 w-4/5 bg-[aliceblue]  m-auto rounded-[70px] border-2 border-solid border-[aliceblue]" />
          <div className="Professional-skills ">
            <h2 className="work-right text-center px-5 text-2xl">
              Education Details
            </h2>
            {professionalSkill.map((item) => {
              return (
                <>
                  <div className="flex boxboxbox"></div>
                  <p className="m-5">{item}</p>
                </>
              );
            })}
          </div>
          <hr className="my-4 w-4/5 bg-[aliceblue]  m-auto rounded-[70px] border-2 border-solid border-[aliceblue]" />
          {/* Projects */}
          {userInputData && userInputData.projects && userInputData.projects.length>0? (
            <>
              <h2 className=" text-center px-5 text-2xl">Projects</h2>
              {userInputData.projects.map((project) => {
                return (
                  <ul key={project.id} className="">
                    <li className=" w-full ">
                      <div className="project-header flex flex-row gap-[15px] items-center">
                        <h2 className="text-2xl heading-S2">
                          {project.Heading}
                        </h2>
                        <a
                          href={project.Link}
                          className="text-md text-cyan-600 cursor-pointer max-w-[200px] flex-wrap overflow-x-hidden"
                        >
                          {project.Link}
                        </a>
                      </div>
                      <div
                        className="max-w-[500px] text-wrap pt-[10px] text-[17px] text-[rgb(84,84,84)] "
                        dangerouslySetInnerHTML={{
                          __html: project.description,
                        }}
                      />
                    </li>
                  </ul>
                );
              })}
            </>
          ) : null}
          {/* <hr className="my-4 w-4/5 bg-[aliceblue]  m-auto rounded-[70px] border-2 border-solid border-[aliceblue]" /> */}
          {/*{userInputData && userInputData.projects && userInputData.projects.length>0 && (
            <hr className="my-4 w-4/5 bg-[aliceblue]  m-auto rounded-[70px] border-2 border-solid border-[aliceblue]" />
          )}*/}
          {/* Certificates */}
          {userInputData && userInputData.certificates && userInputData.certificates.length>0? (
            <>
              <h2 className=" text-center px-5 text-2xl">Certificates</h2>
              {userInputData.certificates.map((certificate,index) => {
                return (
                  <ul
                key={index}
                className="text-[15px] text-gray-500 leading-5  pt-2 flex gap-[10px]"
              >
                <h2 className="font-serif font-bold">{certificate.Certificate_Name}</h2>
                <div className=" flex gap-[10px]">
                <h3>{certificate.Institute}</h3> |
                <span>{certificate.startDate}</span>
                </div>
              </ul>
                );
              })}
            </>
          ) : null}


          
          {/* Custom Form */}
          {userInputData && userInputData.customData
            ? userInputData.customData.map((customData) => {
                return (
                  <>
                    <ul key={customData.id} className=" ">
                      <li className=" w-full ">
                        <h2 className="text-center px-5 text-2xl">
                          {customData.Custom_Heading}
                        </h2>
                        <div
                          className="max-w-[700px] text-wrap  text-[17px] text-[rgb(84,84,84)] mt-[15px]"
                          dangerouslySetInnerHTML={{
                            __html: customData.description,
                          }}
                        />
                      </li>
                    </ul>
                    {/* <hr className="my-4 w-4/5 bg-[aliceblue]  m-auto rounded-[70px] border-2 border-solid border-[aliceblue]" /> */}
                  </>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}
export default TemplateS2;
