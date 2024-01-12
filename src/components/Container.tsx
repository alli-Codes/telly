import SideBar from "./SideBar"
import Body from './Body'
import { useState } from "react"


const Container = function () {
    const [isSideBarMinimized, handleSideBarMinimizing] = useState(false)
    return (
            <div className="w-full h-screen flex flex-row bg-gray-200">
            <SideBar isSideBarMinimized={isSideBarMinimized} handleSideBarMinimizing={handleSideBarMinimizing} />
            <Body />
            </div>
    )
}

export default Container