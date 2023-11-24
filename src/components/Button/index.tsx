import { ReactNode } from "react";
import { TouchableHighlight, View } from "react-native";
import { styles } from "./styles";

interface ButtonProps {
  onPress: () => void;
  children: ReactNode;
}

export const Button = ({ onPress, children }: ButtonProps) => {
  return (
    <TouchableHighlight
      activeOpacity={0.9}
      onPress={onPress}
      underlayColor="#4EA8DE"
      style={styles.button}
    >
      <View>{children}</View>
    </TouchableHighlight>
  );
};
