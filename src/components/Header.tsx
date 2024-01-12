import SearchIcon from '@mui/icons-material/Search';



const Header = function () {
    return (
        <div className='header sticky top-0'>
            <section className='search__section'>
                <SearchIcon />
                <input className='bg-white py-8 px-12 rounded' type="text" />
            </section>
        </div>
    )
}

export default Header