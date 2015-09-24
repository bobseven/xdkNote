(function () {
    "use strict";
    /*
      hook up event handlers
    */
    function register_event_handlers() {
        /*add button on header*/
        $(document).on("click", ".add-note-ref", function (evt) {
            activate_page("#newnote");
            if(!sessionStorage.currentNote)
                sessionStorage.currentNote = {};



        });

        /*back to home button*/
        $(document).on("click", ".back-to-home", function (evt) {
            activate_page("#mainpage");
        });

        /*save button*/
        $(document).on("click", ".save-note", function (evt) {
            //open database connection
            var noteText = $("#note-edit-area").val();

            activate_page("#mainpage");
        });

        /*take picture*/
        $(document).on("click", ".take-picture", function (evt) {
            //save note and other stuffs
            function onSuccess(imageURI) {
                var image = document.getElementById('myImage');
                image.src = imageURI;
                alert('Image saved '+ imageURI);
            }

            function onFail(message) {
                alert('Image not acquired ' + message);
            }

            var cameraOption = {
                quality: 80,
                destinationType: Camera.DestinationType.NATIVE_URI,
                sourceType : Camera.PictureSourceType.CAMERA,
                encodingType: Camera.EncodingType.JPEG,
                saveToPhotoAlbum: true
            }

            navigator.camera.getPicture(onSuccess, onFail, cameraOption);
        });
    }
    document.addEventListener("app.Ready", register_event_handlers, false);
})();
