# 🧘🏽‍♂️ Sportmonks API client

[Sportmonks] API client library written in TypeScript. It's nowhere near ready
for production usage yet, it's very buggy and has no error handling, and only
implements a subset of the available endpoints in the soccer API, other sports
are not yet supported. It's very much a prototype and an experiment with
TypeScript's type-system.

## Getting started

### Requirements

* [Node.js] 16+
* [Sportmonks] credentials

### Installation and usage

```bash
npm install @unfunco/ts-sportmonks
```

```typescript
import { SoccerClient } from '@unfunco/ts-sportmonks/soccer/v2'

void (async () => {
  const soccer = new SoccerClient({ apiToken: 'secret-api-token' })
  const scores = await soccer.get('/livescores')
  // ...
})()
```

## License

© 2022 [Daniel Morris]  
Made available under the terms of the [Apache License 2.0](LICENSE.md).

[Daniel Morris]: https://unfun.co
[GitHub personal access token]: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
[Node.js]: https://nodejs.org
[Sportmonks]: https://www.sportmonks.com
