import React from 'react';
import {  Pressable, View } from 'react-native';
import styles from '../assets/styles/HeaderBox.style';
import BackArrow from '../assets/icons/back-arrow.svg';
import { userActions } from '../redux/slices/UserSlice';
import { useDispatch } from 'react-redux';

const HeaderBox = ({
  navigation,
  currentStep = 0,
}: {
  showButton: boolean;
  navigation: any;
  currentStep: number;
  handleStepSubmit : () => void;
}) => {
  const dispatch = useDispatch();
  const handleprev = async () => {
    if (currentStep && currentStep !== 1) {
      dispatch(userActions.setCurrentStep(currentStep - 1));
    } else {
      navigation.goBack();
    }
  };
  return (
    <View style={styles.headerBox}>
      <View style={styles.headerActions}>
        <Pressable onPress={() => handleprev()}>
          <BackArrow />
        </Pressable>
      </View>
    </View>
  );
};

export default HeaderBox;
