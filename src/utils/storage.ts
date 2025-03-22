interface StorageInterface {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

class LocalStorage implements StorageInterface {
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}

// Create a singleton instance
const storage = new LocalStorage();

export const StorageKeys = {
  WISHLIST: 'wishlist_items',
  // Add other storage keys here
} as const;

export class StorageService {
  static get<T>(key: string): T | null {
    const item = storage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  static set<T>(key: string, value: T): void {
    storage.setItem(key, JSON.stringify(value));
  }

  static remove(key: string): void {
    storage.removeItem(key);
  }

  static clear(): void {
    Object.values(StorageKeys).forEach(key => storage.removeItem(key));
  }
} 