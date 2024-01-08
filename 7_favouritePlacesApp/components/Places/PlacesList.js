import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";

export default function PlacesList({ places }) {
  if (!places || places.length === 0){
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No Places added yet - start adding some!</Text>
      </View>
    )
  }
  return (
    <View>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <PlaceItem place={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fallbackContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText:{
    fontSize: 16
  }
})