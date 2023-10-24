import React from "react";
import { View, useWindowDimensions, StyleSheet, Text } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const FirstRoute = () => <Text>First Route</Text>;
const SecondRoute = () => <Text>Second Route</Text>;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  return (
    <TabView
      animationEnabled={false}
      lazy={false}
      swipeEnabled={false}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <TabViewExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
