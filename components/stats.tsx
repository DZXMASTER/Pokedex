import React from 'react';

interface StatProps {
  ePokeHp: string;
  ePokeAttack: string;
  ePokeDefense: string;
  ePokeSpAtk: string;
  ePokeSpDef: string;
  ePokeSpeed: string;
}

export default function stats({
  ePokeHp,
  ePokeAttack,
  ePokeDefense,
  ePokeSpAtk,
  ePokeSpDef,
  ePokeSpeed }: StatProps) {
  return (
      <div id="stat-block" className="flex h-[100px] w-[300px] justify-between p-1">
        <div id="hp-stat" className="h-[100px] w-[50px] text-center hidden">HP
          <p id="hp" className="mt-5">{ePokeHp}</p>
        </div>
        <div id="attack-stat" className="h-[100px] w-[50px] text-center hidden">Atk
          <p id="attack" className="mt-5">{ePokeAttack}</p>
        </div>
        <div id="defense-stat" className="h-[100px] w-[50px] text-center hidden">Def
          <p id="defense" className="mt-5">{ePokeDefense}</p>
        </div>
        <div id="special-attack-stat" className="h-[100px] w-[50px] text-center hidden">SpA
          <p id="special-attack" className="mt-5">{ePokeSpAtk}</p>
        </div>
        <div id="special-defense-stat" className="h-[100px] w-[50px] text-center hidden">SpD
          <p id="special-defense" className="mt-5">{ePokeSpDef}</p>
        </div>
        <div id="speed-stat" className="h-[100px] w-[50px] text-center hidden">Speed
          <p id="speed" className="mt-5">{ePokeSpeed}</p>
        </div>
      </div>
  )
}