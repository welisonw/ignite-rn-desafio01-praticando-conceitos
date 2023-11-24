import { styles } from "./styles";
import { Check, CheckCircle2, Circle, Trash2 } from "lucide-react-native";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Task } from "../../interfaces/Task";

interface TaskItemProps extends Task {
  onTaskDone: (id: string) => void;
  onTaskDelete: (id: string) => void;
}

export const TaskItem = ({
  id,
  text,
  isCompleted,
  onTaskDone,
  onTaskDelete,
}: TaskItemProps) => {
  return (
    <View
      style={
        isCompleted
          ? [styles.container, styles.containerTaskDone]
          : styles.container
      }
    >
      <TouchableOpacity activeOpacity={0.7} onPress={() => onTaskDone(id)}>
        {isCompleted ? (
          <CheckCircle2 size={24} color="#F2F2F2" fill="#5E60CE" />
        ) : (
          <Circle size={24} color="#4EA8DE" />
        )}
      </TouchableOpacity>

      <Text style={isCompleted ? styles.textDone : styles.textCreated}>
        {text}
      </Text>

      <TouchableHighlight
        activeOpacity={0.9}
        onPress={() => onTaskDelete(id)}
        underlayColor="#333333"
        style={styles.buttonDelete}
      >
        <Trash2 color="#808080" size={16} />
      </TouchableHighlight>
    </View>
  );
};
