import SearchIcon from '@mui/icons-material/Search';



const Header = function () {
    return (
        <div className='header sticky top-0'>
            <section className='search__section bg-white h-14 w-[32rem] flex rounded-full overflow-hidden relative'>
                <div className='z-10 relative self-center left-4'><SearchIcon /></div>
                <input className=' w-full h-full absolute py-4 px-12 outline-none rounded' type="text" placeholder='Search on Telly' />
            </section>
        </div>
    )
}

export default Header