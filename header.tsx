"use client";

import React, { useState, useEffect, createContext } from 'react';
import { motion } from "framer-motion";
import InputContextProvider from '@/context/api-context';

/*
type InputSubmitContextProviderProps = {
  children: React.ReactNode;
};
*/
//Try out passing props to child (api-context) instead of creating context
/*
type InputSubmitContext = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

export const InputSubmitContext = createContext<InputSubmitContext | null>(null);
*/
export default function header() {
  
  const [input, setInput] = useState("");

  function inputChange() {
    setInput((document.getElementById("search-input") as HTMLInputElement).value);
  }
  
  function inputSubmit() {
    console.log(input);
  }
  
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
        <input id="search-input" 
        placeholder="Enter name or id" 
        onChange={inputChange} value= {input}
        className="rounded-full border border-opacity-40 bg-gray-600 text-center hover:bg-slate-500 transition"
        required>
        </input>
        <button 
        id="search-button" 
        onClick={inputSubmit} value= {input}
        className="ml-3 transition hover:text-[#FFCC00] hover:scale-110 bg-gray-600 rounded-full px-2"
        >
          <strong>Search</strong>
        </button>
      </div>
      
    </header>
    
  )
}

/*
<InputSubmitContext.Provider
        value={{
          input,
          setInput,
        }}
      >
        {children}
      </InputSubmitContext.Provider>
*/