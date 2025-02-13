import { Text, Pressable } from "react-native";
import { ButtonProps } from "./Button.types";
import { twMerge } from "tailwind-merge";
import "./styles.css";

export function Button({
  text,
  onPress,
  variant = "primary",
  size = "lg",
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={twMerge("btn", `btn-${variant}`, `btn-${size}`)}
    >
      <Text
        className={twMerge(
          "text-center",
          variant === "primary" ? "text-white" : "text-gray-800"
        )}
      >
        {text}
      </Text>
    </Pressable>
  );
}
