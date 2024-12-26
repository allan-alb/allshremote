# Allshremote 📱

An Android application built with React Native that turns your device into a versatile remote control using its infrared emitter.

<div align="center">
   <img width="300" alt="Captura de Tela 2024-11-24 às 16 48 15" src="https://github.com/user-attachments/assets/5e5577d2-eace-4e10-b02d-862e7ed4db5e">
</div>

## Features

- Device selector
- Structured for seamless addition of new devices without extensive reconfiguration
- Supports dark/light theme
- Supports addition of advanced/non-standard commands

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npm run android
   ```

## Remotes available

Currently, this app includes remote control commands for the following devices:

- Magcubic HY320

More devices are expected to be added. Contributions are welcome.

## Libraries and tools used

- [allan-alb/react-native-infrared-interface](https://www.npmjs.com/package/react-native-infrared-interface): A library for enabling infrared communication, allowing the app to send remote control commands.
- [zustand](https://zustand.docs.pmnd.rs/getting-started/introduction): A state management library for managing the application's global state in a simple and scalable way.
- [react-native-reanimated](https://www.npmjs.com/package/react-native-reanimated): A powerful animation library for creating smooth animations in React Native.

## Contribute to the project

Contributions are very welcome, specially regarding new devices and features

---

### iOS Devices Not Supported

While the application includes iOS-specific code, the app is not functional on iOS devices due to the lack of IR blasters.
