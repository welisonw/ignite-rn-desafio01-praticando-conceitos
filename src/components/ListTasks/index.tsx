import { Alert, FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import IconClipboard from "../../../assets/icon-clipboard.svg";
import { TaskItem } from "../TaskItem";
import { Task } from "../../interfaces/Task";
import { Dispatch, SetStateAction } from "react";

interface ListTasksProps {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

export const ListTasks = ({ tasks, setTasks }: ListTasksProps) => {
  const totalTasksCreated = tasks.length;
  const totalTasksCompleted = tasks.filter(({ isCompleted }) => isCompleted).length;

  function handleTaskDone(id: string) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  function handleTaskDeleted(id: string) {
    Alert.alert("Remover", "Tem certeza que deseja remover a tarefa?", [
      {
        text: "Sim",
        onPress: () =>
          setTasks((tasks) => tasks.filter((task) => task.id !== id)),
      },

      { text: "Cancelar", style: "cancel" },
    ]);
  }

  return (
    <View>
      <View style={styles.taksInformations}>
        <View style={styles.info}>
          <Text style={styles.created}>Criadas</Text>
          <View style={styles.counter}>
            <Text style={styles.counterText}>{totalTasksCreated}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.done}>Concluídas</Text>
          <View style={styles.counter}>
            <Text style={styles.counterText}>{totalTasksCompleted}</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.listEmpty}>
            <IconClipboard />
            <Text style={styles.listEmptyTextTitle}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyTextSubtitle}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <TaskItem
            id={item.id}
            text={item.text}
            isCompleted={item.isCompleted}
            onTaskDone={() => handleTaskDone(item.id)}
            onTaskDelete={() => handleTaskDeleted(item.id)}
          />
        )}
      />
    </View>
  );
};
