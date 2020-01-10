$(function () {

  GetList()

  $('.j-list').on('click', '.j-caching-btn', function () {
    const id = $(this).attr('data-id')
    const date = $(this).attr('data-date')
    AddCachingList(id, date)
  })

  $('.j-list').on('click', '.j-down-btn', function () {
    const name = $(this).attr('data-name')
    const elemIF = document.createElement('iframe')
    elemIF.src = 'http://localhost:8087/book-zip/' + name + '.zip'
    console.log('elemIF.src', elemIF.src)
    console.log('name', name)
    elemIF.style.display = 'none'
    document.body.appendChild(elemIF)
  })

})

// 获取列表
const GetList = (id, date) => {
  $.ajax({
    url: 'http://localhost:8087/api/info',
    data: {
      id,
      date
    },
    type: 'get',
    dataType: 'json',
    async: false,
    success: res => {
      let list = ''
      res.data.forEach(item => {
        item = item[0]
        const template = '<li class="u-li">' +
          '<img class="u-img" src="' + item.cover + '">' +
          '<p class="u-tt">' + item.name + '</p>' +
          '<button class="u-btn j-caching-btn" type="button" data-id="' + item.id + '" data-date="' + item.date + '" data-disabled="' + item.isStorage + '">' + (item.isStorage ? '确认完成' : '确认') + '</button>' +
          '<button class="u-btn j-down-btn" type="button" data-name="' + item.localName + '">获取</button>' +
          '</li>'
        list += template
      })
      $('.j-list').html(list)
    }
  })
}

// 加入缓存队列
const AddCachingList = (id, date) => {
  $.ajax({
    url: 'http://localhost:8088/api/caching',
    data: {
      id,
      date
    },
    type: 'post',
    dataType: 'json',
    async: false,
    success: res => {
      GetList()
    }
  })
}