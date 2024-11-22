export const ProjectorButtonOptions = [
  "power",
  "volumeUp",
  "volumeDown",
  "home",
  "back",
  "options",
  "up",
  "down",
  "left",
  "right",
  "enter",
  "mute",
  "miracast",
  "airplay",
  "mouse",
  "connectionsConfig",
] as const;

export const ButtonOptions = [...ProjectorButtonOptions] as const;

export type ButtonOptionsType = (typeof ButtonOptions)[number];
export type ProjectorButtonOptionsType =
  (typeof ProjectorButtonOptions)[number];
