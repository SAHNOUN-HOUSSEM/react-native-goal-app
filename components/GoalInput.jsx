import { useState } from "react";
import { Image, Modal, TextInput, View } from "react-native";
import styles from "./styles";
import CustomButton from "./UI/CustomButton";

const GoalInput = ({
  onAddGoalButtonPress,
  modalIsVisible,
  onCancelAddGoal,
}) => {
  const [goal, setGoal] = useState("");

  const handleGoalInputChange = (e) => {
    setGoal(e.nativeEvent.text);
  };

  const handleAddGoalButtonPress = () => {
    onAddGoalButtonPress(goal);
    setGoal("");
  };

  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.addGoalContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.goalImage}
        />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your goal"
            style={styles.goalInput}
            value={goal}
            onChange={handleGoalInputChange}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={handleAddGoalButtonPress}
            style={styles.buttons}
            text="Add Goal"
            color="#fdc500"
          />
          <CustomButton
            onPress={onCancelAddGoal}
            style={styles.buttons}
            text="Cancel"
            color="#d1105a"
          />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
