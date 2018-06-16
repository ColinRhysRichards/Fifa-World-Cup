$(document).ready(function() {
    var teams = [{
        group: "D",
        teams: ["Croatia","Nigeria"]
    },{
        group: "E",
        teams: ["Brazil","Switzerland","Costa Rica","Surbia"]
    },{
        group: "F",
        teams: ["Gerlmany","Mexica","Sweden","Korea Republic"]
    },{
        group: "G",
        teams: ["Belgium","Panama","Tunisia","England"]
    },{
        group: "H",
        teams: ["Poland","Senegal","Columbia","Japan"]
    }]

    var makeTr = function(arg) {
        
        var team = arg;

        var newTr = $(`<tr>
                        <td>${team}</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>`);

        return newTr;
    }

    teams.forEach(function(index) {
        var group = index.group;
        var teams = index.teams;

        switch(group) {
            case "D":
                teams.forEach(function(index){
                    var team = index;

                    var newTr = makeTr(team);

                    $(".groupD").append(newTr);
                })
            break;
            case "E":
            teams.forEach(function(index){
                var team = index;

                var newTr = makeTr(team);

                $(".groupE").append(newTr);
            })
            break;
            case "F":
            teams.forEach(function(index){
                var team = index;

                var newTr = makeTr(team);

                $(".groupF").append(newTr);
            })
            break;
            case "G":
            teams.forEach(function(index){
                var team = index;

                var newTr = makeTr(team);

                $(".groupG").append(newTr);
            })
            break;
            case "H":
            teams.forEach(function(index){
                var team = index;

                var newTr = makeTr(team);

                $(".groupH").append(newTr);
            })
            break;
        }
    })
})