import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.card_Container}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card_Container: {
    backgroundColor: "#391a1a78",
    width: 300,
    margin: 50,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
