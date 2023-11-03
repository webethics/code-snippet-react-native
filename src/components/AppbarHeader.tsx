import React from 'react';
import { Image, View } from 'react-native';
import styles from '../assets/styles/AppbarHeader.style';

const AppbarHeader = () => {
  return (
    <>
      <View style={styles.Appbar}>
        <Image
          style={{ width: 128.56, height: 28 }}
          source={require('../assets/images/topbar-logo.png')}
        />
      </View>
    </>
  );
};

export default AppbarHeader;
