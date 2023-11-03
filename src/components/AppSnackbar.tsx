import React from 'react';
import { Snackbar } from 'react-native-paper';

interface SnackBarInterface {
  snackTitle?: string;
  showSnackBar: boolean;
  dismissSnackBar: () => void;
}

const AppSnackbar = ({
  snackTitle = 'This is custom snackbar',
  showSnackBar = false,
  dismissSnackBar,
}: SnackBarInterface) => {
  return (
    <Snackbar
      visible={showSnackBar}
      onDismiss={dismissSnackBar}
      duration={3000}
      wrapperStyle={{ zIndex: 999 }}
    >
      {snackTitle}
    </Snackbar>
  );
};

export default AppSnackbar;
