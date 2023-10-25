import React from 'react'
import MainLayout from '../layout/MainLayout'

const SaladAyam = () => {
  return (
    <>
    <MainLayout 
    price='Rp 45.000'
    foodMenu='Salad Ayam Kacang Tahu'
    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consectetur odio ducimus laboriosam vero dolores?'
    image='src/assets/saladAyam.svg'
    handleNext="/salad-timun-dan-udang-segar"
    handlePrev='/dada-ayam-daun-selada'
    />
    </>
  )
}

export default SaladAyam