import { useState } from "react";
import { useForm } from "react-hook-form";
import FormStepper from "./FormStepper/FormStepper.jsx";
import { useDispatch } from "react-redux";
import { setEducationData } from "../../reduxToolkit/FormDataSlice.jsx";

const Education = () => {
  const { register, handleSubmit, reset } = useForm();
  const [successMsg, setSuccessMsg] = useState("");
  const dispatch = useDispatch();

  function sumbitData(data) {
    console.log(data);
    dispatch(setEducationData(data));
    setSuccessMsg("Data is updated.");
    reset();
  }
  return (
    // <div className=" p-6 m-4 w-full h-[100vh] lg:w-full rounded-xl relative">
    <div className="p-6 mt-[20px] w-[90%]  h-[100%]  lg:w-[100%] xl:h-[65%] xl:w-[100%] border-[#9333ea] border-2 shadow-[#9333ea] shadow-md">
      {successMsg && (
        <p className=" absolute right-10 top-8 font-bold p-0 bg-green-600 px-3 py-0.5 rounded-tr-xl rounded-bl-xl inline-block text-white text-sm">
          {successMsg}
        </p>
      )}
      <h2 className="text-2xl font-semibold leading-7 text-gray-900 ">
        Education
      </h2>
      {/* <div className="absolute border-t-4  border-purple-600 w-1/3"></div> */}
      <p className=" text-xs   text-gray-500 w-[75%] ">
        Add your most relevant education, including programs you're currently
        enrolled in.
      </p>

      <form
        className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6 "
        onSubmit={handleSubmit(sumbitData)}
      >
        <div className="sm:col-span-3">
          <label
            htmlFor="school-name"
            className="block text-sm font-normal leading-6 text-gray-900 "
          >
            School Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="schoolName"
              id="school-name"
              {...register("schoolName")}
              autoComplete="off"
              className="block w-full rounded-md border-0 p-1  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="school-location"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            School Location
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="schoolLocation"
              id="school-location"
              autoComplete="off"
              {...register("schoolLocation")}
              className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="start-date"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            Start Date
          </label>
          <div className="mt-2">
            <input
              type="date"
              name="startDate"
              id="start-date"
              {...register("startDate")}
              autoComplete="off"
              className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="end-date"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            End Date
          </label>
          <div className="mt-2">
            <input
              type="date"
              name="endDate"
              id="end-date"
              {...register("endDate")}
              autoComplete="off"
              className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-1 text-xs text-slate-500 flex items-center gap-1">
            <label htmlFor="currentEmployed">I am currently study here</label>
            <input
              type="checkbox"
              name="currentEmployed"
              id="currentEmployed"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="degree"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            Degree
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="degree"
              id="degree"
              autoComplete="off"
              {...register("degree")}
              className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="fieldOfStudy"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            Field of study
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="fieldOfStudy"
              id="fieldOfStudy"
              {...register("fieldOfStudy")}
              autoComplete="off"
              className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-normal text-gray-900 "
          >
            Description
          </label>
          <textarea
            id="message"
            rows="4"
            name="description"
            {...register("description")}
            className="flex p-2.5 w-full  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500      "
            placeholder="e.g. Supported mentor teacher throughout lessons by preparing…"
          ></textarea>
        </div>

        <div className="flex flex-col mt-2">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-1 px-3   rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
export default Education;
