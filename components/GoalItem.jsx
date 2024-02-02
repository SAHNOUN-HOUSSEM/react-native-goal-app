import { Pressable, Text, View } from "react-native";
import styles from "./styles";

const GoalItem = ({ goal, onGoalItemDelete }) => {
  const handleGoalItemDelete = () => {
    onGoalItemDelete(goal.id);
  };

  return (
    <Pressable onPress={handleGoalItemDelete}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{goal.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;
