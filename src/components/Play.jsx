import dice1 from "../assets/d1.png";
import arr from '../data/datadices';
import { useState,useEffect } from "react";

const Play = () => {
  const[Index,setIndex]=useState(0);
  const[selectedNo,setSelectedNo]=useState(null);
  const[score,setScore]=useState(0);
  const[isSelected,setSelected]=useState(false);
  const[diceClicked,setDiceClicked]=useState(false);

  useEffect(()=>{
    if(!diceClicked)return;
    if(selectedNo-1===Index){
      setScore(prev=>{
        return prev+selectedNo
      })
    }
    else{
      setScore(prev=>{
        return prev-2
      })
   }
   setSelected(false)
   setDiceClicked(false)
    // isSelected(false)
    
  },[Index,selectedNo])

  function handleDiceRoll(){
  if(isSelected){
    setIndex(  Math.floor(Math.random()*10)%6)
    setDiceClicked(true)
  }
  else{
    console.log("Please select a number");
  }

  }
  function handleSelect(event){
    setSelectedNo(parseInt(event.target.id))
    setSelected(true)
  }



  return (
    <div className="w-screen h-screen">
      <div className="w-[90vw] flex justify-between mt-5">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-8xl font-bold ">{score}</h1>
          <p className="text-2xl font-bold font-sans">Total Score</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <div className="flex gap-3 mt-8">
            <button id='1' onClick={handleSelect} className=" border-black border-2 text-2xl px-5 py-2 hover:bg-black hover:text-white hover:font-bold hover:rounded-lg">
              1
            </button>
            <button id='2' onClick={handleSelect}  className=" border-black border-2 text-2xl px-5 py-2 hover:bg-black hover:text-white hover:font-bold hover:rounded-lg">
              2
            </button>
            <button id='3' onClick={handleSelect} className=" border-black border-2 text-2xl px-5 py-2 hover:bg-black hover:text-white hover:font-bold hover:rounded-lg">
              3
            </button>
            <button id='4' onClick={handleSelect} className=" border-black border-2 text-2xl px-5 py-2 hover:bg-black hover:text-white hover:font-bold hover:rounded-lg">
              4
            </button>
            <button id='5' onClick={handleSelect} className=" border-black border-2 text-2xl px-5 py-2 hover:bg-black hover:text-white hover:font-bold hover:rounded-lg">
              5
            </button>
            <button id='6' onClick={handleSelect} className=" border-black border-2 text-2xl px-5 py-2 hover:bg-black hover:text-white hover:font-bold hover:rounded-lg">
              6
            </button>
          </div>
          <p className="text-right w-full text-2xl font-bold font-sans">
            Select Item
          </p>
        </div>
      </div>
      <div className="  w-[40vw] mx-auto flex flex-col justify-center items-center gap-3">
        <button onClick={handleDiceRoll} className="w-1/2 h-1/2">
        <img src={arr[Index]} className="h-3/4 w-full mx-auto rounded-lg "/>
        </button>
        <h2 className="">Click on the Dice to roll</h2>
        <button className="bg-black text-white rounded-md p-3 w-1/2 mx-auto">RESET Score</button>
        <button className="bg-black text-white rounded-md p-3 w-1/2 mx-auto  ">SHOW Rules</button>
      </div>
    </div>
  );
};

export default Play;
