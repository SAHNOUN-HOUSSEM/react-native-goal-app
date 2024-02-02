import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginTop: 50,
  },
  addGoalContainer: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "70%",
  },
  buttons: {
    width: "40%",
    marginHorizontal: 5,
  },
  goalInput: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,

    paddingLeft: 10,
    marginRight: 10,
  },
  goalsContainer: { flex: 5 },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  goalItem: {
    marginVertical: 10,
    fontSize: 16,

    backgroundColor: "#6C22A6",
    padding: 10,
    borderRadius: 5,
  },
  goalText: {
    color: "white",
    fontSize: 16,
  },
});

export default styles;
