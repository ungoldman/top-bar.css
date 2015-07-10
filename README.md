# top-bar.css

> A top bar navigation pattern.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/top-bar.css.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/top-bar.css
[travis-image]: https://img.shields.io/travis/ngoldman/top-bar.css.svg?style=flat-square
[travis-url]: https://travis-ci.org/ngoldman/top-bar.css

# Install

```
npm install top-bar.css
```

## Usage

```html
<!DOCTYPE html>
<html>
<head>
...
<link rel="stylesheet" href="path/to/top-bar.css">
...
</head>
<body>
...
<nav class="top-bar">
  <a href="#" class="top-bar-title">site title</a>
  <a href="#" class="top-bar-link">some nav link</a>
  <a href="#" class="top-bar-link">another one</a>

  <div class="top-bar-right">
    <a href="#" class="top-bar-link">this one's on the right</a>
  </div>
</nav>
...
</body>
</html>
```

Everything is scoped to `.top-bar`.

Compatible with [css-via-npm](https://github.com/sethvincent/css-via-npm) workflows.

### Sass

You can also use this as a [Sass](http://sass-lang.com/) library.

```scss
@import '../node_modules/top-bar.css/source/top-bar';
```

You can set the font family like so:

```
$top-bar-family: 'Comic Sans';
@import '../node_modules/top-bar.css/source/top-bar';
```

## License

[ISC](LICENSE.md)
