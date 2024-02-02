import { Button, View } from "react-native";

const CustomButton = ({ text, style, onPress }) => {
  return (
    <View style={style}>
      <Button title={text} onPress={onPress} />
    </View>
  );
};

export default CustomButton;
