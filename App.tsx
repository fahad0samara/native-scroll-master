import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  View,
  Image,
  Text,
} from "react-native";
import AnimatedBoxesScrollView from "./AnimatedBoxesScrollView";






const { width } = Dimensions.get("screen");

const boxes1 = [
  {
    image:'https://images.unsplash.com/photo-1560632835-73eac2c81f6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGhvdXNlcyUyMG9mJTIwcGFybGlhbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    id: 3,
  },
  {
    image: 'https://images.unsplash.com/photo-1557835380-c6f389383cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGhvdXNlcyUyMG9mJTIwcGFybGlhbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    id: 4,
  },
  {
    image:'https://images.unsplash.com/photo-1549483249-f0b359d1e289?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    id: 5,
  },
  {
    image: 'https://images.unsplash.com/photo-1509983491249-f06f7a9d066f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    id: 6,
  },
  {
    image: 'https://images.unsplash.com/photo-1598710877888-edaa20acfb92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    id: 7,
  },
  {
    image: 'https://images.unsplash.com/photo-1605644590903-6591336f609a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    id: 8,
  },    


];
const boxes2 = [
  {
    image:'https://images.unsplash.com/photo-1560632835-73eac2c81f6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGhvdXNlcyUyMG9mJTIwcGFybGlhbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    id: 3,
  },
  {
    image: 'https://images.unsplash.com/photo-1557835380-c6f389383cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGhvdXNlcyUyMG9mJTIwcGFybGlhbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    id: 4,
  },
  {
    image:'https://images.unsplash.com/photo-1549483249-f0b359d1e289?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    id: 5,
  },
  {
    image: 'https://images.unsplash.com/photo-1509983491249-f06f7a9d066f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    id: 6,
  },
  {
    image: 'https://images.unsplash.com/photo-1598710877888-edaa20acfb92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    id: 7,
  },
  {
    image: 'https://images.unsplash.com/photo-1605644590903-6591336f609a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    id: 8,
  },
];
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" animated={true} />
      <View style={styles.header}>
        <Text style={styles.text}>Photo</Text>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://images.unsplash.com/photo-1589156280759-27698a70f29e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
          }}
        />
      </View>
      <AnimatedBoxesScrollView horizontal={true} boxes={boxes1} />
      <AnimatedBoxesScrollView horizontal={false} boxes={boxes2} />
      <View style={styles.tabBar}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171A23",
    paddingTop: 16
  },
  header: {
    height: 50,
    width,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 38,
  },
  image: {
    height: 38,
    width: 38,
    borderRadius: 50,
  },
  text: {
    fontSize: 24,
    fontWeight: "900",
    color: "white",
  },
  tabBar: {
    height: 121,
    width,
    flexDirection: "row",
    paddingHorizontal: 16,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
  },
});
