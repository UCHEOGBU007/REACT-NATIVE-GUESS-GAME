import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import Buttons from "../Components/Buttons";
import Card from "../Components/Card";
import Title from "../Components/Title";

function StartGame({ startGame }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  // Function moving the values to the enterednumber state
  function onChange(entered) {
    setEnteredNumber(entered);
  }

  // for resetting the values
  function resetting() {
    setEnteredNumber("");
  }

  // function for confirm button

  function confirmButton() {
    const interger = parseInt(enteredNumber);

    if (isNaN(interger) || enteredNumber <= 0 || enteredNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "You should choose a number between 1 - 99 range.",
        [{ text: "Okay", style: "destructive", onPress: resetting }],
      );
      return;
    }
    startGame(interger);
  }

  return (
    // The StartGame game UI Container
    <View>
      {/* // using the card component to wrap my card styling */}

      <Card>
        <Title>Enter a Number</Title>
        {/* Wrapping my title with Title components for global usage */}
        {/* input text for choosing figures */}
        <TextInput
          keyboardType="number-pad"
          maxLength={2}
          style={styles.TextInput}
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={onChange}
        />
        {/* Button prop container */}
        <View
          style={{
            flexDirection: "row",
            justifyItem: "space-between",
            padding: "20",
            margin: "15",
            gap: "20",
          }}
        >
          <Buttons onPress={resetting}>Reset</Buttons>
          <Buttons onPress={confirmButton}>Confirm</Buttons>
        </View>
      </Card>
    </View>
  );
}

export default StartGame;

//Component Styles:

const styles = StyleSheet.create({
  TextInput: {
    textAlign: "center",
    justifyContent: "center",
    width: 40,
    borderBottomWidth: 2,
    borderBottomColor: "#e8d9d974",
    color: "#e8d9d974",
    fontWeight: "heavy",
    fontSize: 20,
    elevation: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.72,
    shadowRadius: 2,
  },
});
