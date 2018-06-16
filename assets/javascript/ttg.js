var topSize = 0;
var bottomSize = 0;


function topText4Meme() {
    var text = $("#topInput").val();
    $(".top").text(text);

    var top = $(".top");
    var fontSize = parseInt(top.css("font-size"));

    if (text.length > 10 && !!(text.length && !(text.length % 2))) {
        if (topSize < text.length) {
            fontSize--;
            top.css('font-size', fontSize.toString() + 'px');
            topSize = text.length;
        } else {
            fontSize++;
            top.css('font-size', fontSize.toString() + 'px');
            topSize = text.length;

        }
    } else if (text.length < 10) {
        topSize = text.length;
        top.css('font-size', "2.5em");
    } else {
        topSize = text.length;
    }
}

function bottomText4Meme() {
    var text = $("#bottomInput").val();
    $(".bottom").text(text);

    var bottom = $(".bottom");
    var fontSize = parseInt(bottom.css("font-size"));

    if (text.length > 10 && !!(text.length && !(text.length % 2))) {
        if (topSize < text.length) {
            fontSize--;
            bottom.css('font-size', fontSize.toString() + 'px');
            topSize = text.length;
        } else {
            fontSize++;
            bottom.css('font-size', fontSize.toString() + 'px');
            topSize = text.length;

        }
    } else if (text.length < 10) {
        topSize = text.length;
        bottom.css('font-size', "2.5em");
    } else {
        topSize = text.length;
    }
}

$(document).ready(function () {

    var memeImages = ["assets/images/wonka.jpg", "assets/images/oneRing.png", "assets/images/grumpycat.jpeg", "assets/images/baby.png", "assets/images/matrix.jpg", "assets/images/cheers.jpg", "assets/images/spicebae.gif", "assets/images/ronaldo.jpg", "assets/images/caprio.jpeg", "assets/images/ron.jpg", "assets/images/kick2thenutz.jpg", "assets/images/getout.jpg"];

    $(".memeImagesHere").on("click", "img", function () {
        var image = $(this).attr("src");

        $('#meme4User').attr("src", image);
    })

    memeImages.forEach(function (image) {

        var newImage = `<img src="${image}">`;

        $(".memeImagesHere").append(newImage);
    })

    $("#generate").on("click", function () {
        

        html2canvas(document.querySelector("#meme"), {
            allowTaint: false,
            useCORS: false
        }).then(canvas => {

            var image = canvas.toDataURL('image/png');

            var newImage = `<img src="${image}">`;

            $("#memeCreations").append(newImage);
        });

    })

    function handleFileSelect(evt) {
        var canvasWidth = 500;
        var canvasHeight = 500;
        var file = evt.target.files[0];

        var reader = new FileReader();
        reader.onload = function (fileObject) {
            var data = fileObject.target.result;

            // Create an image object
            var image = new Image();
            image.onload = function () {

                window.imageSrc = this;
                console.log(window.imageSrc);
                $('#meme4User').attr("src", window.imageSrc);
            }

            // Set image data to background image.
            image.src = data;
            console.log(fileObject.target.result);
        };
        reader.readAsDataURL(file)
    }

    // $("#file").on('change', function (file) {
    //     var newFile = file.target.files[0];
    //     console.log(newFile);
    //     $('#meme4User').attr('src', newFile);
    // })

    // $("#Save").on("click", handleFileSelect, false);

})
