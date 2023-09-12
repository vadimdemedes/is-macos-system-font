# is-macos-system-font [![test](https://github.com/vadimdemedes/is-macos-system-font/actions/workflows/test.yml/badge.svg)](https://github.com/vadimdemedes/is-macos-system-font/actions/workflows/test.yml)

> Check if font comes installed with macOS.

## Install

```sh
npm install is-macos-system-font
```

## Usage

```js
import isMacosSystemFont from 'is-macos-system-font';

isMacosSystemFont('Avenir');
//=> true

isMacosSystemFont('Inter');
//=> false
```

## API

### isMacosSystemFont(name)

#### name

Type: `string`

Name of the font.
