import { TextInput, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export const InputText = () => {
  const [isFocused, setIsFocused] = useState(false);

  console.log(isFocused)

  return (
    <View>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        style={[
          styles.input,
          isFocused ? styles.inputFocused : null,
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};
