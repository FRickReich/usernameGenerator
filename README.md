# xm-username-generator

A random username generator, made out of one random adjective, one random noun, a random number. Zero dependencies.

## How to install
Install the module with npm: 

```javascript
npm install xmusergenerator
```

## Usage

Import the module like this:

```javascript
const userGenerator = require('xm-username-generator');
```

When you then use it like this:

```javascript
const username = userGenerator.getUsername();
```

it will return names like this:

- `RoughSnowflake27945`
- `HeroicUnicorn31721`
- `BlackFire338`

By default the maximum number at the end of the username is 50000, you can set it to any value you like, if you set it to 0, it will not add a number at all.

## License

The original script was used at my old company Xeemio Inc., but since all rights to most of the code returned to me, i am releasing this under MIT license.

---

Copyright (c) 2020 F. Rick Reich. Licensed under the terms of the MIT license. http://frickreich.mit-license.org/