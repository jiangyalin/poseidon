const fs = require('fs')
const path = require('path')
const JSZip = require('jszip')

const config = {
  path: path.normalize(__dirname + '/static/book/')
}

const list = []

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

const getBuffer = async () => {
  let _node = []
  const fileList = await readFileList(config.path)
  for (let i = 0; i < fileList.length; i++) {
    const suffixName = fileList[i].name.substring(fileList[i].name.lastIndexOf('.') + 1)
    if (suffixName === 'zip') {
      list.push({
        name: fileList[i].name,
        path: fileList[i].fullPath
      })
    }
  }

  const load = await JSZip.loadAsync(fs.readFileSync(list[0].path))

  for (let key in load.files) {
    const res = await load.file(key).async('nodebuffer')
    _node.push({
      key,
      buffer: res
    })
  }
  _node = _node.map(item => item).sort((a, b) => a.key - b.key)
  console.log('_node', _node)
}

// console.log('list', list)
console.log('_node', getBuffer())