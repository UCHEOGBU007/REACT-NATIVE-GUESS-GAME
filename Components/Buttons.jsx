import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

const Buttons = ({ children, onPress }) => {
  // function pressedHandler() {
  //   console.log("Button pressed!!");
  // }

  return (
    <Pressable
      onPress={onPress}
      style={styles.buttonContainer}
      android_ripple={{ color: "#0e0e0e05" }}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#00000061",
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
