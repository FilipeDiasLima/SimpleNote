import { StyleSheet } from "react-native";

const noteStyles = StyleSheet.create({
  contentNote: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 29,
    paddingVertical: 17,

    shadowColor: "#fff",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    marginBottom: 36,
  },

  titleNote: {
    fontFamily: "Overlock_700Bold",
    fontSize: 24,
    color: "#061B50",
    lineHeight: 29,
  },

  textNote: {
    fontFamily: "Overlock_400Regular",
    fontSize: 16,
    color: "#142349",
    lineHeight: 20,
    marginVertical: 14,
    maxWidth: 292,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  hour: {
    fontFamily: "Overlock_400Regular",
    fontSize: 16,
    color: "#FF84D6",
    lineHeight: 20,
  },

  date: {
    fontFamily: "Overlock_400Regular",
    fontSize: 16,
    color: "#FF84D6",
    lineHeight: 20,
  },

  noteButton: {
    height: 150,
    width: "48%",
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between",
  },
});

export default noteStyles;
