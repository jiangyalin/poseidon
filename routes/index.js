const fs = require('fs')
const bodyParser = require('body-parser');

module.exports = app => {

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json()) // 解析参数

  app.get('/', (req, res) => res.redirect('/index'))

  // 首页
  app.get('/index', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./data/all.json', 'utf8')).node
    data = data.map(item => {
      return {
        ...item,
        title: item.title.substring(0, 1) + '这是测试数据这是测试数据这是测试数据这是测试数据这是测试数据',
        cover: 'http://preapiconsole.71360.com/file/read/www/M00/00/0B/wKgBbF2yUMKAdpDMAAQJhP1oO1Q130.jpg'
      }
    })
    res.render('index', { data: data })
  })

  app.use('/api', require('./api'))
}