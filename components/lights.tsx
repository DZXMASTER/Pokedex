"use client";

import React from 'react';
import { motion } from "framer-motion";

export default function lights() {
  return (
    <div className="flex">
      
        <motion.div 
          id="big-light" 
          className="mt-4 ml-4 h-[70px] w-[70px] rounded-full border-4 border-gray-100 radial-grad"
          initial={{ background: "radial-gradient(circle at 20px 20px, #12a3fd, #000)" }}
          animate={{ background: "radial-gradient(circle at 20px 20px, #fff, #76f5fe)" }}
          
          transition={{ delay: 2, duration: 2, ease: "easeInOut", repeat: 1, repeatType: "reverse" }}
        >
        </motion.div>
      <div 
        id="red-light" 
        className="mt-3 ml-2 h-[18px] w-[18px] rounded-full border border-black border-opacity-75"
      >
      </div>
      <div 
        id="yellow-light" 
        className="mt-3 ml-2 h-[18px] w-[18px] rounded-full border border-black border-opacity-75"
      >
      </div>
      <div 
        id="green-light" 
        className="mt-3 ml-2 h-[18px] w-[18px] rounded-full border border-black border-opacity-75"
      >
      </div>
    </div>
    
  )
}
