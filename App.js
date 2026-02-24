import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import StartGame from "./Pages/StartGame";
import Gamescreen from "./Pages/GameScreen";
import GameOver from "./Pages/GameOver";
import { useState } from "react";

export default function App() {
  const [numbers, setNumbers] = useState();
  const [gameOver, setGameover] = useState(false);

  function userNumberLogs(userNumber) {
    setNumbers(userNumber);
  }

  // function for setting gameover value to true:
  function gameOverHandler() {
    setGameover(true);
  }

  // outputting the appropriate screen conditionally
  let display = <StartGame startGame={userNumberLogs} />;

  if (numbers) {
    display = (
      <Gamescreen numberValue={numbers} gameOverScreen={gameOverHandler} />
    );
  }
  // condition for migrating to gameover screen
  if (gameOver) {
    display = <GameOver />;
  }

  //JSX APP CONTAINER
  return (
    <LinearGradient
      colors={["#5a272774", "#320606c4", "#000000a1"]}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={require("./assets/Dices.jpg")}
        resizeMode="cover"
        style={styles.backgroundImgae}
        imageStyle={styles.imagestyling}
      >
        <SafeAreaView style={styles.container}>
          {display}

          <StatusBar style="auto" />
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

//styling sheet :
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },

  backgroundImgae: {
    flex: 1,
  },

  imagestyling: {
    opacity: 0.5,
  },
});
