import localforage from 'localforage';

class StoreManager {
  writeData = (key, data) => localforage.setItem(key, data);

  readData = key => localforage.getItem(key);

  removeData = key => localforage.removeItem(key);
}

const storeManager = new StoreManager();

export default storeManager;
