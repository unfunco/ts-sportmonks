# 🧘🏽‍♂️ Sportmonks API client

## Getting started

### Requirements

* [Node.js] 16+

### Installation and usage

```text
@unfunco:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<personal_access_token>
```

```bash
npm install @unfunco/ts-sportmonks
```

```typescript
import { SoccerClient } from '@unfunco/ts-sportmonks/soccer/v2'

const apiToken = 'super-secret-token'

const soccer = new SoccerClient({ apiToken })
const scores = soccer.get<Fixture[]>('livescores')
```

## License

© 2022 [Daniel Morris]  
Made available under the terms of the [Apache License 2.0](LICENSE.md).

[Daniel Morris]: https://unfun.co
[Node.js]: https://nodejs.org
