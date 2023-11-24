import { StyleSheet } from "react-native";
import { colors, fonts } from "../../tokens";

export const styles = StyleSheet.create({ 
  input: {
    flex: 1,
    width: 271,
    backgroundColor: `${colors.base.gray500}`,
    color: `${colors.base.gray100}`,
    borderWidth: 1,
    borderColor: `${colors.base.gray700}`,
    borderRadius: 6,
    padding: 16,
    fontSize: Number(`${fonts.fontSizes.lg}`),
    fontFamily: `${fonts.fontFamilies.regular}`,
  },

  inputFocused: {
    borderColor: `${colors.brand.purple_dark}`,
  },
});
