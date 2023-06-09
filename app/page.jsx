'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAtom } from 'jotai'
import { savedJobsAtom, loggedInAtom, avaliableJobsAtom, tagsAtom } from './atoms'
import Header from './Header'
import SwipeCard from './SwipeCard'
import SwipeButtons from './SwipeButtons'
import getFilteredJobs from './getFilteredJobs'
import swipeOutImage from 'public/images/swipe-out-of-cards.jpg'
import './globalStyles/home.css'
import './globalStyles/components/buttons.css'

export default function Home() {

    const router = useRouter()
    const [tags] = useAtom(tagsAtom)
    const [isLoggedIn] = useAtom(loggedInAtom)
    const [avaliableJobs, setAvaliableJobs] = useAtom(avaliableJobsAtom)
    const [savedJobs, setSavedJobs] = useAtom(savedJobsAtom)
    const [previousJob, setPreviousJob] = useState(null)
    const currentJob = avaliableJobs[avaliableJobs.length - 1]

    const onReset = () => {
        const newAvaliableJobs = getFilteredJobs(tags, savedJobs)
        setAvaliableJobs(newAvaliableJobs)
    }

    const onGoBack = () => {
        if (previousJob && !avaliableJobs.find(job => job.id === previousJob.id)) {
            setAvaliableJobs([...avaliableJobs, previousJob])

            const newSavedJobs = savedJobs.filter(job => job.id !== previousJob.id)
            setSavedJobs(newSavedJobs)
        }
    }

    const onSwipe = (direction, id) => {

        const currentJob = avaliableJobs.find(job => job.id === id)
        
        if (direction === 'up') {
            setSavedJobs([...savedJobs, currentJob])

            if (!isLoggedIn) {
                router.push('/login')
            }
        }
        
        const remainingJobs = avaliableJobs.filter(job => job.id != id)
        setAvaliableJobs(remainingJobs)
        setPreviousJob(currentJob)

    }

    return (
      <>
        <Header></Header>
        <div className='home'>
            <div className="swipe-container">
                {getFilteredJobs(tags, savedJobs).length > 0 ? (
                    <div className="swipe swipe--out">
                        <div className="swipe__image" style={{backgroundImage: `url(${swipeOutImage.src})`}}>
                            <div className="swipe__overlay">
                                <div className="swipe--out__content">
                                    <h2>Du har nu sett alla tillgängliga jobb!</h2>
                                    <h3>Men alla förtjänar en andra chans, eller hur?</h3>
                                </div>
                                <div className="swipe--out__footer">
                                    <button className="button" onClick={() => currentJob === undefined ? onReset() : null}>Börja om</button>
                                    <p>när du börjar om rensas din historik men du behåller dina sparade jobb</p>
                                </div>
                            </div>
                        </div>
                    </div> 

                ) : (
                    <div className='swipe swipe-last'>
                        <h2 className='swipe-text'>Nu finns det tyvärr inga fler jobb som vi tror passar dig!</h2>
                        <Link href='/saved-jobs'>
                            <div className='button swipe-button'>Se dina sparade jobb</div>
                        </Link>
                    </div>
                )}
                {avaliableJobs.map(job => <SwipeCard key={job.jobTitle} {...job} onSwipe={onSwipe} ></SwipeCard>)}
            </div>
            {avaliableJobs.length > 0 && <SwipeButtons onSwipe={onSwipe} currentJob={currentJob} onGoBack={onGoBack} />}
        </div>
      </>
    )
}