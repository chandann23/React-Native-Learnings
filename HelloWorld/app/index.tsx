import React from "react"
import { View, Text, StyleSheet } from "react-native"
export default function HomeScreen() {

  return (
    <View style={styles.container}>

      <View style={[styles.inheritance]}>
        <Text style={styles.inheritanceText} >Inheritance</Text>

      </View>
      <View style={[styles.box, styles.lightBlueBg, styles.boxShadow]}>
        <Text style={styles.title}>Light blue box</Text>

      </View>
      <View style={[styles.lightGreenBg, styles.box, styles.android]}>
        <Text style={styles.title}>Light green box</Text>

      </View>



    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "plum",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red"


  },

  inheritance: {
    backgroundColor: "black",
    color: "white",

  },
  inheritanceText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },

  box: {
    width: 200,
    height: 200,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 10,


  },

  lightBlueBg: {
    backgroundColor: "lightblue",
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,

  },
  android: {
    shadowColor: "blue",
    elevation: 10,
  },

})


