import { Alert, TextInput, View } from "react-native";
import { styles } from "./styles";
import { PlusCircle } from "lucide-react-native";
import { SetStateAction, useRef, useState } from "react";
import { InputText } from "../InputText";
import { Button } from "../Button";
import { Task } from "../../interfaces/Task";
import * as crypto from "expo-crypto";

interface AddTaskProps {
  tasks: Task[];
  setTasks: (value: SetStateAction<Task[]>) => void;
}

export default function AddTask({ tasks, setTasks }: AddTaskProps) {
  const [taskTextInput, setTaskTextInput] = useState("");

  const addNewTask = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: crypto.randomUUID(),
        text: taskTextInput.trim(),
        isCompleted: false,
      },
    ]);
  };

  const inputRef = useRef<TextInput>(null);

  const handlePress = () => {
    if (!taskTextInput.trim()) {
      return Alert.alert("Erro", "Digite uma tarefa.");
    }

    if (tasks.some(task => task.text === taskTextInput)) {
      return Alert.alert(
        "Tarefa existente",
        "Já existe uma tarefa na lista com esse nome."
      );
    }

    addNewTask();

    setTaskTextInput("");

    inputRef.current?.blur();
  };

  return (
    <View style={styles.container}>
      <InputText value={taskTextInput} onTextChange={setTaskTextInput} inputRef={inputRef} />

      <Button onPress={handlePress}>
        <PlusCircle color="#FFF" size={16} />
      </Button>
    </View>
  );
}
