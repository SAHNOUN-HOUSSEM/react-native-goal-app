import { useState } from "react";
import { View } from "react-native";
import styles from "./components/styles";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";

export default function App() {
  const [goals, setGoals] = useState([]);

  const handleAddGoalButtonPress = (goal) => {
    if (goal) {
      setGoals((prevGoals) => [
        ...prevGoals,
        { text: goal, id: Math.random().toString() },
      ]);
    }
  };

  const handleGoalItemDelete = (goalId) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoalButtonPress={handleAddGoalButtonPress} />
      <GoalList goals={goals} onGoalItemDelete={handleGoalItemDelete} />
    </View>
  );
}
