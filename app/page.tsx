"use client";

import React, { useState } from 'react';
import Header from "@/components/header";
import Pokebody from "@/components/pokebody";


export default function Home() {
  const [input, setInput] = useState("");
  console.log(input);

  const blackScreen = (document.getElementById("black-screen") as HTMLDivElement);
  const pokeName = (document.getElementById("pokemon-name") as HTMLDivElement);
  const pokeId = (document.getElementById("pokemon-id") as HTMLDivElement);
  const pokeWeight = (document.getElementById("pokemon-weight") as HTMLDivElement);
  const pokeHeight = (document.getElementById("pokemon-height")  as HTMLDivElement);
  const pokeSprite = (document.getElementById("sprite") as HTMLImageElement);
  //const pokeTypeCon = (document.getElementById("type(s)") as HTMLDivElement);
  const pokeType1 = (document.getElementById("type1") as HTMLDivElement);
  const pokeType2 = (document.getElementById("type2") as HTMLDivElement);
  //const statBlock = (document.getElementById("stat-block") as HTMLDivElement);
  const pokeHpHub = (document.getElementById("hp-stat") as HTMLDivElement);
  const pokeHp = (document.getElementById("hp") as HTMLElement);
  const pokeAttackHub = (document.getElementById("attack-stat") as HTMLDivElement);
  const pokeAttack = (document.getElementById("attack") as HTMLElement);
  const pokeDefenseHub = (document.getElementById("defense-stat") as HTMLDivElement);
  const pokeDefense = (document.getElementById("defense") as HTMLElement);
  const pokeSpAtkHub = (document.getElementById("special-attack-stat") as HTMLDivElement);
  const pokeSpAtk = (document.getElementById("special-attack") as HTMLElement);
  const pokeSpDefHub = (document.getElementById("special-defense-stat") as HTMLDivElement);
  const pokeSpDef = (document.getElementById("special-defense") as HTMLElement);
  const pokeSpeedHub = (document.getElementById("speed-stat") as HTMLDivElement);
  const pokeSpeed = (document.getElementById("speed") as HTMLElement);
  function inputChange() {
    setInput((document.getElementById("search-input") as HTMLInputElement).value);
  }
  
  const pokeSearch = () => {
    const regexName = /[.':é]/gi; // /[.':\dé]/gi original regex
    const regexId = /^\d+/g; //Update so that it passes Pokemon with numbers in name ex:Porygon2
  
    console.log(input);
  
    if (!input.match(regexId)) {
      var modInput = input.toLowerCase().replaceAll(" ", "-").replaceAll(regexName, "").replaceAll("♀", "-f").replaceAll("♂", "-m");
    console.log(modInput);
      //var finalInput = modInput.toUpperCase();
      //console.log(finalInput);
      var pokeApiNameId = `https://pokeapi.co/api/v2/pokemon/${modInput}/`;
    } else{
      var pokeApiNameId = `https://pokeapi.co/api/v2/pokemon/${input}/`;
    }
    console.log(input);
    
  
  //`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${finalInput}`;
  
  fetch(pokeApiNameId)
    .then(response => {
      console.log(response.ok);
      console.log(response.status);
      if (!response.ok) {
      alert("Pokémon not found");
      pokeName.style.display = "none";
      pokeId.style.display = "none";
      pokeWeight.style.display = "none";
      pokeHeight.style.display = "none";
      pokeSprite.style.display = "none";
      blackScreen.style.backgroundColor = "black";
      //statBlock.style.display = "none";
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
      console.log(data);
      blackScreen.style.backgroundColor = "#add8e6";
      pokeName.textContent = JSON.stringify(data.name).toUpperCase().replaceAll('"', "");
      pokeId.textContent = `#${data.id}`;
      pokeWeight.textContent = `Weight:
       ${data.weight} hg`;
      pokeHeight.textContent = `Height:
       ${data.height} dm`;
       console.log(pokeHeight.textContent);
       console.log(pokeWeight.textContent);
      pokeSprite.src = data.sprites.front_default;
      //pokeSprite.style.display = "block";
      if (data.types.length === 1) {
        pokeType1.innerHTML = `${data.types[0].type.name.toUpperCase()}`;
        pokeType2.innerHTML = ``;
      } else {
        pokeType1.innerHTML = `${data.types[0].type.name.toUpperCase()}`;
        pokeType2.innerHTML = `${data.types[1].type.name.toUpperCase()}`;
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

  return (
    <main className="flex flex-col items-center justify-between px-10 pt-5">
      <Header onClick={pokeSearch} onChange={inputChange}/>
      <Pokebody />
    </main>
  );
}
