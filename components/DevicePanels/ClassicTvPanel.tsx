import { ScrollView, StyleSheet } from "react-native";
import { ButtonContainer } from "../ButtonContainer";
import { DeviceConfig } from "../../devices";
import { transmitButtonCommand } from "../../libs/infrared";
import { RemoteButton } from "../RemoteButton";
import { Text } from "../Text";

type ClassicTvPanelProps = {
  device: DeviceConfig | null;
  advancedMode?: boolean;
  bgColor: string;
};

export function ClassicTvPanel({
  device,
  bgColor,
  advancedMode,
}: ClassicTvPanelProps) {
  return (
    <ScrollView
      contentContainerStyle={{ ...styles.container, backgroundColor: bgColor }}
    >
      <Text variant={"xsmall"} fontWeight={"medium"}>
        Coming soon!
      </Text>
      <Text variant={"2xsmall"}>
        This panel is still in progress. Stay tuned for updates in future
        releases!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: "90%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
});
