import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import exercises from "../../assets/data/exercises.json";

const exercise = () => {
  const params = useLocalSearchParams();
  const exercise = exercises.find((item) => item.name === params.name);

  if (!exercise) {
    return <Text>Exercise not found</Text>;
  }
  return (
    <View style={styles.container}>
      <Text>exercise : {exercise.name}</Text>
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        {exercise.muscle.toUpperCase()} | {exercise.equipment.toUpperCase()}
      </Text>
    </View>
  );
};

export default exercise;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
});
