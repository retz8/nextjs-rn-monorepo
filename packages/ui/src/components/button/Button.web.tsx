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
    <button
      className={twMerge("btn", `btn-${variant}`, `btn-${size}`)}
      onClick={onPress}
      type="button"
    >
      <span className="">{text}</span>
    </button>
  );
}
