const fs = require('fs')
const path = require('path')
const JSZip = require('jszip')

const readFileList = (dir, filesList = []) => {
  const files = fs.readdirSync(dir)
  files.forEach(item => {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      readFileList(path.join(dir, item), filesList) // 递归读取
    } else {
      filesList.push({
        fullPath,
        name: item,
        path: ''
      })
    }
  })
  return filesList
}

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