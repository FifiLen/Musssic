import React from 'react'

const FestivalInfo = () => {
  return (
    <div className='py-32 bg-black'>
      <div className='max-w-7xl mx-auto space-y-10'>
        <h2 className='text-white text-6xl font-bold tracking-tighter'>Latest News</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
         
          <div className='bg-black border-2 border-orange-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300'>
            <h3 className='text-2xl font-bold text-orange-500 tracking-tighter'>New Headliner Announced</h3>
            <p className='text-white mt-4'>
            We are proud to announce that the newest headliner of our festival is an internationally renowned electronic music star! Get ready for an unforgettable experience!            </p>
            <p className='text-orange-400 font-bold mt-6 cursor-pointer'>Read More</p>
          </div>

        
          <div className='bg-black border-2 border-orange-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300'>
            <h3 className='text-2xl font-bold text-orange-500 tracking-tighter '>Festival Schedule</h3>
            <p className='text-white mt-4'>
            The festival schedule is now available! Check out when and where your favourite artists will be performing, and what additional attractions we have prepared for you.            </p>
            <p className='text-orange-400 font-bold mt-6 cursor-pointer'>Read More</p>
          </div>

          <div className='bg-black border-2 border-orange-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300'>
            <h3 className='text-2xl font-bold text-orange-500 tracking-tighter'>New Sponsors</h3>
            <p className='text-white mt-4'>
            We are delighted to announce our new sponsors! Thanks to them, we can provide even more amazing activities and experiences at our festival.            </p>
            <p className='text-orange-400 font-bold mt-6 cursor-pointer'>Read More</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FestivalInfo
