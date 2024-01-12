import SearchIcon from '@mui/icons-material/Search';

const Header = function () {
    return (
        <div className='header'>
            <section className='search__section'>
                <SearchIcon />
                <input className='bg-white py-8 px-12 rounded' type="text" />
            </section>
        </div>
    )
}

export default Header