export type DeviceType = "projector" | "smart-tv" | "classic-tv";

export type DeviceConfig = {
  brand: string;
  model: string;
  type: DeviceType;
  commandCodes: { [button: string]: string };
};

// magcubic
export * from "./magcubic";

// samsung
export * from "./samsung";

// sony
export * from "./sony";
