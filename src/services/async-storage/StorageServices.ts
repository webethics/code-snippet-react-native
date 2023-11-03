import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageServices = {
  async saveStringValue(key: string, value: string) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async saveObjectValue(Key: string, value: object) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(Key, jsonValue);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async getStringValue(Key: string) {
    try {
      const value = await AsyncStorage.getItem(Key);
      return value;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async getObjectValue(Key: string) {
    try {
      const value = await AsyncStorage.getItem(Key);
      return value != null ? JSON.parse(value) : null;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async removeMultiple(keysArr: Array<string>) {
    try {
      await AsyncStorage.multiRemove(keysArr);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async removeSingle(Key: string) {
    try {
      await AsyncStorage.removeItem(Key);
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default StorageServices;