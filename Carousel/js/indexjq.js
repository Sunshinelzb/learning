 $(function() {
     var banner = $('#banner'),
         list = $('#banner_list'),
         buttons = $('#slideBtn span'),
         prev = $('#prev'),
         next = $('#next'),
         index = 1,
         interval = 3000,
         timer;


     next.bind('click', function() {
         if (list.is(':animated')) {
             return;
         }
         if (index == 3) {
             index = 1;
         } else {
             index += 1;
         }
         animate(-500);
         showButton();
     });

     prev.bind('click', function() {
         if (list.is(':animated')) {
             return;
         }
         if (index == 1) {
             index = 3;
         } else {
             index -= 1;
         }
         animate(500);
         showButton();
     });

     buttons.each(function() {
         $(this).bind('click', function() {
             if (list.is(':animated') || $(this).attr('class') == 'active') {
                 return;
             }
             var myIndex = parseInt($(this).attr('index'));
             var offset = -500 * (myIndex - index);

             animate(offset);
             index = myIndex;
             showButton();
         })
     });

     banner.hover(stop, play);

     play();

     function animate(offset) {
         var left = parseInt(list.css('left')) + offset;
         // console.log(left);
         if (offset > 0) {
             offset = '+=' + offset;
         } else {
             offset = '-=' + Math.abs(offset);
         }
         // 添加无缝滚动效果
         list.animate({
             'left': offset
         }, 500, function() {
             if (left > -500) {
                 list.css('left', -1500);
             }
             if (left < -1500) {
                 list.css('left', -500);
             }
         });
     }

     function showButton() {
         buttons.eq(index - 1).addClass('active').siblings().removeClass('active');
     }

     function play() {
         timer = setTimeout(function() {
             next.trigger('click');
             play();
         }, interval);
     }

     function stop() {
         clearTimeout(timer);
     }

 });
