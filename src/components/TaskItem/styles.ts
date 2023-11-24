import { StyleSheet } from "react-native";
import { colors, fonts } from "../../tokens";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    marginHorizontal: 24,
    backgroundColor: "#262626",
    marginBottom: 8,
    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
    paddingLeft: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: `${colors.base.gray400}`,
  },

  containerTaskDone: {
    borderColor: `${colors.base.gray500}`,
  },
  
  textCreated: {
    flex: 1,
    color: `${colors.base.gray100}`,
    fontSize: Number(`${fonts.fontSizes.md}`),
  },

  textDone: {
    flex: 1,
    color: `${colors.base.gray300}`,
    fontSize: Number(`${fonts.fontSizes.md}`),
    textDecorationLine: "line-through",
  },

  buttonDelete: {
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
  },
});
