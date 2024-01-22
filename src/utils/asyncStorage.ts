import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToAsyncStorage = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

export const getFromAsyncStorage = async (key: string) => {
  return await AsyncStorage.getItem(key);
};

export const clearAsyncAsyncStorage = async () => {
  await AsyncStorage.clear();
};

export enum Keys{
    AUTH_TOKEN = 'AUTH_TOKEN',
}