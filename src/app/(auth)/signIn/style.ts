import colors from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    page: {
      flex: 1,
      padding: 20,
      gap: 35,
    },
  
    image: {
      width: 80,
      height: 80,
      borderRadius: 16,
      // boxShadow: colors.shadow,
    },
  
    title: {
      fontWeight: '500',
      fontSize: 24,
      marginBottom: 8,
    },
  
    text: {
      fontSize: 18,
    },
  })