import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './MainLayout'
import JobsPage from './pages/JobsPage'
import NotFound from './pages/NotFound'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App