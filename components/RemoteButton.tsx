import { StyleSheet, TouchableOpacity } from "react-native";
import { ButtonOptionsType } from "../constants/ButtonOptions";
// import { Ionicons } from "@expo/vector-icons";
import Icon, {
  IconProps,
  IoniconsProps,
  MaterialCommunityIconsProps,
} from "./Icon";
import { tokens } from "../constants/tokens";
import { ComponentProps } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useThemeColor } from "../hooks/useThemeColor";

const buttonToIconMapper: { [key: string]: IconProps["name"] } = {
  power: "power",
  volumeUp: "volume-plus",
  volumeDown: "volume-minus",
  home: "home",
  back: "return-up-back",
  options: "menu",
  up: "chevron-up",
  down: "chevron-down",
  left: "chevron-left",
  right: "chevron-right",
  enter: "check",
  mute: "volume-mute",
  miracast: "cast",
  airplay: "cast-variant",
  mouse: "mouse",
  connectionsConfig: "waves",
};

type IconSetOptions = "ionicons" | "material-community-icons";

type RemoteButtonProps = {
  buttonName: ButtonOptionsType;
  buttonSize: "small" | "medium" | "large";
  iconSet?: IconSetOptions;
  onPress: () => void;
};

type ButtonIconProps =
  | ({ iconSet: "ionicons" } & IoniconsProps)
  | ({ iconSet: "material-community-icons" } & MaterialCommunityIconsProps);

const ButtonIcon = ({
  iconSet,
  ...props
}: ButtonIconProps): React.ReactNode | undefined => {
  if (iconSet === "ionicons") {
    const ioniconProps = props as ComponentProps<typeof Ionicons>;

    return <Icon.Ionicon {...ioniconProps} />;
  }
  if (iconSet === "material-community-icons") {
    const materialCommunityIconProps = props as ComponentProps<
      typeof MaterialCommunityIcons
    >;

    return <Icon.MaterialCommunityIcon {...materialCommunityIconProps} />;
  }
  return undefined;
};

export function RemoteButton(props: RemoteButtonProps) {
  const {
    buttonName,
    buttonSize = "medium",
    iconSet = "ionicons",
    onPress,
  } = props;

  const color = useThemeColor(
    { light: tokens.colors.black, dark: tokens.colors.white },
    "icon"
  );

  const getIconSize = () => {
    if (buttonSize === "small") {
      return 18;
    }

    if (buttonSize === "large") {
      return 26;
    }

    return 24;
  };

  const getContainerPadding = () => {
    if (buttonSize === "small") {
      return 10;
    }

    if (buttonSize === "large") {
      return 20;
    }

    return 12;
  };

  const buttonIconName = buttonToIconMapper[buttonName];

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        padding: getContainerPadding(),
      }}
      onPress={onPress}
    >
      {/* @ts-ignore */}
      <ButtonIcon
        iconSet={iconSet}
        name={buttonIconName}
        size={getIconSize()}
        color={color}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    borderColor: tokens.colors.lightGray,
    borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#aaa",
    elevation: 8,
  },
});
