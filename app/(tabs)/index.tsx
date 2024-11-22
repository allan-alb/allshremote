import { useEffect, useState } from "react";
import { StyleSheet, Platform, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useShallow } from "zustand/shallow";
import { Text } from "../../components/Text";
import { tokens } from "../../constants/tokens";
import { ButtonPanel } from "../../components/ButtonPanel";
import { useThemeColor } from "../../hooks/useThemeColor";
import { useConfigStore } from "../../store/configStore";
import { getDeviceDisplayName } from "../../utils/device";
import { UnlockAnimation } from "../../components/UnlockAnimation";
import Icon from "../../components/Icon";

export default function HomeScreen() {
  const [unlockAdvancedCount, setUnlockAdvancedCount] = useState<number>(0);

  const color = useThemeColor(
    { light: tokens.colors.info.clean, dark: tokens.colors.info.light },
    "tint"
  );

  // const { selectedDevice, advancedModeEnabled, unlockAdvancedMode } =
  //   useConfigStore();
  const selectedDevice = useConfigStore(
    useShallow((state) => state.selectedDevice)
  );
  const advancedModeEnabled = useConfigStore(
    (state) => state.advancedModeEnabled
  );
  const unlockAdvancedMode = useConfigStore(
    (state) => state.unlockAdvancedMode
  );

  useEffect(() => {
    if (unlockAdvancedCount === 10) {
      unlockAdvancedMode();
    }
  }, [unlockAdvancedCount]);

  if (Platform.OS === "ios") {
    <SafeAreaView style={styles.container}>
      <Text variant={"xlarge"} align={"center"}>
        This app is not available for iOS
      </Text>
    </SafeAreaView>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          onPress={() =>
            setUnlockAdvancedCount((currentCount) => currentCount + 1)
          }
        >
          <Text variant={"xlarge"} align={"center"}>
            Allshremote
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.deviceInfoContainer}>
        {selectedDevice ? (
          <Text variant={"xsmall"}>{getDeviceDisplayName(selectedDevice)}</Text>
        ) : (
          <Text variant={"xsmall"}>No device selected</Text>
        )}
        {advancedModeEnabled ? (
          <View style={styles.advancedModeInfoSection}>
            <Icon.Ionicon name={"warning-outline"} />
            <Text variant={"xsmall"} color={"error"}>
              Advanced mode enabled
            </Text>
            <UnlockAnimation />
          </View>
        ) : null}
      </View>
      <View style={{ ...styles.buttonsContainer, borderColor: color }}>
        <ButtonPanel
          device={selectedDevice}
          advancedMode={advancedModeEnabled}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  deviceInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 2,
  },
  advancedModeInfoSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  buttonsContainer: {
    borderRadius: 8,
    borderColor: tokens.colors.info.clean,
    borderWidth: 1,
    padding: 1,
  },
});
