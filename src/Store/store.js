import { configureStore } from '@reduxjs/toolkit'
import FormDataReducer from '../Reducers/FormDataSlice.js'
import { ExperienceDataReducer } from '../Reducers/FormDataSlice.js'
import { EducationDataReducer } from '../Reducers/FormDataSlice.js'

const store = configureStore({
  reducer: {
    user: FormDataReducer,
    experience: ExperienceDataReducer,
    education: EducationDataReducer,
  },
})
export default store
