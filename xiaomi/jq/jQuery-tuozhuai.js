;(function($){
    $.fn.extend({
         away:function(){
          this.on("mousedown",function(e){
              var divX= e.pageX-$(this).offset().left;
              var divY= e.pageY-$(this).offset().top;
              var $th=$(this);
              $(document).on("mousemove",function(e){
                  var Left=e.pageX-divX;
                  var Top= e.pageY-divY;
                 $th.css({left:Left,top:Top});
                  $(document).on("mouseup",function(){
                      $(this).off("mousemove")
                  })
              })
          })
         }
    })
}(jQuery));
