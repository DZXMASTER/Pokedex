// Compute the Levenshtein Distance between two strings
export const levenshteinDistance = (a: string, b: string): number => {
    const matrix = Array.from({ length: a.length + 1 }, (_, i) => Array(b.length + 1).fill(i));
  
    for (let j = 1; j <= b.length; j++) {
      matrix[0][j] = j;
    }
  
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
        );
      }
    }
  
    return matrix[a.length][b.length];
  };

// Fetch all Pokémon names from the API (cached version to avoid duplicate fetches)
let cachedPokemonNames: string[] = [];

export const fetchAllPokemonNames = async (): Promise<string[]> => {
  if (cachedPokemonNames) return cachedPokemonNames; // Use cached data if available

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000`);
    const data = await response.json();
    console.log(data);
    cachedPokemonNames = data.results.map((p: any) => p.name);
    return cachedPokemonNames;
  } catch (error) {
    console.error("Error fetching all Pokémon names:", error);
    return [];
  }
};
  
// Find related forms based on substring match
export const findRelatedForms = (pokemonName: string, allPokemonNames: string[]): string[] => {
  console.log(`Finding related forms for: ${pokemonName}`);
  // Find all names that start with the base name or contain the base name with a "-"
  const baseName = pokemonName.split("-")[0];  // Extracts "medicham" from "medicham-mega"
  return allPokemonNames.filter((poke) => 
      poke.startsWith(baseName) || poke.includes(`${baseName}-`)
  );
  //const relatedForms = allPokemonNames.filter(name => name !== pokemonName && name.includes(pokemonName));
  //console.log("Related Forms Found:", relatedForms);
  //console.log(relatedForms.length);
  //return relatedForms;
};

// Find the closest matches to a given input
export const findClosestMatches = (input: string, allNames: string[], maxResults: number = 5): string[] => {
  const relatedForms = allNames.filter(name => name.includes(input.toLowerCase()));

  if (relatedForms.length > 0) {
    return relatedForms.slice(0, maxResults); // Return if related forms exist
  }
  
  return allNames
    .map(name => ({ name, distance: levenshteinDistance(input, name) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, maxResults)
    .map(entry => entry.name);
};
