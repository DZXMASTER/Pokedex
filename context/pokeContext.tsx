import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { findClosestMatches, findRelatedForms, fetchAllPokemonNames, findPreEvolution } from "@/utils/stringUtils";

interface PokemonContextType {
    eBlackScreen: string;
    ePokeName: string;
    ePokeId: string;
    ePokeWeight: string;
    ePokeHeight: string;
    ePokeSprite: string;
    ePokeType1: string;
    ePokeType2: string;
    ePokeHp: string;
    ePokeAttack: string;
    ePokeDefense: string;
    ePokeSpAtk: string;
    ePokeSpDef: string;
    ePokeSpeed: string;
    closestMatches: string[];
    pokeSearch: (query: string) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
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
    const [closestMatches, setClosestMatches] = useState<string[]>([]);
    const [pokemonEntry, setPokemonEntry] = useState("");

    useEffect(() => {
        const blackScreen = (document.getElementById("black-screen") as HTMLDivElement);
        blackScreen.style.backgroundColor = eBlackScreen;
        //const pokeName = (document.getElementById("pokemon-name") as HTMLDivElement);
        //pokeName.textContent = ePokeName;
        //const pokeId = (document.getElementById("pokemon-id") as HTMLDivElement);
        //pokeId.textContent = ePokeId;
        //const pokeWeight = (document.getElementById("pokemon-weight") as HTMLDivElement);
        //pokeWeight.textContent = ePokeWeight;
        //const pokeHeight = (document.getElementById("pokemon-height")  as HTMLDivElement);
        //pokeHeight.textContent = ePokeHeight;
        //const pokeSprite = (document.getElementById("sprite") as HTMLImageElement);
        //pokeSprite.src = ePokeSprite;
        //const pokeType1 = (document.getElementById("type1") as HTMLDivElement);
        //pokeType1.innerHTML = ePokeType1;
        //const pokeType2 = (document.getElementById("type2") as HTMLDivElement);
        //pokeType2.innerHTML = ePokeType2;
        const pokeHpHub = (document.getElementById("hp-stat") as HTMLDivElement);
        pokeHpHub.style.display = ePokeHpHub;
        //const pokeHp = (document.getElementById("hp") as HTMLElement);
        //pokeHp.textContent = ePokeHp;
        const pokeAttackHub = (document.getElementById("attack-stat") as HTMLDivElement);
        pokeAttackHub.style.display = ePokeAttackHub;
        //const pokeAttack = (document.getElementById("attack") as HTMLElement);
        //pokeAttack.textContent = ePokeAttack;
        const pokeDefenseHub = (document.getElementById("defense-stat") as HTMLDivElement);
        pokeDefenseHub.style.display = ePokeDefenseHub;
        //const pokeDefense = (document.getElementById("defense") as HTMLElement);
        //pokeDefense.textContent = ePokeDefense;
        const pokeSpAtkHub = (document.getElementById("special-attack-stat") as HTMLDivElement);
        pokeSpAtkHub.style.display = ePokeSpAtkHub;
        //const pokeSpAtk = (document.getElementById("special-attack") as HTMLElement);
        //pokeSpAtk.textContent = ePokeSpAtk;
        const pokeSpDefHub = (document.getElementById("special-defense-stat") as HTMLDivElement);
        pokeSpDefHub.style.display = ePokeSpDefHub;
        //const pokeSpDef = (document.getElementById("special-defense") as HTMLElement);
        //pokeSpDef.textContent = ePokeSpDef;
        const pokeSpeedHub = (document.getElementById("speed-stat") as HTMLDivElement);
        pokeSpeedHub.style.display = ePokeSpeedHub;
        //const pokeSpeed = (document.getElementById("speed") as HTMLElement);
        //pokeSpeed.textContent = ePokeSpeed;
    }, [eBlackScreen, ePokeName]);

    const speakPokemonEntry = (name: string, category: string, preEvolution: string | null, entry: string) => {
      if (!window.speechSynthesis) {
        console.warn("Web Speech API not supported in this browser.");
        return;
      }

      const synth = window.speechSynthesis;
      const voices = synth.getVoices();

      voices.forEach((voice) => {
        if (voice.lang === 'en-US') {
          console.log(voice.name); // For US English voices
        }
      });

      let speechText = `${name}, the ${category}. ${entry}`;

      if (preEvolution) {
        speechText = `${name}, the ${category}, and the evolved form of ${preEvolution}. ${entry}`;
      }

      const utterance = new SpeechSynthesisUtterance(speechText);
      utterance.voice = window.speechSynthesis.getVoices().find((voice) => voice.name === "Google UK English Male") || null;
      utterance.lang = "en-US";
      utterance.pitch = 1;
      utterance.rate = 1;
      window.speechSynthesis.speak(utterance);
    };
    
