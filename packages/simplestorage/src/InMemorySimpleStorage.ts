import { SimpleStorage } from './SimpleStorage'

export class InMemorySimpleStorage implements SimpleStorage {
    private data: Map<string, string> = new Map()

    async get(key: string): Promise<string|null> {
        return this.data.get(key) || null
    }

    async set(key: string, value: string) {
        this.data.set(key, value)
    }

    async remove(key: string) {
        this.data.delete(key)
    }
}
