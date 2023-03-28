'use client'
import JobCard from './Jobcard'
import { useAtom } from 'jotai'
import { savedJobsAtom } from '@/app/atoms'
import './jobcards.css'

export default function SavedJobs() {

  const [savedJobs, setSavedJobs] = useAtom(savedJobsAtom)
  console.log(savedJobs)

  return (
    <>
      <h3 className='saved-jobs-title'>Sparade jobb</h3>
      <div className='job-card-container'>
        {savedJobs.map(job => {
          console.log(job)
          return <JobCard key={job.id} {...job}></JobCard>

        })}
      </div>
    </>
  );
}