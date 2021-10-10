const toggler = document.querySelector('.menu__toggler');
const menu = document.querySelector('.menu');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
    menu.classList.toggle('active');
});
// 드롭다운
document.querySelector('.dropbtn').addEventListener('click', () => {
    document.querySelector('.dropdown').classList.toggle('show');
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
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
var acc = document.getElementsByClassName("scQ");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("SCactive");
        var scA = this.nextElementSibling;
        if (scA.style.display === "block") {
            scA.style.display = "none";
        } else {
            scA.style.display = "block";
        }
    });
}