import React from 'react';

export default function display() {
  return (
    <div className="flex flex-col ml-[30px] mt-[20px] p-0 w-[275px] h-[225px] bg-[#d3d3d3] rounded-r rounded-tl rounded-bl-[50px] shadow-[rgba(77,77,77,0.75)_3px_3px_4px_0px] border border-black border-opacity-50 justify-center">
        <div className="flex mt-[-20px] mx-auto space-x-5">
          <div id="red-dot-1" className="w-[5px] h-[5px] bg-red-600 rounded-full border border-black border-opacity-40"></div>
          <div id="red-dot-2" className="w-[5px] h-[5px] bg-red-600 rounded-full border border-black border-opacity-40"></div>
        </div>
        <div id="black-screen" className="flex mt-[10px] mx-auto h-[160px] w-[230px] bg-black rounded">
          <div className="flex flex-col items-center">
            <div id="pokemon-name" className="flex h-[30px] w-[115px] justify-center">Crabominable</div>
            <div id="pokemon-id" className="flex h-[30px] w-[75px] justify-center">#740</div>
            <div id="pokemon-weight" className="flex h-[30px] w-[75px] justify-center">1800</div>
            <div id="pokemon-height" className="flex h-[30px] w-[75px] justify-center">17</div>
          </div>
          <img id="sprite" src="" alt="Pokemon Sprite" className="m-auto bg-slate-500"></img>
        </div>
        <div className="flex mt-[10px] mb-[-20px] justify-center space-x-[180px]">
          <div className="w-[15px] h-[15px] bg-red-600 rounded-full border-[1.5px] border-black border-opacity-40"></div>
          <div>
            <div className="mb-[2.5px] w-[20px] h-[1.5px] bg-black"></div>
            <div className="mb-[2.5px] w-[20px] h-[1.5px] bg-black"></div>
            <div className="mb-[2.5px] w-[20px] h-[1.5px] bg-black"></div>
            <div className="w-[20px] h-[1.5px] bg-black"></div>
          </div>
        </div>
    </div>
  )
}

/*    

*/