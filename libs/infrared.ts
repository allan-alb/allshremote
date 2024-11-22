import { transmit } from "react-native-infrared-interface";
import { ButtonOptionsType } from "../constants/ButtonOptions";
import { DeviceConfig } from "../devices";

export const transmitButtonCommand = async (
  button: ButtonOptionsType,
  device: DeviceConfig | null
) => {
  if (!device?.commandCodes[button]) {
    throw new Error(`Button ${button} not found`);
  } else {
    await transmit(38000, device.commandCodes[button]);
  }
};
