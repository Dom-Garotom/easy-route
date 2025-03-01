import colors from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    yourRoute_container: {
      width: "100%",
      padding: 12,
      gap: 10,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.gray,
    },
  
    yourRoute_title: {
      color: colors.title,
      fontWeight: '600',
      fontSize: 16,
    },
    yourRoute_text: {
      color: colors.text,
      fontWeight: '500',
      fontSize: 14,
    },

  })