# 🧘🏽‍♂️ Sportmonks API client

A small and simple [Sportmonks] API client library written in TypeScript.

## Getting started

### Requirements

* [Node.js] 16+

### Installation and usage

Since the package is currently private, it cannot be installed without a
[GitHub personal access token] and the following `npmrc` configuration.

```text
@unfunco:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<personal_access_token>
```

```bash
npm install @unfunco/ts-sportmonks
```

```typescript
import { SoccerClient } from '@unfunco/ts-sportmonks/soccer/v2'

void (async () => {
  const soccer = new SoccerClient({ apiToken: '12345' })
  const europe = await soccer.get('/continents/{id}', 1)
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
