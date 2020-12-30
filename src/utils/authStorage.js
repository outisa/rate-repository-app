import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(
      `${this.namespace}:user`,
    );
    return token ? token : null;
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(`${this.namespace}:user`, accessToken,);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:user`);
  }
}

export default AuthStorage;