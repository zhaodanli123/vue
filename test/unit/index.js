import Vue from 'vue'
import '../helpers/to-have-been-warned.js'
import '../helpers/wait-for-update.js'

Vue.config.preserveWhitespace = false

// require all test files
const testsContext = require.context('./', true, /\.spec$/)
testsContext.keys().forEach(testsContext)