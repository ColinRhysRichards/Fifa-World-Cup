$(document).ready(function () {

    var allTheTeams = [{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" }, { teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" }, { teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" }, { teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" },{ teamOne: "Russia", teamTwo: "Saudi Arabia", time: "Fri 6/15 7:00", date: "20180615" }]

    allTheTeams.forEach(function (team) {
        var team1 = team.teamOne;
        var team2 = team.teamTwo;
        var time = team.time;
        var days = moment(team.date, "YYYYMMDD").fromNow();

        var teamCard = $(`<div class="card text-center timeCard">
                    <div class="card-header">
                        ${team1} vs ${team2}
                    </div>
                    <div class="card-body">
                        <h4>${time}</h4>
                    </div>
                    <div class="card-footer text-muted">
                         ${days}
                    </div>
                </div>`)

        $(".timeCardsHere").append(teamCard);

    })

});

