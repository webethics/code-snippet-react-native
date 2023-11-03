import React from 'react';
import { View, Pressable, Modal } from 'react-native';
import { Text } from 'react-native-paper';
import styles from '../assets/styles/CheckAvailability.style';
import { Color } from '../constants/Color';
import { Typography } from '../constants/Typography';
import CrossIcon from '../assets/icons/cross.svg';

interface SimpleModalProps {
  visibleSimpleModal: boolean;
  hideSimpleModal?: () => void;
  modalTitle?: string;
  modalContent: string;
}

const SimpleModal = ({
  visibleSimpleModal,
  hideSimpleModal,
  modalTitle = 'Simple Popup Sample Title',
  modalContent,
}: SimpleModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visibleSimpleModal}
      onDismiss={hideSimpleModal}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalView, { borderRadius: 5, padding: 20 }]}>
          <Pressable style={{ position: 'absolute', top: 6, right: 6 }} onPress={hideSimpleModal}>
            <CrossIcon />
          </Pressable>
          <Text style={[styles.Title, { marginBottom: 4 }]}>{modalTitle}</Text>
          <Text
            style={{
              fontSize: Typography.FontSize.sm,
              fontFamily: Typography.Font.PrimaryRegular,
              color: Color.Gray,
            }}
          >
            {modalContent}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default SimpleModal;
