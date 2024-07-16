import React from 'react'
import MealList from '../components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { useSelector } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import DefaultText from '../components/DefaultText'

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals)
  if(favMeals.length === 0 || !favMeals) {
    return (<View style={StyleSheet.contentContainer}>
      <DefaultText>Now favorite meals yet! start adding some.</DefaultText>
    </View>)
  }
  return <MealList listData={favMeals} navigation={props.navigation}/>
}


FavoritesScreen.navigationOptions = navData => {
  return { headerTitle: 'Favorite Meals',
  headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title='Menu' iconName='io-menu' onPress={() => {
      navData.navigation.toggleDrawer()
    }}/>
  </HeaderButtons>}
 }

 const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  }
 })
export default FavoritesScreen