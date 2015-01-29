# top-bar.css

A top bar navigation pattern.

## Usage

```
npm install top-bar.css
```

*..do whatever you're into, then..*

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
