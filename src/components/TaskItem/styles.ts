import { StyleSheet } from "react-native";

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
    borderColor: "#333333",
  },

  containerTaskDone: {
    borderColor: "#262626",
  },
  
  textCreated: {
    flex: 1,
    color: "#F2F2F2",
    fontSize: 14,
  },

  textDone: {
    flex: 1,
    color: "#808080",
    fontSize: 14,
    textDecorationLine: "line-through",
  },

  buttonDelete: {
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
  },
});
