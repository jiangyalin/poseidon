const express = require('express')
const router = express.Router()
const infoZip = require('./info-zip')

// 详情
router.get('/', (req, res) => {
  infoZip('test' ,list => {
    const data = {
      data: list.map(item => {
        return {
          name: item.key,
          cover: 'data:image/png;base64,' + item.buffer.toString('base64')
        }
      })
    }
    res.jsonp(data)
  })
})

module.exports = router
