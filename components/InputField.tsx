import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { FC } from "react";
import { Colors, width } from "@/utlis/Contants";

interface inputTextProps {
  placeholder: string;
  onPress: () => void;
}

const InputField: FC<inputTextProps> = ({ placeholder, onPress }) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        onPress={onPress}
        style={styles.textInput}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: Colors.secondary,
    color: "#626262",
    width: width * 0.8,
    paddingTop: 23,
    paddingBottom: 23,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});
