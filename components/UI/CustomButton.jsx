import { Button, View } from "react-native";

const CustomButton = ({ text, style, onPress, color }) => {
  return (
    <View style={style}>
      <Button title={text} onPress={onPress} color={color} />
    </View>
  );
};

export default CustomButton;
