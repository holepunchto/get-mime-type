const test = require('brittle')
const getMimeType = require('.')

test('null if no name', function (t) {
  const name = ''

  const mimetype = getMimeType(name)

  t.is(mimetype, null)
})

test('application/octet-stream if no extension', function (t) {
  const name = 'sample'

  const mimetype = getMimeType(name)

  t.is(mimetype, 'application/octet-stream')
})

test('with charset', function (t) {
  const name = 'sample.json'

  const mimetype = getMimeType(name)

  t.is(mimetype, 'application/json; charset=utf-8')
})

test('without charset', function (t) {
  const name = 'sample.json'

  const mimetype = getMimeType(name, false)

  t.is(mimetype, 'application/json')
})

test('.js is application/javascript', function (t) {
  const name = 'sample.js'

  const mimetype = getMimeType(name, false)

  t.is(mimetype, 'application/javascript')
})

test('.mjs is application/javascript', function (t) {
  const name = 'sample.mjs'

  const mimetype = getMimeType(name, false)

  t.is(mimetype, 'application/javascript')
})

test('.cjs is application/javascript', function (t) {
  const name = 'sample.cjs'

  const mimetype = getMimeType(name, false)

  t.is(mimetype, 'application/javascript')
})
