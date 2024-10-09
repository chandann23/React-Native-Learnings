// components/CustomButton/CustomButton.tsx
import React from 'react';
import { Platform } from 'react-native';

// Import platform-specific implementations
import AndroidButton from './CustomButton.android';
import IOSButton from './CustomButton.ios';

// Export the interface for type consistency
export interface CustomButtonProps {
  onPress: () => void;
  title: string;
}

// Export the platform-specific component
export default Platform.select({
  ios: IOSButton,
  android: AndroidButton,
}) as React.ComponentType<CustomButtonProps>;
