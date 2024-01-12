import SearchIcon from '@mui/icons-material/Search';



const Header = function () {
    return (
        <div className='header flex items-center justify-between sticky top-0'>
            <section className='search__section bg-white h-14 w-[32rem] flex rounded-full overflow-hidden relative'>
                <div className='z-10 relative self-center left-4'><SearchIcon /></div>
                <input className=' w-full h-full absolute py-4 px-12 outline-none rounded' type="text" placeholder='Search on Telly' />
            </section>

            <section className='user__section flex items-center gap-2'>
                 <div className="user__section-image bg-gray-300 h-10 w-10 rounded-full"></div>
                 <p className="user__section-name">iam_alli</p>
            </section>
        </div>
    )
}

export default Header