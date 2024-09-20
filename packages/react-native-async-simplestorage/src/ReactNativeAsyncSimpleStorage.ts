import AsyncStorage from '@react-native-async-storage/async-storage'
import { SimpleStorage } from '@nbottarini/simplestorage'

export class ReactNativeAsyncSimpleStorage implements SimpleStorage {
    async get(key: string): Promise<string|null> {
        return AsyncStorage.getItem(key)
    }

    async set(key: string, value: string) {
        await AsyncStorage.setItem(key, value)
    }

    async remove(key: string) {
        await AsyncStorage.removeItem(key)
    }
}
