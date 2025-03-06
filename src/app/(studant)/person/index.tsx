import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons, Feather, FontAwesome } from "@expo/vector-icons";
import { s } from "./style";
import { getUserData } from "@/utils/store";
import { router } from "expo-router";

export default function Person() {
  const [user, setUser] = useState<any>({
    name: "Indefinido",
    gmail: "indefinido",
    phone: "indefinido",
  });

  useEffect(() => {
    const getUser = async () => {
      const data = await getUserData();

      if (data) {
        setUser(data);
        console.log(data)
      }

    };

    getUser();
  }, []);

  return (
    <View style={s.container}>
      <View style={s.profileContainer}>
        <Image
          source={{ uri: "https://avatars.githubusercontent.com/u/145035724?v=4" }}
          style={s.avatar}
        />
        <View>
          <Text style={s.name}>{user.name}</Text>
          <Text style={s.email}>{user.gmail}</Text>
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

      <TouchableOpacity style={s.menuItem} onPress={() => router.navigate('/')}>
        <Feather name="log-out" size={24} color="black" />
        <Text style={s.menuText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};
