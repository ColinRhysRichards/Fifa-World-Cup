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

    $("#generate").on("click", function () {


        html2canvas(document.querySelector("#meme"), {

        }).then(canvas => {

            var image = canvas.toDataURL('image/png');

            var newImage = `<img src="${image}">`;

            $("#memeCreations").append(newImage);
        });

    })

    function redrawMeme(image) {
        var canvas = document.querySelector('canvas');
        var context = canvas.getContext("2d");
        if (image != null) {
            context.clearRect(0, 0, canvas.width, canvas.height)
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
        }
    }

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
                redrawMeme(window.imageSrc, null, null);
            }

            // Set image data to background image.
            image.src = data;
            console.log(fileObject.target.result);
        };
        reader.readAsDataURL(file)
    }

    document.getElementById('file').addEventListener('change', handleFileSelect, false);

    // function saveFile() {
    //     console.log("save");
    //     var image = window.open($(".memeCreations img"));
    //     // var image = document.querySelector('canvas').toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
    //     window.location.href=image;

    // }
    

    // $("#Save").on("click", saveFile, false);

})
