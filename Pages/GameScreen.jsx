import { useEffect, useState, useRef } from "react"; // Added useRef
import { View, Text, StyleSheet, Alert } from "react-native";
import Card from "../Components/Card";
import Title from "../Components/Title";
import Buttons from "../Components/Buttons";

// function to generate number and check if the random numbers of input number:
function generateNumber(min, max, exclude) {
  const randoms = Math.floor(Math.random() * (max - min)) + min;
  if (randoms === exclude) {
    return generateNumber(min, max, exclude);
  } else {
    return randoms;
  }
}

const GameScreen = ({ numberValue, gameOverScreen }) => {
  // 1. Initial guess state
  const [usenumber, setUseNumber] = useState(() =>
    generateNumber(1, 100, numberValue),
  );

  // 2. Use Refs for boundaries so they persist across re-renders
  const minBoundary = useRef(1);
  const maxBoundary = useRef(100);

  // 3. CORRECT EFFECT PLACEMENT: Check for game over whenever usenumber changes
  useEffect(() => {
    if (usenumber === numberValue) {
      gameOverScreen();
    }
  }, [usenumber, numberValue, gameOverScreen]);

  function buttonsEffect(options) {
    // Validation: Don't let the computer lie!
    if (
      (options === "lower" && usenumber < numberValue) ||
      (options === "higher" && usenumber > numberValue)
    ) {
      Alert.alert("NOTICE!", "You should know that this is very wrong ...", [
        { text: "Cancel", style: "cancel" },
      ]);
      return;
    }

    // Update boundaries based on the current guess
    if (options === "lower") {
      maxBoundary.current = usenumber;
    } else {
      minBoundary.current = usenumber + 1;
    }

    // Generate new number within the NEW boundaries
    const nextNumber = generateNumber(
      minBoundary.current,
      maxBoundary.current,
      usenumber,
    );
    setUseNumber(nextNumber);
  }

  return (
    <View style={styles.GameScreen}>
      <Title>OPPONENT GUESSED</Title>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{usenumber}</Text>
      </View>
      <Card>
        <Text style={{ color: "white", marginBottom: 10 }}>
          Higher or Lower?
        </Text>
        <View style={styles.buttonContainer}>
          <Buttons onPress={() => buttonsEffect("lower")}>Minus</Buttons>
          <Buttons onPress={() => buttonsEffect("higher")}>Plus</Buttons>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  GameScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  numberContainer: {
    borderWidth: 2,
    borderColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  numberText: {
    fontSize: 36,
    color: "white",
    fontWeight: "bold",
  },
});
