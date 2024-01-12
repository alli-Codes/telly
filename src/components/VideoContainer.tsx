import VideoList from './VideoList'

interface Props{
    category: string
}

const VideoContainer = function ({category}:Props) {
    const list = ['1', '2', '3', '3', '3', '4', '4', '5']
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODQyMTJmZDAwYzQ5NDk1YjA1ODE4ZDUwOWM0MjQ5ZiIsInN1YiI6IjY0ODAzMzc2ZDJiMjA5MDBjYTFjYmU5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WO6kAo6F45ZHEhql9x1Uf3ESjaSewMQ0mAoOfVcgK80'
  }
};

fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response.results))
  .catch(err => console.error(err));

    return (
        <div className='w-full py-8 flex relative'>
            <section className='w-full flex gap-8 px-4 py-8'>
                {list.map(() => 
                <VideoList />
                )}
                {/* <div className=' w-full flex gap-8 overflow-hidden'>
                    
                </div> */}
            </section>
            <section className='absolute w-full flex justify-between top-0 right-0'>
                <h1 className='text-2xl font-bold'>{category}</h1>
                <button className='font-bold'>See More</button>
            </section>
        </div>
    )
}

export default VideoContainer