import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import PokemonData from "../data.json"
export default function Index() {


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      {PokemonData.map((pokemon, index) => {
        return (
          <View key={index} style={styles.cardContainer}>
            <Text style={styles.text}>{pokemon.name}</Text>
            <Text style={styles.text}>{pokemon.type}</Text>
          </View>
        )
      })}
      </ScrollView>
    </SafeAreaView>



  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  cardContainer: {
    paddingHorizontal: 12,
    marginVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 16,
    backgroundColor: "white",
    shadowColor: "black",
    paddingVertical: 4,
    gap: 8,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
   text:{
      fontSize:18,
    fontWeight:"bold"





  }

})

