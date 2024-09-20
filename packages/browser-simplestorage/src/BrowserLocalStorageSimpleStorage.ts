import { SimpleStorage } from '@nbottarini/simplestorage'

export class BrowserLocalStorageSimpleStorage implements SimpleStorage {
    async get(key: string): Promise<string|null> {
        return localStorage.getItem(key)
    }

    async set(key: string, value: string) {
        localStorage.setItem(key, value)
    }

    async remove(key: string) {
        localStorage.removeItem(key)
    }
}
