import { styles } from "./styles";
import { View } from "react-native";
import { ListTasks } from "../../components/ListTasks";
import { useState } from "react";
import { Task } from "../../interfaces/Task";
import AddTask from "../../components/AddTask";
import Header from "../../components/Header";

export const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <View style={styles.container}>
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <ListTasks tasks={tasks} setTasks={setTasks} />
    </View>
  );
};
