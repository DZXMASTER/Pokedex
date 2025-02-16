import React from 'react';

interface DisplayProps {
  ePokeName: string;
  ePokeId: string;
  ePokeWeight: string;
  ePokeHeight: string;
  ePokeSprite: string;
  closestMatches: string[];
  pokeSearch: (name: string, isUserSelection?: boolean) => void;
}

export default function display({ 
  ePokeName,
  ePokeId,
  ePokeWeight,
  ePokeHeight,
  ePokeSprite,
  closestMatches = [],
  pokeSearch }: DisplayProps) {
  return (
    <div className="flex flex-col ml-[30px] mt-[20px] p-0 w-[275px] h-[225px] bg-[#d3d3d3] rounded-r rounded-tl rounded-bl-[50px] shadow-[rgba(77,77,77,0.75)_3px_3px_4px_0px] border border-black border-opacity-50 justify-center">
        <div className="flex mt-[-20px] mx-auto space-x-5">
          <div id="red-dot-1" className="w-[5px] h-[5px] bg-red-600 rounded-full border border-black border-opacity-40"></div>
          <div id="red-dot-2" className="w-[5px] h-[5px] bg-red-600 rounded-full border border-black border-opacity-40"></div>
        </div>
        <div id="black-screen" className="mt-[10px] mx-auto h-[160px] w-[230px] bg-black rounded">
        {closestMatches?.length > 1 ? (
        <div className="w-full max-w-md max-h-[160px] px-2 bg-[#add8e6] rounded">
          <div className="max-h-[160px] overflow-y-auto rounded-md">
            {closestMatches.map((name) => (
              <button
                key={name}
                onClick={() => pokeSearch(name, true)}
                className="w-full p-2 text-left hover:bg-gray-200 transition"
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        ) : (
          <>
            <div id="pokemon-name" className="flex h-[30px] w-auto justify-center text-center text-sm mb-2">{ePokeName}</div>
            <div className="flex">
            {ePokeId && ePokeWeight && ePokeHeight && (
              <div className="flex flex-col items-center">
                <div id="pokemon-id" className="flex h-[30px] w-[75px] justify-center mb-2">{ePokeId}</div>
                <div id="pokemon-weight" className="flex flex-col h-[30px] w-[75px] justify-center text-center mb-4">
                  <span>Weight:</span>
                  <span>{ePokeWeight} hg</span>
                </div>
                <div id="pokemon-height" className="flex flex-col h-[30px] w-[75px] justify-center text-center">
                  <span>Height:</span>
                  <span>{ePokeHeight} dm</span>
                </div>
              </div>
              )}
              {ePokeSprite && <img id="sprite" src={ePokeSprite} className="m-auto"/>}
            </div>
          </>
        )}
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