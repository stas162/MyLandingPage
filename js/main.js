$(document).ready(function () {
    $('.btn[filter="wd"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('.btn[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.btn[filter]').removeClass('focused');
            $(this).addClass('focused');
            $('.filter > div').hide(300);
            $('.filter > div[filter="wd"]').show(300);
        }
    });

    $('.btn[filter="ud"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('.btn[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.btn[filter]').removeClass('focused');
            $(this).addClass('focused');
            $('.filter > div').hide(300);
            $('.filter > div[filter="ud"]').show(300);
        }
    });

    $('.btn[filter="moc"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('.btn[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.btn[filter]').removeClass('focused');
            $(this).addClass('focused');
            $('.filter > div').hide(300);
            $('.filter > div[filter="moc"]').show(300);
        }
    });

    $('.btn[filter="all"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('.btn[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.btn[filter]').removeClass('focused');
            $(this).addClass('focused');
            $('.filter > div').show(300);
        }
    });


});