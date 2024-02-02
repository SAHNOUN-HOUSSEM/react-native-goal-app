import { FlatList, Text, View } from "react-native";
import styles from "./styles";
import GoalItem from "./GoalItem";
import CustomButton from "./UI/CustomButton";

const GoalList = ({ goals, onGoalItemDelete, onShowGoalInputModal }) => {
  return (
    <View style={styles.goalsContainer}>
      <CustomButton
        text="Add Goal"
        onPress={onShowGoalInputModal}
        color="#5e2bff"
      />
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
