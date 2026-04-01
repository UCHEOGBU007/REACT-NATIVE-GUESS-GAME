import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import Card from "../Components/Card";

const GameOver = ({ freshgame }) => {
  return (
    <Card>
      {/* <View style={styles.container}> */}
      <Image style={styles.image} source={require("../assets/Gameover.jpg")} />
      <Text style={styles.text}>
        The game is over , you have to start a new game !!!
      </Text>
      <Button
        style={styles.button}
        title="Start A New Game"
        onPress={freshgame}
      />
      {/* </View> */}
    </Card>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
    textAlign: "center",
    color: "red",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  button: {
    marginTop: 20,
    borderRadius: 20,
  },
});
