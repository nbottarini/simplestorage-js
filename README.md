[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI Status](https://github.com/nbottarini/simplestorage-js/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/nbottarini/simplestorage-js/actions)

**simplestorage:** [![npm](https://img.shields.io/npm/v/@nbottarini/simplestorage.svg)](https://www.npmjs.com/package/@nbottarini/simplestorage)

**browser-simplestorage:** [![npm](https://img.shields.io/npm/v/@nbottarini/browser-simplestorage.svg)](https://www.npmjs.com/package/@nbottarini/browser-simplestorage)

**react-native-async-simplestorage:** [![npm](https://img.shields.io/npm/v/@nbottarini/react-native-async-simplestorage.svg)](https://www.npmjs.com/package/@nbottarini/react-native-async-simplestorage)


# Simple Storage
Simple key value storage abstraction with multiple implementations

## Installation

Npm:
```
$ npm install @nbottarini/simplestorage

Browser implementation:
$ npm install @nbottarini/browser-simplestorage

React Native Async Storage implementation:
$ npm install @nbottarini/react-native-async-simplestorage
```

Yarn:
```
$ yarn add @nbottarini/simplestorage

Browser implementation:
$ yarn add @nbottarini/browser-simplestorage

React Native Async Storage implementation:
$ yarn add @nbottarini/react-native-async-simplestorage
```

## Usage

**SessionProvider.ts:**
```typescript
import { SimpleStorage } from '@nbottarini/simplestorage'

class SessionProvider {
    constructor(private storage: SimpleStorage) {}

    async getSession(): Session {
        const session = await this.storage.get('session-key')
        return JSON.parse(session)
    }

    async storeSession(session: Session) {
        await this.storage.set('session-key', JSON.stringify(session))
    }
}
```

**index.ts:**

```typescript
import { InMemorySimpleStorage } from '@nbottarini/simplestorage'
import { BrowserLocalStorageSimpleStorage } from '@nbottarini/browser-simplestorage'
import { ReactNativeAsyncSimpleStorage } from '@nbottarini/react-native-async-simplestorage'

const sessionProvider = new SessionProvider(new InMemorySimpleStorage())
// or
const sessionProvider = new SessionProvider(new BrowserLocalStorageSimpleStorage())
// or
const sessionProvider = new SessionProvider(new BrowserSessionStorageSimpleStorage())
// or
const sessionProvider = new SessionProvider(new ReactNativeAsyncSimpleStorage())
```
