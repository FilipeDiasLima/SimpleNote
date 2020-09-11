import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },

  linearGradient: {
    flex: 1,
    paddingTop: 36,
  },

  noteList: {
    paddingHorizontal: 37,
  },

  titlePage: {
    fontFamily: "Overlock_700Bold",
    color: "#061B50",
    lineHeight: 37,
    fontSize: 30,
    marginTop: 36,
  },

  itens: {
    marginVertical: 58,
  },

  bottomBar: {
    backgroundColor: "#F1BDE0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 67,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  addButton: {
    padding: 19,
    marginLeft: 5,
  },

  searchInput: {
    width: 263,
    height: 47,
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    opacity: 0.8,
    color: "#142349",
    fontFamily: "Overlock_400Regular",
    fontSize: 18,
    padding: 13,
  },

  searchButton: {
    padding: 19,
    marginRight: 5,
  },
});

export default styles;
