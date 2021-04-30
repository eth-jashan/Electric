import React, { useMemo } from 'react';
import { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColors,
} from 'react-native-reanimated';

const CustomBackground = ({
  animatedIndex,
  style,
}: BottomSheetBackgroundProps) => {
  // animated variables
  const animatedBackground = useMemo(
    () =>
      interpolateColors(animatedIndex, {
        inputRange: [0, 1],
        outputColorRange: ['#171615', '#171615'],
      }),
    [animatedIndex]
  );

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: animatedBackground,
      },
    ],
    [style, animatedBackground]
  );

  return <Animated.View style={containerStyle} />
};

export default CustomBackground;