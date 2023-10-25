import React from 'react'

const Navbar = () => {
    return (
        <header>
            <nav className='flex justify-between'>
                <div className='flex '>
                    <img
                        className='pr-56'
                        src="src/assets/logo.svg" alt="logo" />
                    <ul className='flex gap-x-10 pl-10'>
                        <li>Sarapan</li>
                        <li>Makan Siang</li>
                        <li>Makan Malam</li>
                    </ul>
                </div>
                <div>
                    <img src="src/assets/cart.svg" alt="cart" />
                </div>
            </nav>

        </header>
    )
}

export default Navbar