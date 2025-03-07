import colors from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    listOfRoute_container: {
      position: 'absolute',
      height: "40%",
      width: "100%",
      padding: 20,
      paddingBottom: 24,
      bottom: 0,
      backgroundColor: colors.white,
      borderRadius: 16,
      gap: 16
    },
  
    driverOptions_container: {
      minWidth: 100,
      width: "auto",
      padding: 8,
      alignItems: 'center',
    },
  
  
    content: {
      gap: 8,
      alignItems: 'center',
    },
  
    content_title: {
      color: colors.title,
      fontWeight: '600',
      fontSize: 20,
      marginBottom: 12
    },
  
    content_titleSoft: {
      color: colors.text,
      fontWeight: '700',
      fontSize: 16,
      marginBottom: 10,
    },
  
    content_text: {
      color: colors.text,
      fontWeight: '500',
      fontSize: 14,
      textAlign: 'center',
    },
  
    button: {
      width: 170,
      borderRadius: 50
    },

    buttonFinish : {
      width: 170,
      borderRadius: 50,
      backgroundColor: colors.danger
    },
  
    teste: {
      width: "100%",
      alignItems: 'center',
      position: 'absolute',
      top: -40,
    },
  
  })