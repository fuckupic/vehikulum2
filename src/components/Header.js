import React from 'react'

const Header = () => {
  return (
    <nav className=" bg-orange-400 flex flex-row justify-center w-[100vw] font-courier text-black">
      <div className="flex flex-row max-w-screen-xl gap-32 justify-between items-center">
        <div className="max-h-40">
          <img className="w-full h-full max-h-40" src="hornik.svg" alt="" />
          <p>Vozíky a důlní stroje</p>
        </div>
        <div className="flex flex-col">
          <img
            className="w-full h-full max-h-80"
            src="vehikulumLogo.svg"
            alt=""
          />
        </div>
        <div className="flex flex-col max-h-40 ">
          <img className="w-full h-full max-h-40 " src="vozik.svg" alt="" />
          <p>Každý si u nás vybere</p>
        </div>
      </div>
    </nav>
  )
}

export default Header
