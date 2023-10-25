import React from 'react'

export const Button = ({className, children, onClick}) => {
  return (
    <button
    onClick={onClick}
    className={`absolute bg-orange-400 text-sm text-white font-semibold uppercase rounded-3xl shadow-orange-400 shadow-2xl ${className}`}
    >{children}</button>
  )
}
