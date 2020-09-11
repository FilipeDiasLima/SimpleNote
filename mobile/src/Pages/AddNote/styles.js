import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },

  linearGradient: {
    flex: 1,
  },

  topInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 37,
    paddingTop: 66,
  },

  titleNoteInfo: {
    fontFamily: "Overlock_700Bold",
    color: "#061B50",
    lineHeight: 37,
    fontSize: 30,
    left: 75,
  },

  noteItem: {
    marginVertical: 58,
    paddingHorizontal: 37,
  },

  buttons: {
    marginTop: 20,
    maxWidth: "40%",
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  checkIcon: {
    padding: 20,
    marginRight: 7,
  },

  line: {
    height: "100%",
  },

  closeIcon: {
    padding: 20,
    marginLeft: 7,
  },
});

export default styles;
