import { FlatList, Text, View } from "react-native";
import styles from "./styles";
import GoalItem from "./GoalItem";

const GoalList = ({ goals, onGoalItemDelete }) => {
  return (
    <View style={styles.goalsContainer}>
      <Text style={styles.header}>Goals</Text>
      {goals.length === 0 ? (
        <Text>No goals yet</Text>
      ) : (
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <GoalItem goal={item} onGoalItemDelete={onGoalItemDelete} />;
          }}
        />
      )}
    </View>
  );
};

export default GoalList;
