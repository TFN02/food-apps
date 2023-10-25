import React from 'react'
import MainLayout from '../layout/MainLayout'

const SaladTimun = () => {
  return (
    <>
    <MainLayout 
    price='Rp 23.000'
    foodMenu='Salad Timun Dan Udang Segar'
    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consectetur odio ducimus laboriosam vero dolores?'
    image='src/assets/saladTimun.svg'
    handleNext='/dada-ayam-daun-selada'
    handlePrev='/'
    />
    </>
  )
}

export default SaladTimun