    const pokeSearch = async (query: string, isUserSelection = false) => {
      if (!query) return;

      setEPokeName("");
      setEPokeId("");
      setEPokeWeight("");
      setEPokeHeight("");
      setEPokeSprite("");
      setEBlackScreen("black");

      setEPokeType1("");
      setEPokeType2("");
      
      setEPokeHpHub("hidden");
      setEPokeHp("");

      setEPokeAttackHub("hidden");
      setEPokeAttack("");

      setEPokeDefenseHub("hidden");
      setEPokeDefense("");

      setEPokeSpAtkHub("hidden");
      setEPokeSpAtk("");

      setEPokeSpDefHub("hidden");
      setEPokeSpDef("");

      setEPokeSpeedHub("hidden");
      setEPokeSpeed("");

      setPokemonEntry("");

      if (!isUserSelection) {
        setClosestMatches([]); 
      }

      const regexName = /[.':é]/gi;
      //const regexId = /^\d+/g;
    
      /*if (!query.match(regexId)) {
        var modInput = query.toLowerCase().replaceAll(" ", "-").replaceAll(regexName, "").replaceAll("♀", "-f").replaceAll("♂", "-m");
      console.log(modInput);
        var pokeApiNameId = `https://pokeapi.co/api/v2/pokemon/${modInput}/`;
      } else{
        var pokeApiNameId = `https://pokeapi.co/api/v2/pokemon/${query}/`;
      }
      console.log(query);
    */
      
      let modInput = query
        .toLowerCase()
        .replaceAll(" ", "-")
        .replaceAll(regexName, "")
        .replaceAll("♀", "-f")
        .replaceAll("♂", "-m");

      let pokeApiNameId = `https://pokeapi.co/api/v2/pokemon/${modInput}/`;

      try {
        const response = await fetch(pokeApiNameId);
        if (!response.ok) throw new Error("Pokemon not found");

        const data = await response.json();
        console.log("Exact match found:", data);

        if (isUserSelection) {
          setClosestMatches([]); 
        } else {
          // Fetch all Pokémon names for related forms
          const allResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000`);
          const allData = await allResponse.json();
          const allPokemonNames = allData.results.map((p: any) => p.name);

          // Find related forms
          const relatedForms = findRelatedForms(data.name, allPokemonNames);
          console.log("Related forms:", relatedForms);

          // If there are related forms, show a list
          if (relatedForms.length > 0) {
            setClosestMatches(Array.from(new Set([data.name, ...relatedForms])));
          }
        }

        setEBlackScreen("#add8e6");
        setEPokeName(JSON.stringify(data.name).toUpperCase().replaceAll('"', ""));
        setEPokeId(`#${data.id}`);
        setEPokeWeight(data.weight);
        setEPokeHeight(data.height);
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

        // Fetch Pokédex entry
        const speciesResponse = await fetch(data.species.url);
        const speciesData = await speciesResponse.json();

        // Get Pokémon category
        const category = speciesData.genera.find((gen: any) => gen.language.name === "en")?.genus || "Pokémon";

        // Get evolution chain
        let preEvolution: string | null = null;
        if (speciesData.evolution_chain?.url) {
          const evolutionResponse = await fetch(speciesData.evolution_chain.url);
          const evolutionData = await evolutionResponse.json();

          preEvolution = findPreEvolution(data.name, evolutionData.chain);
        }

        // Randomly select an entry from available games
        const entries = speciesData.flavor_text_entries
          .filter((entry: any) => entry.language.name === "en")
          .map((entry: any) => entry.flavor_text.replace(/\f|\n/g, " ")); // Remove formatting artifacts

        if (entries.length > 0) {
          const randomEntry = entries[Math.floor(Math.random() * entries.length)];
          setPokemonEntry(randomEntry);

          // Speak the entry if it's an exact match OR a selected Pokémon from a list
          if (isUserSelection || closestMatches.length === 0) {
            speakPokemonEntry(data.name, category, preEvolution, randomEntry);
          }
        }
      } catch (error) {
          console.log(`Exact match for '${modInput}' not found, searching closest matches...`, error);

          if (!isUserSelection) {
            try {
              //const allPokemonNames = await fetchAllPokemonNames();
              const allResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000`);
              const allData = await allResponse.json();
              const allPokemonNames = allData.results.map((p: any) => p.name);

              const closestNames = findClosestMatches(modInput, allPokemonNames, 5);
              console.log("Fuzzy search results:", closestNames);

              setClosestMatches(closestNames.length > 0 ? closestNames : []);
            } catch (error) {
              console.error("Error fetching Pokémon names:", error);
            }
          }
      }
    };

  return (
    <PokemonContext.Provider value={{ eBlackScreen, ePokeName, ePokeId, ePokeWeight, ePokeHeight, ePokeSprite, ePokeType1, ePokeType2, ePokeHp, ePokeAttack, ePokeDefense, ePokeSpAtk, ePokeSpDef, ePokeSpeed, closestMatches, pokeSearch }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }
  return context;
};