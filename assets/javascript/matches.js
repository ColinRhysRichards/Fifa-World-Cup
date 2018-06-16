$(document).ready(function () {

    var groupA = "https://cors-anywhere.herokuapp.com/http://livescore-api.com/api-client/fixtures/matches.json?key=NAToF7Qe5eMGfTmH&secret=z6PiSRCCcTDFhUN5vHtbOjpTybAN5WvE&league=793";
    var groupB = "https://cors-anywhere.herokuapp.com/http://livescore-api.com/api-client/fixtures/matches.json?key=NAToF7Qe5eMGfTmH&secret=z6PiSRCCcTDFhUN5vHtbOjpTybAN5WvE&league=794";
    var groupC = "https://cors-anywhere.herokuapp.com/http://livescore-api.com/api-client/fixtures/matches.json?key=NAToF7Qe5eMGfTmH&secret=z6PiSRCCcTDFhUN5vHtbOjpTybAN5WvE&league=795";
    var groupD = "https://cors-anywhere.herokuapp.com/http://livescore-api.com/api-client/fixtures/matches.json?key=NAToF7Qe5eMGfTmH&secret=z6PiSRCCcTDFhUN5vHtbOjpTybAN5WvE&league=796";
    var groupE = "https://cors-anywhere.herokuapp.com/http://livescore-api.com/api-client/fixtures/matches.json?key=NAToF7Qe5eMGfTmH&secret=z6PiSRCCcTDFhUN5vHtbOjpTybAN5WvE&league=797";
    var groupF = "https://cors-anywhere.herokuapp.com/http://livescore-api.com/api-client/fixtures/matches.json?key=NAToF7Qe5eMGfTmH&secret=z6PiSRCCcTDFhUN5vHtbOjpTybAN5WvE&league=798";
    var groupG = "https://cors-anywhere.herokuapp.com/http://livescore-api.com/api-client/fixtures/matches.json?key=NAToF7Qe5eMGfTmH&secret=z6PiSRCCcTDFhUN5vHtbOjpTybAN5WvE&league=799";
    var groupH = "https://cors-anywhere.herokuapp.com/http://livescore-api.com/api-client/fixtures/matches.json?key=NAToF7Qe5eMGfTmH&secret=z6PiSRCCcTDFhUN5vHtbOjpTybAN5WvE&league=800";
    // Here we run our AJAX call to the OpenWeatherMap API

    var makeTr = function(game) {
        
        var awayTeam = game.away_name;
        var homeTeam = game.home_name;
        var date2Format = game.date.split("-");
        var date = moment(date2Format.join(), "YYYYMMDD").format("MMM Do");
        var time = game.time;
        var daysAway = moment(game.date, "YYYYMMDD").fromNow();

        var theGame = $(`<tr>
                            <td>${homeTeam}</td>
                            <td>${awayTeam}</td>
                            <td>${date}</td>
                            <td>${time}</td>
                            <td>${daysAway}</td>
                        </tr>`)

        

        return theGame;
    }

    var call4AllGroups = [groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH];


    call4AllGroups.forEach(function (group) {
        var queryURL = group;

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // We store all of the retrieved data inside of an object called "response"
            .then(function (response) {

                results = response.data.fixtures;

                var id = parseFloat(results[0].league_id);

                console.log(id);

                switch (id) {

                    case 793:
                        results.forEach(function (game) {

                            var newTr = makeTr(game);


                            $(".groupA").append(newTr);
                        })
                        break;
                    case 794:
                        results.forEach(function (game) {

                            var newTr = makeTr(game);

                            $(".groupB").append(newTr);
                        })
                        break;
                    case 795:
                        results.forEach(function (game) {

                            var newTr = makeTr(game);

                            $(".groupC").append(newTr);
                        })
                        break;
                    case 796:
                        results.forEach(function (game) {

                            var newTr = makeTr(game);

                            $(".groupD").append(newTr);
                        })
                        break;
                    case 797:
                        results.forEach(function (game) {

                            var newTr = makeTr(game);

                            $(".groupE").append(newTr);
                        })
                        break;
                    case 798:
                        results.forEach(function (game) {

                            var newTr = makeTr(game);

                            $(".groupF").append(newTr);
                        })
                        break;
                    case 799:
                        results.forEach(function (game) {

                            var newTr = makeTr(game);

                            $(".groupG").append(newTr);
                        })
                        break;
                    case 800:
                        results.forEach(function (game) {

                            var newTr = makeTr(game);

                            $(".groupH").append(newTr);
                        })
                        break;
                }

                console.log(response);
            })
    })


    // var allTheTeams = [{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" }, { teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" }, { teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" }, { teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" }]

    // allTheTeams.forEach(function (team) {
    //     var team1 = team.teamOne;
    //     var team2 = team.teamTwo;
    //     var time = team.time;
    //     var days = moment(team.date, "YYYYMMDD").fromNow();

    //     var teamCard = $(`<div class="card text-center timeCard">
    //                 <div class="card-header">
    //                     ${team1} vs ${team2}
    //                 </div>
    //                 <div class="card-body">
    //                     <h4>${time}</h4>
    //                 </div>
    //                 <div class="card-footer text-muted">
    //                      ${days}
    //                 </div>
    //             </div>`)

    //     $(".timeCardsHere").append(teamCard);

    // })

});

