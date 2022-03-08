#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const CleanCSS = require('clean-css')
const pkg = require('../package.json')

function buildCSS () {
  const file = path.join(__dirname, '../top-bar.css')
  const css = fs.readFileSync(file)

  const style = new CleanCSS().minify(css).styles
  const banner = '/* ' + pkg.name + ' v' + pkg.version + ' - ' +
    pkg.license + ' License - ' + pkg.homepage + ' */\n'

  fs.writeFile(file, banner + style, function (err) {
    if (err) throw err
    console.log('built top-bar.css')
  })
}

if (module.parent) module.exports = buildCSS()
else buildCSS()
