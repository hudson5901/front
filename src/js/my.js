$(".button-collapse").sideNav();


$(".tab_label").on("click", function () {
   var $th = $(this).index();
   $(".tab_label").removeClass("active");
   $(".tab_panel").removeClass("active");
   $(this).addClass("active");
   $(".tab_panel").eq($th).addClass("active");
});

$(function () {
   $('.tab_btn').on('click', function () {
      $('.tab_item').removeClass("is-active-item");
      $($(this).attr("href")).addClass("is-active-item");
      $('.tab_btn').removeClass('is-active-btn');
      $(this).addClass('is-active-btn');
   });
});


$(function () {
   // 「#change-css」要素に対するclickイベントを作成してください
   $("#change-css").on('click', function () {
      $("#hogehoge").html("要素の内容を書き換えます");
   });
});