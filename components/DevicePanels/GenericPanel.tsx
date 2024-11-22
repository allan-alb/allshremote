import { View, StyleSheet } from "react-native";
import { tokens } from "../../constants/tokens";
import { Text } from "../Text";
import { Link } from "expo-router";
import { ButtonContainer } from "../ButtonContainer";
import { RemoteButton } from "../RemoteButton";

export function GenericPanel() {
  return (
    <View style={styles.container}>
      <Text>No device selected</Text>
      <Text variant={"small"}>
        Please go to{" "}
        <Link href={"/(tabs)/settings"} style={{ fontWeight: "bold" }}>
          Settings
        </Link>{" "}
        to select a device
      </Text>
      <ButtonContainer
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <RemoteButton
          buttonName={"power"}
          buttonSize={"large"}
          onPress={() => {}}
        />
      </ButtonContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: tokens.colors.gray,
    opacity: 0.5,
  },
});
