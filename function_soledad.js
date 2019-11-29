$(document).ready(function() {


    function Persona() {
        this.Nombre = " ";
        this.Direccion = "";
        this.Telefono = " ";
    }
    var persona = new Persona();

    function Alumno() {

    }



    $("#btn_comentar").click(function() {
        var ul_comment = $('#comments-list');
        var comment = $("#in_comeentario").val();
        if (comment) {
            ul_comment.append(
                '<div class="comment-main-level">' +
                '<div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt=""></div>' +
                '<div class="comment-box">' +
                '<div class="comment-head">' +
                '<h6 class="comment-name"><a>Agustin Ortiz</a></h6>' +
                '<span>hace 20 minutos</span>' +
                '<i class="fa fa-reply"></i>' +
                '<i class="fa fa-heart"></i>' +
                '</div>' +
                '<div class="comment-content">' +
                comment +
                '</div>' +
                '</div>' +
                '</div>' +
                '<br>'

            );
            $("#in_comeentario").val("");
            toastr.info('Comentaste la publicación.');
        } else {

            toastr.warning('Por favor ingresa un commentario!');

        }


    });

    $('#btn_persona').click(function() {

        persona.Nombre = "Alejandro";
        persona.Direccion = "Edo. Méx. Cuautitlán Izcalli";
        persona.Telefono = "(044)-5589798546";

        toastr.info(JSON.stringify(persona));

    });

    $('#btn_alumno').click(function() {
        var alumno = new Alumno();
        alumno = persona;
        alumno.Matricula = "D-25464";
        alumno.Carrera = "Design";





        toastr.warning(JSON.stringify(alumno));

    });


    // Gets the video src from the data-src on each button

    var $videoSrc;
    $('.video-btn').click(function() {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);



    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function(e) {

        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    });



    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function(e) {
        // a poor man's stop video
        $("#video").attr('src', $videoSrc);
    });







});