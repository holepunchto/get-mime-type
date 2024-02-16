const db = require('mime-db')
const map = {}

let s = 'const m = {\n'

let suf = ''

const entries = [...Object.entries(db)]
const seen = new Set()

for (const [key, mime] of entries) {
  if (!mime.extensions) continue
  const m = { type: key, charset: mime.charset || null }
  for (let i = 0; i < mime.extensions.length; i++) {
    let e0 = mime.extensions[0]
    let e = mime.extensions[i]

    if (seen.has(e)) continue
    seen.add(e)

    if (/(^\d)|[-]/.test(e0)) e0 = '\'' + e0 + '\''
    if (/(^\d)|[-]/.test(e)) e = '\'' + e + '\''

    if (i === 0) s += '  ' + e + ': { type: \'' + key + '\', charset: ' + (mime.charset ? '\'' + mime.charset + '\'' : null) + ' }'
    else {
      s += '  ' + e + ': null'
      suf += 'm' + (e[0] === '\'' ? '[' + e + ']' : '.' + e) + (e0[0] === '\'' ? ' = m[' + e0 + ']' : ' = m.' + e0)
      suf += '\n'
    }

    s += ',\n'
  }
}

s = s.slice(0, -2) + '\n}\n\n'
s += suf.trim() + '\n\n'

s += `module.exports = function getMimeType (name, charset = true) {
  const e = m[name.slice(name.lastIndexOf('.') + 1)]
  if (!e) return null
  return e.type + (charset && e.charset ? '; charset=' + e.charset : '')
}\n`

require('fs').writeFileSync('index.js', s)
