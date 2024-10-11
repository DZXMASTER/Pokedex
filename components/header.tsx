"use client";

import React from 'react';
import { motion } from "framer-motion";

interface OnProps {
  onClick: () => void;
  onChange: () => void;
}


export default function header({ onClick, onChange }: OnProps) {
  
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
        onChange={onChange}
        className="rounded-full border border-opacity-40 bg-gray-600 text-center hover:bg-slate-500 transition"
        required>
        </input>
        <button 
        id="search-button" 
        onClick={onClick}
        className="ml-3 transition hover:text-[#FFCC00] hover:scale-110 bg-gray-600 rounded-full px-2"
        >
          <strong>Search</strong>
        </button>
      </div>
      
    </header>
    
  )
}