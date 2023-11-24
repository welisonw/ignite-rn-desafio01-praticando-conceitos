import { TextInput, View } from "react-native";
import { styles } from "./styles";
import { RefObject } from "react";
import { colors } from "../../tokens";

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
        placeholderTextColor={colors.base.gray300}
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
