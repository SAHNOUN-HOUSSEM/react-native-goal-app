import { useState } from "react";
import { View } from "react-native";
import styles from "./components/styles";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleAddGoalButtonPress = (goal) => {
    if (goal) {
      setGoals((prevGoals) => [
        ...prevGoals,
        { text: goal, id: Math.random().toString() },
      ]);
      setModalIsVisible(false);
    }
  };

  const handleGoalItemDelete = (goalId) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));
  };

  const handleShowGoalInputModal = () => {
    setModalIsVisible(true);
  };

  const handleCancelAddGoal = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <GoalInput
          onAddGoalButtonPress={handleAddGoalButtonPress}
          modalIsVisible={modalIsVisible}
          onCancelAddGoal={handleCancelAddGoal}
        />
        <GoalList
          goals={goals}
          onGoalItemDelete={handleGoalItemDelete}
          onShowGoalInputModal={handleShowGoalInputModal}
        />
      </View>
    </>
  );
}
