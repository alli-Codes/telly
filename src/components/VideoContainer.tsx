import VideoList from './VideoList'
// import 'dotenv/config'

interface Props{
    category: string
}

const VideoContainer = function ({category}:Props) {
    const list = ['1', '2', '3', '3', '3', '4', '4', '5']
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    authorization: `Bearer ${__TOKEN__}`
  }
  };

fetch('https://api.themoviedb.org/3/movie/top_rated', options)
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