import { View, Text } from 'react-native'
import React from 'react'

export default function MealDetailScreen({route}) {
    const mealId = route.params.mealId
  return (
    <View>
      <Text>MealDetailScreen {mealId}</Text>
    </View>
  )
}