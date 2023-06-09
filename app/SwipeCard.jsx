'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const TinderCard = dynamic(
    () => import('react-tinder-card'),
    { ssr: false }
)

export default function SwipeCard({ companyName, jobTitle, img, id, onSwipe }) {

    return (
        <TinderCard
            className="swipe"
            onSwipe={direction => onSwipe(direction, id)}
        >
            <div className="swipe__image" style={{backgroundImage: `url(${img.src})`}}>
                <div className="swipe__overlay">
                    <div className="swipe__header">
                        <span>swipe</span>
                            <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 18L18 2L34 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        <span>north</span>
                    </div>
                    <div className="swipe__footer">
                        <div className="swipe__text">
                            <h3>{companyName}</h3>
                            <h4>{jobTitle}</h4>
                        </div>
                        <Link className='swipe__button pressable' href={`/${id}`}>
                            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 9L9 1L17 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </TinderCard>
    )
}