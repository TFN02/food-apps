import React from 'react'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'

const MainLayout = ({ price, foodMenu, description, image, handleNext, handlePrev }) => {

    return (
        <div className='grid grid-cols-2 min-h-screen items-center pb-24'>

            {/* Title Section */}
            <div className='text-left'>
                <div className='flex flex-col w-367 text-left pb-7'>
                    <p className='text-Title text-orange-400 font-semibold'>{price}</p>
                    <p className='text-4xl font-medium'>{foodMenu}</p>
                    <p className='text-sm font-normal'>{description}</p>
                </div>
                <Button className='w-163 p-2'>Beli Sekarang</Button>
            </div>
            <img
                className='absolute w-full max-w-4xl -z-10 top-0 right-0'
                src="src/assets/ellipse.svg"
                alt="ellipse"
            />

            {/* menu section */}

            <div>
                <img
                    className='rounded-full w-32 absolute -translate-x-1/2 -translate-y-12'
                    src="src/assets/saladAyam.svg" alt="" />
                <img
                    className='rounded-full w-40 absolute translate-x-20 -translate-y-52'
                    src="src/assets/saladTimun.svg" alt="" />
                <img
                    className='rounded-full w-44 absolute translate-x-72 -translate-y-52'
                    src="src/assets/dadaAyam.svg" alt="" />
                <img
                    className='rounded-full w-32 absolute translate-x-100 -translate-y-5'
                    src="src/assets/saladAyam.svg" alt="" />
                <img
                    className='absolute right-24 top-32 -z-10'
                    src="src/assets/ellipseHalf.svg" alt="border"
                />
            </div>

            <div className='absolute right-24 top-2'>
                <div className='flex justify-between pt-72 pb-44 items-center mx-5 w-560'>
                    <div className='mt-44'>
                        <Link to={handlePrev}>
                            <Button
                                className='rounded-full shadow'><BsArrowLeftShort size={30} /></Button>
                        </Link>
                    </div>
                    <img
                        className='ml-16'
                        src={image}
                        alt="food menu" 
                    />
                    <div className='mt-44 mr-1'>
                        <Link to={handleNext}>
                            <Button
                                className='rounded-full p-0 shadow-sm'><BsArrowRightShort size={30} /></Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainLayout