// 展开
// 搜索函数
function goSearch(){var e=$(".jsTree--search").val();e?$("li a").each(function(){var t=$(this).text();t==e&&($(this).parentsUntil($(this).closest(".jsTree__content"),"ul").slideDown(500),$("li").removeClass("jsTree__bg--color"),$(this).parent().addClass("jsTree__bg--color"))}):$(".jsTree--search").attr("placeholder","请输入搜索内容")}$(".item-1").click(function(){$(this).parent().find(".nav-second").slideToggle(500)}),$(".item-2").click(function(){$(this).parent().find(".nav-three").slideToggle(500)}),
// 删除
$(".nav-three").on("click",".icon-remove",function(){$(this).parent().parent().remove()}),
// 新增
$(".icon-plus").click(function(){var e=parseInt($(this).attr("data-num"));if(0===e){$(this).attr("data-num",e+=1);var t='<input class="name" type="text"/><input class="sure" type="button" value="确定"><input class="cancel" type="button" value="取消">';$(this).next().append(t)}else $(this).next().show()}),
// 确定新增
$(".addName").on("click",".sure",function(){var e=$(this).prev(".name").val();if(e){var t='<li><a><i class="icon-file"></i>'+e+'<i class="icon-remove"></i></a></li>';$(this).parent().next().append(t),$(this).prev(".name").val(""),$(this).parent().hide()}else $(this).prev(".name").attr("placeholder","请输入新增内容")}),
// 取消新增
$(".addName").on("click",".cancel",function(){$(this).parent().hide()}),
// 搜索
document.onkeydown=function(e){var t=e||window.event||arguments.callee.caller.arguments[0];t&&13==t.keyCode&&goSearch()};