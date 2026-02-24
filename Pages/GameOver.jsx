import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const GameOver = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/splash-icon.png")}
      />

      <View>
        <Text>The game is over !!!</Text>
      </View>
      <Button title="Start New Game" />
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
    padding: 30,
  },

  image: {
    height: 200,
    width: 200,
  },
});
