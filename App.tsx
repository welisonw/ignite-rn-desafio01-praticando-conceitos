import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import AddTask from "./src/components/AddTask";
import { ListTasks } from "./src/components/ListTasks";
import { useState } from "react";
import { Task } from "./src/interfaces/Task";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" backgroundColor="transparent" translucent />
      <Header />
      <AddTask
        tasks={tasks}
        setTasks={setTasks}
      />
      <ListTasks tasks={tasks} setTasks={setTasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#1A1A1A",
  },
});
