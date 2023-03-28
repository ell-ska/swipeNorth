import Image from 'next/image'
import heartIcon from 'public/icons/heart-outlined.svg'
import returnIcon from 'public/icons/return.svg'
import crossIcon from 'public/icons/cross.svg'
import './globalStyles/components/buttons.css'

export default function SwipeButtons({ onSwipe, currentJob, onGoBack }) {
    return (
        <div className="swipe-buttons">
            <button className="button icon" onClick={() => onGoBack()}>
                <Image src={returnIcon} alt="Ångra"></Image>
            </button>
            <button className="button icon save" onClick={() => currentJob ? onSwipe('up', currentJob.id) : null}>
                {/* <Image src={heartIcon} alt="Spara jobb"></Image> */}
                <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="filled" d="M12.4899 23.2781C13.7275 24.5935 14.8029 25.7356 15.5739 26.5513L16 27L27.626 14.6617C30.9333 11.1539 30.4767 6.45311 28.1434 3.88347C26.9971 2.61905 25.3942 1.87467 23.5174 2.01743C21.6203 2.16018 19.3072 3.22067 16.8014 5.88208L16 6.73862L15.1986 5.88208C12.6928 3.22067 10.3696 2.16018 8.4725 2.01743C6.59569 1.87467 5.00295 2.61905 3.85658 3.88347C1.52325 6.45311 1.06673 11.1539 4.37396 14.6617C6.91018 17.3537 10.0145 20.6575 12.4899 23.2781Z" fill="transparent"/>
                    <path id="outline" fillRule="evenodd" clipRule="evenodd" d="M4.02784 4.09781C1.73502 6.6139 1.28023 11.2217 4.54144 14.6646C7.04128 17.307 10.1042 20.5422 12.5418 23.1164C13.7606 24.4035 14.8231 25.5254 15.5809 26.3256L15.9998 26.7679L27.4584 14.6648C30.7196 11.2219 30.265 6.6139 27.9722 4.09781C26.8404 2.8559 25.2639 2.12195 23.4132 2.26222C21.5475 2.40362 19.2612 3.44715 16.7921 6.05514L16 6.89177L15.2079 6.05514C12.7388 3.44715 10.4525 2.40362 8.5868 2.26222C6.73611 2.12195 5.15955 2.8559 4.02784 4.09781ZM16 28.384C15.2081 29.1638 15.208 29.1637 15.208 29.1637L13.9971 27.8852C13.2392 27.085 12.1766 25.963 10.9578 24.6758C8.52015 22.1015 5.4574 18.8665 2.9572 16.2238C-1.13281 11.9054 -0.657703 5.94137 2.41481 2.56965C3.96583 0.867604 6.18091 -0.171375 8.75002 0.0233368C11.057 0.19818 13.5333 1.35677 16 3.70141C18.4667 1.35677 20.943 0.19818 23.25 0.0233368C25.8191 -0.171375 28.0342 0.867604 29.5852 2.56965C32.6578 5.94145 33.1328 11.9056 29.0425 16.2241L16.7973 29.158M16.7921 29.1636L16.0002 30L15.208 29.1637L16 28.384M16 28.384C16.7921 29.1636 16.7921 29.1636 16.7921 29.1636ZM16.7921 29.1636C16.7943 29.1613 16.8077 29.1471 16.795 29.1604L16.7934 29.1622L16.7921 29.1636Z" fill="black"/>
                </svg>
            </button>
            <button className="button icon" onClick={() => currentJob ? onSwipe('down', currentJob.id) : null}>
                <Image src={crossIcon} alt="Spara inte jobb"></Image>
            </button>
        </div>
    )
}