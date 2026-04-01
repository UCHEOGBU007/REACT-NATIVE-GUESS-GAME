import { useEffect, useState, useRef, use } from "react"; // Added useRef
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
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
  const [GuessRounds, setGuessRounds] = useState([usenumber]);
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
      Alert.alert(
        "NOTICE!",
        "You should know that this is wrong to choose the number that is not in the current range of your guess.",
        [{ text: "Cancel", style: "cancel" }],
      );
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
    setGuessRounds((prevRounds) => [nextNumber, ...prevRounds]);
  }

  return (
    <View style={styles.GameScreen}>
      <Title>You guessed : {numberValue}</Title>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}> Computer Guessed :{usenumber}</Text>
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
      <View style={{ flex: 1 }}>
        <FlatList
          data={GuessRounds}
          keyExtractor={(index) => index.toString()}
          renderItem={(itemData) => (
            <View style={styles.guessItem}>
              <Text style={styles.guessText}>Number #{itemData.index + 1}</Text>
              <Text style={styles.guessText}>{itemData.item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  GameScreen: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  numberContainer: {
    // borderWidth: 2,
    // borderColor: "#ddb52f",
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  numberText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  guessItem: {
    borderColor: "#ddb52f",
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#3b021f",
    // THE KEY LOGIC:
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4, // Shadow for Android (optional)
    shadowColor: "black", // Shadow for iOS (optional)
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  guessText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
