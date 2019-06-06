#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const nextVersion = process.argv[2]

if (!nextVersion) {
  throw new Error('This script requires a version number to be provided')
}

// Update the SCSS Package Header
const CSSFilePath = path.resolve('css', 'vue-tiez.css')
let CSSFile = fs.readFileSync(CSSFilePath, 'utf8')

CSSFile = CSSFile.replace(/^ {2}Version: development/m, `  Version: ${nextVersion}`)

fs.writeFileSync(CSSFilePath, CSSFile, 'utf8')
