var map = {
    scroll_map: scroll_funck = function() {
        var initialPoint;
        var finalPoint;
        var nowPoint;
        var drag = false;
        $(".group").on('touchstart', function(e) {
            initialPoint = event.changedTouches[0];
            drag = true;
        }).on('touchend', function() {
            finalPoint = event.changedTouches[0];
            $(this).data({
                startX: 0,
                startY: 0,
            });
            drag = false;
        }).on('touchmove', function(e) {
            nowPoint = event.changedTouches[0];
            e.preventDefault();
            if (drag) {
                var left = parseInt($(this).css('left')) || 0,
                    top = parseInt($(this).css('top')) || 0,
                    newLeft = left + (nowPoint.screenX - ($(this).data().startX || nowPoint.screenX)),
                    newTop = top + (nowPoint.screenY - ($(this).data().startY || nowPoint.screenY)),
                    parentHeight = $(this).parent().height(),
                    parentWidth = $(this).parent().width(),
                    imgHeight = $(this).height(),
                    imgWidth = $(this).width();
                $(this).css({
                    left: newLeft < 0 && (Math.abs(newLeft - parentWidth) < imgWidth) ? newLeft : left,
                    top: newTop < 0 && (Math.abs(newTop - parentHeight) < imgHeight) ? newTop : top
                }).data({
                    startX: nowPoint.screenX,
                    startY: nowPoint.screenY,
                });
            };
        });
    },
};