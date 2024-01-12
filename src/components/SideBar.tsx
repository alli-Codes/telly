// import { useState } from 'react';
import SideBarLink from './SideBarLink'
import SideBarParagraph from './SideBarParagraph';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';

interface Props{
    isSideBarMinimized: boolean,
    handleSideBarMinimizing: (isSideBarMinimized: boolean) => void
}

const SideBar = function ({isSideBarMinimized, handleSideBarMinimizing}: Props) {
    function handleMenuSize() {
        handleSideBarMinimizing(!isSideBarMinimized)
    }
    return (
        <div className={`h-[100vh] max-w-56 py-16 flex flex-col gap-20 bg-white rounded transition-all duration-500 ease-in	fixed ${isSideBarMinimized ? 'menu__maximized' : 'menu__minimized'}`}>
            <div className='flex items-center px-4 gap-2'>
                <MenuIcon fontSize="large" onClick={handleMenuSize} />
                <p className={isSideBarMinimized ? '' : 'hidden'}>Telly</p>
            </div>

            <nav className='flex flex-col gap-6'>
                <SideBarLink>
                    <HomeOutlinedIcon sx={{ fontSize:30 }} /><SideBarParagraph isSideBarMinimized={isSideBarMinimized}>Home</SideBarParagraph>
                </SideBarLink>

                <SideBarLink>
                    <VideocamOutlinedIcon sx={{ fontSize:30 }} /><SideBarParagraph isSideBarMinimized={isSideBarMinimized}>Movies</SideBarParagraph>
                </SideBarLink>

                <SideBarLink>
                    <LiveTvOutlinedIcon sx={{ fontSize:28 }} /><SideBarParagraph isSideBarMinimized={isSideBarMinimized}>Tv Series</SideBarParagraph>
                </SideBarLink>
            </nav>
        </div>
    )
}

export default SideBar