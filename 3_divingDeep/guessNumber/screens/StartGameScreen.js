import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton.js";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm.</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer:{
    padding: 16,
    marginTop:100,
    backgroundColor: "#72063c",
    borderRadius: 8,
    marginHorizontal: 24,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default StartGameScreen;
