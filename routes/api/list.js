const express = require('express')
const router = express.Router()
const clean = require('./../clean')
const serialization = require('./../../serialization')

// 获取列表数据
router.get('/', (req, res) => {
  serialization(list => {
    const data = {
      data: list.map(item => {
        return [item.map(node => {
          return {
            // ...node,
            name: node.key,
            cover: 'data:image/png;base64,' + node.buffer.toString('base64')
          }
        })[0]]
      })
    }
    res.jsonp(data)
  })
})

module.exports = router
