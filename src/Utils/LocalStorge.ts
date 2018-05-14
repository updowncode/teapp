import { AsyncStorage } from 'react-native';

class GetSetStorge {
  setStorgeAsync(key, value) {
    return new Promise((resolve, reject) => {
      AsyncStorage.setItem(key, value, error => {
        if (error) {
          console.log(`Set${key}Fail${error}`);
          reject(`Set${key}Fail${error}`);
        } else {
          console.log(`Set${key}Ok`);
          resolve(true);
        }
      });
    });
  }
  getStorgeAsync(key) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (error, result) => {
        if (error) {
          console.log(`Read${key}Fail` + error);
          reject(`Read${key}Fail${error}`);
        } else {
          console.log(`Read${key}Ok`);
          resolve(result);
        }
      });
    });
  }
}
export default GetSetStorge;
