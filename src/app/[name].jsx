import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import exercises from "../../assets/data/exercises.json";

const exercise = () => {
  const params = useLocalSearchParams();
  const exercise = exercises.find((item) => item.name === params.name);
  const [isExpand, setExpand] = useState(false);

  if (!exercise) {
    return <Text>Exercise not found</Text>;
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: exercise.name }} />
      <View style={styles.panel}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          {exercise.muscle.toUpperCase()} | {exercise.equipment.toUpperCase()}
        </Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.instructions} numberOfLines={isExpand ? 0 : 3}>
          {exercise.instructions}
        </Text>
        <Text onPress={() => setExpand(!isExpand)} style={styles.seeMore}>
          {isExpand ? "See less" : "see more"}
        </Text>
      </View>
    </ScrollView>
  );
};

export default exercise;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  panel: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
  instructions: {
    fontSize: 16,
    lineHeight: 22,
  },
  seeMore: {
    alignSelf: "center",
    padding: 5,
    fontWeight: "600",
    color: "gray",
  },
});
