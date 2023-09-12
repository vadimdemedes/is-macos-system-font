# is-macos-system-font

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
