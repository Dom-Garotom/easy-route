import colors from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: { margin: 10 },
    input: { 
      width:"100%",
      padding: 12,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.gray,
      backgroundColor: "white", 
      justifyContent: "space-between",
      alignItems:"center",
      flexDirection:"row",
    },
    
      modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
      width: "80%",
      backgroundColor: "white",
      borderRadius: 10,
      padding: 20,
      maxHeight: 300,
    },
    option: {
      padding: 15,
      paddingLeft: 0,
      flexDirection:"row",
      alignItems:"center",
      gap: 10,
    },
    optionText: {
      fontSize: 16,
      color: colors.text,
      fontWeight: "500",
    },
  });
  