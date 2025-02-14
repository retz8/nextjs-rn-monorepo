import { Text, Pressable } from "react-native";
import { ButtonProps } from "./Button.types";
import "./styles.css";

export function Button({
  text,
  onPress,
  variant = "primary",
  size = "lg",
}: ButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  );
}
