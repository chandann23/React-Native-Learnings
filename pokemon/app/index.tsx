import PokemonCard from "@/components/PokemonCard";
import { ScrollView, StyleSheet } from "react-native";

const POKEMON_DATA = [
  {
    name: "Charmander",
    image: "../assets/images/charmander.png",
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weakness: ["Water", "Rock"],
  },
  {
    name: "Squirtle",
    image: "../assets/images/squirtle.png",
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Tail Whip", "Water Gun"],
    weakness: ["Electric"],
  },
  {
    name: "Bulbasaur",
    image: "../assets/images/bulbasaur.png",
    type: "Grass",
    hp: 45,
    moves: ["Vine Whip", "Leaf Tornado", "Seed Bomb"],
    weakness: ["Fire"],
  },
  {
    name: "Pikachu",
    image: "../assets/images/pikachu.png",
    type: "Electric",
    hp: 35,
    moves: ["Quick", "Charge", "Thunder"],
    weakness: ["Ground"],
  },
];

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      {POKEMON_DATA.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.image}
          type={pokemon.type}
          hp={pokemon.hp}
          moves={pokemon.moves}
          weakness={pokemon.weakness}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    marginTop: 20,
    marginHorizontal: 4,
  },
});
