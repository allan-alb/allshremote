import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { Text } from "./Text";
import { tokens } from "../constants/tokens";

interface ToggleSwitchProps {
  label?: string;
  initialValue?: boolean;
  disabled?: boolean;
  onValueChange?: (value: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  initialValue = false,
  disabled,
  onValueChange,
}) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(initialValue);

  const toggleSwitch = (value: boolean) => {
    setIsEnabled(value);
    if (onValueChange) {
      onValueChange(value);
    }
  };

  return (
    <View style={styles.container}>
      {label ? <Text variant={"medium"}>{label}</Text> : null}
      <Switch
        disabled={disabled}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={
          isEnabled ? tokens.colors.primary : tokens.colors.lighterGray
        }
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2,
  },
  label: {
    fontSize: 18,
  },
});

export default ToggleSwitch;
