import React from "react";
import { Button, StyleSheet, View, Platform, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Colors from "../constants/Colors";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector(state => state.meals.filteredMeals)
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  if(displayedMeals.length === 0) {
    return (
      <View style={styles.contet}>
        <DefaultText>No meals to display, may be check your filters</DefaultText>
      </View>
    )
  }
  return <MealList listData={displayedMeals} navigation={props.navigation}/>;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  contet: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default CategoryMealScreen;
