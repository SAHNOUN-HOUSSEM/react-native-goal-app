import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState("");

  const handleGoalInputChange = (e) => {
    setGoal(e.nativeEvent.text);
  };

  const handleAddGoalButtonPress = () => {
    if (goal) {
      setGoals((prevGoals) => [
        ...prevGoals,
        { text: goal, id: Math.random().toString() },
      ]);
      setGoal("");
    }
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal"
          style={styles.goalInput}
          value={goal}
          onChange={handleGoalInputChange}
        />
        <Button title="Add Goal" onPress={handleAddGoalButtonPress} />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.header}>Goals</Text>
        {goals.length === 0 ? (
          <Text>No goals yet</Text>
        ) : (
          <FlatList
            data={goals}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View style={styles.goalItem}>
                  <Text style={styles.goalText}>{item.text}</Text>
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalInput: {
    borderColor: "black",
    borderWidth: 1,
    width: "70%",
    paddingLeft: 10,
    marginRight: 10,
  },
  goalsContainer: { flex: 5 },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  goalItem: {
    marginVertical: 10,
    fontSize: 16,

    backgroundColor: "#6C22A6",
    padding: 10,
    borderRadius: 5,
  },
  goalText: {
    color: "white",
    fontSize: 16,
  },
});
