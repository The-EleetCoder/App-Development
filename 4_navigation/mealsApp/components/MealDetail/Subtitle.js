import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    subtitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
      },
      subtitleContainer: {
        margin: 4,
        padding: 6,
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2,
        marginHorizontal: 12
      },
})
