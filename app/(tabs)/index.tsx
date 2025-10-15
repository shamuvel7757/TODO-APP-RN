import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMore } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Shamuvel Jadhav.</Text>
      <Text>Hi</Text>
      <TouchableOpacity onPress={toggleDarkMore}>
        <Text>toggle the mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    gap: 10,
  },
  content: {
    fontSize: 25,
  },
});
