import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text } from "../../components/Text";
import ToggleSwitch from "@/components/ToggleSwitch";
import { useConfigStore } from "../../store/configStore";
import * as devices from "../../devices";
import { Select } from "../../components/Select";
import Icon from "../../components/Icon";
import { getDeviceDisplayName, getDeviceTypeIcon } from "../../utils/device";
import { ExternalLink } from "../../components/ExternalLink";

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();

  const advancedModeEnabled = useConfigStore(
    (state) => state.advancedModeEnabled
  );
  const advancedModeUnlocked = useConfigStore(
    (state) => state.advancedModeUnlocked
  );
  const setDevice = useConfigStore((state) => state.setDevice);
  const toggleAdvancedMode = useConfigStore(
    (state) => state.toggleAdvancedMode
  );

  const devicesList: { label: string; value: devices.DeviceConfig | null }[] = [
    {
      label: "none",
      value: null,
    },
    ...Object.entries(devices).map(([entryKey, entryData]) => ({
      label: getDeviceDisplayName(entryData),
      value: entryData,
      ...getDeviceTypeIcon(entryData),
    })),
  ];

  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
        headerImage={
          <Ionicons size={310} name="cog" style={styles.headerImage} />
        }
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Settings</ThemedText>
        </ThemedView>
        <ThemedText>Customize your settings</ThemedText>
        <View style={styles.optionsList}>
          <View style={styles.itemContainer}>
            <Text>Device</Text>
            <Select
              search={devicesList.length > 6}
              options={devicesList}
              onSelect={(selected) => setDevice(selected)}
            />
          </View>
          <View style={styles.itemContainer}>
            <Text>Dark theme</Text>
            <ToggleSwitch
              // label="Color theme"
              initialValue={colorScheme === "dark"}
              disabled={true}
              onValueChange={(value: boolean) => {}}
            />
          </View>
          {advancedModeUnlocked ? (
            <View style={styles.itemContainer}>
              <Text>Advanced Mode</Text>
              <ToggleSwitch
                initialValue={advancedModeEnabled}
                onValueChange={toggleAdvancedMode}
              />
            </View>
          ) : null}
        </View>
      </ParallaxScrollView>
      <View style={styles.footer}>
        <Text variant={"2xsmall"}>Allshremote, by Allan Albuquerque</Text>
        <ExternalLink href="https://github.com/allan-alb">
          <Icon.MaterialCommunityIcon name="github" size={16} />
          <Text variant={"2xsmall"}> allan-alb</Text>
        </ExternalLink>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  optionsList: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    flex: 1,
  },
  itemContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    flex: 0,
    height: 50,
    gap: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
