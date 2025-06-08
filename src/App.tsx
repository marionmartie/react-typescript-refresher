import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './MainLayout'
import JobsPage from './pages/JobsPage'
import NotFound from './pages/NotFound'
import JobPage, { jobLoaderData } from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPages from './pages/EditJobPages'

type Job = {
    id?: string,
    title: string, //instead of title : title
    type: string,
    description: string,
    location: string,
    salary: string,
    company: {
        name: string,
        description: string,
        contactEmail: string,
        contactPhone: string
    }
}

const App = () => {

  const addJob = async (newJob: Job) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })

    return
  }

  const deleteJob = async (id: string) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    })

    return
  }

  const updateJob = async (updatedJob: Job) => {
    const res = await fetch(`/api/jobs/${updatedJob.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedJob)
    })
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/jobs/:id' element={<JobPage deleteJobAction={deleteJob} />} loader={jobLoaderData} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/job/edit/:id' loader={jobLoaderData} element={<EditJobPages updateJobSubmit={updateJob} />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App