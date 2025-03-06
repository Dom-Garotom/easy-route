import colors from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F9F9F9",
      padding: 20,
    },
    profileContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: "#E5E5E5",
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 15,
    },
    name: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.title
    },
    email: {
      fontSize: 14,
      color: "gray",
    },
    menuItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#E5E5E5",
    },
    menuText: {
      flex: 1,
      fontSize: 16,
      marginLeft: 15,
    },
    allowText: {
      fontSize: 16,
      color: "gray",
    },
  });
  