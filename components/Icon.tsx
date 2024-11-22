import { type ComponentProps } from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { useThemeColor } from "../hooks/useThemeColor";

export type IconProps = ComponentProps<
  typeof Ionicons | typeof MaterialCommunityIcons
>;

export type IoniconsProps = ComponentProps<typeof Ionicons>;
export type MaterialCommunityIconsProps = ComponentProps<
  typeof MaterialCommunityIcons
>;

const MaterialCommunityIcon = (
  props: ComponentProps<typeof MaterialCommunityIcons>
) => {
  const themeColor = useThemeColor({}, "text");

  const iconColor = props?.color ?? themeColor;

  return <MaterialCommunityIcons {...props} color={iconColor} />;
};

const Ionicon = (props: ComponentProps<typeof Ionicons>) => {
  const themeColor = useThemeColor({}, "text");

  const iconColor = props?.color ?? themeColor;

  return <Ionicons {...props} color={iconColor} />;
};

const FeatherIcon = (props: ComponentProps<typeof Feather>) => {
  const themeColor = useThemeColor({}, "text");

  const iconColor = props?.color ?? themeColor;

  return <Feather {...props} color={iconColor} />;
};

const MaterialIcon = (props: ComponentProps<typeof MaterialIcons>) => {
  const themeColor = useThemeColor({}, "text");

  const iconColor = props?.color ?? themeColor;

  return <MaterialIcons {...props} color={iconColor} />;
};

export default {
  FeatherIcon,
  Ionicon,
  MaterialIcon,
  MaterialCommunityIcon,
};
