const toggler = document.querySelector('.menu__toggler');
const menu = document.querySelector('.menu');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
    menu.classList.toggle('active');
});
// 드롭다운
document.querySelector('.infobtn').addEventListener('click', () => {
    document.querySelector('.infodown').classList.toggle('show');
})
//메뉴 화살표
var arrow = '<span class="arrowspan"></span>'
$(arrow).insertBefore('.mcon');

$('.menu .arrowspan').click(function () {
    if (
        $(this).next('.mcon').hasClass('deployed')) {
        $(this).removeClass('up-arrow');
        $(this).next('.mcon').slideUp('fast').removeClass('deployed');
    } else {
        $(this).addClass('up-arrow');
        // $('.mcon').slideUp('fast').removeClass('deployed'); // Close Other Elements
        $(this).next('.mcon').slideDown('fast').addClass('deployed');
    }
});