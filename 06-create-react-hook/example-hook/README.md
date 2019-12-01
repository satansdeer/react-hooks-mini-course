# example-hook

> 

[![NPM](https://img.shields.io/npm/v/example-hook.svg)](https://www.npmjs.com/package/example-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save example-hook
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'example-hook'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [satansdeer](https://github.com/satansdeer)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
