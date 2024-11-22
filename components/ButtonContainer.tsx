import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { tokens } from "../constants/tokens";

type ButtonContainerProps = {
  flexDirection?: ViewStyle["flexDirection"];
  justifyContent?: ViewStyle["justifyContent"];
  alignItems?: ViewStyle["alignItems"];
  gap?: ViewStyle["gap"];
  width?: ViewStyle["width"];
  marginHorizontal?: ViewStyle["marginHorizontal"];
  marginVertical?: ViewStyle["marginVertical"];
  advanced?: boolean;
  children: React.ReactNode;
};

export function ButtonContainer({
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  width,
  marginHorizontal,
  marginVertical,
  advanced = false,
  children,
}: ButtonContainerProps) {
  return (
    <View
      style={{
        ...styles.container,
        ...(flexDirection ? { flexDirection } : {}),
        ...(justifyContent ? { justifyContent } : {}),
        ...(alignItems ? { alignItems } : {}),
        ...(gap || gap === 0 ? { gap } : {}),
        ...(width ? { width } : {}),
        ...(marginHorizontal || marginHorizontal === 0
          ? { marginHorizontal }
          : {}),
        ...(marginVertical || marginVertical === 0 ? { marginVertical } : {}),
        ...(advanced
          ? {
              borderColor: tokens.colors.error,
              borderWidth: 1,
              borderStyle: "solid",
              padding: 14,
            }
          : {}),
      }}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 6,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
});
