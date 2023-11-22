import { View } from "react-native";
import { InputText } from "../InputText";
import { Button } from "../Button";
import { styles } from "./styles";
import { PlusCircle } from "lucide-react-native";

export default function AddTask() {
  return (
    <View style={styles.container}>
      <InputText />
      <Button onPress={() => console.log("clicou")}>
        <PlusCircle color="#FFF" size={16} />
      </Button>
    </View>
  );
}
