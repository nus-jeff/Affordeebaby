/*import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import Select, {
  SelectConfig,
  SelectItem,
} from "@redmin_delishaj/react-native-select";
import { firestore } from "../firebase/firebase-config";
import { authentication } from "../firebase/firebase-config";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

// fetch user data on cart id's they are involved in
//fetch userID

/*[
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];*/
/*const user = authentication.currentUser;
const userUID = user.uid;

const usersRef = doc(firestore, "users", userUID);
const docSnap = await getDoc(usersRef);
const cartsList = docSnap.get("carts");
const cartsData = cartsList;

const CartsDropdown = (_props) => {
  const [dropdown, setDropdown] = useState(null);
  const [selected, setSelected] = useState([]);

  //fetch user's carts for dropdown bar

  const [carts, setCarts] = useState([]);
  const usersRef = doc(firestore, "users", userUID);

  /*useEffect(() => {
    async function fetchUserCarts() {
      const docSnap = await getDoc(usersRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      }
      try {
        const cartsList = docSnap.get("carts");
        setCarts(cartsList);
      } catch (error) {
        console.log("Error in finding profile", error);
      }
    }
    fetchUserCarts();
  });*/

//const cartsData = [...carts];

/*/(const _renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        <Image style={styles.icon} source={require("../assets/tick.png")} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Dropdown
          style={styles.dropdown}
          containerStyle={styles.shadow}
          data={cartsData}
          search
          searchPlaceholder="Search"
          labelField="label"
          valueField="value"
          label="Dropdown"
          placeholder="Add to cart:"
          value={dropdown}
          onChange={(item) => {
            setDropdown(item.value);
            console.log("selected", item);
          }}
          renderLeftIcon={() => (
            <Image
              style={styles.icon}
              source={require("./assets/account.png")}
            />
          )}
          renderItem={(item) => _renderItem(item)}
          textError="Error"
        />
      </View>
    </View>
  );
  /*
  const [selectedItem, setSelectedItem] = useState<any>();

  const config: SelectConfig = {
    fontSize: 18,
    backgroundColor: "#404040",
    textColor: "white",
    selectedBackgroundColor: "white",
    selectedTextColor: "black",
    selectedFontWeight: "bold",
  };

  return (
    <Select
      data={data}
      onSelect={(value) => setSelectedItem(value)}
      value={selectedItem}
      config={config}
    />
  );*/
/*};

export default CartsDropdown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 40,
  },
  dropdown: {
    backgroundColor: "white",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    marginTop: 20,
  },
  icon: {
    marginRight: 5,
    width: 18,
    height: 18,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

/*
      <MultiSelect
        style={styles.dropdown}
        data={data}
        labelField="label"
        valueField="value"
        label="Multi Select"
        placeholder="Select item"
        search
        searchPlaceholder="Search"
        value={selected}
        onChange={(item) => {
          setSelected(item);
          console.log("selected", item);
        }}
        renderItem={(item) => _renderItem(item)}
      />*/
