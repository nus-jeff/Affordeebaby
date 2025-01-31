// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import ShoppingSearchList from "./ShoppingSearchList";
import products from "../consts/products";

const ShoppingSearchBar = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
}) => {
  return (
    <View>
      <View style={styles.container}>
        <View
          style={
            clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
          }
        >
          {/* search Icon */}
          <Feather
            name="search"
            size={20}
            color="black"
            style={{ marginLeft: 1 }}
          />
          {/* Input field */}
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={searchPhrase}
            onChangeText={setSearchPhrase}
            onFocus={() => {
              setClicked(true);
            }}
          />
          {/* cross Icon, depending on whether the search bar is clicked or not */}
          {clicked && (
            <Entypo
              name="cross"
              size={20}
              color="black"
              style={{ padding: 1 }}
              onPress={() => {
                setSearchPhrase("");
              }}
            />
          )}
        </View>
        {/* cancel button, depending on whether the search bar is clicked or not */}
        {clicked && (
          <View>
            <Button
              title="Cancel"
              onPress={() => {
                Keyboard.dismiss();
                setClicked(false);
              }}
            ></Button>
          </View>
        )}
      </View>
      <View>
        {clicked && (
          <View>
            <ShoppingSearchList
              searchPhrase={searchPhrase}
              data={products}
              setClicked={setClicked}
            />
          </View>
        )}
      </View>
    </View>
  );
};
export default ShoppingSearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});
