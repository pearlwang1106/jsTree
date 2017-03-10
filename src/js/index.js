/* create by lee on 2017/03/10 */
// 展开
$('.item-1').click(function () {
  $(this).parent().find('.nav-second').slideToggle(500)
})
$('.item-2').click(function () {
  $(this).parent().find('.nav-three').slideToggle(500)
})
// 删除
$('.nav-three').on('click', '.icon-remove', function () {
  $(this).parent().parent().remove()
})
// 新增
$('.icon-plus').click(function () {
  var num = parseInt($(this).attr('data-num'))
  if (num === 0) {
    $(this).attr('data-num', num += 1)
    var html = '<input class="name" type="text"/><input class="sure" type="button" value="确定"><input class="cancel" type="button" value="取消">'
    $(this).next().append(html)
  } else {
    $(this).next().show()
  }
})
// 确定新增
$('.addName').on('click', '.sure', function () {
  var name = $(this).prev('.name').val()
  if (name) {
    var html = '<li><a><i class="icon-file"></i>' + name + '<i class="icon-remove"></i></a></li>'
    $(this).parent().next().append(html)
    $(this).prev('.name').val('')
    $(this).parent().hide()
  } else {
    $(this).prev('.name').attr('placeholder', '请输入新增内容')
  }
})
// 取消新增
$('.addName').on('click', '.cancel', function () {
  $(this).parent().hide()
})
// 搜索
document.onkeydown = function (event) {
  var e = event || window.event || arguments.callee.caller.arguments[0]
  if (e && e.keyCode == 13) {
    goSearch()
  }
}
// 搜索函数
function goSearch() {
  var searchValue = $('.jsTree--search').val()
  if (searchValue) {
    $('li a').each(function () {
      var value = $(this).text()
      if (value == searchValue) {
        $(this).parentsUntil($(this).closest('.jsTree__content'), 'ul').slideDown(500)
        $('li').removeClass('jsTree__bg--color')
        $(this).parent().addClass('jsTree__bg--color')
      }
    })
  } else {
    $('.jsTree--search').attr('placeholder', '请输入搜索内容')
  }
}