import { create } from "zustand";
import { DeviceConfig } from "../devices";

type ConfigStoreStateProps = {
  selectedDevice: DeviceConfig | null;
  advancedModeEnabled: boolean;
  advancedModeUnlocked: boolean;
};

type ConfigStoreActionsProps = {
  setDevice: (selectedDevice: DeviceConfig) => void;
  toggleAdvancedMode: () => void;
  unlockAdvancedMode: () => void;
};

export const useConfigStore = create<
  ConfigStoreStateProps & ConfigStoreActionsProps
>()((set) => ({
  selectedDevice: null,
  advancedModeEnabled: false,
  advancedModeUnlocked: false,
  setDevice: (selectedDevice: DeviceConfig) =>
    set((state) => ({ selectedDevice: selectedDevice })),
  toggleAdvancedMode: () =>
    set((state) => ({ advancedModeEnabled: !state.advancedModeEnabled })),
  unlockAdvancedMode: () =>
    set((state) => ({ advancedModeUnlocked: true, advancedModeEnabled: true })),
}));
