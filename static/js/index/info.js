$(function () {

  GetList()

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
        const template = '<li class="u-li">' +
          '<img class="u-img" src="' + item.cover + '">' +
          '</li>'
        list += template
      })
      $('.j-list').html(list)
    }
  })
}