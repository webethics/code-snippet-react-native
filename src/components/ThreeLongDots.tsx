import * as React from 'react';
import { Color } from '../constants/Color';
import styles from '../assets/styles/ThreeLongDots.style';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';

interface ButtonPrimaryProps {
  activeDot: string;
}

const ThreeLongDot = ({ activeDot }: ButtonPrimaryProps) => {
  const active = activeDot;
  return (
    <>
      <View style={styles.illusion}>
        <View style={styles.navigation}>
          {active === 'first' ? (
            <LinearGradient colors={Color.PrimaryGradient} style={styles.active}></LinearGradient>
          ) : (
            <View style={styles.navStep}></View>
          )}
          {active === 'second' ? (
            <LinearGradient colors={Color.PrimaryGradient} style={styles.active}></LinearGradient>
          ) : (
            <View style={styles.navStep}></View>
          )}
          {active === 'third' ? (
            <LinearGradient colors={Color.PrimaryGradient} style={styles.active}></LinearGradient>
          ) : (
            <View style={styles.navStep}></View>
          )}
          {active === 'fourth' ? (
            <LinearGradient colors={Color.PrimaryGradient} style={styles.active}></LinearGradient>
          ) : (
            <View style={styles.navStep}></View>
          )}
        </View>
      </View>
    </>
  );
};

export default ThreeLongDot;
