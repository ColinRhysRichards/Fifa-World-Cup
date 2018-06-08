var topSize = 0;
var bottomSize = 0;


function topText4Meme() {
    var text = $("#topInput").val();
    $(".top").text(text);

    var top = $(".top");
    var fontSize = parseInt(top.css("font-size"));

    if (text.length > 10 && !!(text.length && !(text.length%2))) {
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

    if (text.length > 10 && !!(text.length && !(text.length%2))) {
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

    var memeImages = ["assets/images/wonka.jpg","assets/images/oneRing.png","assets/images/grumpycat.jpeg","assets/images/baby.png","assets/images/matrix.jpg","assets/images/cheers.jpg","assets/images/spicebae.gif","assets/images/ronaldo.jpg","assets/images/caprio.jpeg","assets/images/ron.jpg","assets/images/kick2thenutz.jpg","assets/images/getout.jpg"];

    $(".memeImagesHere").on("click", "img", function() {
        var image = $(this).attr("src");

        $('#meme4User').attr("src", image);
    })

    memeImages.forEach( function(image) {

        var newImage = `<img src="${image}" alt="">`;

        $(".memeImagesHere").append(newImage);
    })

})
