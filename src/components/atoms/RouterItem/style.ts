import colors from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  routeItem_container: {
    width: "100%",
    flexDirection: 'row',
    padding: 12,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray,
  },

  routeItem_container_info: {
    width: "100%",
    flexDirection: 'row',
    padding: 12,
    justifyContent: "space-between",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray,
  },

  routeItem_container_time: {
    alignItems: "center",
  },

  routeItem_title: {
    color: colors.title,
    fontWeight: '600',
    fontSize: 14,
  },

  routeItem_text: {
    color: colors.text,
    fontWeight: '500',
    fontSize: 12,
  },

  routeItem_time: {
    color: colors.greenSecondary,
    fontWeight: '500',
    fontSize: 16,
  },

  routeItem_measurement: {
    color: colors.text,
    fontWeight: '500',
    fontSize: 12,
  },

})