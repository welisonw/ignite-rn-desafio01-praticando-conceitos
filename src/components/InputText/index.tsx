import { TextInput, View } from "react-native";
import { styles } from "./styles";
import { RefObject } from "react";

interface TextInputProps {
  inputRef: RefObject<TextInput>;
  value: string;
  onTextChange: (text: string) => void;
}

export const InputText = ({
  inputRef,
  value,
  onTextChange,
}: TextInputProps) => {
  return (
    <View>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        style={[
          styles.input,
          inputRef.current?.isFocused() ? styles.inputFocused : null,
        ]}
        ref={inputRef}
        value={value}
        onChangeText={(text) => onTextChange(text)}
      />
    </View>
  );
};
