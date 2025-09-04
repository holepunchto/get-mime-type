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

// js

test('.js is application/javascript', function (t) {
  const name = 'sample.js'

  const mimetype = getMimeType(name)

  t.is(mimetype, 'application/javascript; charset=utf-8')
})

test('.mjs is application/javascript', function (t) {
  const name = 'sample.mjs'

  const mimetype = getMimeType(name)

  t.is(mimetype, 'application/javascript; charset=utf-8')
})

test('.cjs is application/javascript', function (t) {
  const name = 'sample.cjs'

  const mimetype = getMimeType(name)

  t.is(mimetype, 'application/javascript; charset=utf-8')
})

// images

test('.jpg is image/jpeg', function (t) {
  const name = 'sample.jpg'

  const mimetype = getMimeType(name)

  t.is(mimetype, 'image/jpeg')
})

test('.jpeg is image/jpeg', function (t) {
  const name = 'sample.jpeg'

  const mimetype = getMimeType(name)

  t.is(mimetype, 'image/jpeg')
})

test('.png is image/png', function (t) {
  const name = 'sample.png'

  const mimetype = getMimeType(name)

  t.is(mimetype, 'image/png')
})

test('.tif is image/tiff', function (t) {
  const name = 'sample.tif'

  const mimetype = getMimeType(name)

  t.is(mimetype, 'image/tiff')
})

test('.tiff is image/tiff', function (t) {
  const name = 'sample.tiff'

  const mimetype = getMimeType(name)

  t.is(mimetype, 'image/tiff')
})

test('.heic is image/heic', function (t) {
  const name = 'sample.heic'

  const mimetype = getMimeType(name)

  t.is(mimetype, 'image/heic')
})

test('.heif is image/heif', function (t) {
  const name = 'sample.heif'

  const mimetype = getMimeType(name)

  t.is(mimetype, 'image/heif')
})

test('.webp is image/webp', function (t) {
  const name = 'sample.webp'

  const mimetype = getMimeType(name)

  t.is(mimetype, 'image/webp')
})

test('.gif is image/gif', function (t) {
  const name = 'sample.gif'

  const mimetype = getMimeType(name)

  t.is(mimetype, 'image/gif')
})

// video

test('.mp4 is video/mp4', function (t) {
  const name = 'sample.mp4'

  const mimetype = getMimeType(name)

  t.is(mimetype, 'video/mp4')
})

test('.mov is video/quicktime', function (t) {
  const name = 'sample.mov'

  const mimetype = getMimeType(name)

  t.is(mimetype, 'video/quicktime')
})

test('.webm is video/webm', function (t) {
  const name = 'sample.webm'

  const mimetype = getMimeType(name)

  t.is(mimetype, 'video/webm')
})

// audio

test('.mp3 is audio/mp3', function (t) {
  const name = 'sample.mp3'

  const mimetype = getMimeType(name)

  t.is(mimetype, 'audio/mp3')
})

test('.wav is audio/wav', function (t) {
  const name = 'sample.wav'

  const mimetype = getMimeType(name)

  t.is(mimetype, 'audio/wav')
})
