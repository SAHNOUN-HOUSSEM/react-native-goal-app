import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import styles from "./styles";

const GoalInput = ({ onAddGoalButtonPress }) => {
  const [goal, setGoal] = useState("");

  const handleGoalInputChange = (e) => {
    setGoal(e.nativeEvent.text);
  };

  const handleAddGoalButtonPress = () => {
    onAddGoalButtonPress(goal);
    setGoal("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter your goal"
        style={styles.goalInput}
        value={goal}
        onChange={handleGoalInputChange}
      />
      <Button title="Add Goal" onPress={handleAddGoalButtonPress} />
    </View>
  );
};

export default GoalInput;
