import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#592e83",
    padding: 20,
  },
  addGoalContainer: {
    backgroundColor: "#7b2cbf",
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
  cancelButton: {
    color: "#fdc500",
  },
  addGoalButton: {
    color: "#fdc500",
  },
  goalInput: {
    backgroundColor: "#e4afff",
    width: "100%",
    color: "#10002b",
    fontSize: 16,
    borderColor: "#10002b",
    borderWidth: 1,
    paddingLeft: 10,
    marginRight: 10,
  },
  goalsContainer: { flex: 5, marginTop: 20 },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  goalItem: {
    marginVertical: 10,
    backgroundColor: "#6C22A6",
    padding: 10,
    borderRadius: 5,
  },
  goalText: {
    color: "white",
    fontSize: 20,
  },
  goalImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default styles;
