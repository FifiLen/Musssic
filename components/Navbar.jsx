'use client'
import { useState, useEffect } from 'react'
import { Monoton } from 'next/font/google'

const monoton = Monoton({ subsets: ['latin'], weight: ['400']})

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav className={`fixed z-50 w-full p-6 flex justify-between transition-all duration-500 ease-in-out ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
            <div className='flex justify-between w-full'>
                <div>
                    <p className={`${monoton.className} text-5xl font-medium text-white`}>musssick<span className='text-orange-400'>.</span></p>
                    <div className={`flex justify-start items-center gap-4`}>
                        <p className={`text-5xl font-bold tracking-tighter text-orange-400`}>Festival</p>
                        <div>
                            <p className={`text-lg text-white font-bold tracking-tighter -mb-2`}>WARSAW</p>
                            <p className={`text-lg text-white font-bold tracking-tighter`}>7-9.08.2024</p>
                        </div>
                    </div>
                </div>
                
                {/* Menu na większych ekranach */}
                <div className={`hidden md:flex gap-28 transition-all duration-500 ease-in-out ${isScrolled ? 'items-center' : ''}`}> 
                    <div className='flex gap-6 text-lg font-semibold tracking-tighter text-orange-400'>
                        <p>About Festival</p>
                        <p>Line Up</p>
                        <p>Tickets</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>

                    <div className='flex gap-3 text-lg font-semibold tracking-tighter text-orange-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-7 h-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>



                        <p className='underline-offset-4 underline'>EN</p>
                        <p>PL</p>
                    </div>
                </div>

                {/* Menu mobilne */}
                <button onClick={toggleMenu} className='md:hidden text-orange-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-16 6h16" />
                    </svg>
                </button>
            </div>

            {/* Menu rozwijane na urządzeniach mobilnych */}
            {isOpen && (
                <div className='absolute top-32 left-0 w-full bg-black text-orange-400 p-6 md:hidden'> 
                    <div className='flex flex-col gap-4 text-lg font-semibold tracking-tighter'>
                        <p onClick={toggleMenu}>About Festival</p>
                        <p onClick={toggleMenu}>Line Up</p>
                        <p onClick={toggleMenu}>Tickets</p>
                        <p onClick={toggleMenu}>FAQ</p>
                        <p onClick={toggleMenu}>Contact</p>
                        <div className='flex gap-3 mt-4'>
                            <p className='underline-offset-4 underline' onClick={toggleMenu}>EN</p>
                            <p onClick={toggleMenu}>PL</p>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}