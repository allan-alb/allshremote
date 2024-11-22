import { ScrollView, StyleSheet } from "react-native";
import { ButtonContainer } from "../ButtonContainer";
import { DeviceConfig } from "../../devices";
import {
  ButtonOptionsType,
  ProjectorButtonOptionsType,
} from "../../constants/ButtonOptions";
import { transmitButtonCommand } from "../../libs/infrared";
import { RemoteButton } from "../RemoteButton";
import { getDeviceAdvancedCommands } from "../../utils/device";
import { Text } from "../Text";

type ProjectorPanelProps = {
  device: DeviceConfig | null;
  advancedMode?: boolean;
  bgColor: string;
};

export function ProjectorPanel({
  device,
  bgColor,
  advancedMode,
}: ProjectorPanelProps) {
  const getOnPressAction = async (button: ProjectorButtonOptionsType) => {
    return await transmitButtonCommand(button, device);
  };

  const advancedCommands = device ? getDeviceAdvancedCommands(device) : [];

  return (
    <ScrollView
      contentContainerStyle={{ ...styles.container, backgroundColor: bgColor }}
    >
      <ButtonContainer flexDirection="row" justifyContent="space-between">
        <RemoteButton
          buttonName="power"
          buttonSize="large"
          onPress={() => getOnPressAction("power")}
        />
        <RemoteButton
          iconSet="ionicons"
          buttonName="mute"
          buttonSize="small"
          onPress={() => getOnPressAction("mute")}
        />
      </ButtonContainer>
      <ButtonContainer flexDirection="row">
        <RemoteButton
          iconSet="material-community-icons"
          buttonName="miracast"
          buttonSize="small"
          onPress={() => getOnPressAction("miracast")}
        />
        <RemoteButton
          iconSet="material-community-icons"
          buttonName="airplay"
          buttonSize="small"
          onPress={() => getOnPressAction("airplay")}
        />
        <RemoteButton
          iconSet="material-community-icons"
          buttonName="mouse"
          buttonSize="small"
          onPress={() => getOnPressAction("mouse")}
        />
      </ButtonContainer>
      <ButtonContainer
        flexDirection={"column"}
        justifyContent={"center"}
        gap={0}
      >
        <ButtonContainer
          flexDirection="row"
          justifyContent="center"
          marginVertical={0}
        >
          <RemoteButton
            iconSet={"material-community-icons"}
            buttonName={"up"}
            buttonSize={"large"}
            onPress={() => getOnPressAction("up")}
          />
        </ButtonContainer>
        <ButtonContainer>
          <RemoteButton
            iconSet={"material-community-icons"}
            buttonName={"left"}
            buttonSize={"large"}
            onPress={() => getOnPressAction("left")}
          />

          <RemoteButton
            iconSet={"material-community-icons"}
            buttonName={"enter"}
            buttonSize={"large"}
            onPress={() => getOnPressAction("enter")}
          />
          <RemoteButton
            iconSet={"material-community-icons"}
            buttonName={"right"}
            buttonSize={"large"}
            onPress={() => getOnPressAction("right")}
          />
        </ButtonContainer>
        <ButtonContainer
          flexDirection="row"
          justifyContent="center"
          marginVertical={0}
        >
          <RemoteButton
            iconSet={"material-community-icons"}
            buttonName={"down"}
            buttonSize={"large"}
            onPress={() => getOnPressAction("down")}
          />
        </ButtonContainer>
      </ButtonContainer>
      <ButtonContainer>
        <RemoteButton
          iconSet={"ionicons"}
          buttonName={"back"}
          buttonSize="small"
          onPress={() => getOnPressAction("back")}
        />
        <RemoteButton
          iconSet={"ionicons"}
          buttonName={"options"}
          buttonSize="small"
          onPress={() => getOnPressAction("options")}
        />
        <RemoteButton
          iconSet={"ionicons"}
          buttonName={"home"}
          buttonSize="small"
          onPress={() => getOnPressAction("home")}
        />
      </ButtonContainer>
      <ButtonContainer gap={30}>
        <RemoteButton
          iconSet={"material-community-icons"}
          buttonName={"volumeDown"}
          buttonSize="medium"
          onPress={() => getOnPressAction("volumeDown")}
        />
        <RemoteButton
          iconSet={"material-community-icons"}
          buttonName={"volumeUp"}
          buttonSize="medium"
          onPress={() => getOnPressAction("volumeUp")}
        />
      </ButtonContainer>
      {advancedMode ? (
        <ButtonContainer advanced={true}>
          {advancedCommands && advancedCommands.length > 0 ? (
            advancedCommands.map((command) => (
              <RemoteButton
                key={command[0]}
                iconSet={"material-community-icons"}
                buttonName={command[0] as ButtonOptionsType}
                buttonSize="small"
                onPress={() =>
                  getOnPressAction(command[0] as ButtonOptionsType)
                }
              />
            ))
          ) : (
            <Text variant={"2xsmall"}>
              No advanced commands available for this device
            </Text>
          )}
        </ButtonContainer>
      ) : null}
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
