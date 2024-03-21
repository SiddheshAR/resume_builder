import { useState } from 'react'
import { selectUserData } from "../../reduxToolkit/FormDataSlice.jsx";
import { useSelector } from "react-redux";
function TemplateD2() {
  const [count, setCount] = useState(0)
  const userInputData = useSelector(selectUserData);
  return (
    <div className="w-[210mm] h-[297mm] bg-[white] border m-[10mm] border-solid border-[black] mt-[-150px] " style={{ transform: 'scale(0.7)' }}>

    <div className="bg-[rgb(91,80,155)] w-[180mm] h-[60mm] absolute flex rounded-[250px_0_0_250px] left-[112px] top-[80px]">
      <div className="bg-[whitesmoke] w-[55mm] h-[55mm] absolute -translate-x-2/4 -translate-y-2/4 rounded-[50%] left-[17%] top-2/4"></div>
      <div className="flex flex-col absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-[40%]">
        <div className="flex">
        <h1 className='text-[whitesmoke] text-[40px] font-[bold] Firstname'>Devraj</h1>
        <h1 className='text-[whitesmoke] text-[40px] font-[bold] Lastname'>Patil</h1>
        </div>
        <div className="text-[whitesmoke] text-[25px] font-extralight"><h3>Full Stack Developer</h3></div>
      </div>

      <div className="flex flex-col absolute -translate-x-2/4 -translate-y-2/4 text-[whitesmoke] text-[15px] font-extralight w-[200px] left-[90%] top-2/4">
        <p className='mt-[5px]'>
          Email: {userInputData && userInputData["email-address"]
                  ? userInputData["email-address"]
                  : "abcd@cde.com"}</p>
        {/* <p className='mt-[5px]'>Linkedin: abcdefgg</p>  Here you should add address */}
        {/* <p className='mt-[5px]'>Ph.no: 98745632100 </p> */}
      </div>
    </div>
    <div>
      <div className="bg-[rgb(91,80,155)] w-[120mm] h-[15mm] absolute -translate-x-2/4 -translate-y-2/4 rounded-[0_250px_250px_0] left-[28.5%] top-[37%]">
        <p className=' text-[rgb(234,230,254)] text-3xl font-bold w-[400px] left-[75%] top-[10%] ml-[10px] mt-[10px]'>Professional Experience</p>
      </div>
      <div className="flex flex-col absolute -translate-x-2/4 -translate-y-2/4 left-[22%] top-[52%]">
        <div className="flex flex-row justify-start items-center"><div className="ellipsething"></div><p className='mt-[10px]'>- Worked in Capgimini for 4 years, <br /> Plano, Human Resources Manager</p></div>
        <div className="flex flex-row justify-start items-center"><div className="ellipsething"></div><p className='mt-[8px]'>- Worked in Capgimini for 4 years, <br /> Plano, Human Resources Manager</p></div>
        <div className="flex flex-row justify-start items-center"><div className="ellipsething"></div><p className='mt-[8px]'>- Worked in Capgimini for 4 years, <br /> Plano, Human Resources Manager</p></div>
        <div className="flex flex-row justify-start items-center"><div className="ellipsething"></div><p className='mt-[8px]'>- Worked in Capgimini for 4 years, <br /> Plano, Human Resources Manager</p></div>
      </div>
    </div>
    <div className="bg-[rgb(91,80,155)] w-[80mm] h-[15mm] absolute -translate-x-2/4 -translate-y-2/4 rounded-[0_250px_250px_0] left-[30.%] top-[70%] ml-[151px]">
    <p className='text-[rgb(234,230,254)] text-3xl font-bold w-[400px] left-[105%] top-[%] ml-[15px] mt-[10px]'>Education</p>
    </div>
    <div className="flex flex-row justify-start items-center absolute -translate-x-2/4 -translate-y-2/4 text-[15px] font-extralight w-[400px] text-[rgb(60,60,60)] left-[32%] top-[82%]">
      <ul>
        <li className='list-disc text-[17px] font-[bold] w-[400px] text-[rgb(60,60,60)] ml-0 my-2.5'>Studied from Harward university</li>
        <li className='list-disc text-[17px] font-[bold] w-[400px] text-[rgb(60,60,60)] ml-0 my-2.5'>Studied from Harward university</li>
        <li className='list-disc text-[17px] font-[bold] w-[400px] text-[rgb(60,60,60)] ml-0 my-2.5'>Studied from Harward university</li>
        <li className='list-disc text-[17px] font-[bold] w-[400px] text-[rgb(60,60,60)] ml-0 my-2.5'>Studied from Harward university</li>
      </ul>
    </div>

   {/* Adding additional sections based on userData */}
    {/* Projects */}
   {/* {userInputData && userInputData.projects ? (
        <>
           <div className="bg-[rgb(91,80,155)] w-[80mm] h-[15mm] absolute -translate-x-2/4 -translate-y-2/4 rounded-[0_250px_250px_0] left-[30.%] top-[70%] ml-[151px]">
    <p className='text-[rgb(234,230,254)] text-3xl font-bold w-[400px] left-[105%] top-[%] ml-[15px] mt-[10px]'>Projects</p>
    </div>
          {userInputData.projects.slice(1).map((project) => {
            return (
              <ul
                key={project.id}
                className="text-[10px] text-gray-500 leading-5  pt-2 flex gap-[10px] "
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
        ) : null}*/}

      <div className="flex flex-row">
        <div className="bg-[rgb(244,245,244)] w-[65%] h-[297mm]">
          <div className="absolute -translate-x-2/4 -translate-y-2/4 text-lg font-[bold] w-[210px] text-[rgb(90,80,154)] text-justify w-60 left-[82.5%] top-[52%]">
            <p>
            Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hiretraining initiatives as well asongoing training to adhere toworkplace safety standards.Worked with OSHA to ensurethat all safety regulations arefollowed.</p>
          </div>

          <div className="absolute -translate-x-2/4 -translate-y-2/4 text-lg font-[bold] w-[400px] text-[rgb(90,80,154)] text-justify w-60 left-[96%] top-[90%]">
            <h2 className='text-[25px]'>Skills</h2>
            <ul className='list-disc text-lg font-[bold] w-[400px] text-[rgb(60,60,60)] ml-0 my-2.5'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li> 
              <li>React</li>
              <li>Node</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
        <div className="bg-[rgb(234,230,254)] w-[35%]">
        </div>
        
      </div>
      
    </div>
    
  )
}

export default TemplateD2
