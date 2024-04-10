import React from 'react'
import dicegame from '../assets/dices-bg.png'
const HomePage = () => {
  return (
      <div className="flex  h-[80vh] w-[90vw]">
        <div className="w-1/2 h-full">
            <img src={dicegame} className="h-full w-full"/>
        </div>
        <div className="flex justify-center items-center p-5 w-1/2 ">
        <div className="text-right">
            <h1 className="text-8xl font-bold ">DICE GAME</h1>
            <button className="bg-black text-white px-10 py-1 mt-4 rounded-md">Play Now</button>
            </div>
        </div>
      </div>
  )
}

export default HomePage
