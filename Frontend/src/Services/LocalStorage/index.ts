class LocalStorageService {
  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getItem(key: string) {
    const item = localStorage.getItem(key);
    return item && JSON.parse(item);
  }

  clearAllItems() {
    localStorage.clear();
  }
}

const localStorageService = new LocalStorageService();

export { localStorageService };
