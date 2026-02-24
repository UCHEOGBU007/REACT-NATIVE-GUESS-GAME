import React from "react";
import { View, StyleSheet, Text } from "react-native";
const Title = ({ children }) => {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    alignItems: "center",
  },

  titleText: {
    color: "#ddb52f",
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 3,
    borderColor: "#ddb52f",
    padding: 12,
  },
});
