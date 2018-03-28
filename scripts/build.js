#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var CleanCSS = require('clean-css')
var pkg = require('../package.json')

function buildCSS () {
  var file = path.join(__dirname, '../top-bar.css')
  var css = fs.readFileSync(file)

  var style = new CleanCSS().minify(css).styles
  var banner = '/* ' + pkg.name + ' v' + pkg.version + ' - ' +
    pkg.license + ' License - ' + pkg.homepage + ' */\n'

  fs.writeFile(file, banner + style, function (err) {
    if (err) throw err
    console.log('built top-bar.css')
  })
}

if (module.parent) module.exports = buildCSS()
else buildCSS()
