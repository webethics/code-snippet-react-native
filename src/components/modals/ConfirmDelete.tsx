import React from 'react';
import { View, Pressable, Modal } from 'react-native';
import { Button, Text } from 'react-native-paper';
import styles from '../assets/styles/CheckAvailability.style';
import { Color } from '../constants/Color';
import { Typography } from '../constants/Typography';

interface DeleteModalProps {
  visibleDeleteModal: boolean;
  hideDeleteModal?: () => void;
  modalTitle?: string;
  confirmHandler?: () => void;
}

const ConfirmDeleteModal = ({
  visibleDeleteModal,
  hideDeleteModal,
  modalTitle = 'Are you sure want to delete?',
  confirmHandler,
}: DeleteModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visibleDeleteModal}
      onDismiss={hideDeleteModal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.Title}>{modalTitle}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <View style={{ marginRight: 8 }}>
              <Pressable onPress={hideDeleteModal}>
                <Text style={{ color: Color.Primary, fontFamily: Typography.Font.PrimaryMedium }}>
                  Cancel
                </Text>
              </Pressable>
            </View>
            <View style={{ marginLeft: 8 }}>
              <Button
                textColor={Color.White}
                style={{ backgroundColor: Color.Primary }}
                labelStyle={{ fontFamily: Typography.Font.PrimaryRegular }}
                onPress={confirmHandler}
              >
                Confirm
              </Button>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmDeleteModal;
