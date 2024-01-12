import SideBar from "./SideBar"
import Body from './Body'
import { useState } from "react"


const Container = function () {
    const [isSideBarMinimized, handleSideBarMinimizing] = useState(false)
    return (
            <div className="flex bg-gray-200 gap-4">
            <SideBar isSideBarMinimized={isSideBarMinimized} handleSideBarMinimizing={handleSideBarMinimizing} />
            <Body isSideBarMinimized={isSideBarMinimized} />
            </div>
    )
}

export default Container