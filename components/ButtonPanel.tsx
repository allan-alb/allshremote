import { useThemeColor } from "../hooks/useThemeColor";
import { tokens } from "../constants/tokens";
import { DeviceConfig } from "../devices";
import { GenericPanel } from "./DevicePanels/GenericPanel";
import { ReactElement } from "react";
import { ProjectorPanel } from "./DevicePanels/ProjectorPanel";
import { SmartTvPanel } from "./DevicePanels/SmartTvPanel";
import { ClassicTvPanel } from "./DevicePanels/ClassicTvPanel";

type ButtonPanelProps = {
  device: DeviceConfig | null;
  advancedMode?: boolean;
};

export function ButtonPanel({ device, advancedMode }: ButtonPanelProps) {
  const bgColor = useThemeColor(
    { light: tokens.colors.lighterGray, dark: tokens.colors.darkGray },
    "background"
  );

  if (!device) {
    return <GenericPanel />;
  }

  const panelProps = {
    device,
    bgColor,
    advancedMode,
  };

  const devicePanelMapper: { [deviceType: string]: ReactElement } = {
    projector: <ProjectorPanel {...panelProps} />,
    "smart-tv": <SmartTvPanel {...panelProps} />,
    "classic-tv": <ClassicTvPanel {...panelProps} />,
  };

  return devicePanelMapper[device.type];
}
