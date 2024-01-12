import Header from './Header'
import Carousel from "./Carousel"
import VideoContainer from './VideoContainer'

interface Props{
    isSideBarMinimized: boolean
}

const Body = function ({isSideBarMinimized}: Props) {
    return (
        <div className={`body w- px-4 py-4 flex flex-col gap-8 relative top-0 overflow-hidden ${isSideBarMinimized? 'grow' : 'shrink' }`}>
            <Header />
            <Carousel />
            <div>
                <VideoContainer category="Latest Movies" />
                <VideoContainer category="Latest Tv Series" />
            </div>
        </div>
    )
}

export default Body