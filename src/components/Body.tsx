import Header from './Header'

interface Props{
    isSideBarMinimized: boolean
}

const Body = function ({isSideBarMinimized}: Props) {
    return (
        <div className={`body w-full my-4 flex flex-col relative top-0 ${isSideBarMinimized? 'grow' : 'shrink' }`}>
            <Header />
        </div>
    )
}

export default Body