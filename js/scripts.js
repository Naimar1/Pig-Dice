// Back End Section
var num = 0,
    newMark = 0,
    playerDetails = [],
    finalScore = 0,
    diePic = "",
    pos = 0;

function PlayersInfo(name, score, totalScore) {
    this.playerNames = name;
    this.playerMarks = score;
    this.totalScores = totalScore;
}
var genRandom = function () {
    randomNo = Math.floor(Math.random() * 6) + 1;
    return randomNo;
}
PlayersInfo.prototype.AddScores = function (thisMark) {
    if (thisMark === 1) {
        this.playerMarks = 0;
    } else if (thisMark !== 1) {
        this.playerMarks = this.playerMarks + thisMark;
    }
    return this.playerMarks;
}
PlayersInfo.prototype.Total = function (total) {
    return this.totalScores = this.totalScores + total;
}
var getDieSide = function (getInput) {
    if (getInput == 1) diePic = "img/dice/1.jpg";
    else if (getInput == 2) diePic = "img/dice/2.jpg";
    else if (getInput == 3) diePic = "img/dice/3.jpg";
    else if (getInput == 4) diePic = "img/dice/4.jpg";
    else if (getInput == 5) diePic = "img/dice/5.jpg";
    else if (getInput == 6) diePic = "img/dice/6.jpg";

    return diePic;
}
function reset() {
    pos = 0;
    PlayersInfo.playerMarks = 0;
    PlayersInfo.totalScores = 0;
    $("#image-die").html("");
    $("p.text-uppercase").text("");
    $("h1").text("0");
    $(".cumulative").text("");
}
//Front-End section
$(document).ready(function () {
    $("#fresh-game").mouseenter(function () {
        $("#fresh-game").removeClass("animated");
    })
    $("#fresh-game").mouseleave(function () {
        $("#fresh-game").addClass("animated");
    })
    $("#fresh-game").click(function () {
        $("#start-game").hide();
        $(".dice-game").show();
        $("#reset").hide();
    })
    $("#reset").click(function () {
        reset();
        $("#hold").show();
        $("#roll-dice").show();
        $("#reset").hide();
        $("#content1").addClass("player-turn");
        // console.log(finalScore);
    })
    $("#player-names").submit(function (event) {
        event.preventDefault();
        num++;
        if (num > 2) {
            alert("Players cannot exceed 2!");
            playerDetails = [];
            num = 0;
            console.log(playerDetails);
            reset();
        }else if(num==2){
            $("#input-details").modal('hide');
        }
        var inputtedName = $("#name-player").val();
        var newPlayer = new PlayersInfo(inputtedName, 0, 0);
        playerDetails.push(newPlayer);
        $("#content1").addClass("player-turn");
        // console.log(playerDetails);
        $("#content" + num + " h2").html("<span class=player" + num + ">" + newPlayer.playerNames + "</span>");

        $("#name-player").val("");
    });
