import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  BackHandler
} from "react-native";
import React, { useContext } from "react";
import { useLayoutEffect, useEffect } from "react";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

export default function MealDetailScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavourite = favoriteMealsCtx.ids.includes(mealId);

  const changeFavouriteStatusHandler = () => {
    if (mealIsFavourite){
      favoriteMealsCtx.removeFavorite(mealId);
    }
    else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  };

  // added to configure device back button using BackHandler
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.navigate('Drawer');
        return true;
      }
    );
    return () => backHandler.remove();
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavouriteStatusHandler}
            icon={mealIsFavourite ? 'star' : 'star-outline'}
            color="#6a6a98"
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
