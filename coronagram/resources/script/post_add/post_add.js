$('.DOC_TEXT').keyup(function (e){
    var content = $(this).val();
    $('#counter').html("("+content.length+" / 최대 200자)");    //글자수 실시간 카운팅

    if (content.length > 200){
        alert("최대 200자까지 입력 가능합니다.");
        $(this).val(content.substring(0, 200));
        $('#counter').html("(200 / 최대 200자)");
    }
});


출처: https://kunoo.tistory.com/entry/javascript-textarea-글자수-체크-카운팅 [Kunoo]
var fileInput  = document.querySelector( "#id_photo" ),
            button     = document.querySelector( ".input-file-trigger" ),
            the_return = document.querySelector(".file-return");
 
        // Show image
        fileInput.addEventListener('change', handleImage, false);
        var canvas = document.getElementById('imageCanvas');
        var ctx = canvas.getContext('2d');
 
 
         function handleImage(e){
            var reader = new FileReader();
            reader.onload = function(event){
                var img = new Image();
                // var imgWidth =
                img.onload = function(){
                    canvas.width = 300;
                    canvas.height = 300;
                    ctx.drawImage(img,0,0,300,300);
                };
                img.src = event.target.result;
                // img.width = img.width*0.5
                // canvas.height = img.height;
            };
            reader.readAsDataURL(e.target.files[0]);
        }
        

        function chk_file_type(obj) {
            var file_kind = obj.value.lastIndexOf('.');
            var file_name = obj.value.substring(file_kind+1,obj.length);
            var file_type = file_name.toLowerCase();
           
           
           
            var check_file_type=new Array();​
           
            check_file_type=['jpg','gif','png','jpeg','bmp'];
           
           
           
            if(check_file_type.indexOf(file_type)==-1){
             alert('이미지 파일만 선택할 수 있습니다.');
             var parent_Obj=obj.parentNode
             var node=parent_Obj.replaceChild(obj.cloneNode(true),obj);
             return false;
            }
           }