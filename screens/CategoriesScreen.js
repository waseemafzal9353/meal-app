import React from "react";
import { Button, FlatList, Platform, StyleSheet, View } from "react-native";
import CATEGORIES from "../data/dummy-data";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import CategoryGridTile from "../components/CategoryGridTile";
import { HeaderButtons } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";


const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={() => {
      props.navigation.navigate({
        routeName: "CategoryMeals",
        params: {
          categoryId: itemData.item.id,
        },
      });
    }}/>
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = navData => {
  return { headerTitle: 'Meal Categories',
  headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title='Menu' iconName='io-menu' onPress={() => {
      navData.navigation.toggleDrawer()
    }}/>
  </HeaderButtons>}
 }
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
 
});

export default CategoriesScreen;
