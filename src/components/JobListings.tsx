import React from 'react'
// import jobs from '../jobs.json'
import JobList from './JobList'
import { useState, useEffect } from 'react'
import Spinner from './Spinner'

const JobListings = ({limit} : {limit?: number}) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch('/api/jobs')
                const data = await res.json()
                setJobs(data.slice(0, limit || data.length))
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchJobs()
    }, [])

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Browse Jobs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    { loading ? (<Spinner color={'#ffffff'} loading={loading} />) : (
                        <>
                        {
                            jobs.map((job) => (
                                <JobList key={job.id} job={job} />
                            ))
                        }
                        </>
                    )}

                </div>
            </div>
        </section>
    )
}

export default JobListings