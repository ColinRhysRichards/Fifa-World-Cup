$(document).ready(function () {
    $(".searchBtn").on("click", function (event) {
        event.preventDefault();
        $("#results").empty();
        var search = $("#mySearch").val();
        console.log("ive been clicked");
        console.log(search);
        $.ajax({
            url: "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + search + "WorldCup+Soccer+Highlights&type=video&videoCaption=closedCaption&key=AIzaSyCqhGLakoa64N5rEk8vnmCZbfBWh93wyIE",
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var results = response;
            console.log(results);
            var firstVideo = response.items["0"].id.videoId;
            var secondVideo = response.items["1"].id.videoId;
            var thirdVideo = response.items["2"].id.videoId;
            var fourthVideo = response.items["3"].id.videoId;
            var fifthVideo = response.items["4"].id.videoId;
            console.log(firstVideo);
            console.log(secondVideo);
            console.log(thirdVideo);
            console.log(fourthVideo);
            console.log(fifthVideo);

            var videos = [firstVideo, secondVideo, thirdVideo, fourthVideo, fifthVideo];

            videos.forEach(function (newVideo) {
                $('<iframe>', {
                    src: "https://www.youtube.com/embed/" + newVideo,
                    width: "800",
                    height: "400",
                    frameborder: 0,
                    scrolling: 'no',
                    key: 'AIzaSyCqhGLakoa64N5rEk8vnmCZbfBWh93wyIE',
                }).appendTo('#results');
            })
        })
    });
})
