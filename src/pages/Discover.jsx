import { Error, Loader, SongCard } from '../components'
import { genres } from '../assets/constants'


const Discover = () => {
  return (
   
    <div className='flex flex-col'>

      {/* Dropdown */}
      <div className=' w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
        <h2 className='font-bold text-3xl text-white'>Discover</h2>
        <select 
          className='bg-black text-gray-300 p-3 text-small rounded-lg outline-none sm:mt-0 mt-5'
        >
          {genres.map((item) => <option key={item.value} value={item.value}>{item.title}</option>)}
        </select>
      </div>

      {/* Display all songs */}
      <div className='border flex flex-wrap sm:justify-start justify-center gap-8'>
        {
          [1,2,3,4,5,6,7,8,9,10]?.map((song, i) => (
            <SongCard 
              key={song.key}  
              song={song}
              // isPlaying={isPlaying}
              // activeSong={activeSong}
              // data={data}
              i={i}
            />
          ))
        }
      </div>

    </div>
  )
}

export default Discover;
