$(function () {

  GetList()

  $('.j-list').on('click', '.j-img', function () {
    window.location.href = '/info'
  })

})

// 获取列表
const GetList = (id, date) => {
  $.ajax({
    url: 'http://localhost:8087/api/list',
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
          '<img class="u-img j-img" src="' + item.cover + '">' +
          '<p class="u-tt">' + item.name + '</p>' +
          '</li>'
        list += template
      })
      $('.j-list').html(list)
    }
  })
}