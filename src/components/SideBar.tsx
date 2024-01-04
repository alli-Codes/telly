import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';

const SideBar = function () {
    return (
        <div className="h-[100vh] max-w-56 py-16 flex flex-col gap-20 bg-white  rounded">
            <div className='flex items-center gap-2'>
                <MenuIcon fontSize="large" />
                <p>Telly</p>
            </div>

            <nav className='flex flex-col gap-6'>
                <a href="#" className='px-4 flex items-center gap-4 active__nav-link relative'>
                    <HomeOutlinedIcon sx={{ fontSize:30 }} /> <p>Home</p>
                </a>
                <a href="#" className='px-4 flex items-center gap-4 relative'>
                    <VideocamOutlinedIcon sx={{ fontSize:30 }} /> <p>Movies</p>
                </a>
                <a href="#" className='px-4 flex items-center gap-4 relative'>
                    <LiveTvOutlinedIcon sx={{ fontSize:28 }} /> <p>Tv Series/ Shows</p>
                </a>
            </nav>
        </div>
    )
}

export default SideBar