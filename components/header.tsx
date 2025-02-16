"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { usePokemon } from '@/context/pokeContext';

export default function header() {
  const [input, setInput] = useState("");
  const { pokeSearch } = usePokemon();

  function inputChange() {
    setInput((document.getElementById("search-input") as HTMLInputElement).value);
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      pokeSearch(input.trim());
    }
  };

  return (
    <header id="head" className="flex flex-col items-center">
      <motion.h1 
      id="title" 
      className="h-[5rem] text-5xl text-stroke-fill-[#FFCC00] text-stroke mt-5"
      initial={{
        opacity: 0,
        size: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      >
        Pokédex
      </motion.h1>
      <div id="input-name">
        <form onSubmit={handleSearch}>
          <input id="search-input" 
          placeholder="Enter name or id"
          value={input}
          onChange={inputChange}
          className="w-60 resize-x rounded-full border border-opacity-40 bg-gray-600 text-center hover:bg-slate-500 transition"
          required>
          </input>
          <button 
          id="search-button"
          type="submit"
          className="ml-3 transition hover:text-[#FFCC00] hover:scale-110 bg-gray-600 rounded-full px-2"
          >
            <strong>Search</strong>
          </button>
        </form>
      </div>
      
    </header>
    
  )
}