import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalInput: {
    borderColor: "black",
    borderWidth: 1,
    width: "70%",
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
