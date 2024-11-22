import { StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  runOnJS,
  withDecay,
  FadeOutRight,
} from "react-native-reanimated";

import Icon from "./Icon";
import { useState } from "react";

export function UnlockAnimation() {
  const [unlockedIcon, setUnlockedIcon] = useState(false);

  const rotationAnimation = useSharedValue(0);
  const scaleAnimation = useSharedValue(1);

  rotationAnimation.value = withRepeat(
    withSequence(
      withTiming(25, { duration: 150 }),
      withTiming(-25, { duration: 150 }),
      withTiming(0, { duration: 150 })
    ),
    2, // Number of times animation will run
    false,
    (finished) => {
      if (finished) {
        runOnJS(setUnlockedIcon)(true);
        scaleAnimation.value = withSequence(
          withTiming(1.5, { duration: 150 }), // scale up
          withTiming(1, { duration: 300 }) // scale back down
        );
      }
    }
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { rotate: `${rotationAnimation.value}deg` },
      { scale: scaleAnimation.value },
    ],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Animated.View>
        {unlockedIcon ? (
          <Icon.Ionicon name={"lock-open"} size={18} />
        ) : (
          <Icon.Ionicon name={"lock-closed"} size={18} />
        )}
      </Animated.View>
    </Animated.View>
  );
}
