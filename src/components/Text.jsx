import React from 'react';
import { Text as NativeText, StyleSheet, Platform } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: Platform.select({ 
      android: 'Roboto',
      ios: 'Arial',
      default: theme.fonts.main,
    }),  
    fontWeight: theme.fontWeights.normal, 
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.textPrimary,
  },
  colorWhite: {
    color: theme.colors.white,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  textPlacement: {
    textAlign: theme.placements.center,
  },
  background: {
    backgroundColor: theme.background.primary,
  }
});

const Text = ({ color, fontSize, fontWeight, textPlacement, background, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'white' && styles.colorWhite,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'heading' && styles.fontSizeHeading,
    fontWeight === 'bold' && styles.fontWeightBold,
    textPlacement === 'center' && styles.textPlacement,
    background === 'primary' && styles.background,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;