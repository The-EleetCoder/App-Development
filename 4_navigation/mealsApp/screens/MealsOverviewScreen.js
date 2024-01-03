import { View, Text, FlatList, StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import React, { useLayoutEffect } from "react";
import MealItem from "../components/MealsList/MealItem";
import MealList from "../components/MealsList/MealList";

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  // to dynamically display the title
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  });
  
  return <MealList items={displayedMeals}/>
  
}


