import { StatusBar, Image, ScrollView, StyleSheet, Text, Platform, View, ImageBackground, Button, Pressable, Modal, ActivityIndicator, Alert } from 'react-native';
import React, { useState } from 'react';

const image = require('../assets/images/adaptive-icon.png');

export default function HomeScreen() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (

    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <ScrollView>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>Core Components</Text>

        <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
          <Button title="Modal Screen" onPress={() => setIsModalVisible(true)} />
          <Modal animationType='slide' presentationStyle='pageSheet' visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)} >
            <View style={{ backgroundColor: "black", flex: 1, padding: 60, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
              <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>Modal Screen</Text>
              <Pressable onPress={() => setIsModalVisible(false)}>
                <Image source={image} style={{ width: 200, height: 200, alignSelf: 'center' }} />
              </Pressable>
              <Button title="Home Screen" onPress={() => setIsModalVisible(false)} />
            </View>
          </Modal>
        </View>




        <View style={{ backgroundColor: "plum", flex: 1, padding: 60, gap: 20 }}>
          <Button title="Status Bar" onPress={() => setStatus(false)} />

          <Button title="hide Status Bar" onPress={() => setStatus(true)} />
          <StatusBar backgroundColor="green" barStyle="light-content" hidden={status} />
        </View>






        <ActivityIndicator size="large" color="#00ff00" animating={isLoading} />
        <View style={{ padding: 20, gap: 20 }}>
          <Button
            title="Show loading"
            onPress={() => setIsLoading(true)} />
          <Button
            title="Hide loading"
            onPress={() => setIsLoading(false)} />
          <Button
            title="ALert"
            onPress={() => { Alert.alert("Alert", "invalid data") }}
          />
          <Button
            title="Alert 2"
            onPress={() => {
              Alert.alert("Alert", "invalid data", [

                {
                  text: "OK",
                  onPress: () => console.log("OK Pressed"),
                  style: "cancel",
                },
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "default",
                },



              ]);
            }} />


        </View>
      </ScrollView>
    </View>



  );
}
