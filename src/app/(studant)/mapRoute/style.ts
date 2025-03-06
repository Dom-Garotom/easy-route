import colors from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      flex: 1,
    },
    button: {
      position: "absolute",
      top: 10,
      left: 10,
      justifyContent: 'center',
      alignItems: 'center',
      height: 45,
      width: 45,
      backgroundColor: colors.green,
      borderRadius: 10,
    },
  });
  