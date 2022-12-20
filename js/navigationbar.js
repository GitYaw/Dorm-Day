
$(document).ready(function () {
    $('.loader').delay(1100).fadeOut(1100)

    $('.loader').promise().done(function () {
        $('.body').addClass('active')
    })
})


$('.mobile_icon').click(function () {
    $('.splash_menu_mobile').addClass('active');
    $('.x-mark').addClass('active')
    $('.mobile_icon').hide()
    console.log('hello')
})

$('.x-mark').click(function () {
    $('.splash_menu_mobile').removeClass('active');
    $('.x-mark').removeClass('active');
    $('.mobile_icon').show()
})

$('.splash_right_side_navbar_items_mobile a').click(function () {
    $('.splash_menu_mobile').removeClass('active');
    $('.x-mark').removeClass('active');
    $('.mobile_icon').show()
})
