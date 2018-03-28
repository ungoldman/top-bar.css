process.chdir(__dirname)

var fs = require('fs')
var sass = require('node-sass')
var CleanCSS = require('clean-css')
var pkg = require('../package.json')

sass.render({
  file: '../source/top-bar.scss'
}, buildCSS)

function buildCSS (err, result) {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  var style = new CleanCSS().minify(result.css).styles
  var banner = '/* ' + pkg.name + ' v' + pkg.version + ' - ' +
    pkg.license + ' License - ' + pkg.homepage + ' */\n'

  fs.writeFile('../top-bar.css', banner + style, function (err) {
    if (err) throw err
    console.log('built top-bar.css')
  })
}
