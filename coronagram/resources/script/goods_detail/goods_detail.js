  const toggler = document.querySelector('.cm_menu__toggler');
        const menu = document.querySelector('.cm_menu');

        toggler.addEventListener('click', () => {
            toggler.classList.toggle('active');
            menu.classList.toggle('active');
        });
        // 드롭다운
        document.querySelector('.cm_dropbtn').addEventListener('click', () => {
            document.querySelector('.cm_dropdown').classList.toggle('cm_show');
        })
        //메뉴 화살표
        var cm_arrow = '<span class="cm_arrowspan"></span>'
        $(cm_arrow).insertBefore('.cm_mcon');

        $('.cm_menu .cm_arrowspan').click(function () {
            if (
                $(this).next('.cm_mcon').hasClass('deployed')) {
                $(this).removeClass('cm_up-arrow');
                $(this).next('.cm_mcon').slideUp('fast').removeClass('deployed');
            } else {
                $(this).addClass('cm_up-arrow');
                // $('.mcon').slideUp('fast').removeClass('deployed'); // Close Other Elements
                $(this).next('.cm_mcon').slideDown('fast').addClass('deployed');
            }
        });
// main
        var img1src= "../../resources/images/user.png";
        var img2src= "../../resources/images/cam.png";
        var img3src= "../../resources/images/info.png";

        function changeImage(src) {
        document.getElementById("mainImage").src = src;
        }