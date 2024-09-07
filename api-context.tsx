"use client";

import React, { useState, createContext, useContext } from "react";
import header from "@/components/header";
import InputSubmit from '@/components/header';
import display from "@/components/display";
import types from "@/components/types";
import stats from "@/components/stats";

type InputContextProviderProps = {
  children: React.ReactNode;
  value: string;
};

type InputContextType = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

export const InputContext = createContext({
  input: "",
  setInput: () => null,
});
/*
export const InputProvider =
  createContext<InputContextType | null>(null);
*/
export default function InputProvider({
  children, value
}: InputContextProviderProps) {
  const [input, setInput] = useState<string>(value);
  console.log(input + " has made it to context!");
  const pokeSearch = () => {
    const regexName = /[.':\dé]/gi;
    const regexId = /^\d+/g; //Update so that it passes Pokemon with numbers in name ex:Porygon2
  
    console.log(input);
  

    
    if (!input.match(regexId)) {
      let modInput = input.toLowerCase().replaceAll(" ", "-").replaceAll(regexName, "").replaceAll("♀", "-f").replaceAll("♂", "-m");
    console.log(modInput);
      var finalInput = modInput.toUpperCase();
      console.log(finalInput);
    } else{
      var finalInput = input;
    }
    console.log(input);
    console.log(finalInput);
  const pokeApiNameId = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${finalInput}`;
  
  fetch(pokeApiNameId)
    .then(response => {
      console.log(response.ok);
      if (!response.ok) {
      alert("Pokémon not found");
      
        throw new Error('Network response was not ok');
      } 
      return response.json();
    }) 
    .then(data => {
      
    })
    .catch(error => {
      console.error('Error:', error);
    })
    };
  ;

  return (
    <InputContext.Provider
      value={{
        input,
        setInput
      }}
    >
      {children}
    </InputContext.Provider>
  );
}

export function useInputContext() {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error(
      "useInputContext must be used within an InputContextProvider"
    );
  }

  return context;
}


/*
const searchBtn = document.getElementById("search-button");
const blackScreen = document.getElementById("black-screen");
const pokeName = document.getElementById("pokemon-name");
const pokeId = document.getElementById("pokemon-id");
const pokeWeight = document.getElementById("weight");
const pokeHeight = document.getElementById("height");
const pokeSprite = document.getElementById("sprite");
const pokeTypeCon = document.getElementById("types");
const pokeType1 = document.getElementById("type1");
const pokeType2 = document.getElementById("type2");
const pokeHpHub = document.getElementById("hp-stat");
const pokeHp = document.getElementById("hp");
const pokeAttackHub = document.getElementById("attack-stat");
const pokeAttack = document.getElementById("attack");
const pokeDefenseHub = document.getElementById("defense-stat");
const pokeDefense = document.getElementById("defense");
const pokeSpAtkHub = document.getElementById("special-attack-stat");
const pokeSpAtk = document.getElementById("special-attack");
const pokeSpDefHub = document.getElementById("special-defense-stat");
const pokeSpDef = document.getElementById("special-defense");
const pokeSpeedHub = document.getElementById("speed-stat");
const pokeSpeed = document.getElementById("speed");

const pokeSearch = () => {
  const regexName = /[.':\dé]/gi;
  const regexId = /^\d+/g;
  let input = document.getElementById("search-input").value;

  console.log(input);

  pokeTypeCon.innerHTML = "";
  if (!input.match(regexId)) {
    let modInput = input.toLowerCase().replaceAll(" ", "-").replaceAll(regexName, "").replaceAll("♀", "-f").replaceAll("♂", "-m");
  console.log(modInput);
  let finalInput = modInput.toUpperCase();
  console.log(finalInput);
  input = modInput;
  }
  console.log(input);
const pokeApiNameId = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input}`;

fetch(pokeApiNameId)
  .then(response => {
    console.log(response.ok);
    if (!response.ok) {
    alert("Pokémon not found");
    pokeName.style.display = "none";
    pokeId.style.display = "none";
    pokeWeight.style.display = "none";
    pokeHeight.style.display = "none";
    pokeSprite.style.display = "none";
    blackScreen.style.backgroundColor = "black";
    pokeType1.style.display = "none";
    pokeType2.style.display = "none";
    pokeHpHub.style.display = "none";
    pokeAttackHub.style.display = "none";
    pokeDefenseHub.style.display = "none";
    pokeSpAtkHub.style.display = "none";
    pokeSpDefHub.style.display = "none";
    pokeSpeedHub.style.display = "none";
      throw new Error('Network response was not ok');
    } 
    return response.json();
  }) 
  .then(data => {
    blackScreen.style.backgroundColor = "#add8e6";
    pokeName.textContent = JSON.stringify(data.name).toUpperCase().replaceAll("\"", "");
    pokeId.textContent = `#${data.id}`;
    pokeWeight.textContent = `Weight: ${data.weight}`;
    pokeHeight.textContent = `Height: ${data.height}`;
    pokeSprite.src = data.sprites["front_default"];
    pokeSprite.style.display = "block";
    console.log(data.types.length);
  if (data.types.length === 1) {
    pokeTypeCon.insertAdjacentHTML("afterbegin", `<div id="type1">${data.types[0].type.name.toUpperCase()}</div>`);
  } else {
    pokeTypeCon.insertAdjacentHTML("afterbegin", `<div id="type1">${data.types[0].type.name.toUpperCase()}</div>`);
    pokeTypeCon.insertAdjacentHTML("beforeend", `<div id="type2">${data.types[1].type.name.toUpperCase()}</div>`);
  }
    pokeHpHub.style.display = "block";
    pokeHp.textContent = data.stats[0].base_stat;
    pokeAttackHub.style.display = "block";
    pokeAttack.textContent = data.stats[1].base_stat;
    pokeDefenseHub.style.display = "block";
    pokeDefense.textContent = data.stats[2].base_stat;
    pokeSpAtkHub.style.display = "block";
    pokeSpAtk.textContent = data.stats[3].base_stat;
    pokeSpDefHub.style.display = "block";
    pokeSpDef.textContent = data.stats[4].base_stat;
    pokeSpeedHub.style.display = "block";
    pokeSpeed.textContent = data.stats[5].base_stat;
  })
  .catch(error => {
    console.error('Error:', error);
  })
  };
;

searchBtn.addEventListener("click", pokeSearch);
*/