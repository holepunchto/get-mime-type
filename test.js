const test = require('brittle')
const getMimeType = require('.')

test('null if no name', function (t) {
  const name = ''

  const mimetype = getMimeType(name)

  t.alike(mimetype, null)
})

test('application/octet-stream if no extension', function (t) {
  const name = 'sample'

  const mimetype = getMimeType(name)

  t.alike(mimetype, 'application/octet-stream')
})

test('with charset', function (t) {
  const name = 'sample.json'

  const mimetype = getMimeType(name)

  t.alike(mimetype, 'application/json; charset=utf-8')
})

test('without charset', function (t) {
  const name = 'sample.json'

  const mimetype = getMimeType(name, false)

  t.alike(mimetype, 'application/json')
})

test('.js is text/javascript', function (t) {
  const name = 'sample.js'

  const mimetype = getMimeType(name, false)

  t.alike(mimetype, 'text/javascript')
})

test('.mjs is text/javascript', function (t) {
  const name = 'sample.mjs'

  const mimetype = getMimeType(name, false)

  t.alike(mimetype, 'text/javascript')
})

test('.cjs is text/javascript', function (t) {
  const name = 'sample.cjs'

  const mimetype = getMimeType(name, false)

  t.alike(mimetype, 'text/javascript')
})
