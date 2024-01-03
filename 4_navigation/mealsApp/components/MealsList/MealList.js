import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

import MealItem from './MealItem';

export default function MealList({ items}) {
    const renderMealItem = (itemData) => {
        const item = itemData.item;
        const mealItemProps = {
          id : item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          affordability: item.affordability,
          complexity: item.complexity,
          duration: item.duration,
        };
        return <MealItem {...mealItemProps} />;
      };
    
      return (
        <View style={styles.container}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });