import { styles } from "./styles";
import { Check, CheckCircle2, Circle, Trash2 } from "lucide-react-native";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Task } from "../../interfaces/Task";
import { colors } from "../../tokens";

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
          <CheckCircle2 size={24} color={colors.base.gray100} fill={colors.brand.purple_dark} />
        ) : (
          <Circle size={24} color={colors.brand.blue} />
        )}
      </TouchableOpacity>

      <Text style={isCompleted ? styles.textDone : styles.textCreated}>
        {text}
      </Text>

      <TouchableHighlight
        activeOpacity={0.9}
        onPress={() => onTaskDelete(id)}
        underlayColor={colors.base.gray400}
        style={styles.buttonDelete}
      >
        <Trash2 color={colors.base.gray300} size={16} />
      </TouchableHighlight>
    </View>
  );
};
