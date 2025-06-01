import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <Cards />
    <JobListings limit={3} />
    <ViewAllJobs />
    </>
  )
}

export default App