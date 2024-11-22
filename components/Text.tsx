import * as React from "react";
import { Text as RNText, TextStyle } from "react-native";
import { ReactNode } from "react";
import { tokens } from "../constants/tokens";
import { useThemeColor } from "../hooks/useThemeColor";

export type TextVariantsType =
  | "4xlarge"
  | "3xlarge"
  | "2xlarge"
  | "xlarge"
  | "large"
  | "medium"
  | "small"
  | "xsmall"
  | "2xsmall";

const colorsMap = {
  black: tokens.colors.black,
  darkGray: tokens.colors.darkGray,
  gray: tokens.colors.gray,
  lightGray: tokens.colors.lightGray,
  white: tokens.colors.white,
  primary: tokens.colors.primary,
  success: tokens.colors.success,
  warning: tokens.colors.warning,
  error: tokens.colors.error,
} as const;

type ColorsMapKeys = keyof typeof colorsMap;

const fontWeightMap = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

export type TextProps = {
  children: ReactNode | string;
  variant?: TextVariantsType;
  color?: ColorsMapKeys;
  align?: TextStyle["textAlign"];
  fontWeight?: "bold" | "semibold" | "medium" | "regular";
  onPress?: () => void;
  testID?: string;
  numberOfLines?: number;
  customStyles?: TextStyle;
};

export const Text: React.FC<TextProps> = ({
  variant = "medium",
  align = "left",
  color,
  fontWeight,
  children,
  numberOfLines,
  onPress,
  customStyles,
  testID,
}) => {
  const defaultColor = useThemeColor({}, "text");

  const variantsConfig = {
    "4xlarge": {
      fontSize: tokens.fonts.size["4xlarge"],
      fontWeight: fontWeightMap.bold,
      letterSpacing: tokens.fonts.letterSpacings["4xlarge"],
      lineHeight: tokens.fonts.lineHeights["4xlarge"],
    },
    "3xlarge": {
      fontSize: tokens.fonts.size["3xlarge"],
      fontWeight: fontWeightMap.bold,
      letterSpacing: tokens.fonts.letterSpacings["3xlarge"],
      lineHeight: tokens.fonts.lineHeights["3xlarge"],
    },
    "2xlarge": {
      fontSize: tokens.fonts.size["2xlarge"],
      fontWeight: fontWeightMap.bold,
      letterSpacing: tokens.fonts.letterSpacings["2xlarge"],
      lineHeight: tokens.fonts.lineHeights["2xlarge"],
    },
    xlarge: {
      fontSize: tokens.fonts.size["xlarge"],
      fontWeight: fontWeightMap.medium,
      letterSpacing: tokens.fonts.letterSpacings.xlarge,
      lineHeight: tokens.fonts.lineHeights.xlarge,
    },
    large: {
      fontSize: tokens.fonts.size.large,
      fontWeight: fontWeightMap.medium,
      letterSpacing: tokens.fonts.letterSpacings.large,
      lineHeight: tokens.fonts.lineHeights.large,
    },
    medium: {
      fontSize: tokens.fonts.size.medium,
      fontWeight: fontWeightMap.regular,
      letterSpacing: tokens.fonts.letterSpacings.medium,
      lineHeight: tokens.fonts.lineHeights.medium,
    },
    small: {
      fontSize: tokens.fonts.size.small,
      fontWeight: fontWeightMap.regular,
      letterSpacing: tokens.fonts.letterSpacings.small,
      lineHeight: tokens.fonts.lineHeights.small,
    },
    xsmall: {
      fontSize: tokens.fonts.size.xsmall,
      fontWeight: fontWeightMap.regular,
      letterSpacing: tokens.fonts.letterSpacings.xsmall,
      lineHeight: tokens.fonts.lineHeights.xsmall,
    },
    "2xsmall": {
      fontSize: tokens.fonts.size["2xsmall"],
      fontWeight: fontWeightMap.regular,
      letterSpacing: tokens.fonts.letterSpacings["2xsmall"],
      lineHeight: tokens.fonts.lineHeights["2xsmall"],
    },
  };

  const selectedVariant = variantsConfig[variant];

  return (
    <RNText
      testID={testID}
      {...(onPress ? { onPress: () => onPress?.() } : {})}
      numberOfLines={numberOfLines}
      style={{
        color: color ? colorsMap[color as ColorsMapKeys] : defaultColor,
        fontSize: selectedVariant.fontSize,
        lineHeight: selectedVariant.lineHeight,
        fontWeight: fontWeight
          ? fontWeightMap[fontWeight]
          : selectedVariant.fontWeight,
        textAlign: align,
        letterSpacing: selectedVariant.letterSpacing,
        // fontWeight: fontWeight ?? selectedVariant.fontWeight
        ...customStyles,
      }}
    >
      {children}
    </RNText>
  );
};
