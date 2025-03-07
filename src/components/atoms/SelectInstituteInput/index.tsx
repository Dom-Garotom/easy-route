import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Modal, Text } from "react-native";
import { s } from "./style";
import { IconBuildings, IconChevronCompactDown } from "@tabler/icons-react-native";
import colors from "@/styles/colors";

interface SelectInstituteInputProps {
  options: string[]
  placeholder: string,
  onSelect ?: (value: string) => void
}
export const SelectInstituteInput = ({ onSelect, options, placeholder }: SelectInstituteInputProps) => {
  const [text, setText] = useState("Selecione uma instituição");
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (item: string) => {
    setText(item);
    setModalVisible(false);
    onSelect && onSelect(item);
  };

  return (
    <View style={s.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={s.input}
      >
        <Text>{text}</Text>
        <IconChevronCompactDown color={colors.title} />
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={s.modalContainer}>
          <View style={s.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={s.option} onPress={() => handleSelect(item)}>
                  <IconBuildings color={colors.title} />
                  <Text style={s.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

