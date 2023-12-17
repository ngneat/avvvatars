<div align="center">
  <img width="20%" height="20%" src="./assets/logo.svg?raw=true">
</div>

<br />

[![npm](https://img.shields.io/npm/v/@ngneat/avvvatars?style=flat-square)](https://www.npmjs.com/package/@ngneat/avvvatars)
[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)](https://github.com/ngneat/avvvatars/blob/master/LICENSE)
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/ngneat/avvvatars/compare)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![linted with eslint](https://img.shields.io/badge/linted_with-eslint-4b32c3.svg?style=flat-square)](https://github.com/prettier/prettier)
[![ngneat](https://img.shields.io/badge/@-ngneat-383636?style=flat-square&labelColor=8f68d4)](https://github.com/ngneat/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# @ngneat/avvvatars

> Beautifully crafted unique avatar placeholder for your next angular project. Inspired from [avvvatars](https://github.com/nusu/avvvatars)

https://github.com/ngneat/avvvatars/assets/6831283/c6cdd732-3037-4732-8019-4f4906076a51

## Compatibility with Angular Versions

<table>
  <thead>
    <tr>
      <th>@ngneat/avvvatars</th>
      <th>Angular</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        1.x
      </td>
      <td>
        >= 17
      </td>
    </tr>
  </tbody>
</table>

## Features

- 🌈 **40 Colors** - Colors are so on point that most of the projects can use it without changing it
- 💠 **60 Shapes** - Beautifully crafted shapes that are unique to your user with color combination
- 🆎 **Text or Shapes** 🔸 - Use letters (eg. JD for John Doe) or unique shapes
- 🤠 **Unique to user** - Generated avatars are unique to the string that you provide, it means if you pass janedoe@gmail.com you will always get the same avatar
- ✍️ **Customizable** - use shadows, change size, provide alternative text to display

## Installation

**With yarn**

```bash
yarn add @ngneat/avvvatars
```

**With npm**

```bash
npm install @ngneat/avvvatars
```

## Getting Started

Import @ngneat/avvvatars to your app, then use it anywhere you want.

```typescript
import { AvvvatarsComponent } from '@ngneat/avvvatars';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AvvvatarsComponent],
  template: `
  <avvvatars value="best_user@gmail.com"></avvvatars>
  `
})
export class AppComponent {}
```

## Customization

### `value: string`

This is required for plugin to work, each value generates a random avatar to unique to this value, so each time plugin renders, you will get the same results. 

```html
<avvvatars value="best_user@gmail.com" />
```

### `displayValue?: string`

Override default text by providing displayValue

for example if you provide `value=”best_user@gmail.com”` the character output will be the first 2 letters of value which is “BE”, if you pass `displayValue=”BU”` you can override it to **BU**

```html
<avvvatars value="best_user@gmail.com" displayValue="BU" />
```

### `style?: character | shape  (default character)`

Use shape or character as avatar.

```html
<avvvatars value="best_user@gmail.com" style="character" />
<avvvatars value="best_user@gmail.com" style="avatar" />
```

![character](./assets/BE.png)
![avatar](./assets/BE%20shape.png)

### `size?: number  (default 32)`

Override default size (32px) by providing a number.

```html
<avvvatars value="best_user@gmail.com" size={32} />
```

### `shadow?: boolean  (default false)`

Enable shadow around the avatar.

```html
<avvvatars value="best_user@gmail.com" shadow={false} />
```

### `radius?: number` (default [size](#size-number-default-32))

Override the radius of the avatar, it takes `size` by default to always turn it to a circle

```html
<avvvatars value="best_user@gmail.com" radius={10} />
```

### `border?: boolean  (default false)`

Toggle border

```html
<avvvatars value="best_user@gmail.com" border={false} />
```

### `borderSize?: number  (default 2)`

Override border width

```html
<avvvatars value="best_user@gmail.com" borderSize={2} />
```

### `borderColor?: string  (default #fff)`

Override border color

```html
<avvvatars value="best_user@gmail.com" borderColor="#fff" />
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/shhdharmen"><img src="https://avatars.githubusercontent.com/u/6831283?v=4?s=100" width="100px;" alt="Dharmen Shah"/><br /><sub><b>Dharmen Shah</b></sub></a><br /><a href="https://github.com/ngneat/avvvatars/commits?author=shhdharmen" title="Code">💻</a> <a href="#content-shhdharmen" title="Content">🖋</a> <a href="#design-shhdharmen" title="Design">🎨</a> <a href="https://github.com/ngneat/avvvatars/commits?author=shhdharmen" title="Documentation">📖</a> <a href="#example-shhdharmen" title="Examples">💡</a> <a href="#ideas-shhdharmen" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-shhdharmen" title="Maintenance">🚧</a> <a href="#platform-shhdharmen" title="Packaging/porting to new platform">📦</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.netbasal.com/"><img src="https://avatars.githubusercontent.com/u/6745730?v=4?s=100" width="100px;" alt="Netanel Basal"/><br /><sub><b>Netanel Basal</b></sub></a><br /><a href="#business-NetanelBasal" title="Business development">💼</a> <a href="#mentoring-NetanelBasal" title="Mentoring">🧑‍🏫</a> <a href="https://github.com/ngneat/avvvatars/pulls?q=is%3Apr+reviewed-by%3ANetanelBasal" title="Reviewed Pull Requests">👀</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
