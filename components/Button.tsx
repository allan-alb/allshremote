import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ViewStyle,
  Text,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: "default" | "error" | "success";
  backgroundColor?: ViewStyle["backgroundColor"];
};

export function Button({
  backgroundColor,
  title,
  variant = "default",
  ...props
}: ButtonProps) {
  const { style } = props;

  const variantStyles = {
    ...styles.default,
    ...(variant === "success" ? styles.success : undefined),
    ...(variant === "error" ? styles.error : undefined),
  };

  const composedStyles = {
    ...variantStyles,
    ...{ style },
  };

  return (
    <TouchableOpacity style={composedStyles} {...props}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  default: {
    borderRadius: 10,
    borderStyle: "solid",
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#2be4",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    backgroundColor: "#ffa590",
  },
  success: {
    backgroundColor: "#99edc3",
  },
});
