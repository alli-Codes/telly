import Header from './Header'
import Carousel from "./Carousel"

interface Props{
    isSideBarMinimized: boolean
}

const Body = function ({isSideBarMinimized}: Props) {
    return (
        <div className={`body w-full px-4 py-4 flex flex-col gap-8 relative top-0 ${isSideBarMinimized? 'grow' : 'shrink' }`}>
            <Header />
            <Carousel />
        </div>
    )
}

export default Body