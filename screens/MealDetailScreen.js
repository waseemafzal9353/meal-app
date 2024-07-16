import React, { useCallback, useEffect } from "react";
import { Button, Image, ScrollView, StyleSheet, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";

const listItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const availableMeals = useSelector((state) => state.meals.meals);
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
  const currentMealIsFav = useSelector(state => state.favoriteMeals.some(meal => meal.id === mealId))
  const dispatch = useDispatch();

  const toggleFavHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavHandler });
  }, [toggleFavHandler]);

  useEffect(()=>{
    props.navigation.setParams({isFav: currentMealIsFav})
  }, [currentMealIsFav])
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUppercase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUppercase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ing) => (
        <listItem key={ing}>{ing}</listItem>
      ))}
      <Text style={styles.title}>steps</Text>
      {selectedMeal.steps.map((step) => (
        <listItem key={step}>{step}</listItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // const mealId = navigationData.navigation.getParam("mealId");
  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFav = navigationData.navigation.getParam('toggleFav')
  const isFav = navigationData.navigation.getParam('isFav')
  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName={isFav ? 'ios-star': 'ios-star-outline'} onPress={toggleFav} />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
