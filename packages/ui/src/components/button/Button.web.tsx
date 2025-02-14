import { ButtonProps } from "./Button.types";
import "./styles.css";

export function Button({
  text,
  onPress,
  variant = "primary",
  size = "lg",
}: ButtonProps) {
  return (
    <button onClick={onPress} type="button">
      <span className="">{text}</span>
    </button>
  );
}
