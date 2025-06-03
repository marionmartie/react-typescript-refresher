import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './MainLayout'
import JobsPage from './pages/JobsPage'
import NotFound from './pages/NotFound'
import JobPage, { jobLoaderData } from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/jobs/:id' element={<JobPage />} loader={jobLoaderData} />
        <Route path='/add-job' element={<AddJobPage />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App