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
    success: data => {
      let list = ''
      console.log('data', data)
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