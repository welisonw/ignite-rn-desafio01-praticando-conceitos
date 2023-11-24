import { StyleSheet } from "react-native";

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
    backgroundColor: "#333333",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  
  counterText: {
    color: "#D9D9D9",
    fontWeight: "700",
  },

  created: {
    color: "#4EA8DE",
    fontWeight: "700",
    fontSize: 14,
  },

  done: {
    color: "#8284FA",
    fontWeight: "700",
    fontSize: 14,
  },

  listEmpty: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
    paddingTop: 48,
    borderTopWidth: 1,
    borderColor: "#333333",
  },
  
  listEmptyTextTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#808080",
    marginTop: 16,
    lineHeight: 25, 
  },

  listEmptyTextSubtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#808080",
  },
});
