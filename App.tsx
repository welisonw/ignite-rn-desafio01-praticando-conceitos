import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home";
import { ActivityIndicator } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { colors } from "./src/tokens/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded)
    return (
      <ActivityIndicator
        size="large"
        color={colors.brand.purple_dark}
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    );
  return (
    <>
      <StatusBar style="inverted" backgroundColor="transparent" translucent />
      <Home />
    </>
  );
}
