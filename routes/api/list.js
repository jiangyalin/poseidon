const express = require('express')
const router = express.Router()
const serialization = require('./../../serialization')

// 获取列表数据
router.get('/', (req, res) => {
  serialization(list => {
    const data = {
      data: list.map(item => {
        return {
          // ...node,
          name: item.name,
          cover: 'data:image/png;base64,' + item.buffer.toString('base64')
        }
      })
    }
    res.jsonp(data)
  })
})

module.exports = router
