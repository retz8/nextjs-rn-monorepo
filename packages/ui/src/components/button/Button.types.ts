export interface ButtonProps {
  text: string;
  onPress?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "lg";
}
