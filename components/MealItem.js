import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DefaultText from "./DefaultText";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealTitle }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.imageTitleContainer}>
                <Text style={styles.imageTitle} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <DefaultText>{props.duration}m</DefaultText>
            <DefaultText>{props.complexity.toUppercase()}</DefaultText>
            <DefaultText>{props.affordability.toUppercase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10
  },
  mealRow: {
    flexDirection: "row",
  },
  mealTitle: {
    width: "85%",
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
height: '15%',
    alignItems: 'center'
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  imageTitleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  imageTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
});
export default MealItem;
