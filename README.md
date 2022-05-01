# 🧘🏽‍♂️ Sportmonks API client

## Getting started

### Requirements

* [Node.js] 16+

### Installation and usage

```bash
npm install -D @unfunco/ts-sportmonks
```

```typescript
import { SoccerClient } from '@unfunco/ts-sportmonks/soccer/v2'
import { League } from './types'

const apiToken = '...'

const soccer = new SoccerClient({ apiToken })
const scores = soccer.getLiveScores()
```

## License

© 2022 [Daniel Morris]  
Made available under the terms of the [Apache License 2.0](LICENSE.md).

[Daniel Morris]: https://unfun.co
[Node.js]: https://nodejs.org
