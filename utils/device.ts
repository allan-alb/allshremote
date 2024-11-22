import { DeviceConfig } from "../devices";

const deviceTypeToIconMapper = {
  projector: { materialCommunityIcon: "projector" },
  "classic-tv": { featherIcon: "tv" },
  "smart-tv": { ionIcon: "tv-outline" },
};

const defaultProjectorCommands = [
  "power",
  "mute",
  "miracast",
  "airplay",
  "mouse",
  "up",
  "left",
  "enter",
  "right",
  "down",
  "back",
  "options",
  "home",
  "volumeDown",
  "volumeUp",
];

const defaultSmartTvCommands: string[] = [];

const defaultClassicTvCommands: string[] = [];

export const getDeviceDisplayName = (deviceConfig: DeviceConfig) => {
  return `${deviceConfig.brand} - ${deviceConfig.model}`;
};

export const getDeviceTypeIcon = (deviceConfig: DeviceConfig) => {
  return (
    deviceTypeToIconMapper[deviceConfig.type] ?? {
      materialIcon: "device-unknown",
    }
  );
};

export const getDeviceAdvancedCommands = (deviceConfig: DeviceConfig) => {
  const deviceTypeCommandsMapper = {
    projector: defaultProjectorCommands,
    "smart-tv": defaultSmartTvCommands,
    "classic-tv": defaultClassicTvCommands,
  };

  const defaultDeviceCommands = deviceTypeCommandsMapper[deviceConfig.type];

  const nonDefaultCommands = Object.entries(deviceConfig.commandCodes).filter(
    (command) => !defaultDeviceCommands.includes(command[0])
  );

  return nonDefaultCommands;
};
