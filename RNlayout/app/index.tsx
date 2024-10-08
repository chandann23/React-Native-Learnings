import { StyleSheet, Text, View } from "react-native";
import Box from "../components/box";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <Box style={{ backgroundColor: "red", alignSelf: "flex-start" }}>Box1</Box>
      <Box style={{ backgroundColor: "blue", alignSelf: "flex-end" }}>Box2</Box>
      <Box style={{ backgroundColor: "brown", alignSelf: "auto" }}>Box3</Box>
      */}
      <Box style={{ backgroundColor: "red", }}>Box1</Box>
      <Box style={{ backgroundColor: "blue", }}>Box2</Box>
      <Box style={{ backgroundColor: "brown", flexShrink: 1 }}>Box3</Box>
      <Box style={{ backgroundColor: "orange", flexShrink: 1 }}>Box4</Box>

      <Box style={{ backgroundColor: "orange", flexShrink: 1 }}>Box5</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderColor: "black",
    borderWidth: 6,
    flexDirection: "row",
    width: 300,
    justifyContent: "space-between",
    alignItems: "center",
    height: 300, // Add a fixed height to make alignment visible
    //flexWrap: "wrap",
  }
});
