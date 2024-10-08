import { View, Text, StyleSheet } from "react-native";

type Props = {
  children?: React.ReactNode;
  style?: any;
}

export default function Box({ children, style }: Props) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white", // Change text color for better visibility on colored backgrounds
  }
});
