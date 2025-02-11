import { Text, Pressable, Platform } from "react-native";
import { twMerge } from "tailwind-merge";
import "./button.css";

export interface ButtonProps {
  text: string;
  onPress?: () => void;
  size?: "small" | "large";
}

export function Button({ text, onPress, size = "large" }: ButtonProps) {
  const sizeClass = size === "small" ? "button_small" : "button_large";

  if (Platform.OS === "web") {
    return (
      <button className={`button ${sizeClass}`} onClick={onPress}>
        {text}
      </button>
    );
  }

  return (
    <Pressable onPress={onPress} className={twMerge("button", sizeClass)}>
      <Text className={twMerge("text-white text-center")}>{text}</Text>
    </Pressable>
  );
}
