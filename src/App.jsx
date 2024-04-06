import './App.jsx'
import Dashboard from './pages/Dashboard.jsx'

import Home from './pages/Home.jsx'
import FormPanel from './pages/FormPanel.jsx'

import './App.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="form" element={<FormPanel />} />
    </Route>,
  ),
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
