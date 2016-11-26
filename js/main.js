$(document).ready(function(){

  var wow = new WOW({
    offset: 100,
    callback: function(box) {
      var visLayer = $(window).height();
      var boxHeight = $(box).height();
      // console.log($(box).height());
      // console.log($(box).offset().top);
      if(boxHeight > visLayer){

      }
    }
  })
  wow.init();

  // var wowArr = [];
  // $('.wow').each(function () {
  //   wowArr.push(this);
  // });
  //
  // function eachArrFn() {
  //   wowArr.forEach(function (el, i) {
  //     if(el.is(':visible')){
  //       console.log(el);
  //     }
  //   });
  // }
  //
  // $(window).on('scroll', function () {
  //   eachArrFn();
  // });

})
