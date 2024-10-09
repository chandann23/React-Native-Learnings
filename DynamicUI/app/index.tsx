import CustomButton from "@/components/CustomButton";
import { SafeAreaView, Text, StyleSheet, View, Dimensions, useWindowDimensions, Platform } from "react-native";


export default function Index() {


  const windowHeight = useWindowDimensions().height;
  const windowWidth = useWindowDimensions().width;

  return (
    <SafeAreaView>
      <View style={[styles.container, { width: windowWidth > 500 ? "70%" : "90%", height: windowHeight > 600 ? "70%" : "90%" }]}>
        <View style={styles.box}>

          <Text style={{ fontSize: windowWidth > 500 ? 40 : 24 }}>Hello World</Text>
          <CustomButton title="Press Me" onPress={() => alert('Pressed!')} />

        </View>
      </View>
    </SafeAreaView>


  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },

  safeArea: {
    flex: 1,
    backgroundColor: "plum",
  },


  box: {
    //   width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 600 ? "70%" : "90%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    //fontSize: windowWidth > 500 ? 40 : 24,
    ...Platform.select({
      ios: {
        fontSize: 24,
        color: "white",
      },
      android: {
        fontSize: 40,
        color: "red"
      },
    }),


    fontWeight: "bold",
    textAlign: "center",

  },
})










{/*const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
  });


  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions({ window })

    })
    return () => subscription?.remove()

  })

  const { window } = dimensions;
  const windowHeight = window.height;
  const windowWidth = window.width;
  return (
    <View style={[styles.container, { width: windowWidth > 500 ? "70%" : "90%", height: windowHeight > 600 ? "70%" : "90%" }]}>
      <View style={styles.box}>

        <Text style={{ fontSize: windowWidth > 500 ? 40 : 24 }}>Hello World</Text>

      </View>
    </View>
  );
}
*/}
//const windowHeight = Dimensions.get("window").height;
//const windowWidth = Dimensions.get("window").width;


