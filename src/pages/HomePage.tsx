import React from 'react'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
    return (
        <>
            <Hero />
            <Cards />
            <JobListings limit={3}/>
            <ViewAllJobs />
        </>
    )
}

export default HomePage