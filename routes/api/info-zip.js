const fs = require('fs')
const path = require('path')
const JSZip = require('jszip')

const getBuffer = async (name, callback) => {
  const config = {
    path: path.normalize(__dirname + './../../static/book/' + name + '.zip')
  }

  let node = []
  const load = await JSZip.loadAsync(fs.readFileSync(config.path))

  for (let key in load.files) {
    const res = await load.file(key).async('nodebuffer')
    node.push({
      key,
      buffer: res
    })
  }
  node = node.map(item => item).sort((a, b) => a.key - b.key)
  callback(node)
}

module.exports = getBuffer

// console.log('list', list)
// console.log('_node', getBuffer('test', () => {}))