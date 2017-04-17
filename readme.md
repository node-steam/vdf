[![Chat](https://img.shields.io/gitter/room/node-steam/vdf.svg?style=flat-square)](https://gitter.im/node-steam/vdf)
[![Travis CI](https://img.shields.io/travis/node-steam/vdf.svg?style=flat-square)](https://travis-ci.org/node-steam/vdf)
[![Dependencies](https://img.shields.io/david/node-steam/vdf.svg?style=flat-square)](https://david-dm.org/node-steam/vdf)
[![Version](https://img.shields.io/npm/v/@node-steam/vdf.svg?style=flat-square)](https://www.npmjs.com/package/@node-steam/vdf)
[![Downloads](https://img.shields.io/npm/dt/@node-steam/vdf.svg?style=flat-square)](https://www.npmjs.com/package/@node-steam/vdf)
[![License](https://img.shields.io/npm/l/@node-steam/vdf.svg?style=flat-square)](https://www.npmjs.com/package/@node-steam/vdf)
[![Runkit](https://img.shields.io/badge/try%20on%20runkit-vdf-blue.svg?style=flat-square)](https://runkit.com/npm/@node-steam/vdf)

[![npm statistics](https://nodei.co/npm/@node-steam/vdf.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@node-steam/vdf)

**VDF** is a module to convert Valve's KeyValue format to JSON and back using Typescript.

## Installation

You can install **VDF** through the command line by using the following command:

```
yarn add @node-steam/vdf
```

## Usage:

```javascript
import * as VDF from '@node-steam/vdf';

// or

import {
    parse,
    stringify,
} from '@node-steam/vdf';
```

## Documentation:

> **[Generated Documentation](https://node-steam.github.io/vdf/)**

#### `VDF.parse(text: string)`
> Parse a VDF string into a JSON object

```javascript
const string = `
"description"   "This is a example VDF object!"
"boolean"       "true"
"number"        "529"
`;

const object = VDF.parse(string);

// or

const object = parse(string);

> {
    description: 'This is a example VDF object!',
    boolean: 'true',
    number: '529',
};
```

#### `VDF.stringify(object: object)`
> Parse a JSON object into a VDF string

```javascript
const object = {
    description: 'This is a example VDF object!',
    boolean: true,
    number: 529,
};

const string = VDF.stringify(object);

// or

const string = stringify(object);

> `
"description"   "This is a example VDF object!"
"boolean"       "true"
"number"        "529"
`;
```

## Contributors

- Silas Rech aka. **[lenovouser](mailto:silas.rech@protonmail.com)**

## Contributing:

Interested in contributing to **VDF**? Contributions are welcome, and are accepted via pull requests. Please [review these guidelines](contributing.md) before submitting any pull requests.

### Help:

**Installing dependencies:**

```
yarn
```

**Compile:**

```
yarn compile
```

**Test:**

```
yarn test
```

**Generate Docs:**

```
yarn docs
```

## Tests:

This module is thoroughly tested with **[ava](https://github.com/avajs/ava)**

## License:
Code licensed under [MIT](license.md), documentation under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).
