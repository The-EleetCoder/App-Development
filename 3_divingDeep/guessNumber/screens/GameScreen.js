import { Text, View, StyleSheet } from "react-native"
import Title from "../components/Title"

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

const GameScreen = ({children}) => {
  return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        {/* Guess */}
        <View>
            <Text>Higher or Lower?</Text>
            {/* + - */}
        </View>
        {/* <View>Log Rounds</View> */}
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    },
})

export default GameScreen