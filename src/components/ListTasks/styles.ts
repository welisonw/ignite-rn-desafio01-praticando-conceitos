import { StyleSheet } from "react-native";
import { colors, fonts } from "../../tokens";

export const styles = StyleSheet.create({
  taksInformations: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
    marginBottom: 24,
  },

  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  counter: {
    alignItems:  "center",
    justifyContent: "center",
    width: 24,
    height: 19,
    backgroundColor: `${colors.base.gray400}`,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  
  counterText: {
    color: `${colors.base.gray200}`,
    fontFamily: `${fonts.fontFamilies.bold}`,
    fontSize: Number(`${fonts.fontSizes.sm}`)
  },

  created: {
    color: `${colors.brand.blue}`,
    fontFamily: `${fonts.fontFamilies.bold}`,
    fontSize: Number(`${fonts.fontSizes.md}`),
  },

  done: {
    color: `${colors.brand.purple}`,
    fontFamily: `${fonts.fontFamilies.bold}`,
    fontSize: Number(`${fonts.fontSizes.md}`),
  },

  listEmpty: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
    paddingTop: 48,
    borderTopWidth: 1,
    borderColor: `${colors.base.gray400}`,
  },
  
  listEmptyTextTitle: {
    fontFamily: `${fonts.fontFamilies.bold}`,
    fontSize: Number(`${fonts.fontSizes.md}`),
    color: `${colors.base.gray300}`,
    marginTop: 16,
    lineHeight: 25, 
  },

  listEmptyTextSubtitle: {
    fontFamily: `${fonts.fontFamilies.regular}`,
    fontSize: Number(`${fonts.fontSizes.md}`),
    color: `${colors.base.gray300}`,
  },
});
