// import { useState } from 'react';
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
                <a href="#" className='px-4 flex items-center gap-4 active__nav-link relative'>
                    <HomeOutlinedIcon sx={{ fontSize:30 }} /> <p className={isSideBarMinimized ? '' : 'hidden'}>Home</p>
                </a>
                <a href="#" className='px-4 flex items-center gap-4 relative'>
                    <VideocamOutlinedIcon sx={{ fontSize:30 }} /> <p className={isSideBarMinimized ? '' : 'hidden'}>Movies</p>
                </a>
                <a href="#" className='px-4 flex items-center gap-4 relative'>
                    <LiveTvOutlinedIcon sx={{ fontSize:28 }} /> <p className={` text-nowrap ${isSideBarMinimized ? '' : 'hidden'}`}>Tv Series</p>
                </a>
            </nav>
        </div>
    )
}

export default SideBar