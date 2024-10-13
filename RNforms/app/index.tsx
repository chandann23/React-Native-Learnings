import { Text, View, StyleSheet, SafeAreaView, TextInput, Switch, Button, Image, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";

{/*export default function Index() {
  const [darkMode, setDarkMode] = useState(false);
  const [text, setText] = useState("");
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello World</Text>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Type something..."
          //secureTextEntry
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}

        />
        <Text>{text}</Text>
        <TextInput
          style={[styles.input, styles.inputARea]}
          multiline

        />
        <View style={styles.SwitchContainer}>
          <Text>Dark Mode </Text>
          <Switch
            value={darkMode}
            onValueChange={() => setDarkMode((previosState) => !previosState)}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={darkMode ? "#f4f3f4" : "#f4f3f4"}
          />


        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
  inputARea: {
    height: 100,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
  SwitchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});*/}

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<{ username?: string; password?: string }>({});

  const validate = () => {
    let newError: { username?: string; password?: string } = {};
    if (!username) newError.username = "Username is required";
    if (!password) newError.password = "Password is required";
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Login");
      console.log(username);
      console.log(password);
      setUsername("");
      setPassword("");
      setError({});
    } else {
      console.log("Validation failed", error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      enabled
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}>
      <Text>Login Form</Text>
      <View style={styles.form}>
        <Image source={require("../assets/images/adaptive-icon.png")} style={styles.image} />
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Username</Text>
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        {error.username ? (
          <Text style={styles.errorText}>{error.username}</Text>
        ) : null}
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Password</Text>
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {error.password ? (
          <Text style={styles.errorText}>{error.password}</Text>
        ) : null}
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20,
    width: "70%",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 50,
    alignSelf: "center",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    padding: 4,
  }

})






























