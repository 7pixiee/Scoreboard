let boardTitle = document.getElementById("board-title");
let homePoints = document.getElementById("home-points-text");
let guestPoints = document.getElementById("guest-points-text");

let homeScore = 0;
let guestScore = 0;

function addOnePoint(team){
 if(team === "home"){
    homeScore += 1;
    homePoints.textContent = homeScore;
 } else if(team === "guest"){
    guestScore += 1;
    guestPoints.textContent = guestScore;
 }
}


function addTwoPoints(team){
 if(team === "home"){
    homeScore += 2;
    homePoints.textContent = homeScore;
 } else if(team === "guest"){
    guestScore += 2;
    guestPoints.textContent = guestScore;
 }
}

function addThreePoints(team){
 if(team === "home"){
    homeScore += 3;
    homePoints.textContent = homeScore;
 } else if(team === "guest"){
    guestScore += 2;
    guestPoints.textContent = guestScore;
 }
}