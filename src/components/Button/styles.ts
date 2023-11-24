import { StyleSheet } from "react-native";
import { colors } from "../../tokens";

export const styles = StyleSheet.create({
  button: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: `${colors.brand.blue_dark}`,
    borderRadius: 6,
  },
});
