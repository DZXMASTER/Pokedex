"use client";

import React, { useState, useEffect } from 'react';
import Header from "@/components/header";
import Pokebody from "@/components/pokebody";


export default function Home() {
  const [input, setInput] = useState("");
  console.log(input);
  const [eBlackScreen, setEBlackScreen] = useState("black");
  const [ePokeName, setEPokeName] = useState("");
  const [ePokeId, setEPokeId] = useState("");
  const [ePokeWeight, setEPokeWeight] = useState("");
  const [ePokeHeight, setEPokeHeight] = useState("");
  const [ePokeSprite, setEPokeSprite] = useState("");
  const [ePokeType1, setEPokeType1] = useState("");
  const [ePokeType2, setEPokeType2] = useState("");
  const [ePokeHpHub, setEPokeHpHub] = useState("");
  const [ePokeHp, setEPokeHp] = useState("");
  const [ePokeAttackHub, setEPokeAttackHub] = useState("");
  const [ePokeAttack, setEPokeAttack] = useState("");
  const [ePokeDefenseHub, setEPokeDefenseHub] = useState("");
  const [ePokeDefense, setEPokeDefense] = useState("");
  const [ePokeSpAtkHub, setEPokeSpAtkHub] = useState("");
  const [ePokeSpAtk, setEPokeSpAtk] = useState("");
  const [ePokeSpDefHub, setEPokeSpDefHub] = useState("");
  const [ePokeSpDef, setEPokeSpDef] = useState("");
  const [ePokeSpeedHub, setEPokeSpeedHub] = useState("");
  const [ePokeSpeed, setEPokeSpeed] = useState("");

  useEffect(() => {
    const blackScreen = (document.getElementById("black-screen") as HTMLDivElement);
    blackScreen.style.backgroundColor = eBlackScreen;
    const pokeName = (document.getElementById("pokemon-name") as HTMLDivElement);
    pokeName.textContent = ePokeName;
    const pokeId = (document.getElementById("pokemon-id") as HTMLDivElement);
    pokeId.textContent = ePokeId;
    const pokeWeight = (document.getElementById("pokemon-weight") as HTMLDivElement);
    pokeWeight.textContent = ePokeWeight;
    const pokeHeight = (document.getElementById("pokemon-height")  as HTMLDivElement);
    pokeHeight.textContent = ePokeHeight;
    const pokeSprite = (document.getElementById("sprite") as HTMLImageElement);
    pokeSprite.src = ePokeSprite;
    const pokeType1 = (document.getElementById("type1") as HTMLDivElement);
    pokeType1.innerHTML = ePokeType1;
    const pokeType2 = (document.getElementById("type2") as HTMLDivElement);
    pokeType2.innerHTML = ePokeType2;
    const pokeHpHub = (document.getElementById("hp-stat") as HTMLDivElement);
    pokeHpHub.style.display = ePokeHpHub;
    const pokeHp = (document.getElementById("hp") as HTMLElement);
    pokeHp.textContent = ePokeHp;
    const pokeAttackHub = (document.getElementById("attack-stat") as HTMLDivElement);
    pokeAttackHub.style.display = ePokeAttackHub;
    const pokeAttack = (document.getElementById("attack") as HTMLElement);
    pokeAttack.textContent = ePokeAttack;
    const pokeDefenseHub = (document.getElementById("defense-stat") as HTMLDivElement);
    pokeDefenseHub.style.display = ePokeDefenseHub;
    const pokeDefense = (document.getElementById("defense") as HTMLElement);
    pokeDefense.textContent = ePokeDefense;
    const pokeSpAtkHub = (document.getElementById("special-attack-stat") as HTMLDivElement);
    pokeSpAtkHub.style.display = ePokeSpAtkHub;
    const pokeSpAtk = (document.getElementById("special-attack") as HTMLElement);
    pokeSpAtk.textContent = ePokeSpAtk;
    const pokeSpDefHub = (document.getElementById("special-defense-stat") as HTMLDivElement);
    pokeSpDefHub.style.display = ePokeSpDefHub;
    const pokeSpDef = (document.getElementById("special-defense") as HTMLElement);
    pokeSpDef.textContent = ePokeSpDef;
    const pokeSpeedHub = (document.getElementById("speed-stat") as HTMLDivElement);
    pokeSpeedHub.style.display = ePokeSpeedHub;
    const pokeSpeed = (document.getElementById("speed") as HTMLElement);
    pokeSpeed.textContent = ePokeSpeed;
  }, [eBlackScreen, ePokeName]);
    
  
  function inputChange() {
    setInput((document.getElementById("search-input") as HTMLInputElement).value);
  }
  
  const pokeSearch = () => {
    const regexName = /[.':é]/gi; // /[.':\dé]/gi original regex
    const regexId = /^\d+/g;
  
    if (!input.match(regexId)) {
      var modInput = input.toLowerCase().replaceAll(" ", "-").replaceAll(regexName, "").replaceAll("♀", "-f").replaceAll("♂", "-m");
    console.log(modInput);
      var pokeApiNameId = `https://pokeapi.co/api/v2/pokemon/${modInput}/`;
    } else{
      var pokeApiNameId = `https://pokeapi.co/api/v2/pokemon/${input}/`;
    }
    console.log(input);
  
  fetch(pokeApiNameId)
    .then(response => {
      console.log(response.ok);
      console.log(response.status);
      if (!response.ok) {
      alert("Pokémon not found");
      setEPokeName("none");
      setEPokeId("none");
      setEPokeWeight("none");
      setEPokeHeight("none");
      setEPokeSprite("none");
      setEBlackScreen("black");
      setEPokeType1("none");
      setEPokeType2("none");
      setEPokeHpHub("none");
      setEPokeAttackHub("none");
      setEPokeDefenseHub("none");
      setEPokeSpAtkHub("none");
      setEPokeSpDefHub("none");
      setEPokeSpeedHub("none");
        throw new Error('Network response was not ok');
      } 
      return response.json();
    }) 
    .then(data => {
      console.log(data);
      setEBlackScreen("#add8e6");
      setEPokeName(JSON.stringify(data.name).toUpperCase().replaceAll('"', ""));
      setEPokeId(`#${data.id}`);
      setEPokeWeight(`Weight:
       ${data.weight} hg`);
       setEPokeHeight(`Height:
       ${data.height} dm`);
       setEPokeSprite(data.sprites.front_default);
      if (data.types.length === 1) {
        setEPokeType1(`${data.types[0].type.name.toUpperCase()}`);
        setEPokeType2(``);
      } else {
        setEPokeType1(`${data.types[0].type.name.toUpperCase()}`);
        setEPokeType2(`${data.types[1].type.name.toUpperCase()}`);
      }
        setEPokeHpHub("block");
        setEPokeHp(data.stats[0].base_stat);
        setEPokeAttackHub("block");
        setEPokeAttack(data.stats[1].base_stat);
        setEPokeDefenseHub("block");
        setEPokeDefense(data.stats[2].base_stat);
        setEPokeSpAtkHub("block");
        setEPokeSpAtk(data.stats[3].base_stat);
        setEPokeSpDefHub("block");
        setEPokeSpDef(data.stats[4].base_stat);
        setEPokeSpeedHub("block");
        setEPokeSpeed(data.stats[5].base_stat);
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
