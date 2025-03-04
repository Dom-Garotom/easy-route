import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons, Feather, FontAwesome } from "@expo/vector-icons";
import { s } from "./style";

export default function Person() {
  return (
    <View style={s.container}>
      <View style={s.profileContainer}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={s.avatar}
        />
        <View>
          <Text style={s.name}>Marcos Perini</Text>
          <Text style={s.email}>MarcosPerini@gmail.com</Text>
        </View>
      </View>

      <TouchableOpacity style={s.menuItem}>
        <Feather name="user" size={24} color="black" />
        <Text style={s.menuText}>My Profile</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity style={s.menuItem}>
        <Feather name="settings" size={24} color="black" />
        <Text style={s.menuText}>Settings</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity style={s.menuItem}>
        <FontAwesome name="bell" size={24} color="black" />
        <Text style={s.menuText}>Notification</Text>
        <Text style={s.allowText}>Allow</Text>
      </TouchableOpacity>

      <TouchableOpacity style={s.menuItem}>
        <Feather name="log-out" size={24} color="black" />
        <Text style={s.menuText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};
