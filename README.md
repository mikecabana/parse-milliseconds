# parse-milliseconds

Parses milliseconds into an object. Credit to sindresorhus/parse-ms, package heavily paraphrased from his project and converted to typescript.

## install

```terminal
npm i parse-milliseconds
```

## use

```typescript
import parseMilliseconds from 'parse-milliseconds';

const parsed = parseMilliseconds(1000 * 55);

/**

{
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 55,
    milliseconds: 0,
    microseconds: 0,
    nanoseconds: 0
}

*/

```
