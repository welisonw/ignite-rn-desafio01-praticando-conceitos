import { View } from "react-native";
import LogoIcon from "../../../assets/icon-logo.svg";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <LogoIcon />
    </View>
  );
}
