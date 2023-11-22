import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Header from "./src/components/Header";
import AddTask from "./src/components/AddTask";

export default function App() {
  return (
    <View>
      <StatusBar style="inverted" backgroundColor="transparent" translucent />
      <Header />
      <AddTask />
    </View>
  );
};