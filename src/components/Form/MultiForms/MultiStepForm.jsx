import { useState } from 'react'
import FormStepper from '../FormStepper/FormStepper.jsx'
import PersonaIInfo from './PersonaIInfo.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import AccorComponent from './AdditionalForms.jsx'
import SkillsForm from './SkillsForm.jsx'
// import Accordian from './'
const FormCtn = ({ num }) => {
  return (
    <div className="">
      {/* Used COndtional Rendering to Render Different Forms */}
      {num === 0 ? (
        <PersonaIInfo />
      ) : num === 1 ? (
        <Education />
      ) : num === 2 ? (
        <Experience />
      ) : num === 3 ? (
        <SkillsForm />
      ) : (
        <AccorComponent />
      )}
    </div>
  )
}

export const FormSection = () => {
  const [formLevel, setForm] = useState(0)

  return (
    <div className=" rounded-lg w-12/12  md:w-12/12 lg:w-12/12 ">
      {/* // <div className=" rounded-lg m-auto"> */}

      <div className="">
        <FormStepper Newnum={formLevel} setForm={setForm} />
        {/* Main Form Section Start */}
      </div>
      <FormCtn num={formLevel} />
      <div className="flex flex-row justify-center mt-[20px]">
        {formLevel > 0 ? (
          <button
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-1.5 mb-3 mx-3"
            onClick={() => setForm(formLevel - 1)}
          >
            Prev
          </button>
        ) : (
          <button className="focus:outline-none text-white bg-purple-300  hover:bg-purple-400  font-medium rounded-lg text-sm px-4 py-1.5 mb-3 mx-3">
            Prev
          </button>
        )}

        {/* {formLevel<4?<button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-1.5 mb-3 mx-3 " onClick={()=>setForm(formLevel+1)} >Next</button>:
        <button className="focus:outline-none disabled:opacity-100 text-white bg-purple-300 font-medium rounded-lg text-sm px-4 py-1.5 mb-3 mx-3 ">Next</button>
        } */}
        {formLevel < 4 ? (
          <button
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-1.5 mb-3 mx-3 "
            onClick={() => setForm(formLevel + 1)}
          >
            Next
          </button>
        ) : (
          <></>
        )}
        {formLevel === 4 ? (
          <button
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-1.5 mb-3 mx-3 "
            onClick={() => {}}
          >
            Download
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

const MultiStepForm = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row m-auto w-[95%] md:w-[90%] lg:w-[85%] gap-4">
        <FormSection />
        {/* <PreviewDummy/> */}
      </div>
      {/* <FormStepper/> */}
    </>
  )
}

export default MultiStepForm
