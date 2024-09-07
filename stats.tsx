import React from 'react'

export default function stats() {
  return (
      <div id="big-black-rect" className="flex h-[100px] w-[300px] justify-between p-1">
        <div id="hp-stat" className="h-[100px] w-[50px] text-center">HP
          <p id="hp" className="mt-5">100</p>
        </div>
        <div id="attack-stat" className="h-[100px] w-[50px] text-center">Atk
          <p id="attack" className="mt-5">100</p>
        </div>
        <div id="defense-stat" className="h-[100px] w-[50px] text-center">Def
          <p id="defense" className="mt-5">100</p>
        </div>
        <div id="special-attack-stat" className="h-[100px] w-[50px] text-center">SpA
          <p id="special-attack" className="mt-5">100</p>
        </div>
        <div id="special-defense-stat" className="h-[100px] w-[50px] text-center">SpD
          <p id="special-defense" className="mt-5">100</p>
        </div>
        <div id="speed-stat" className="h-[100px] w-[50px] text-center">Speed
          <p id="speed" className="mt-5">100</p>
        </div>
      </div>
  )
}


/*
<div id="big-black-rect">
  <div id="hp-stat">HP
    <p id="hp"></p>
  </div>
  <div id="attack-stat">Atk
    <p id="attack"></p>
  </div>
  <div id="defense-stat">Def
    <p id="defense"></p>
  </div>
  <div id="special-attack-stat">SpA
    <p id="special-attack"></p>
  </div>
  <div id="special-defense-stat">SpD
    <p id="special-defense"></p>
  </div>
  <div id="speed-stat">Speed
    <p id="speed"></p>
  </div>
</div>
*/