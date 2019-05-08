/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue'
import '../../scss/vue-tiez.scss' // eslint-disable-line import/no-unresolved

const req = require.context('../../stories', true, /.stories.js$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
