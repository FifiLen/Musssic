import { CgFacebook } from "react-icons/cg"
import { CgInstagram } from "react-icons/cg"
import { TbBrandYoutubeFilled } from "react-icons/tb"
import { BsSpotify } from "react-icons/bs"
import { BsTwitterX } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className='bg-black py-16 text-white'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
        
        <div className='flex flex-col space-y-4'>
          <h3 className='text-3xl font-bold text-orange-500'>About Festival</h3>
          <p className='text-gray-400'>
          Our festival is a unique event that combines music, art and amazing experiences. Join us to celebrate with us!          </p>
          <p className='text-gray-400'>
          The festival takes place from 7-9 August 2024 in Warsaw, Poland. Get ready for an unforgettable three days full of music and fun!          </p>
        </div>
        
        <div className='flex flex-col space-y-4'>
          <h3 className='text-3xl font-bold text-orange-500'>Quick Links</h3>
          <a href='#' className='text-gray-400 hover:text-orange-400 transition-all duration-300'>Line Up</a>
          <a href='#' className='text-gray-400 hover:text-orange-400 transition-all duration-300'>Tickets</a>
          <a href='#' className='text-gray-400 hover:text-orange-400 transition-all duration-300'>FAQ</a>
          <a href='#' className='text-gray-400 hover:text-orange-400 transition-all duration-300'>Contact</a>
        </div>
        
        <div className='flex flex-col space-y-4'>
          <h3 className='text-3xl font-bold text-orange-500'>Follow Us</h3>
          <div className='flex gap-4 text-orange-400'>
            <CgFacebook className='w-7 h-7'/>
            <CgInstagram className='w-7 h-7'/>
            <TbBrandYoutubeFilled className='w-7 h-7'/>
            <BsSpotify className='w-7 h-7'/>
            <BsTwitterX className='w-7 h-7'/>
          </div>
        </div>
        
      </div>
      
      <div className='text-center text-gray-400 mt-16'>
        © 2024 Musssick Festival. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
