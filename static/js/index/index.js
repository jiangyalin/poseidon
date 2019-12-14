$(function () {

  GetList()

  $('.j-caching-btn').click(function () {
    const id = $(this).attr('data-id')
    const date = $(this).attr('data-date')
    AddCachingList(id, date)
  })

})

// 获取列表
const GetList = (id, date) => {
  $.ajax({
    url: '/api/list',
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
        const template = '<li class="u-li">' +
          '<img class="u-img" src="' + item.cover + '">' +
          '<p class="u-tt">' + item.title + '</p>' +
          '<button class="u-btn j-caching-btn" type="button" data-id="' + item.id + '" data-date="' + item.date + '" data-disabled="' + item.isStorage + '">缓存</button>' +
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
    url: '/api/caching',
    data: {
      id,
      date
    },
    type: 'post',
    dataType: 'json',
    async: false,
    success: data => {
      console.log('data', data)
    },
    error: (jqXHR, textStatus, errorThrown) => {
      console.log('error ' + textStatus + " " + errorThrown);
    }
  })
}