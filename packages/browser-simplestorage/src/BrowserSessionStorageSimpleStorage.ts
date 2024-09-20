import { SimpleStorage } from '@nbottarini/simplestorage'

export class BrowserSessionStorageSimpleStorage implements SimpleStorage {
    async get(key: string): Promise<string|null> {
        return sessionStorage.getItem(key)
    }

    async set(key: string, value: string) {
        sessionStorage.setItem(key, value)
    }

    async remove(key: string) {
        sessionStorage.removeItem(key)
    }
}
