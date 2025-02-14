"use client";

import React from 'react';
import Header from "@/components/header";
import Pokebody from "@/components/pokebody";
import { PokemonProvider } from '@/context/pokeContext';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-10 pt-5">
      <PokemonProvider>
        <Header />
        <Pokebody />
      </PokemonProvider>
    </main>
  );
}
